# Deploy to Cloudflare Pages

Open Frontend Pages is configured as a static Next.js export for Cloudflare Pages.

## Build the static site

Run:

```bash
npm run build
```

The static output is generated at:

```txt
apps/web/out
```

## Log in to Cloudflare

Run:

```bash
npx wrangler@4.98.0 login
```

Then confirm the browser authorization flow.

Check the login state:

```bash
npx wrangler@4.98.0 whoami
```

## Deploy

Run:

```bash
npm run deploy:cf
```

This deploys `apps/web/out` to the Cloudflare Pages project named `open-frontend-pages` on the `main` branch.

## Notes

- The app uses `output: "export"` in `apps/web/next.config.ts`.
- The deploy command does not need a server runtime.
- If the Pages project does not already exist, Wrangler can create it during deployment after Cloudflare authentication succeeds.
