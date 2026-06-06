# Real Estate Website Template Notice

This template was imported from [Cristiano-Valder/Real-Estate-Website-Template](https://github.com/Cristiano-Valder/Real-Estate-Website-Template) at commit `02b0183f671f1de25e6100512e9a7266daff10a4`.

The original project is licensed under MIT. The original license text is preserved in `LICENSE.original`.

## Import changes

- Removed upstream `.git` files from the imported copy.
- Excluded non-template working documents (`.docx` and color-palette notes) from the imported source.
- Added a minimal `package.json` for registry validation and remix metadata.
- Resized oversized property PNG assets so the per-template download package stays within Cloudflare Pages' 25 MiB single-file limit.
- Converted the contact page form from a `mailto:` POST submission into a static frontend placeholder by removing the form action/method and changing the submit input to `type="button"`.
- Reviewed the source for API routes, middleware files, server-only entry points, environment variables, storage, and common external service clients. No runtime backend integration was found in the imported source.
- Kept static `mailto:` and `tel:` footer links as frontend contact links.

## Reuse notes

This import is intended as a pure frontend real estate agency and property listings remix base using HTML and CSS.
