# YanaSafe developer onboarding

Welcome. YanaSafe is an open proof of concept for inclusive dating safety (automation + community reports + practical tips).

## Setup

1. Clone `https://github.com/ahmadpoorgholam/yanasafe`
2. `npm install`
3. `cp .env.example .env.local` and add Firebase config
4. Leave `USE_MOCK_DATA=true` unless you have a Perplexity key
5. `npm run dev`

## Mental model

- Marketing pages explain the inclusive POC positioning (`/`, `/about`, `/our-story`)
- Primary interactive flows: `/analyze`, `/report`, `/reports`, `/help`
- Auth: Google via `/login` — after sign-in users land on `/analyze`
- Analysis API: `app/api/analyze-profile/route.ts`

## Conventions

- Prefer honesty in UI copy over feature theater
- Do not reintroduce hardcoded inflated metrics
- Keep English-only until a real i18n module exists
- Run `npm run build` before opening a PR when feasible

## Docs

See `README.md`, `docs/ARCHITECTURE.md`, `docs/API.md`, and `docs/SECURITY.md`.
