const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

let directory;
try {
  const privateKey = process.env["INPUT_PRIVATE-KEY"];
  const knownHosts = process.env["INPUT_KNOWN-HOSTS"];
  if (!privateKey?.trim() || !knownHosts?.trim()) {
    throw new Error("Both private-key and verified known-hosts are required");
  }

  directory = fs.mkdtempSync(path.join(process.env.RUNNER_TEMP, "lan-ssh-"));
  fs.chmodSync(directory, 0o700);
  fs.appendFileSync(process.env.GITHUB_STATE, `directory=${directory}\n`);
  const key = path.join(directory, "key");
  const hosts = path.join(directory, "known_hosts");
  const config = path.join(directory, "config");
  fs.writeFileSync(key, `${privateKey.trim()}\n`, { mode: 0o600 });
  fs.writeFileSync(hosts, `${knownHosts.trim()}\n`, { mode: 0o600 });

  // Validate without printing key material or ssh-keygen diagnostics.
  for (const args of [["-y", "-P", "", "-f", key], ["-l", "-f", hosts]]) {
    const result = spawnSync("ssh-keygen", args, { stdio: "ignore", timeout: 10000 });
    if (result.status !== 0) {
      throw new Error("Invalid SSH credentials or known_hosts; use an unencrypted deployment key");
    }
  }

  // -F isolates callers from the persistent runner account's SSH configuration.
  const quote = (value) => `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
  fs.writeFileSync(config, `Host *
  IdentityFile ${quote(key)}
  UserKnownHostsFile ${quote(hosts)}
  GlobalKnownHostsFile /dev/null
  StrictHostKeyChecking yes
  UpdateHostKeys no
  IdentitiesOnly yes
  IdentityAgent none
  BatchMode yes
  ConnectTimeout 15
  ConnectionAttempts 1
  ForwardAgent no
  ClearAllForwardings yes
  ControlMaster no
  ControlPath none
`, { mode: 0o600 });
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `config=${config}\n`);
} catch (error) {
  if (directory) fs.rmSync(directory, { recursive: true, force: true });
  // Filesystem errors include paths, never input key contents.
  console.error(error.message);
  process.exitCode = 1;
}
