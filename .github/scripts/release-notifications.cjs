const { createHash } = require('node:crypto')
const { setTimeout: sleep } = require('node:timers/promises')

/** Escape text before adding it to Slack markup. */
function escape(text) {
  return String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

/** Render GitHub changelog headings, bullets and GitHub links for Slack. */
function notes(body) {
  return escape(body || '').replace(/^#{1,6} (.+)$/gm, '*$1*')
    .replace(/^[-*] /gm, '• ').replace(/\[([^\]\n]+)\]\((https:\/\/github\.com\/[^\s)<>]+)\)/g, '<$2|$1>')
}

/** Send a Slack request and surface API errors without logging credentials. */
async function slack(method, payload) {
  const response = await fetch('https://slack.com/api/' + method, {
    method: 'POST', redirect: 'error', signal: AbortSignal.timeout(15000),
    headers: { Authorization: 'Bearer ' + process.env.SLACK_TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error('Slack HTTP ' + response.status)
  const result = await response.json()
  if (!result.ok) throw new Error('Slack ' + method + ': ' + result.error)
  return result
}

/** Create a message once per release asset or update the recorded Slack message on retry. */
async function publish(github, repo, release, key, text, thread) {
  const name = 'slack-' + key + '.json'
  const channel = process.env.SLACK_CHANNEL
  const contentHash = createHash('sha256').update(text).digest('hex')
  const asset = release.assets.find(item => item.name === name)
  if (asset) {
    const { data } = await github.rest.repos.getReleaseAsset({
      ...repo, asset_id: asset.id, headers: { accept: 'application/octet-stream' },
    })
    const saved = JSON.parse(Buffer.from(data).toString())
    if (saved.channel !== channel || !/^\d+\.\d+$/.test(saved.ts)) throw new Error('Invalid Slack thread receipt')
    // Replies can change on any attempt, including a return to the original outcome.
    if (thread || saved.contentHash !== contentHash) {
      await slack('chat.update', { channel, ts: saved.ts, text, unfurl_links: false, unfurl_media: false })
    }
    return saved.ts
  }

  const id = createHash('sha256').update(repo.owner + '/' + repo.repo + '/' + release.id + '/' + key).digest('hex')
  const clientId = [id.slice(0, 8), id.slice(8, 12), '4' + id.slice(13, 16), '8' + id.slice(17, 20), id.slice(20, 32)].join('-')
  const posted = await slack('chat.postMessage', {
    channel, text, thread_ts: thread, client_msg_id: clientId, unfurl_links: false, unfurl_media: false,
  })
  await github.rest.repos.uploadReleaseAsset({
    ...repo, release_id: release.id, name,
    headers: { 'content-type': 'application/octet-stream' },
    data: Buffer.from(JSON.stringify({ channel, ts: posted.ts, contentHash })),
  })
  return posted.ts
}

/** Identify the release and material jobs from a completed workflow attempt. */
async function workflowOutcome(github, repo, run) {
  const { data: latest } = await github.rest.actions.getWorkflowRun({ ...repo, run_id: run.id })
  if (latest.run_attempt !== run.run_attempt || latest.status !== 'completed') return

  const jobs = await github.paginate(github.rest.actions.listJobsForWorkflowRun, {
    ...repo, run_id: run.id, filter: 'latest', per_page: 100,
  })
  let tag = run.head_branch
  let material = jobs.filter(job => job.conclusion !== 'skipped')
  if (run.event === 'push') {
    tag = jobs.map(job => /(?:^| \/ )Draft Release (\d+\.\d+\.\d+)$/.exec(job.name)?.[1]).find(Boolean)
    material = material.filter(job => /Build Documentation|Deploy Documentation|Run Production Build|Deploy to (Production|Development)/i.test(job.name) && !job.name.endsWith('Log Inputs'))
  } else if (run.event === 'workflow_dispatch') {
    const marker = /^Deploy release (\d+\.\d+\.\d+)(?: \/ |$)/
    tag = jobs.map(job => marker.exec(job.name)?.[1]).find(Boolean) || marker.exec(run.display_title)?.[1]
    material = material.filter(job => !/^(Create release|Release)$/.test(job.name))
  }

  if (!tag || (!material.length && run.conclusion === 'success')) return
  const lines = material.map(job => {
    const failed = (job.steps || []).filter(step => step.conclusion === 'failure').map(step => escape(step.name))
    return '• ' + escape(job.name) + ' — ' + escape(job.conclusion) + (failed.length ? ' (' + failed.join(', ') + ')' : '')
  })
  return { tag, key: 'run-' + run.id, text: ['*' + escape(run.name) + ' — ' + escape(run.conclusion) + '*',
    ...lines, '<' + run.html_url + '|Workflow run · attempt ' + run.run_attempt + '>'].join('\n') }
}

/** Announce the published release and attach correlated deployment or build evidence. */
module.exports = async function report({ github, context, core }) {
  const repo = context.repo
  const event = context.payload
  let tag = event.release?.tag_name
  let outcome
  if (event.workflow_run) {
    outcome = await workflowOutcome(github, repo, event.workflow_run)
    if (!outcome) return
    tag = outcome.tag
  } else if (context.eventName === 'repository_dispatch') {
    const payload = event.client_payload
    if (!['home-assistant', 'home-assistant-appdaemon'].includes(repo.repo) ||
        !/^\d+\.\d+\.\d+$/.test(payload?.tag) ||
        !['checked_out', 'skipped', 'failed'].includes(payload?.status)) throw new Error('Invalid checkout report')
    tag = payload.tag
    let message = { checked_out: 'Release checked out', skipped: 'Checkout skipped on the selected branch', failed: 'Release checkout failed' }[payload.status]
    if (payload.status === 'checked_out') {
      const { data: commit } = await github.rest.repos.getCommit({ ...repo, ref: tag })
      if (commit.sha !== payload.sha) throw new Error('Reported checkout does not match the release commit')
      message += ' at `' + commit.sha.slice(0, 12) + '`'
    }
    outcome = { key: 'checkout', text: message }
  }

  if (!tag) throw new Error('Missing release tag')
  let release
  // GitHub can deliver an on-host checkout or tag build before the release is published.
  for (let attempt = 0; attempt < 25; attempt++) {
    try {
      const result = await github.rest.repos.getReleaseByTag({ ...repo, tag })
      if (!result.data.draft) { release = result.data; break }
    } catch (error) {
      if (error.status !== 404) throw error
    }
    await sleep(10000)
  }
  if (!release) throw new Error('No published release for ' + tag)
  if (release.immutable) throw new Error('Release is immutable; cannot persist Slack thread receipt')
  const heading = '*<' + release.html_url + '|' + escape(repo.repo + ' ' + tag) + '>*'
  const body = notes(release.body)
  const parent = await publish(github, repo, release, 'release', heading + (body ? '\n' + body.slice(0, 35000) : ''))
  if (outcome) await publish(github, repo, release, outcome.key, outcome.text, parent)
  core.info('Reported ' + repo.repo + ' ' + tag)
}
