# Bootstrap 5 Login Page Notice

This template was imported from [nauvalazhar/bootstrap-5-login-page](https://github.com/nauvalazhar/bootstrap-5-login-page) at commit `4c5ed1ef9a645e7578a550919dd7915918a5646b`.

The original project is licensed under MIT. The original license text is preserved in `LICENSE.original`.

## Import changes

- Removed upstream `.git` and local-only files from the imported copy.
- Added a minimal `package.json` for registry validation and remix metadata.
- Converted the login, register, forgot password, and reset password forms into static frontend placeholders by removing `method="POST"` and changing submit buttons to `type="button"`.
- Reviewed the source for API routes, middleware files, server-only entry points, environment variables, and common external service clients. No runtime authentication service integration was found in the imported source.
- Kept the original Bootstrap CDN and Bootstrap logo references as frontend presentation dependencies.

## Reuse notes

This import is intended as a pure frontend authentication page remix base. Connect the forms to your own authentication service before using them in production.
