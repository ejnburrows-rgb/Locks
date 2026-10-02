# Working rules

1. Treat `main` as the authoritative application branch.
2. Read `README.md` and `docs/STATUS.md` before changing business-facing content.
3. Never invent licensing, insurance, response times, warranties, pricing, testimonials, review sources, service coverage, or technician identities.
4. Never claim a quote, dispatch, phone call, email, or other external action completed unless the application actually performed it.
5. Prefer durable owned/licensed images over temporary generated-image URLs.
6. Run `npm run lint` and `npm run build` before release.
7. Use short-lived branches for active work and remove them after merge.
8. Do not delete `gh-pages` until its deployment purpose is explicitly verified.

## GITHUB ACCOUNT LIMITS

- EJN uses a free GitHub account and does not have GitHub Actions available.
- Do not depend on GitHub Actions, required CI checks, or hosted Actions runners to complete or verify work.
- Use direct verification, local/sandbox testing, or other available tools instead.
- Do not recommend upgrading GitHub solely to enable Actions unless EJN explicitly asks about paid options.
