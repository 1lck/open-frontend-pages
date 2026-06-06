# Open Frontend Pages

Open Frontend Pages is a curated registry of open-source frontend pages and templates that are safe to preview, remix, and reuse.

The project focuses on real product scenarios instead of generic component demos. It tracks source projects, licenses, screenshots, tech stacks, and remix status so builders can find usable page code without guessing whether it can be redistributed.

## What this project collects

- B2B pages: dashboards, admin tools, CRM, analytics, settings, billing, AI consoles, and data-heavy screens.
- B2C pages: landing pages, pricing pages, e-commerce flows, portfolios, blogs, auth, profiles, and onboarding.
- Only templates with compatible redistribution terms, such as MIT, Apache-2.0, BSD, ISC, or CC0.

## What this project does not collect

- Projects without a license.
- GPL, LGPL, or AGPL projects in the importable template set.
- Commercial template free tiers that do not allow redistribution.
- Templates that are free for personal use only.
- Proprietary product code or assets.

## Repository layout

```txt
apps/web/                 # Searchable preview site
registry/templates/       # Template metadata, one JSON file per template
templates/                # Imported template source, when redistribution is allowed
scripts/                  # Registry and license validation
docs/                     # License policy and contribution guide
```

## Run locally

Install dependencies:

```bash
npm install
```

Start the preview site:

```bash
npm run dev
```

Validate the registry:

```bash
npm run validate:registry
```

## Add a template candidate

Create a JSON file in `registry/templates/`:

```json
{
  "name": "Example SaaS Dashboard",
  "slug": "example-saas-dashboard",
  "category": "dashboard",
  "audience": "b2b",
  "source": "https://github.com/example/project",
  "repoPath": null,
  "license": "MIT",
  "imported": false,
  "tech": ["react", "tailwind"],
  "tags": ["saas", "analytics", "settings"],
  "preview": null,
  "screenshot": null
}
```

Then run:

```bash
npm run validate:registry
```

Before importing source code into `templates/`, read [the license policy](docs/license-policy.md).
