# Import workflow

Use this workflow when importing a GitHub template into `templates/`.

## Pick a source project

Choose projects that add useful product scenarios to the registry. Prefer templates with clear page coverage, practical UI patterns, and permissive licenses.

Do not import code from projects with no license, GPL-family licenses, personal-use-only terms, or commercial template restrictions.

## Record the upstream source

Before copying code, capture:

- Source repository URL.
- Exact commit hash.
- Original author or organization.
- License name.
- Original license text.

Each imported template must include:

```txt
templates/<slug>/
  source.json
  LICENSE.original
  NOTICE.md
  src/
```

## Copy only reusable frontend code

Copy the source into `templates/<slug>/src/`.

Exclude generated or local files:

- `.git`
- `.next`
- `node_modules`
- `.idea`
- lock files when they are not needed for source review

Keep source project configuration files when they help future remixing, such as `package.json`, `tsconfig.json`, and framework config.

## Remove backend coupling

Scan the imported source for backend or service dependencies:

```bash
find templates/<slug>/src/src -type f \( -path '*/api/*' -o -name 'middleware.*' -o -name 'route.*' -o -name 'server.*' \) -print
```

Then search for common service bindings:

```bash
rg -n "process\.env|NEXT_PUBLIC_|fetch\(|axios|prisma|mongoose|supabase|firebase|stripe|middleware|api/|route\.ts|route\.js" templates/<slug>/src
```

If a hit is part of real backend behavior, replace it with local mock data or remove that feature from the imported copy.

## Update metadata

Set the registry entry to:

```json
{
  "imported": true,
  "repoPath": "templates/<slug>/src",
  "download": "/downloads/<slug>.zip"
}
```

Keep the source URL and license value aligned with upstream.

## Generate a download package

Run:

```bash
npm run package:template -- <slug>
```

This creates:

```txt
apps/web/public/downloads/<slug>.zip
```

The zip should contain only that template directory, not the full repository.

## Validate before committing

Run:

```bash
npm run package:template -- <slug>
npm run validate:template -- <slug>
npm run validate:registry
npm run lint
npm run build
```

Template-specific install and build checks are optional during import. Use them when the dependencies are already available or the template is small enough to verify cheaply.

For recurring AI-driven imports, also follow [the automation workflow](automation-workflow.md).
