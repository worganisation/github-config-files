# Shared Renovate configuration

`default.json` is the shared Renovate preset for repositories owned by
`worganisation` and `worgarside`.

Repositories opt in with `.github/renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>worganisation/github-config-files"]
}
```

The preset discovers supported package managers automatically, runs its normal
update window before 06:00 Europe/London each Monday, pins floating container
tags to digests, and opens dependency PRs without enabling Renovate automerge.

## Migrating from Dependabot

1. Install the Mend Renovate GitHub App for the repository.
2. Add the extending configuration shown above.
3. Remove `.github/dependabot.yml` from the repository.
4. If Dependabot is synced from this repository, remove the destination from
   the `Dependabot - legacy repositories only` group in `gha_sync/config.yml`.
5. Add `renovate/**` to `branches-ignore` in any workflow that automatically
   creates PRs for pushed branches; Renovate creates its own PRs.
6. Merge the configuration and review the Dependency Dashboard before merging
   the first update PRs.
