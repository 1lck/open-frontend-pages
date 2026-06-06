# Product & Checkout E-Commerce Template Notice

This template was imported from [fatmakiraz/product-checkout-e-commerce-template](https://github.com/fatmakiraz/product-checkout-e-commerce-template) at commit `a21db11d736636d7fe292b1a03413c43e14686b5`.

The original repository license file is MIT. The original license text is preserved in `LICENSE.original`.

## Import changes

- Removed upstream `.git`, `node_modules`, and local-only files from the imported copy.
- Kept the compiled static `dist` pages, source SCSS, Liquid templates, JavaScript, and image assets under `templates/product-checkout-ecommerce-template/src`.
- Reviewed the source for API routes, middleware files, server-only entry points, environment variables, payment SDKs, and common external service clients. No runtime backend or payment provider integration was found in the imported source.
- Kept the product-to-cart GET form and checkout page links as static page navigation.
- Noted that the root `LICENCE` file is MIT while `package.json` metadata says ISC; both are permissive licenses, and the registry uses the repository license file value.

## Reuse notes

This import is intended as a pure frontend product detail and checkout flow remix base. Connect cart, address, shipping, and payment steps to your own commerce backend before using them in production.
