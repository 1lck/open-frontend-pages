import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const registryDir = path.join(root, "registry", "templates");

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    env: process.env
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const entries = fs
  .readdirSync(registryDir)
  .filter((filename) => filename.endsWith(".json"))
  .map((filename) => JSON.parse(fs.readFileSync(path.join(registryDir, filename), "utf8")))
  .filter((entry) => entry.imported)
  .sort((a, b) => a.slug.localeCompare(b.slug));

for (const entry of entries) {
  run("npm", ["run", "validate:template", "--", entry.slug]);
}

run("npm", ["run", "validate:registry"]);
run("npm", ["run", "lint"]);
run("npm", ["run", "build"]);

console.log(`All checks passed for ${entries.length} imported templates.`);
