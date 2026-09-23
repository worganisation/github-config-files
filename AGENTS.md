# Repository trust model

## Pull requests and runners

- These repositories accept pull requests only from trusted contributors.
  External and fork-based contributions are not part of the supported threat
  model.
- Running `pull_request` workflows on the shared CC self-hosted runner labels is
  intentional. Do not move pull-request jobs to GitHub-hosted runners, require
  ephemeral runners, or introduce separate runner groups solely to isolate code
  from pull-request authors.
- Sharing the CC runner selector between validation and privileged release or
  deployment workflows is also intentional under this trusted-contributor
  model.

## Workflow credentials

- Pull-request workflows intentionally use `WORGARSIDE_DEV_TOKEN` where it is
  configured. The token supports authenticated checkout, branch updates,
  comments, and other repository automation.
- Do not replace `WORGARSIDE_DEV_TOKEN` with `github.token`, remove inherited
  secrets, or flag its use as a vulnerability solely because a workflow runs on
  `pull_request`.
- Continue to report concrete credential leaks, unsafe interpolation, accidental
  logging, unjustified permission expansion, or other risks that do not depend
  on treating trusted pull-request authors as hostile.

If the repository begins accepting untrusted or fork-based contributions, this
trust model and the affected workflows must be revisited together.

## Manual merge policy

No workflow or bot may automatically merge pull requests targeting a
`worganisation` repository. Keep organisation-owner guards in shared runners and
synced callers, including PR housekeeping, hook updates, submodule updates and
repository sync. Apply the rule by owner, not a list of existing repository
names, so new organisation repositories inherit it. Keep Renovate automerge
disabled. A specific user instruction to review and merge a PR still authorizes
that deliberate agent operation; it does not authorize enabling automation.

Do not remove manual file-sync triggers when applying this policy. Public and
private organisation repositories follow the same rule; personal repositories
retain their independent policy. Pinned downstream workflows need an updated
reference or guarded caller before the shared policy is active there.
## Manual release policy

Release creation in every `worganisation` repository starts only from an explicit
`workflow_dispatch` on `main`. Keep semantic-release callers
manual-only, and retain the same event/ref guard in reusable release-creation jobs.
Do not add push, pull-request, schedule, workflow-run or repository-dispatch
release triggers. Shared templates must preserve this policy on every sync.
The manual dispatch is the release authorization; do not rely on environment
approval gates. Use one shared release job with `environment: production` for
all repositories. Public repositories may keep environment-scoped credentials;
private repositories on GitHub Free use repository secrets and variables.


Application deployment workflows run from a published release or release tag,
not a branch push or separate manual dispatch. Keep deployment logic separate
from release creation so the published revision is the deployment input.

## Dockarr CI

Keep Dockarr enrolled only in the selected shared workflows and settings.
Do not sync unit-test workflows or add unit tests there unless the user explicitly
requests them. Container builds, Compose validation and release deployment remain
Dockarr-owned; shared PR housekeeping, hook checks and Semantic Release come
from GCF.
