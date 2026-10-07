# YanaSafe Security Notes

This is a proof of concept. Treat the following as **current practices and goals**, not certifications.

## Current practices

- Secrets stay in environment variables (see `.env.example`); do not commit `.env.local`
- Firebase client config uses `NEXT_PUBLIC_*` keys (expected for Firebase web apps); protect data with Firestore/Storage security rules in your Firebase project
- Google sign-in via Firebase Auth
- Image uploads go through Firebase Storage helpers
- Analysis API validates JSON body shape before processing
- Production builds strip `console` via Next.js compiler option

## Not implemented (do not claim)

- End-to-end encryption of reports or chat
- Formal GDPR/compliance program
- Rate limiting middleware
- MFA / session anomaly alerts
- Proven CSRF tokens beyond Next.js defaults
- Guaranteed anonymity of reporters under adversarial conditions

## Operational recommendations for forks

1. Lock down Firestore and Storage rules before any public deploy
2. Keep `USE_MOCK_DATA=true` until you understand Perplexity cost and abuse risk
3. Moderate community reports; this product can be misused for harassment
4. Add rate limits and auth checks on `/api/analyze-profile` before exposing it publicly
5. Never log PII or raw image URLs to third-party analytics without consent

## Reporting vulnerabilities

Open a private security advisory or email the maintainer via GitHub if you find a vulnerability in this repository.
