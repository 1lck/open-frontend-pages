import fs from "node:fs";
import path from "node:path";

export type TemplateAudience = "b2b" | "b2c" | "both";

export type TemplateEntry = {
  name: string;
  slug: string;
  category: string;
  audience: TemplateAudience;
  source: string;
  license: string;
  imported: boolean;
  tech: string[];
  tags: string[];
  preview: string | null;
  screenshot: string | null;
};

const registryDirectory = path.join(process.cwd(), "registry", "templates");

export function getTemplates(): TemplateEntry[] {
  const filenames = fs
    .readdirSync(registryDirectory)
    .filter((filename) => filename.endsWith(".json"))
    .sort();

  return filenames.map((filename) => {
    const filePath = path.join(registryDirectory, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as TemplateEntry;
  });
}

export function getRegistryStats(templates: TemplateEntry[]) {
  const imported = templates.filter((template) => template.imported).length;
  const categories = new Set(templates.map((template) => template.category));
  const licenses = new Set(templates.map((template) => template.license));

  return {
    total: templates.length,
    imported,
    categories: categories.size,
    licenses: licenses.size
  };
}
