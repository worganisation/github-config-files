# LAN deployment SSH

Backplane, Dockarr, Frigate and wg-scripts use this action on the shared CC Linux runner (`self-hosted`, `linux`, `x64`, `cc`, `iac`, `opentofu`). Application workflows own release selection and remote deployment commands. Infrastructure owns the runner firewall and managed host public keys.

Supply `private-key` from the repository's `DEPLOY_SSH_PRIVATE_KEY` secret and `known-hosts` from its `DEPLOY_SSH_KNOWN_HOSTS` variable. Obtain host public keys through an independently verified administrative connection and include the exact LAN addresses used by the workflow. Do not discover or accept new keys during deployment. Private repositories on GitHub Free may use repository settings; public repositories may use the `production-deploy` environment.

The `config` output is a temporary SSH configuration path. Pass it explicitly with `ssh -F "$SSH_CONFIG"` or `scp -F "$SSH_CONFIG"`, with `SSH_CONFIG` populated from the step output. Each invocation has its own private directory. The post action removes that directory on success or failure; setup failures also remove partial files. Abrupt runner loss can prevent post actions, so runner recovery must remove residual `lan-ssh-*` directories from its temporary workspace before accepting jobs.

Deployment workflows consume stable published release tags, serialize deployments to the same hosts and use verified LAN addresses. Keep remote values quoted or validate them before interpolation into a remote shell command. Authentication does not authorize bypassing application recovery or storage checks.

The runner's firewall must permit TCP 22 to every target before deployment. Repository deployment keys belong in GitHub secrets, never permanently in the runner's home directory. Infrastructure deployment continues to use its trusted Mac controller.
