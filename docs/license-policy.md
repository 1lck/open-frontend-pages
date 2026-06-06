# License policy

Open Frontend Pages exists to make reusable frontend pages easier to find and safer to remix. The registry can list useful projects with clear labels, but imported source code has a stricter bar.

## Licenses allowed for imported templates

Templates can be copied into `templates/` when the original project uses one of these licenses:

- MIT
- Apache-2.0
- BSD-2-Clause
- BSD-3-Clause
- ISC
- CC0-1.0

Each imported template must keep its original license and attribution.

## Licenses not allowed for imported templates

Do not import source code from projects with these terms:

- No license.
- GPL, LGPL, or AGPL.
- Free for personal use only.
- Free commercial template tiers that prohibit redistribution.
- Terms that require attribution in a way this project cannot preserve.

GPL-family projects may be listed as registry candidates when the metadata clearly marks the license, but their code should not be copied into this repository.

## Required files for imported templates

Every imported template directory must include:

```txt
templates/<slug>/
  source.json
  LICENSE.original
  NOTICE.md
  src/
```

`source.json` records where the code came from:

```json
{
  "name": "Original Project Name",
  "source": "https://github.com/owner/repo",
  "license": "MIT",
  "commit": "abc123",
  "originalAuthor": "owner",
  "modified": true
}
```

`NOTICE.md` should explain what changed after import, such as dependency cleanup, styling fixes, or preview integration.

## Review checklist before importing

- The repository has a license file or package metadata with a compatible license.
- The imported code comes from a specific commit.
- Third-party assets inside the template have compatible terms.
- The original license is copied to `LICENSE.original`.
- The registry entry sets `imported` to `true`.
- `npm run validate:registry` passes.
