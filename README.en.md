# Open Frontend Pages

[![中文](https://img.shields.io/badge/README-中文-0f6f5c?style=for-the-badge)](README.md)

Open Frontend Pages is a curated registry of open-source frontend pages and templates that can be previewed, downloaded, remixed, and reused.

The project focuses on real product pages instead of isolated component demos. Each entry tracks the upstream source, license, tech stack, screenshot, download package, and import status so builders can understand where the code came from and whether redistribution is allowed.

## What This Project Is

Many open-source frontend templates look reusable at first glance, but before copying them into a product you usually need to verify:

- Whether the upstream source is clear.
- Whether the license allows redistribution and modification.
- Whether the project depends on real backends, databases, payments, authentication, or external services.
- Whether there is a preview, screenshot, and downloadable package.

Open Frontend Pages organizes that information into one registry and imports eligible template source code into this repository, making frontend pages easier to discover, preview, and reuse safely.

## What It Collects

The registry prioritizes practical product scenarios:

- B2B: dashboards, admin tools, CRM, analytics, settings, billing, AI consoles, and data-heavy workspaces.
- B2C: landing pages, pricing pages, e-commerce flows, portfolios, blogs, auth screens, profiles, and onboarding.

Importable templates must use redistribution-friendly licenses such as MIT, Apache-2.0, BSD, ISC, or CC0.

## What It Does Not Import

The project does not import:

- Projects without a license.
- GPL, LGPL, or AGPL projects as importable templates.
- Commercial template free tiers that do not allow redistribution.
- Templates that are free for personal use only.
- Proprietary product code or proprietary assets.
- Projects that cannot be safely separated from real backends, databases, payments, authentication, or external services.

## Repository Layout

```txt
apps/web/                 # Preview site
registry/templates/       # Template metadata
templates/                # Imported template source
apps/web/public/          # Screenshots and download packages
scripts/                  # Validation and packaging scripts
docs/                     # License, import, deployment, and automation docs
```

## Import Requirements

Each imported template must preserve upstream attribution:

```txt
templates/<slug>/
  source.json
  LICENSE.original
  NOTICE.md
  src/
```

It must also provide:

```txt
apps/web/public/screenshots/<slug>.png
apps/web/public/downloads/<slug>.zip
```

Screenshots must be `2880x1440` PNG files so preview cards stay consistently filled.

For more details, see:

- [License policy](docs/license-policy.md)
- [Import workflow](docs/import-workflow.md)
- [Automation workflow](docs/automation-workflow.md)

## Live Preview

Cloudflare Pages:

```txt
https://open-frontend-pages.pages.dev/
```
