# Manual releases

Release creation across `worganisation` requires `workflow_dispatch` on `main`.
Merging or pushing commits does not publish a release. The manual dispatch is
the authorization step; GitHub environment approval gates are not required.
Public repositories retain their `production` environment for credential scoping.
Private repositories use repository-level `DEPLOY_KEY` and
`WORGARSIDE_DEV_TOKEN` secrets because environments and organization secrets are
not available to private repositories on GitHub Free. Configure deployment
secrets and variables at repository level there too.

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
