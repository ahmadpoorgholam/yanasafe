# YanaSafe Architecture

YanaSafe is a Next.js 14 App Router Progressive Web App (PWA shell) with Firebase client services and a single analysis API route. This document describes **what the POC actually implements**, not aspirational production architecture.

## High-level flow

```
Browser (React / App Router)
  ├── Firebase Auth (Google)
  ├── Firestore (reports, users, contact messages)
  ├── Storage (uploaded profile images)
  └── POST /api/analyze-profile
        ├── Mock analysis (default: USE_MOCK_DATA !== "false")
        └── Optional Perplexity chat completions (live)
```

## Frontend

- **Routes:** `/`, `/analyze`, `/report`, `/reports`, `/help`, `/login`, `/about`, `/our-story`, `/contact`, `/privacy`, `/terms`
- **UI:** Tailwind + shadcn/ui components under `components/`
- **Auth context:** `components/auth/*` wraps the app via `app/providers.tsx`
- **Static help content:** `lib/data/help-content.ts`
- **Report browse UI:** currently driven largely by mock data in `lib/data/mock-reports.ts`

## Backend / data

| Concern | Implementation |
|---------|----------------|
| Auth | Firebase Google provider (`lib/firebase.ts`) |
| User profiles | Firestore via `lib/services/user-service.ts` |
| Image upload | Firebase Storage via `lib/services/image-service.ts` |
| Profile analysis | `app/api/analyze-profile/route.ts` |
| Contact form | Client write to Firestore collection `documents` |

There is **no** dedicated `/api/reports` route in this POC; report submission happens from the client against Firestore.

## Environment

See `.env.example` for Firebase public config, `USE_MOCK_DATA`, and `PERPLEXITY_API_KEY`.

## Intentional gaps (POC)

- No real-time alerts pipeline
- No dashboard route
- No i18n (English only)
- Build may still ignore some lint/type gates in `next.config.js` until the tree is fully hardened
- Manifest/PWA icons are incomplete placeholders
