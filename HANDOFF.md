# Node2Flow - Project Handoff Document

## Project Overview

**Node2Flow** is a Thai-language MCP (Model Context Protocol) Server platform website, migrated from static WordPress HTML to a modern **Next.js 16** application with full authentication and e-commerce capabilities.

- **GitHub**: https://github.com/kaewz-manga/node2flow
- **Production domain**: https://node2flow.net (not yet deployed)
- **Dev server**: `http://localhost:3333`

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.6 |
| UI | React | 19.2.4 |
| Language | TypeScript | 5.9.3 |
| Styling | Tailwind CSS v4 | 4.1.18 |
| Auth | Auth.js (next-auth beta) | 5.0.0-beta.30 |
| Database | SQLite (better-sqlite3) | 12.6.2 |
| ORM | Drizzle ORM | 0.45.1 |
| Payments | Stripe SDK | 20.3.0 |

---

## Project Structure

```
node2flow/
├── src/
│   ├── app/                     # App Router pages (21 routes)
│   │   ├── layout.tsx           # Root layout (Providers, Header, Footer, SEO)
│   │   ├── page.tsx             # Homepage (Hero, Partners, AboutMCP, etc.)
│   │   ├── login/page.tsx       # Google OAuth login page
│   │   ├── dashboard/           # Protected routes (middleware-guarded)
│   │   │   ├── layout.tsx       # Dashboard sidebar layout
│   │   │   ├── page.tsx         # Dashboard overview
│   │   │   ├── orders/page.tsx
│   │   │   ├── downloads/page.tsx
│   │   │   └── subscription/page.tsx
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx # Dynamic blog route
│   │   ├── docs/page.tsx
│   │   ├── shop/page.tsx
│   │   ├── services/
│   │   │   ├── install/page.tsx
│   │   │   ├── private/page.tsx
│   │   │   └── saas/page.tsx
│   │   ├── get-started/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts  # Auth.js API handler
│   │   │   ├── checkout/route.ts             # Stripe checkout
│   │   │   └── webhook/stripe/route.ts       # Stripe webhooks
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Nav with auth state (useSession)
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Partners.tsx
│   │   │   ├── AboutMCP.tsx
│   │   │   ├── Architecture.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── CTA.tsx
│   │   ├── shop/
│   │   │   └── BuyButton.tsx    # Stripe checkout button
│   │   └── Providers.tsx        # SessionProvider wrapper
│   ├── lib/
│   │   ├── auth.ts              # Auth.js config (Google OAuth + DrizzleAdapter)
│   │   ├── db.ts                # SQLite connection (WAL mode)
│   │   ├── schema.ts            # Drizzle schema (auth + app tables)
│   │   └── stripe.ts            # Stripe client
│   ├── middleware.ts             # Cookie-based auth guard for /dashboard/*
│   └── globals.css              # Tailwind v4 with @theme design tokens
├── public/
│   └── images/                  # Static assets (logo, hero, partners, etc.)
├── drizzle/                     # Migration files
├── drizzle.config.ts
├── next.config.ts               # Image remotePatterns config
├── package.json
├── .env.local                   # Environment variables (not committed)
└── database.db                  # SQLite database (not committed)
```

---

## Authentication

### Setup: Google OAuth via Auth.js v5

**Provider**: Google OAuth 2.0 with DrizzleAdapter for SQLite.

**Key files**:
- `src/lib/auth.ts` — NextAuth config with Google provider, DrizzleAdapter, session callback
- `src/middleware.ts` — Cookie-based route protection (checks `authjs.session-token`)
- `src/components/Providers.tsx` — `SessionProvider` wrapper
- `src/app/api/auth/[...nextauth]/route.ts` — Auth.js API route handler

**Environment variables required**:
```env
AUTH_URL=http://localhost:3333          # Base URL for callbacks
AUTH_TRUST_HOST=true
AUTH_SECRET=<random 64-char hex>       # Generate with: openssl rand -hex 32
AUTH_GOOGLE_ID=<google-client-id>
AUTH_GOOGLE_SECRET=<google-client-secret>
```

**Google Cloud Console setup**:
1. Create OAuth 2.0 Client ID (Web application type)
2. Add Authorized JavaScript origin: `http://localhost:3333`
3. Add Authorized redirect URI: `http://localhost:3333/api/auth/callback/google`
4. For production: add `https://node2flow.net` and `https://node2flow.net/api/auth/callback/google`

### Critical Auth Schema Notes

The Auth.js Drizzle SQLite schema **must** follow these rules exactly:
- Table names are **singular**: `user`, `account`, `session`, `verificationToken`
- `account` table uses **compound primary key**: `(provider, providerAccountId)` — no `id` column
- `session` table uses `sessionToken` as primary key — no `id` column
- `verificationToken` table uses **compound primary key**: `(identifier, token)`
- Date columns use `integer` with `mode: "timestamp_ms"` — not `text`
- `account` table must include `session_state` column
- DrizzleAdapter must receive explicit table mapping: `{ usersTable, accountsTable, sessionsTable, verificationTokensTable }`

