# Cleanfolio Notice

This template was imported from [rjshkhr/cleanfolio](https://github.com/rjshkhr/cleanfolio) at commit `d8b1b55a7eb2407815159bef83d710f7319a2282`.

The original project is licensed under MIT. The original license text is preserved in `LICENSE.original`.

## Import changes

- Removed upstream `.git`, `node_modules`, build output, and lock files from the imported copy.
- Kept the template as an isolated Create React App project under `templates/cleanfolio/src`.
- Reviewed the source for API routes, middleware files, server-only entry points, environment variables, and common external service clients. No runtime backend integration was found in the imported source.
- Kept the upstream `process.env.PUBLIC_URL` static asset path usage because it is part of Create React App's frontend asset handling.

## Reuse notes

This import is intended as a pure frontend personal portfolio remix base using React, CSS, and Material UI.
