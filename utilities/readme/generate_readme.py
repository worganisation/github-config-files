"""Generate a README containing the current file mappings across repositories."""

from __future__ import annotations

from logging import StreamHandler, getLogger
from sys import stdout

from utils.common import REPO_FILE_MAPPINGS, REPO_PATH
from utils.mermaid_chart import generate_mermaid_chart
from utils.repo_sync_table import generate_config_mappings

LOGGER = getLogger(__name__)
LOGGER.setLevel("INFO")
LOGGER.addHandler(StreamHandler(stdout))


IGNORED_FILES = (".DS_Store", "config.yml")


def main() -> None:
    """Generate a README containing the current file mappings across repositories."""
    all_used_sources = set()

    for mappings in REPO_FILE_MAPPINGS.values():
        all_used_sources.update(list(mappings.values()))

    for file in (REPO_PATH / "gha_sync/").rglob("*"):
        if (
            file.is_file()
            and file.name not in IGNORED_FILES
            and file.relative_to(REPO_PATH).as_posix() not in all_used_sources
        ):
            raise RuntimeError(
                f"Unused file: {file.relative_to(REPO_PATH).as_posix()}",
            )

    readme = """# GitHub Config Files

## Workflow Runners

Linux jobs use the CC self-hosted runner labels `self-hosted`, `linux`, `x64`,
`cc`, `iac`, and `opentofu`. All managed repositories restrict pull requests
to contributors.

## Standard PR Checks

The synced `manage-pr.yml` caller uses `__standard-pr-checks.yml` to run
PR housekeeping in one runner job without checking out the repository.
Prek stays separate so title/label changes cannot restart code validation,
and existing required prek and unit-test check names are preserved.

Repository Actions variables can disable individual operations by setting
one of these values to the literal string `true`:

| Variable | Operation |
| --- | --- |
| `CI_DISABLE_PR_LABELS` | Automatic labels |
| `CI_DISABLE_CLOSE_EMPTY_PR` | Empty-PR closing |
| `CI_DISABLE_AUTO_MERGE` | Enabling auto-merge outside `worganisation` |
| `CI_DISABLE_PREK` | Shared prek job (also applies on main/merge groups) |
| `CI_DISABLE_PR_TITLE` | Conventional title validation |

Title validation and other metadata operations are enabled by default. Set
`CI_DISABLE_PR_TITLE=true` to opt out of conventional title validation.
Auto-merge is always disabled for every `worganisation` repository, including
future repositories, regardless of inputs or variables.
The reusable workflow also accepts boolean inputs for bespoke callers.

Metadata runs on code events; edits run only when title validation is enabled.
Label events allocate a runner only for `bot:do-not-close`, and auto-merge events
no longer repeat housekeeping. A failed title check still allows labels to be
applied, blocks auto-merge, and fails the metadata job. Repositories with custom
label rules driven by label or auto-merge events need their own event policy.

The next release updates the reusable-workflow pin and syncs the metadata caller
while deleting `set-pr-auto-merge.yml` through its retained `deleteOrphaned`
mapping. Source callers pin an existing guarded implementation, so manual sync
is also supported before the next release. Older pinned callers remain supported. Infrastructure
keeps its bespoke hooks/title checks; deployments and schedules stay independent.
When migrating bespoke callers, check branch rules before renaming required jobs.
Disabling a required job makes it skipped, so opt-outs are also policy changes.
Release creation requires manual dispatch on main; see [manual releases](docs/manual-releases.md).
Organisation pull requests require [deliberate merges](docs/manual-merges.md).

"""

    readme += generate_config_mappings()

    readme += generate_mermaid_chart(use_subgraphs=True)

    readme = readme.rstrip() + "\n"

    (REPO_PATH / "README.md").write_text(readme)


if __name__ == "__main__":
    main()
