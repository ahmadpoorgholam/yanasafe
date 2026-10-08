# YanaSafe API

## `POST /api/analyze-profile`

Analyzes dating-profile images and free-text context. Returns a structured safety assessment.

### Request

`Content-Type: application/json`

```json
{
  "imageUrls": ["https://..."],
  "context": "Profile bio / chat excerpts / notes",
  "location": null,
  "extraMetadata": null
}
```

| Field | Required | Notes |
|-------|----------|-------|
| `imageUrls` | yes | Non-empty array of image URLs (typically from Firebase Storage upload) |
| `context` | yes | Non-empty string |
| `location` | no | Optional string |
| `extraMetadata` | no | Optional object |

### Response (success)

```json
{
  "status": "success",
  "message": "Analysis completed successfully",
  "data": {
    "score": 72,
    "flags": ["..."],
    "suggestions": ["..."],
    "rawSummary": "...",
    "rawAnalysis": "..."
  }
}
```

### Modes

- **Mock (default):** `USE_MOCK_DATA` is treated as on unless set to `"false"`. Returns randomized but structured scores after a short delay. No external API key required.
- **Live:** `USE_MOCK_DATA=false` and `PERPLEXITY_API_KEY` set. Calls Perplexity chat completions and parses JSON from the model response.

### Errors

JSON body with `status: "error"` and `message`, plus appropriate HTTP status (400 for validation, 500 for failures).

## Client-only data paths (not REST APIs)

| Action | Path |
|--------|------|
| Submit safety report | Firestore `reports` (client SDK) |
| Contact form | Firestore `documents` (client SDK) |
| User profile create/read | Firestore `users` via `lib/services/user-service.ts` |

A documented `/api/reports` route does **not** exist in this repository.
