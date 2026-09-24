# Manual pull-request merges

All `worganisation` repositories require a deliberate merge. Public and private
repositories use the same policy, including future repositories in the
organisation. The policy does not depend on GitHub plan-dependent approval gates.

Shared auto-merge runners and their compatibility callers skip organisation
repositories. Hook updates, repository sync and submodule updates still create
PRs, but leave organisation PRs open for review and a manual merge. Sync retains
both its published-release and manual triggers. Its merge guard checks the target
PR owner; submodule deployment checks the target repository, not the source.
Renovate's shared preset already sets `automerge: false`.

The compatibility caller remains synced to replace existing active callers.
New organisation repositories are covered by the owner guard, without adding
repository-name exceptions. When adding a shared workflow, preserve this policy
at every merge operation. Personal repositories retain their existing policy.

A GCF merge alone does not update downstream references pinned to older commits
or tags. Publish and sync a reviewed GCF release, or update those callers directly,
before treating the policy as active in every consumer. Existing queued auto-merge
requests must be disabled separately; changing YAML does not cancel them.
