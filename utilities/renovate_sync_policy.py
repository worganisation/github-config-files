"""Derive Renovate ownership exclusions from the canonical workflow sync map."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "renovate-sync-policy.json"


def _destinations(entries: list[dict[str, object] | str]) -> set[str]:
    paths: set[str] = set()
    for entry in entries:
        if not isinstance(entry, dict):
            continue
        source, dest = str(entry.get("source", "")), str(entry.get("dest", ""))
        if not source.startswith("gha_sync/workflows/") or not dest.startswith(
            ".github/workflows/",
        ):
            continue
        location = ROOT / source
        if location.is_dir():
            paths.update(
                dest + file.name
                for file in location.iterdir()
                if file.suffix in {".yml", ".yaml"}
            )
        elif location.is_file():
            paths.add(dest)
    return paths


def generate() -> dict[str, object]:
    """Build exact repository/file exclusions from active sync entries."""
    config = yaml.safe_load((ROOT / "gha_sync/config.yml").read_text())
    owned: dict[str, set[str]] = {}

    def add(repo: str, entries: list[dict[str, object] | str]) -> None:
        if repo.startswith("worganisation/"):
            owned.setdefault(repo, set()).update(_destinations(entries))

    for group in config.get("group", []):
        for repo in group["repos"].split():
            add(repo, group["files"])
    for repo, entries in config.items():
        if repo != "group":
            add(repo, entries)
    return {
        "$schema": "https://docs.renovatebot.com/renovate-schema.json",
        "packageRules": [
            {
                "description": "GCF source templates own these synced workflows.",
                "matchRepositories": [repo],
                "matchManagers": ["github-actions"],
                "matchFileNames": sorted(paths),
                "enabled": False,
            }
            for repo, paths in sorted(owned.items())
            if paths
        ],
    }


def main() -> None:
    """Write the generated preset, or verify it is current."""
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    rendered = json.dumps(generate(), indent=2) + "\n"
    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_text() != rendered:
            raise SystemExit("Run python utilities/renovate_sync_policy.py")
    else:
        OUTPUT.write_text(rendered)


if __name__ == "__main__":
    main()