### Middleware Edge Runtime Limitation

The middleware **cannot** import `auth.ts` because it uses `better-sqlite3` which requires Node.js `fs` module — unavailable in Edge Runtime. Instead, middleware checks the session cookie directly:
```typescript
const sessionToken =
  request.cookies.get("authjs.session-token")?.value ||
  request.cookies.get("__Secure-authjs.session-token")?.value;
```

---

## Database

**Engine**: SQLite via `better-sqlite3` with WAL journal mode.

**File**: `database.db` (project root, gitignored)

### Tables

**Auth tables** (Auth.js managed):
- `user` — id, name, email, emailVerified, image, role
- `account` — userId, type, provider, providerAccountId, tokens...
- `session` — sessionToken (PK), userId, expires
- `verificationToken` — identifier + token (compound PK), expires

**App tables** (custom):
- `products` — Digital products (pdf, json, bundle)
- `service_plans` — Subscription plans with Stripe price IDs
- `orders` — Purchase records linked to users/products/plans
- `user_downloads` — Download tracking
- `user_subscriptions` — Active subscriptions with Stripe IDs
- `faq_items` — FAQ content
- `contact_messages` — Contact form submissions

### Database Setup

Create tables by running:
```bash
npx drizzle-kit push
```

Or if the database is corrupted/missing, delete `database.db` and run push again.

---

## Stripe Integration

**Status**: Skeleton implemented, **keys are placeholders**.

**Key files**:
- `src/lib/stripe.ts` — Stripe client initialization
- `src/app/api/checkout/route.ts` — Creates checkout sessions (payment or subscription)
- `src/app/api/webhook/stripe/route.ts` — Handles `checkout.session.completed` and `customer.subscription.deleted`
- `src/components/shop/BuyButton.tsx` — Client-side buy button with loading state

**Environment variables needed**:
```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

**To complete Stripe setup**:
1. Replace placeholder keys in `.env.local` with real Stripe keys
2. Create products/prices in Stripe Dashboard
3. Add `stripePriceId` values to `service_plans` table
4. Set up Stripe webhook endpoint pointing to `/api/webhook/stripe`
5. Test with Stripe CLI: `stripe listen --forward-to localhost:3333/api/webhook/stripe`

---

## Design System

Tailwind CSS v4 with custom `@theme` design tokens in `src/globals.css`:

- Color palette: `--color-n2f-primary`, `--color-n2f-secondary`, `--color-n2f-accent`, etc.
- Typography: `--font-heading` (Noto Sans Thai), `--font-sans` (Inter)
- Spacing, border radius, shadows defined as theme tokens
- All components use `n2f-*` utility classes

---

## Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
cd node2flow
npm install
cp .env.local.example .env.local  # Configure env vars
npx drizzle-kit push              # Create database tables
npm run dev -- -p 3333            # Start dev server on port 3333
```

### Build
```bash
npm run build    # Produces standalone output (21 routes)
npm run start    # Production server
```

---

## Known Issues & TODOs

### Immediate
- [ ] `debug: true` in `src/lib/auth.ts` — remove before production
- [ ] Stripe keys are placeholders — need real keys
- [ ] No seed data for products/plans/FAQ tables
- [ ] Blog posts are hardcoded — need CMS or database integration
- [ ] Latest commit on GitHub is the initial commit — push latest changes

### Production Deployment
- [ ] Set `AUTH_URL` to `https://node2flow.net`
- [ ] Add production Google OAuth redirect URI
- [ ] Configure Stripe webhook for production URL
- [ ] Set up persistent storage for SQLite (or migrate to PostgreSQL)
- [ ] Add rate limiting on API routes
- [ ] Configure CSP headers
- [ ] Set up error monitoring (Sentry or similar)

### Future Enhancements
- [ ] Admin panel for managing products, plans, FAQ
- [ ] Email notifications (order confirmation, welcome)
- [ ] Blog content from WordPress API or MDX files
- [ ] i18n support (Thai/English toggle)
- [ ] Dashboard charts and analytics

---

## Lessons Learned (from development)

1. **Always use official Auth.js schema** — Custom schemas cause cascading errors. Copy from https://authjs.dev/getting-started/adapters/drizzle
2. **Edge Runtime cannot use fs** — Middleware must not import modules that depend on Node.js built-in modules
3. **Google OAuth works with localhost** — No need for ngrok/tunneling during development
4. **WordPress Application Passwords have spaces** — Remove all spaces when using in API auth
5. **next/image requires remotePatterns** — External image hosts (like Google profile pics) must be explicitly allowed

---

*Document created: 2026-01-30*
*Migration: WordPress static HTML → Next.js 16 (App Router)*
