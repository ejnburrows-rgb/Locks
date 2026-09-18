# Current status

**Authoritative application branch:** `main`

## September 18, 2026 cleanup

- The package identity was normalized from `react-example` to `pro-locksmith-site`.
- A repository README and contributor rules were added.
- Quote-form copy was corrected so the preview no longer claims a technician received information that was never transmitted.
- Emergency-call copy was corrected so opening the dialer is not described as a dispatcher already answering.

## Branch state

- `main` contains the current application.
- `gh-pages` has unrelated Git history with no common ancestor to `main`.
- Because of that, `gh-pages` is preserved until its hosting/deployment role is explicitly verified. It should not be merged into `main` merely for cleanup.

## Production blockers

The repository currently contains business-facing claims and testimonial data that require owner verification before launch, including licensing/insurance, response times, prices, guarantees, review sources, and technician/customer identities.

The quote form remains local-only; real lead delivery is not implemented.

## Release checks

1. Verify business/customer-facing facts.
2. Replace temporary external assets where needed.
3. Implement and test real quote delivery if required.
4. `npm run lint`
5. `npm run build`
