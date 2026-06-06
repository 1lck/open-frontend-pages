import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const registryDir = path.join(process.cwd(), "registry", "templates");
const targetImported = Number.parseInt(process.env.OPEN_FRONTEND_TARGET ?? "50", 10);

const entries = fs
  .readdirSync(registryDir)
  .filter((filename) => filename.endsWith(".json"))
  .map((filename) => JSON.parse(fs.readFileSync(path.join(registryDir, filename), "utf8")))
  .sort((a, b) => a.slug.localeCompare(b.slug));

const imported = entries.filter((entry) => entry.imported);
const candidates = entries.filter((entry) => !entry.imported);
const categories = [...new Set(entries.map((entry) => entry.category))].sort();
const missingAssets = imported.filter((entry) => !entry.screenshot || !entry.download);

const blockedCandidates = candidates.filter((entry) => {
  const license = String(entry.license ?? "").toLowerCase();
  return license.includes("gpl") || license.includes("unlicensed") || license === "unknown";
});

const status = {
  targetImported,
  remainingToTarget: Math.max(targetImported - imported.length, 0),
  total: entries.length,
  imported: imported.length,
  candidates: candidates.length,
  categories,
  missingAssets: missingAssets.map((entry) => entry.slug),
  blockedCandidates: blockedCandidates.map((entry) => ({
    slug: entry.slug,
    license: entry.license
  }))
};

console.log(JSON.stringify(status, null, 2));
