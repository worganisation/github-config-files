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

## Shared release runtime

All generic callers use the shared CC self-hosted runner and the single Python
Semantic Release pin in `__semantic-release.yml`. Renovate tracks that pin via
GCF's PyPI regex manager and proposes stable updates; callers cannot override
the runner or tool version. The existing GitPython compatibility pin is retained.
The generic template includes the prerelease choice alongside auto/patch/minor/major.

Backplane uses `gha_sync/workflows/template/semantic-release.template.yml`, with
Python 3.14 selected in its sync mapping. No repository-specific release source
is needed. Its application deployment workflow remains Backplane-owned.
The template initially pins the shared implementation commit; the normal release
pin updater advances it to a published GCF version. Review/merge GCF before the
Backplane caller. Neither PR publishes a release.

Backplane's project configuration must set
`tool.semantic_release.remote.ignore_token_for_push = true`; its repository
needs `DEPLOY_KEY` and an explicitly approved DeployKey ruleset bypass.
The API token still creates the published release.
