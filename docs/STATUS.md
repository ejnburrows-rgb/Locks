# Current status

**Authoritative application branch:** `main`

## September 19, 2026 cleanup

- Package identity is `pro-locksmith-site`.
- README, contributor rules, and this status file are current.
- Quote-form copy does not claim information was transmitted when no backend exists.
- Emergency-call copy does not claim a dispatcher answered when only the phone dialer was opened.
- The simulated dispatch tracker, invented technician assignment, fixed ETA progression, and fake live-GPS claims were removed.
- Unverified customer testimonials and review-source claims were removed.
- Unverified licensing/bonding/insurance assertions, fixed arrival promises, fixed starting prices, and blanket warranty/guarantee claims were removed from customer-facing copy.
- Customer-facing copy now tells visitors to confirm current ETA, estimate, credentials, and warranty terms before authorizing work.

## Branch state

- `main` contains the current application.
- `gh-pages` has unrelated Git history with no common ancestor to `main`.
- `gh-pages` contains a compiled site artifact and is preserved until its hosting role can be verified. It must not be merged into `main`.

## Remaining production requirements

1. Owner-verify the legal business identity, contact details, and actual service area.
2. Replace temporary external image URLs with durable owned/licensed assets.
3. Implement real lead delivery only if the quote form is intended to transmit requests.
4. Verify the authoritative production deployment and hosting configuration.
5. Run `npm run lint` and `npm run build` in a functioning runner or local environment.

No testimonial, licensing, ETA, pricing, or warranty claim should be restored without evidence.
