import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const slug = process.argv[2];

if (!slug) {
  console.error("Usage: npm run validate:template -- <slug>");
  process.exit(1);
}

const templateDir = path.join(process.cwd(), "templates", slug);
const requiredFiles = ["source.json", "LICENSE.original", "NOTICE.md", "src/package.json"];
const errors = [];

for (const file of requiredFiles) {
  const filePath = path.join(templateDir, file);
  if (!fs.existsSync(filePath)) {
    errors.push(`${slug}: missing ${file}`);
  }
}

const sourcePath = path.join(templateDir, "source.json");
if (fs.existsSync(sourcePath)) {
  const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  const requiredSourceFields = ["name", "source", "license", "commit", "originalAuthor"];

  for (const field of requiredSourceFields) {
    if (typeof source[field] !== "string" || source[field].trim() === "") {
      errors.push(`${slug}: source.json "${field}" must be a non-empty string`);
    }
  }

  if (typeof source.modified !== "boolean") {
    errors.push(`${slug}: source.json "modified" must be a boolean`);
  }
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`Error: ${error}`);
  }
  process.exit(1);
}

console.log(`Template valid: ${slug}`);
