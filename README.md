# ConstructionLMS.com website

Next.js 16 site for ConstructionLMS, a neutral construction training site powered by DigitalChalk.
Same base setup as the DigitalChalk site (PCMTEXAS/DC_NET_NEW): Vercel, CI with type check, build and Lighthouse budget.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Settings
See `.env.example`. Preview builds are never indexed and show proof placeholders.
`NEXT_PUBLIC_ALLOW_INDEXING=true` (launch only) allows indexing and removes every placeholder.

## Early-access form
`POST /api/waitlist/` saves to the Supabase table `waitlist` when `SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` are set (schema: `supabase/migrations/0001_waitlist.sql`).
Without them: local runs write `.data/waitlist.ndjson`; deployed builds refuse entries.

## Design tokens
All colours, type, spacing and contrast notes are at the top of `app/globals.css`.
