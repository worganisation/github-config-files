# Renovate dependency updates

The shared policy lives in `renovate-default.json` in this repository. Each
consumer extends `github>worganisation/github-config-files:renovate-default`
in its `renovate.json`; repository-specific overrides stay in that consumer.
Policy changes take effect from this repository's default branch without
copying the policy into each consumer. The Mend Renovate
GitHub App must have access to each repository, and the configuration must be
on its default branch. The app is available at
<https://github.com/apps/renovate/installations/new>.

## Policy

- Routine update branches are created on Mondays between 00:00 and 06:59 in
  `Europe/London`, subject to the hosted app's execution schedule.
- Each repository has at most three concurrent update PRs, with one new PR per
  hour. Security updates may bypass Renovate's normal scheduling and limits.
- Major updates require approval in the Dependency Dashboard before a PR opens.
- Updates request review from `worgarside`; Renovate does not enable auto-merge.
- Routine GitHub Actions updates are grouped and action references are pinned
  to commit digests. Shared `github-config-files` workflow references remain
  owned by the release-driven sync workflow. Other managers use Renovate's
  recommended grouping.
- Pre-commit/prek hook updates remain owned by the existing hook auto-update
  workflows. Renovate's pre-commit manager is explicitly disabled.
- Dependabot configurations with `open-pull-requests-limit: 0` retain security
  updates but do not create scheduled version-update PRs. Existing open PRs
  still need individual review.

The shared auto-create-PR workflow ignores `renovate/**`, allowing Renovate to
own its PR titles and bodies. Shared auto-merge callers exclude those branches.
The sync configuration retains normal Dependabot version updates for repositories
outside the Renovate rollout.

## Repository coverage

All active `worganisation` repositories participate, together with
`worgarside/vaultpi`. `dockarr` is the repository for the Compose applications.

Built-in managers discover supported GitHub Actions, Python manifests and lock
files, Dockerfiles, Compose files, Ansible dependencies, and OpenTofu providers.
Discovery does not imply that arbitrary versions embedded in shell scripts,
Ansible variables, Jinja templates, or device YAML are managed. Floating image
tags are not converted to pinned application versions by this configuration.

Home Assistant's vendored custom integrations and storage-dashboard exports are
excluded. Tdarr server and node updates are grouped. Infrastructure provider
updates use the OpenTofu registry and require dashboard approval; the Terraform
manager does not change the OpenTofu runtime constraint. Infrastructure deployment
and recovery approvals remain separate from dependency PR review.

## Adding a repository

Grant the Renovate app access to the repository and add this `renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>worganisation/github-config-files:renovate-default"]
}
```

No central allowlist is required for the hosted app. If installed for all
organization repositories, app access also covers newly created repositories.
Keep local overrides beside `extends`, exclude `renovate/**` from any generic
PR creator and auto-merge workflow, and set existing Dependabot version-update
limits to zero. Retain the separate hook updater. For repositories managed by
GCF file sync, use the same Renovate-compatible workflow and Dependabot sources.

## Validation and activation

Run `renovate-config-validator --strict renovate.json` inside a repository.
A local `renovate --platform=local --dry-run=extract` checks discovery without
opening PRs. Review the Dependency Dashboard and hosted app logs after activation
for private-package access or lockfile-generation errors. Passing configuration
validation does not prove hosted registry access or successful lockfile updates.
