import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const slug = process.argv[2];

if (!slug) {
  console.error("Usage: npm run package:template -- <slug>");
  process.exit(1);
}

const templateDir = path.join(process.cwd(), "templates", slug);
const outputDir = path.join(process.cwd(), "apps", "web", "public", "downloads");
const outputFile = path.join(outputDir, `${slug}.zip`);

if (!fs.existsSync(templateDir)) {
  console.error(`Template not found: ${templateDir}`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });
fs.rmSync(outputFile, { force: true });

const result = spawnSync(
  "zip",
  ["-q", "-r", outputFile, slug, "-x", "*/.DS_Store", "*/._*"],
  {
    cwd: path.join(process.cwd(), "templates"),
    env: { ...process.env, COPYFILE_DISABLE: "1" },
    stdio: "inherit"
  }
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log(`Template package created: ${outputFile}`);
