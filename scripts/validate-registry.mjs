import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const registryDir = path.join(process.cwd(), "registry", "templates");
const publicDir = path.join(process.cwd(), "apps", "web", "public");
const allowedImportLicenses = new Set([
  "MIT",
  "Apache-2.0",
  "BSD-2-Clause",
  "BSD-3-Clause",
  "ISC",
  "CC0-1.0"
]);
const requiredStringFields = ["name", "slug", "category", "audience", "source", "license"];
const allowedAudiences = new Set(["b2b", "b2c", "both"]);

const files = fs.readdirSync(registryDir).filter((file) => file.endsWith(".json")).sort();
const slugs = new Set();
const errors = [];
const warnings = [];

for (const file of files) {
  const filePath = path.join(registryDir, file);
  let entry;

  try {
    entry = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`${file}: invalid JSON (${error.message})`);
    continue;
  }

  for (const field of requiredStringFields) {
    if (typeof entry[field] !== "string" || entry[field].trim() === "") {
      errors.push(`${file}: "${field}" must be a non-empty string`);
    }
  }

  if (entry.slug && slugs.has(entry.slug)) {
    errors.push(`${file}: duplicate slug "${entry.slug}"`);
  }
  slugs.add(entry.slug);

  if (entry.audience && !allowedAudiences.has(entry.audience)) {
    errors.push(`${file}: audience must be one of ${Array.from(allowedAudiences).join(", ")}`);
  }

  if (typeof entry.imported !== "boolean") {
    errors.push(`${file}: "imported" must be a boolean`);
  }

  for (const field of ["tech", "tags"]) {
    if (!Array.isArray(entry[field]) || entry[field].some((value) => typeof value !== "string")) {
      errors.push(`${file}: "${field}" must be an array of strings`);
    }
  }

  for (const field of ["preview", "screenshot"]) {
    if (entry[field] !== null && typeof entry[field] !== "string") {
      errors.push(`${file}: "${field}" must be null or a string`);
    }
  }

  if (entry.source && !entry.source.startsWith("https://github.com/")) {
    warnings.push(`${file}: source is not a GitHub URL`);
  }

  if (entry.imported && !allowedImportLicenses.has(entry.license)) {
    errors.push(`${file}: imported templates cannot use "${entry.license}"`);
  }

  if (entry.imported && (typeof entry.repoPath !== "string" || entry.repoPath.trim() === "")) {
    errors.push(`${file}: imported templates must include "repoPath"`);
  }

  if (entry.imported && (typeof entry.download !== "string" || entry.download.trim() === "")) {
    errors.push(`${file}: imported templates must include "download"`);
  }

  if (entry.download && !fs.existsSync(path.join(publicDir, entry.download))) {
    errors.push(`${file}: download file does not exist at apps/web/public${entry.download}`);
  }

  if (!entry.imported && entry.repoPath !== null) {
    errors.push(`${file}: candidate templates must use null "repoPath"`);
  }

  if (!entry.imported && entry.download !== null) {
    errors.push(`${file}: candidate templates must use null "download"`);
  }

  if (!entry.imported && !allowedImportLicenses.has(entry.license)) {
    warnings.push(`${file}: "${entry.license}" is registry-only unless reviewed separately`);
  }
}

for (const warning of warnings) {
  console.warn(`Warning: ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`Error: ${error}`);
  }
  process.exit(1);
}

console.log(`Registry valid: ${files.length} template entries checked.`);
