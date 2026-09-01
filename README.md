# GitHub Config Files

## Workflow Runners

Linux jobs use the CC self-hosted runner labels `self-hosted`, `linux`, `x64`,
`cc`, `iac`, and `opentofu`. All managed repositories restrict pull requests
to contributors.

## Repository File Mappings

### All Mappings

| Destination | [worganisation/esphome](https://github.com/worganisation/esphome) | [worganisation/frigate-config](https://github.com/worganisation/frigate-config) | [worganisation/gpu-worker](https://github.com/worganisation/gpu-worker) | [worganisation/home-assistant](https://github.com/worganisation/home-assistant) | [worganisation/home-assistant-appdaemon](https://github.com/worganisation/home-assistant-appdaemon) | [worganisation/home-assistant-config-validator](https://github.com/worganisation/home-assistant-config-validator) | [worganisation/infrastructure](https://github.com/worganisation/infrastructure) | [worganisation/led-matrix-controller](https://github.com/worganisation/led-matrix-controller) | [worganisation/pre-commit-hooks-dependency-sync](https://github.com/worganisation/pre-commit-hooks-dependency-sync) | [worganisation/smart-mini-crt-interface](https://github.com/worganisation/smart-mini-crt-interface) | [worganisation/very-slow-movie-player](https://github.com/worganisation/very-slow-movie-player) | [worganisation/wg-scripts](https://github.com/worganisation/wg-scripts) | [worganisation/wg-utilities](https://github.com/worganisation/wg-utilities) | [python-template](https://github.com/worgarside/python-template) |
|-------------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| **.github/CODEOWNERS** | [.github/CODEOWNERS](.github/CODEOWNERS) | | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) | | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](.github/CODEOWNERS) |
| **.github/actionlint.yaml** | [.github/actionlint.yaml](.github/actionlint.yaml) | | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) | | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](.github/actionlint.yaml) |
| **.github/dependabot.yml** | [.github/dependabot.yml](.github/dependabot.yml) | | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) | | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](.github/dependabot.yml) |
| **.github/labeler.yml** | [.github/labeler.yml](.github/labeler.yml) | | [.github/labeler.yml](.github/labeler.yml) | | [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](.github/labeler.yml) | | [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](.github/labeler.yml) |
| **.github/release-drafter.yml** | | | | | | | | | | [gha_sync/configs/release-drafter.yml](gha_sync/configs/release-drafter.yml) | [gha_sync/configs/release-drafter.yml](gha_sync/configs/release-drafter.yml) | | | [gha_sync/configs/release-drafter.yml](gha_sync/configs/release-drafter.yml) |
| **.github/repo_labels.yml** | [.github/repo_labels.yml](.github/repo_labels.yml) | | [.github/repo_labels.yml](.github/repo_labels.yml) | | [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](.github/repo_labels.yml) | | [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](.github/repo_labels.yml) |
| **.github/workflows/auto-create-pr.yml** | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) |
| **.github/workflows/ci_deployment.yml** | | | | | | | | | | [gha_sync/workflows/template/ci_deployment.template.yml](gha_sync/workflows/template/ci_deployment.template.yml) | [gha_sync/workflows/template/ci_deployment.template.yml](gha_sync/workflows/template/ci_deployment.template.yml) | | | [gha_sync/workflows/template/ci_deployment.template.yml](gha_sync/workflows/template/ci_deployment.template.yml) |
| **.github/workflows/ci_validation.yml** | | | | | | | | | | [gha_sync/workflows/template/ci_validation.template.yml](gha_sync/workflows/template/ci_validation.template.yml) | [gha_sync/workflows/template/ci_validation.template.yml](gha_sync/workflows/template/ci_validation.template.yml) | | | [gha_sync/workflows/template/ci_validation.template.yml](gha_sync/workflows/template/ci_validation.template.yml) |
| **.github/workflows/codspeed.yml** | | | | | | [gha_sync/workflows/template/codspeed.template.yml](gha_sync/workflows/template/codspeed.template.yml) | | [gha_sync/workflows/template/codspeed.template.yml](gha_sync/workflows/template/codspeed.template.yml) | | | | | | |
| **.github/workflows/integration-test.yml** | | | | | | [gha_sync/workflows/repo/home-assistant-config-validator/integration-test.yml](gha_sync/workflows/repo/home-assistant-config-validator/integration-test.yml) | | | | | | | | |
| **.github/workflows/manage-pr.yml** | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) |
| **.github/workflows/manage-repo-labels.yml** | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) |
| **.github/workflows/prek-autoupdate.yml** | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | | | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | |
| **.github/workflows/prek-hooks.yml** | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | | | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | |
| **.github/workflows/semantic-release.yml** | | | | [gha_sync/workflows/repo/home-assistant/semantic-release.yml](gha_sync/workflows/repo/home-assistant/semantic-release.yml) | [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | | [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | | | [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | | |
| **.github/workflows/set-pr-auto-merge.yml** | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) |
| **.github/workflows/unit-tests.yml** | | | | | | [gha_sync/workflows/template/unit-tests.template.yml](gha_sync/workflows/template/unit-tests.template.yml) | | [gha_sync/workflows/template/unit-tests.template.yml](gha_sync/workflows/template/unit-tests.template.yml) | | | | | [gha_sync/workflows/template/unit-tests.template.yml](gha_sync/workflows/template/unit-tests.template.yml) | |
| **.github/workflows/validate-home-assistant-config.yml** | | | | [gha_sync/workflows/repo/home-assistant/validate-home-assistant-config.yml](gha_sync/workflows/repo/home-assistant/validate-home-assistant-config.yml) | | | | | | | | | | |
| **.yamllint** | [.yamllint](.yamllint) | | [.yamllint](.yamllint) | | [.yamllint](.yamllint) | [.yamllint](.yamllint) | | [.yamllint](.yamllint) | [.yamllint](.yamllint) | [.yamllint](.yamllint) | [.yamllint](.yamllint) | [.yamllint](.yamllint) | | [.yamllint](.yamllint) |
### Per-Repository Mappings

### [worganisation/esphome](https://github.com/worganisation/esphome) (12 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/esphome/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/esphome/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/esphome/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/esphome/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/esphome/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/esphome/.yamllint) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/esphome/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/esphome/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/esphome/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/esphome/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/esphome/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/esphome/.github/workflows/prek-hooks.yml) |
</details>

### [worganisation/frigate-config](https://github.com/worganisation/frigate-config) (3 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/frigate-config/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/frigate-config/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/frigate-config/.github/workflows/prek-hooks.yml) |
</details>

### [worganisation/gpu-worker](https://github.com/worganisation/gpu-worker) (12 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/gpu-worker/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/gpu-worker/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/gpu-worker/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/gpu-worker/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/gpu-worker/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/gpu-worker/.yamllint) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/gpu-worker/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/gpu-worker/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/gpu-worker/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/gpu-worker/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/gpu-worker/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/gpu-worker/.github/workflows/prek-hooks.yml) |
</details>

### [worganisation/home-assistant](https://github.com/worganisation/home-assistant) (11 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/home-assistant/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/home-assistant/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/home-assistant/.github/dependabot.yml) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/home-assistant/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/home-assistant/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/home-assistant/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/home-assistant/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/home-assistant/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/repo/home-assistant/semantic-release.yml](gha_sync/workflows/repo/home-assistant/semantic-release.yml) | [.github/workflows/semantic-release.yml](https://github.com/worganisation/home-assistant/.github/workflows/semantic-release.yml) |
| [gha_sync/workflows/repo/home-assistant/validate-home-assistant-config.yml](gha_sync/workflows/repo/home-assistant/validate-home-assistant-config.yml) | [.github/workflows/validate-home-assistant-config.yml](https://github.com/worganisation/home-assistant/.github/workflows/validate-home-assistant-config.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/home-assistant/.github/workflows/prek-hooks.yml) |
</details>

### [worganisation/home-assistant-appdaemon](https://github.com/worganisation/home-assistant-appdaemon) (13 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/home-assistant-appdaemon/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/home-assistant-appdaemon/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/home-assistant-appdaemon/.yamllint) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/workflows/prek-hooks.yml) |
| [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | [.github/workflows/semantic-release.yml](https://github.com/worganisation/home-assistant-appdaemon/.github/workflows/semantic-release.yml) |
</details>

### [worganisation/home-assistant-config-validator](https://github.com/worganisation/home-assistant-config-validator) (16 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/home-assistant-config-validator/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/home-assistant-config-validator/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/home-assistant-config-validator/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/home-assistant-config-validator/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/home-assistant-config-validator/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/home-assistant-config-validator/.yamllint) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/repo/home-assistant-config-validator/integration-test.yml](gha_sync/workflows/repo/home-assistant-config-validator/integration-test.yml) | [.github/workflows/integration-test.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/integration-test.yml) |
| [gha_sync/workflows/template/codspeed.template.yml](gha_sync/workflows/template/codspeed.template.yml) | [.github/workflows/codspeed.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/codspeed.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/prek-hooks.yml) |
| [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | [.github/workflows/semantic-release.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/semantic-release.yml) |
| [gha_sync/workflows/template/unit-tests.template.yml](gha_sync/workflows/template/unit-tests.template.yml) | [.github/workflows/unit-tests.yml](https://github.com/worganisation/home-assistant-config-validator/.github/workflows/unit-tests.yml) |
</details>

### [worganisation/infrastructure](https://github.com/worganisation/infrastructure) (1 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/infrastructure/.github/workflows/auto-create-pr.yml) |
</details>

### [worganisation/led-matrix-controller](https://github.com/worganisation/led-matrix-controller) (15 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/led-matrix-controller/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/led-matrix-controller/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/led-matrix-controller/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/led-matrix-controller/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/led-matrix-controller/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/led-matrix-controller/.yamllint) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/codspeed.template.yml](gha_sync/workflows/template/codspeed.template.yml) | [.github/workflows/codspeed.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/codspeed.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/prek-hooks.yml) |
| [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | [.github/workflows/semantic-release.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/semantic-release.yml) |
| [gha_sync/workflows/template/unit-tests.template.yml](gha_sync/workflows/template/unit-tests.template.yml) | [.github/workflows/unit-tests.yml](https://github.com/worganisation/led-matrix-controller/.github/workflows/unit-tests.yml) |
</details>

### [worganisation/pre-commit-hooks-dependency-sync](https://github.com/worganisation/pre-commit-hooks-dependency-sync) (13 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.yamllint) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/workflows/prek-hooks.yml) |
| [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | [.github/workflows/semantic-release.yml](https://github.com/worganisation/pre-commit-hooks-dependency-sync/.github/workflows/semantic-release.yml) |
</details>

### [worganisation/smart-mini-crt-interface](https://github.com/worganisation/smart-mini-crt-interface) (13 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/smart-mini-crt-interface/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/smart-mini-crt-interface/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/smart-mini-crt-interface/.yamllint) |
| [gha_sync/configs/release-drafter.yml](gha_sync/configs/release-drafter.yml) | [.github/release-drafter.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/release-drafter.yml) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/ci_deployment.template.yml](gha_sync/workflows/template/ci_deployment.template.yml) | [.github/workflows/ci_deployment.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/workflows/ci_deployment.yml) |
| [gha_sync/workflows/template/ci_validation.template.yml](gha_sync/workflows/template/ci_validation.template.yml) | [.github/workflows/ci_validation.yml](https://github.com/worganisation/smart-mini-crt-interface/.github/workflows/ci_validation.yml) |
</details>

### [worganisation/very-slow-movie-player](https://github.com/worganisation/very-slow-movie-player) (13 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/very-slow-movie-player/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/very-slow-movie-player/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/very-slow-movie-player/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/very-slow-movie-player/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/very-slow-movie-player/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/very-slow-movie-player/.yamllint) |
| [gha_sync/configs/release-drafter.yml](gha_sync/configs/release-drafter.yml) | [.github/release-drafter.yml](https://github.com/worganisation/very-slow-movie-player/.github/release-drafter.yml) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/very-slow-movie-player/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/very-slow-movie-player/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/very-slow-movie-player/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/very-slow-movie-player/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/ci_deployment.template.yml](gha_sync/workflows/template/ci_deployment.template.yml) | [.github/workflows/ci_deployment.yml](https://github.com/worganisation/very-slow-movie-player/.github/workflows/ci_deployment.yml) |
| [gha_sync/workflows/template/ci_validation.template.yml](gha_sync/workflows/template/ci_validation.template.yml) | [.github/workflows/ci_validation.yml](https://github.com/worganisation/very-slow-movie-player/.github/workflows/ci_validation.yml) |
</details>

### [worganisation/wg-scripts](https://github.com/worganisation/wg-scripts) (13 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/wg-scripts/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/wg-scripts/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/wg-scripts/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/wg-scripts/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/wg-scripts/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worganisation/wg-scripts/.yamllint) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/wg-scripts/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/wg-scripts/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/wg-scripts/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/wg-scripts/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/wg-scripts/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/wg-scripts/.github/workflows/prek-hooks.yml) |
| [gha_sync/workflows/template/semantic-release.template.yml](gha_sync/workflows/template/semantic-release.template.yml) | [.github/workflows/semantic-release.yml](https://github.com/worganisation/wg-scripts/.github/workflows/semantic-release.yml) |
</details>

### [worganisation/wg-utilities](https://github.com/worganisation/wg-utilities) (12 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worganisation/wg-utilities/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worganisation/wg-utilities/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worganisation/wg-utilities/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worganisation/wg-utilities/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worganisation/wg-utilities/.github/repo_labels.yml) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worganisation/wg-utilities/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worganisation/wg-utilities/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worganisation/wg-utilities/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/prek-autoupdate.yml](gha_sync/workflows/all/prek-autoupdate.yml) | [.github/workflows/prek-autoupdate.yml](https://github.com/worganisation/wg-utilities/.github/workflows/prek-autoupdate.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worganisation/wg-utilities/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/prek-hooks.template.yml](gha_sync/workflows/template/prek-hooks.template.yml) | [.github/workflows/prek-hooks.yml](https://github.com/worganisation/wg-utilities/.github/workflows/prek-hooks.yml) |
| [gha_sync/workflows/template/unit-tests.template.yml](gha_sync/workflows/template/unit-tests.template.yml) | [.github/workflows/unit-tests.yml](https://github.com/worganisation/wg-utilities/.github/workflows/unit-tests.yml) |
</details>

### [python-template](https://github.com/worgarside/python-template) (13 files)

<details>
<summary>Mapping Table</summary>

| Source | Destination |
|--------|-------------|
| [.github/CODEOWNERS](.github/CODEOWNERS) | [.github/CODEOWNERS](https://github.com/worgarside/python-template/.github/CODEOWNERS) |
| [.github/actionlint.yaml](.github/actionlint.yaml) | [.github/actionlint.yaml](https://github.com/worgarside/python-template/.github/actionlint.yaml) |
| [.github/dependabot.yml](.github/dependabot.yml) | [.github/dependabot.yml](https://github.com/worgarside/python-template/.github/dependabot.yml) |
| [.github/labeler.yml](.github/labeler.yml) | [.github/labeler.yml](https://github.com/worgarside/python-template/.github/labeler.yml) |
| [.github/repo_labels.yml](.github/repo_labels.yml) | [.github/repo_labels.yml](https://github.com/worgarside/python-template/.github/repo_labels.yml) |
| [.yamllint](.yamllint) | [.yamllint](https://github.com/worgarside/python-template/.yamllint) |
| [gha_sync/configs/release-drafter.yml](gha_sync/configs/release-drafter.yml) | [.github/release-drafter.yml](https://github.com/worgarside/python-template/.github/release-drafter.yml) |
| [gha_sync/workflows/all/auto-create-pr.yml](gha_sync/workflows/all/auto-create-pr.yml) | [.github/workflows/auto-create-pr.yml](https://github.com/worgarside/python-template/.github/workflows/auto-create-pr.yml) |
| [gha_sync/workflows/all/manage-pr.yml](gha_sync/workflows/all/manage-pr.yml) | [.github/workflows/manage-pr.yml](https://github.com/worgarside/python-template/.github/workflows/manage-pr.yml) |
| [gha_sync/workflows/all/manage-repo-labels.yml](gha_sync/workflows/all/manage-repo-labels.yml) | [.github/workflows/manage-repo-labels.yml](https://github.com/worgarside/python-template/.github/workflows/manage-repo-labels.yml) |
| [gha_sync/workflows/all/set-pr-auto-merge.yml](gha_sync/workflows/all/set-pr-auto-merge.yml) | [.github/workflows/set-pr-auto-merge.yml](https://github.com/worgarside/python-template/.github/workflows/set-pr-auto-merge.yml) |
| [gha_sync/workflows/template/ci_deployment.template.yml](gha_sync/workflows/template/ci_deployment.template.yml) | [.github/workflows/ci_deployment.yml](https://github.com/worgarside/python-template/.github/workflows/ci_deployment.yml) |
| [gha_sync/workflows/template/ci_validation.template.yml](gha_sync/workflows/template/ci_validation.template.yml) | [.github/workflows/ci_validation.yml](https://github.com/worgarside/python-template/.github/workflows/ci_validation.yml) |
</details>

## Workflow Dependencies

```mermaid
flowchart LR
subgraph EJ[" "]
direction LR
DN-->EC
DN-->DR
DN-->DM
DR-->BC
DS-->EC
DS-->DR
EC-->BO
DI-->V
CE-->AZ
CF-->CR
CF-->CE
DK-->DI
DK-->CZ
DK-->CR
DY-->CM
CM-->BF
DF-->EC
DF-->DR
DF-->DM
DF-->DE
DF-->CZ
DF-->CR
DF-->CM
DE-->V
DE-->M
M-->I
M-->E
M-->AN
M-->AJ
V-->I
V-->BL
V-->A
end
subgraph EK[" "]
direction LR
CJ-->CI
CI-->BI
end
subgraph EL[" "]
direction LR
CB-->CA
CA-->AW
end
subgraph EM[" "]
direction LR
BW-->BV
BV-->AT
BV-->AB
end
subgraph EN[" "]
direction LR
BS-->BR
BR-->AF
end
AB[["Close Empty PR"]]
AF[["Create Pull Request"]]
AJ[["Deploy Documentation"]]
AN[["Deploy"]]
AT[["Manage PR Labels"]]
AW[["Manage Repo Labels"]]
AZ[["Prek Auto-Update"]]
A[["actionlint"]]
BC[["Prek Hooks"]]
BF[["Semantic Release"]]
BI[["Set PR Auto Merge"]]
BL[["Test"]]
BO[["Unit Tests"]]
BR("Auto-Create PR")
BS{{"PUSH
Branches Ignore: dependabot/**, main
"}}
BV("Manage PR")
BW{{"PULL REQUEST
Types: auto_merge_disabled, auto_merge_enabled, labeled, opened, ready_for_review, reopened, synchronize, unlabeled
"}}
CA("Manage Repo Labels")
CB{{"PUSH
Branches: main
Paths: .github/repo_labels.yml, .github/workflows/manage-repo-labels.yml
"}}
CE("Prek Auto-Update")
CF{{"SCHEDULE"}}
CI("Set PR Auto Merge")
CJ{{"PULL REQUEST
Types: opened, ready_for_review
"}}
CM("Semantic Release")
CR("Validate Home Assistant Config")
CZ("Integration Test")
DE("CI: Validation & Deployment")
DF{{"PUSH
Branches: main
"}}
DI("CI: Validation")
DK{{"PULL REQUEST
Types: opened, reopened, synchronize
"}}
DM("CodSpeed Benchmarks")
DN{{"PULL REQUEST
Types: opened, ready_for_review, reopened, synchronize
"}}
DR("Prek Hooks")
DS{{"MERGE GROUP"}}
DY{{"PUSH
Branches: main
Paths: !{{ version_file_glob }}, {{ source_glob }}
"}}
EC("Unit Tests")
E[["Build Documentation"]]
I[["Build"]]
M[["CI: Deployment"]]
V[["CI: Validation"]]
```
