# Node2Flow - Project Handoff Document

## Project Overview

**Node2Flow** is a Thai-language MCP (Model Context Protocol) Server platform website, migrated from static WordPress HTML to a modern **Next.js 16** application with full authentication, n8n integration, and e-commerce capabilities.

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
| Email | Nodemailer (Gmail SMTP) | - |

---

## Project Structure

```
node2flow/
├── src/
│   ├── app/                     # App Router pages (21 routes)
│   │   ├── layout.tsx           # Root layout (Providers, Header, Footer, SEO)
│   │   ├── page.tsx             # Homepage (Hero, Partners, AboutMCP, etc.)
│   │   ├── login/page.tsx       # Google + GitHub OAuth login page
│   │   ├── dashboard/           # Protected routes (middleware-guarded)
│   │   │   ├── layout.tsx       # Dashboard sidebar layout with LogoutButton
│   │   │   ├── page.tsx         # Dashboard overview (n8n info, stats, inbox)
│   │   │   ├── orders/page.tsx
│   │   │   ├── downloads/page.tsx
│   │   │   └── subscription/page.tsx
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx        # Dynamic blog from database
│   │   ├── blog/[slug]/page.tsx # Dynamic blog post route
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
│   │   │   ├── notifications/route.ts        # Notifications CRUD (GET/PATCH/DELETE)
│   │   │   └── webhook/stripe/route.ts       # Stripe webhooks
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Nav with auth state, logout, Get Started button
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx         # CTA links to /login
│   │   │   ├── Partners.tsx
│   │   │   ├── AboutMCP.tsx
│   │   │   ├── Architecture.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── CTA.tsx          # CTA links to /login
│   │   ├── dashboard/
│   │   │   └── Inbox.tsx        # Notification inbox (client component)
│   │   ├── shop/
│   │   │   └── BuyButton.tsx    # Stripe checkout button
│   │   ├── LogoutButton.tsx     # Client component for server-side pages
│   │   └── Providers.tsx        # SessionProvider wrapper
│   ├── lib/
│   │   ├── auth.ts              # Auth.js config (Google + GitHub + DrizzleAdapter)
│   │   ├── db.ts                # SQLite connection (WAL mode)
│   │   ├── schema.ts            # Drizzle schema (auth + app tables)
│   │   ├── queries.ts           # Data access layer (blog, products, notifications)
│   │   ├── n8n.ts               # n8n API helper (create user, construct invite URL)
│   │   ├── mail.ts              # Gmail SMTP email sender (nodemailer)
│   │   └── stripe.ts            # Stripe client
│   ├── middleware.ts             # Cookie-based auth guard for /dashboard/*
│   └── globals.css              # Tailwind v4 with @theme design tokens
├── scripts/
│   └── seed.js                  # Database seed script (products, plans, FAQ, blog)
├── public/
│   └── images/                  # Static assets (logo, hero, partners, etc.)
├── Dockerfile                   # Multi-stage build (standalone)
├── docker-compose.yml           # Production config (127.0.0.1:3333:3000)
├── .env.production.example      # Env vars template
├── next.config.ts               # Image remotePatterns (Google + GitHub avatars)
├── package.json
├── .env.local                   # Environment variables (not committed)
└── database.db                  # SQLite database (not committed)
```

---

## Authentication

### Setup: Google + GitHub OAuth via Auth.js v5

**Providers**: Google OAuth 2.0 + GitHub OAuth with DrizzleAdapter for SQLite.

**Key files**:
- `src/lib/auth.ts` — NextAuth config with Google + GitHub providers, DrizzleAdapter, session callback, createUser event
- `src/middleware.ts` — Cookie-based route protection (checks `authjs.session-token`)
- `src/components/Providers.tsx` — `SessionProvider` wrapper
- `src/app/api/auth/[...nextauth]/route.ts` — Auth.js API route handler

