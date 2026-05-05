# StaticForge landing (Adforge)

Next.js one-page site for a Danish static-ad creative offer: **3 gratis koncepter** lead magnet, portfolio previews, pricing, FAQ, and `POST /api/leads` (felter: webshop, produkt, Meta-status, spend, udfordring).

## Udvikling

```bash
npm install
npm run dev
```

Åbn siden i **din normale browser** (Chrome/Safari): kør `npm run dev` i projektmappen og brug den **URL terminalen viser** (ofte [http://localhost:3000](http://localhost:3000)). Hvis du ser `ERR_CONNECTION_REFUSED` i Cursor’s indbyggede browser, er serveren typisk ikke startet dér, eller du bruger en **forkert port** — tjek terminal-output for `Local: http://localhost:…`.

## Copy og indhold

Alt dansk copy, FAQ, priser og portfolio-metadata ligger i **`content/site.ts`**. Her kan du også sætte `imageSrc` på portfolio-punkter, hero-mock cards og founder-sektionen til filer under **`public/`** (fx `/portfolio/ad-1.png`).

## Miljøvariabler

Kopiér `.env.example` til `.env.local` og udfyld efter behov:

| Variabel | Krævet | Beskrivelse |
|----------|----------|-------------|
| `DATABASE_URL` | Nej | PostgreSQL connection string (fx Railway Postgres plugin). Når den er sat, gemmes leads i databasen. |
| `NEXT_PUBLIC_SITE_URL` | Nej | Din offentlige URL (bruges til metadata). |
| `RESEND_API_KEY` | Nej | API key til Resend for email-notifikationer. |
| `LEAD_NOTIFY_EMAIL` | Nej | Modtager-email når der kommer en ny lead. |
| `RESEND_FROM_EMAIL` | Nej | Afsender (skal være verificeret domæne i produktion). |

### Lead-endpoint uden database

- **Development** (`NODE_ENV=development`): uden `DATABASE_URL` logges en **afpersonificeret** linje server-side, og API returnerer stadig `{ success: true }`.
- **Production**: uden `DATABASE_URL` skal enten email-notifikation (**Resend**) være konfigureret, eller endpoint returnerer fejl — så du ikke mister leads stille.

## Railway

1. Opret et nyt projekt på [Railway](https://railway.app) og tilknyt dette repo (eller deploy fra GitHub).
2. Tilføj **Node** service med build command `npm run build` og start command `npm run start` (Railway sætter typisk `PORT` automatisk — Next.js respekterer `PORT`).
3. (Valgfrit) Tilføj **PostgreSQL** og kopier `DATABASE_URL` ind i service environment variables.
4. Sæt de øvrige variabler fra tabellen ovenfor efter behov.
5. Kør SQL fra `sql/001_leads.sql` mod databasen hvis du vil oprette tabellen manuelt — appen opretter også tabellen ved første insert. Har du allerede den gamle `leads`-tabel (website / need_type), kør `sql/migrations/002_leads_from_quote_form.sql` eller lad appen migrere automatisk ved næste lead.

`NEXT_PUBLIC_SITE_URL` bør sættes til din Railway-domæne eller custom domæne efter deploy.

## Scripts

```bash
npm run build   # production build
npm run start   # kør production server
npm run lint
```
