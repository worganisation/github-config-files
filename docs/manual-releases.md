# Manual releases

Release creation across `worganisation` requires `workflow_dispatch` on `main`.
Merging or pushing commits does not publish a release. The manual dispatch is
the authorization step; GitHub environment approval gates are not required.
All repositories use one shared release job declaring `environment: production`.
The declaration does not require environment-scoped credentials. Private
repositories on GitHub Free use repository-level `DEPLOY_KEY` and
`WORGARSIDE_DEV_TOKEN` secrets; public repositories can retain their existing
environment secrets. Configure private-repository deployment secrets and
variables at repository level too. No separate private-repository job is needed.

Semantic Release calculates the next version from conventional commits when
`force-deployment` is `auto`. This choice controls version calculation, not the
workflow trigger. Patch, minor and major force options remain available.
Reusable publishing jobs also check the original event and ref, preventing an
automatic caller from publishing through the shared runner. Callers pinned to
older GCF releases need their own manual-only trigger and guard as well.

Organization repositories use Semantic Release, including those with legacy
label-based release pipelines. Their separate PR validation stays automatic. Source templates and repository
specific release files preserve this rule during sync. GCF's own release is
manual; its resulting published release can still trigger file sync.

Repositories without a release workflow do not need a placeholder. Infrastructure preserves its owner/controller authorization across the release
event. Application deployments consume published releases or release tags; merges and
branch pushes never deploy. Re-run a deployment for its original release to retry.

## Backplane shared runner

Backplane's managed caller is `gha_sync/workflows/repo/backplane/semantic-release.yml`.
It preserves the `prerelease` choice and opts into Python 3.14, PSR 10.6.2 and
`ubuntu-latest`. Other callers retain PSR 10.6.1 and the existing CC runner labels
unless they opt in through `semantic-release-version` and `runner-labels` (JSON).
The shared GitPython pin remains unchanged. SSH setup, host verification, key
cleanup and release invocation stay in `__semantic-release.yml`.

The initial caller pins the shared implementation commit so it can be reviewed
and adopted without inventing an unreleased version tag. GCF's existing release
pin updater will replace this SHA with the published GCF version during release.
Review/merge GCF first, then the matching Backplane caller PR, or distribute it
through the existing authorized release/file-sync process. Neither PR publishes
a release. Backplane's `pyproject.toml` must set
`tool.semantic_release.remote.ignore_token_for_push = true`; its repository
requires the `DEPLOY_KEY` secret and an explicitly approved DeployKey ruleset
bypass. The GitHub API token still creates the published release.