**Environment variables required**:
```env
AUTH_URL=http://localhost:3333
AUTH_TRUST_HOST=true
AUTH_SECRET=<random 64-char hex>       # Generate with: openssl rand -hex 32
AUTH_GOOGLE_ID=<google-client-id>
AUTH_GOOGLE_SECRET=<google-client-secret>
AUTH_GITHUB_ID=<github-oauth-app-id>
AUTH_GITHUB_SECRET=<github-oauth-app-secret>
```

**Google Cloud Console setup**:
1. Create OAuth 2.0 Client ID (Web application type)
2. Add Authorized JavaScript origin: `http://localhost:3333`
3. Add Authorized redirect URI: `http://localhost:3333/api/auth/callback/google`
4. For production: add `https://node2flow.net` origins and callbacks

**GitHub OAuth App setup**:
1. Go to https://github.com/settings/developers > OAuth Apps > New
2. Homepage URL: `http://localhost:3333`
3. Callback URL: `http://localhost:3333/api/auth/callback/github`
4. For production: update to `https://node2flow.net`

### Auth Events (createUser)

On first login, `events.createUser` fires and:
1. Sets admin role if email matches `ADMIN_EMAIL`
2. Creates n8n user account via REST API
3. Constructs invite URL for password setup
4. Sends invite email (if n8n didn't send it)
5. Creates "n8n Account Created" + "Welcome" notifications

### Critical Auth Schema Notes

The Auth.js Drizzle SQLite schema **must** follow these rules exactly:
- Table names are **singular**: `user`, `account`, `session`, `verificationToken`
- `account` table uses **compound primary key**: `(provider, providerAccountId)` — no `id` column
- `session` table uses `sessionToken` as primary key — no `id` column
- `verificationToken` table uses **compound primary key**: `(identifier, token)`
- Date columns use `integer` with `mode: "timestamp_ms"` — not `text`
- `account` table must include `session_state` column
- DrizzleAdapter reads ALL columns from schema — if schema has columns not in DB, it crashes
- DrizzleAdapter must receive explicit table mapping: `{ usersTable, accountsTable, sessionsTable, verificationTokensTable }`

### Middleware Edge Runtime Limitation

The middleware **cannot** import `auth.ts` because it uses `better-sqlite3` which requires Node.js `fs` module — unavailable in Edge Runtime. Instead, middleware checks the session cookie directly.

---

## n8n Integration

### Auto-create n8n user on first login

**Key files**:
- `src/lib/n8n.ts` — n8n API helper
- `src/lib/auth.ts` — createUser event callback
- `src/lib/mail.ts` — Gmail SMTP email sender

**Flow**:
1. User logs in with Google/GitHub for the first time
2. `events.createUser` calls `createN8nUser(email)`
3. POST `/api/v1/users` on n8n-no1.missmanga.org
4. n8n returns: `[{ user: { id, email, emailSent, role }, error: "" }]`
5. Invite URL constructed: `{N8N_URL}/signup?inviterId={adminId}&inviteeId={userId}`
6. Admin ID extracted from API key JWT `sub` claim
7. Saved to `user` table: `n8nUserId`, `n8nInviteUrl`

**Environment variables**:
```env
N8N_API_URL=https://n8n-no1.missmanga.org
N8N_API_KEY=<n8n-api-key-jwt>
ADMIN_EMAIL=node2flow@gmail.com
GMAIL_USER=node2flow@gmail.com
GMAIL_APP_PASSWORD=<google-app-password>
```

**Important notes**:
- n8n POST `/api/v1/users` does NOT return `inviteAcceptUrl` — must construct manually
- Admin/inviter ID is extracted from the API key JWT token's `sub` claim
- `events.createUser` fires ONLY on first signup, not repeat logins
- n8n sends its own invite email (`emailSent: true`), Gmail SMTP is fallback

---

## Database

**Engine**: SQLite via `better-sqlite3` with WAL journal mode.

**File**: `database.db` (project root, gitignored)

### Tables

**Auth tables** (Auth.js managed):
- `user` — id, name, email, emailVerified, image, role, n8nUserId, n8nInviteUrl
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
- `blog_posts` — Blog content (slug, title, description, HTML content, tags)
- `notifications` — User notifications (title, message, type, isRead)
- `contact_messages` — Contact form submissions

### Database Setup

```bash
npx drizzle-kit push              # Create/sync tables from schema
node scripts/seed.js              # Seed products, plans, FAQ, blog posts
```

**Important**: `created_at` defaults use `sql\`(datetime('now'))\`` — NOT literal `"CURRENT_TIMESTAMP"` string.

---

## Notifications System

**API**: `src/app/api/notifications/route.ts`
- `GET` — List user notifications (auth required)
- `PATCH` — Mark notification as read
- `DELETE` — Delete notification

**Component**: `src/components/dashboard/Inbox.tsx` (client component)
- Color-coded by type: info (blue), success (green), warning (amber)
- Unread badge count
- Mark as read / Delete actions

Auto-created on first signup: "Welcome to Node2Flow" + "n8n Account Created"

---

## Stripe Integration

**Status**: Skeleton implemented, **keys are placeholders**.

**To complete**: Replace placeholder keys, create Stripe products, set up webhooks.

---

## Design System

Tailwind CSS v4 with custom `@theme` design tokens in `src/globals.css`:
- Color palette: `--color-n2f-primary`, `--color-n2f-secondary`, `--color-n2f-accent`, etc.
- Typography: `--font-heading` (Noto Sans Thai), `--font-sans` (Inter)
- All components use `n2f-*` utility classes

---

## Development

### Prerequisites
- Node.js 22+
- npm

### Setup
```bash
cd node2flow
npm install
cp .env.production.example .env.local  # Configure env vars
npx drizzle-kit push                   # Create database tables
node scripts/seed.js                   # Seed data
npm run dev -- -p 3333                 # Start dev server
```

### Production (Docker)
```bash
docker compose up -d    # Runs on 127.0.0.1:3333
```

---

## Known Issues & TODOs

### Completed
- [x] Google OAuth login
- [x] GitHub OAuth login
- [x] Logout button (header + dashboard sidebar)
- [x] Admin role for node2flow@gmail.com
- [x] Auto-create n8n user on first login
- [x] Construct n8n invite URL from JWT
- [x] Send invite email via Gmail SMTP (fallback)
- [x] Notification inbox system
- [x] Seed data (6 products, 3 plans, 6 FAQ, 3 blog posts)
- [x] Dynamic blog from database
- [x] Docker + docker-compose for production
- [x] All "Get Started" buttons redirect to /login

### Production Deployment
- [ ] Set `AUTH_URL` to `https://node2flow.net`
- [ ] Add production OAuth redirect URIs (Google + GitHub)
- [ ] Configure Stripe webhook for production URL
- [ ] Set up persistent storage for SQLite (or migrate to PostgreSQL)
- [ ] Add rate limiting on API routes

### Future Enhancements
- [ ] Admin panel for managing products, plans, FAQ
- [ ] Blog content from WordPress API or MDX files
- [ ] i18n support (Thai/English toggle)
- [ ] Dashboard charts and analytics

---

## Lessons Learned

1. **Auth.js schema must match DB exactly** — DrizzleAdapter reads ALL columns. If schema has columns not in DB, `getSessionAndUser` fails
2. **Edge Runtime cannot use fs** — Middleware must not import `better-sqlite3`
3. **n8n API response is nested** — POST `/api/v1/users` returns `[{ user: {...}, error }]`, not flat array
4. **n8n API doesn't return inviteAcceptUrl** — Must construct from JWT `sub` claim (inviterId) + new userId
5. **`events.createUser` fires once** — Only on first signup, cannot retry on repeat logins
6. **Drizzle `.default("CURRENT_TIMESTAMP")`** stores literal string — use `sql\`(datetime('now'))\`` instead
7. **Turbopack caches compiled code** — Must clear `.next/` and restart after schema changes
8. **npm install fails silently on Windows bash** — Use PowerShell: `powershell -Command "npm install ..."`
9. **next/image requires remotePatterns** — Must allow both `lh3.googleusercontent.com` and `avatars.githubusercontent.com`

---

*Document updated: 2026-01-31*
*Migration: WordPress static HTML → Next.js 16 (App Router)*
