# Contribution guide

Open Frontend Pages welcomes template candidates and imported templates, but each contribution needs clear source and license information.

## Add a registry candidate

Use this path when you found a useful open-source template but have not imported its source code.

1. Create `registry/templates/<slug>.json`.
2. Fill in the source repository, license, audience, category, tech stack, and tags.
3. Set `imported` to `false`.
4. Run `npm run validate:registry`.

Candidates can include licenses that are useful to know about but not safe to import. The license must still be accurate.

## Import a template

Use this path only when the source license allows redistribution.

1. Confirm the source project uses MIT, Apache-2.0, BSD, ISC, or CC0.
2. Copy the source into `templates/<slug>/src/`.
3. Add `templates/<slug>/source.json`.
4. Copy the original license to `templates/<slug>/LICENSE.original`.
5. Add `templates/<slug>/NOTICE.md`.
6. Update the registry entry and set `imported` to `true`.
7. Run `npm run validate:registry`.

## Write useful metadata

Keep tags practical. Good tags describe where a page fits in a product:

- `analytics`
- `billing`
- `checkout`
- `crm`
- `landing`
- `profile`
- `settings`

Avoid vague tags like `beautiful`, `modern`, or `clean`.

## Pull request checklist

- Registry JSON is valid.
- Source URL points to the original repository.
- License value matches the upstream project.
- Imported templates include `source.json`, `LICENSE.original`, and `NOTICE.md`.
- Screenshots or previews do not use proprietary assets unless their license allows redistribution.
