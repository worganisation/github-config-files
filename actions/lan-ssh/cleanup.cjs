const fs = require("node:fs");
const path = require("node:path");

const directory = process.env.STATE_directory;
if (directory) {
  const parent = path.resolve(process.env.RUNNER_TEMP);
  const candidate = path.resolve(directory);
  if (path.dirname(candidate) !== parent || !path.basename(candidate).startsWith("lan-ssh-")) {
    throw new Error("Refusing to remove an unexpected SSH credential directory");
  }

  fs.rmSync(candidate, { recursive: true, force: true });
}
