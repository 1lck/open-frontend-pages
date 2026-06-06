# Automation workflow

This project can be expanded by a recurring AI job, but each run must keep the import audit trail clear. The default automation unit is one template per run.

## Target

Grow the imported template set continuously. The first milestone is 50 reusable frontend pages, but the recurring import loop should keep expanding the registry after that until the automation is manually paused or the project policy changes.

Useful scenario coverage:

- B2C: landing, pricing, auth, ecommerce, product, blog, portfolio, restaurant, education, real estate, onboarding.
- B2B: dashboard, admin, analytics, CRM, billing, settings, docs, AI console, team management.

## Hard gates

Only import source code when all gates pass:

- The upstream project is on GitHub.
- The license is MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC, or CC0-1.0.
- The exact upstream commit is recorded.
- The original license text is copied to `LICENSE.original`.
- The source is converted into a frontend-only remix base.
- Backend routes, middleware, server SDKs, payment services, auth services, database clients, and required environment secrets are removed or replaced with local static placeholders.
- Third-party assets inside the template have compatible terms.

Do not import GPL, AGPL, LGPL, no-license, personal-use-only, or redistribution-restricted commercial template code. Those projects may only be listed as candidates with clear metadata.

## Run loop

1. Run `npm run automation:status`.
2. Pick one new GitHub source project that improves scenario coverage.
3. Clone or download it under `work/`.
4. Verify license files and package metadata before copying code.
5. Copy reusable frontend source to `templates/<slug>/src`.
6. Add `templates/<slug>/source.json`, `LICENSE.original`, and `NOTICE.md`.
7. Remove backend and external service coupling.
8. Add `registry/templates/<slug>.json`.
9. Capture a preview screenshot into `apps/web/public/screenshots/<slug>.png`.
10. Run `npm run package:template -- <slug>`.
11. Run `npm run validate:all`.
12. Deploy with `npm run deploy:cf` when the user has authorized deployment for the run.
13. Verify the deployed download URL returns HTTP 200.
14. Commit and push when the user has authorized pushing for the run.

## Recurring Codex prompt

Use this prompt for a recurring Codex automation attached to this workspace:

```txt
Continue expanding the open-frontend-pages repository as a continuous AI-driven import loop. In this run, import at most one new permissively licensed GitHub template. Treat 50 imported templates as the first milestone, not a stopping point. Follow docs/automation-workflow.md, docs/import-workflow.md, and docs/license-policy.md. Preserve upstream license and attribution, remove backend/API/middleware/external service coupling, create screenshot and per-template zip, run npm run validate:all, deploy to Cloudflare Pages if checks pass, verify the deployed zip URL, then commit and push. If no safe source is found, add only a candidate registry entry and explain why it was not imported.
```

## Notes for long-running automation

- Keep each commit scoped to one imported template or one workflow improvement.
- Prefer adding scenario variety over importing many near-duplicates.
- Keep each automation run small even when token budget is high; one imported template per run makes review, rollback, and deployed verification clear.
- Leave skipped source projects out of `templates/`.
- Record important manual judgments in the template `NOTICE.md`.
- If validation fails, fix the issue in the same run or leave the work uncommitted with a clear summary.
