# Pro Locksmith

A React/Vite website for a South Florida locksmith business, covering residential, commercial, automotive, emergency, and quote-request experiences.

> **Current state:** pre-production. The UI is functional, but business claims, contact details, licensing information, pricing, response times, testimonials, and quote-delivery behavior must be verified before public launch.

## Product areas

- Home and service discovery
- Residential, commercial, and automotive locksmith services
- Emergency call/text handoff
- Quote-request workflow
- FAQ and business-contact information
- Mobile bottom navigation and responsive layouts

## Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Current behavior

The quote form is currently a local preview flow. It does **not** transmit a lead to a backend. The UI must not claim that a technician received the request until real delivery is implemented and verified.

Phone and SMS actions hand off to the visitor's device.

## Production-readiness checklist

Before launch:

1. Verify the legal business name, owner/contact information, phone, email, and service area.
2. Verify licensing/bonding/insurance claims and remove any claim that cannot be substantiated.
3. Verify response-time, price, warranty, and guarantee statements.
4. Replace or verify testimonial/review content and its source.
5. Replace temporary external image URLs with durable owned/licensed assets.
6. Implement and verify real quote delivery if the form is intended to submit leads.
7. Run `npm run lint` and `npm run build`.

## Repository rules

- `main` is the application source of truth.
- Preserve the separate `gh-pages` history until it is confirmed unused; it has no common Git ancestor with `main`.
- Keep `docs/STATUS.md` current.
- Do not add unverified customer-facing business claims.

## Documentation

- `docs/STATUS.md` — current product/release state
- `AGENTS.md` — concise contributor rules
