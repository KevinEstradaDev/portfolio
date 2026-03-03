# Next-SOP.md — Next.js App Router Standard Operating Procedure (SOP)

> **Scope:** This SOP defines the *required* standards for building, testing, securing, and deploying a Next.js application using the **App Router**.  
> **Audience:** Engineers and coding agents implementing features in this repository.  
> **Compliance:** Any deviation requires an ADR (Architecture Decision Record) and team approval.

---

## 0) Sources (authoritative)

This SOP is grounded in the official Next.js App Router documentation, including:

- Installation: https://nextjs.org/docs/app/getting-started/installation  
- Project Structure & Organization: https://nextjs.org/docs/app/getting-started/project-structure  
- Layouts & Pages: https://nextjs.org/docs/app/getting-started/layouts-and-pages  
- Linking & Navigating: https://nextjs.org/docs/app/getting-started/linking-and-navigating  
- Server & Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components  
- Route Handlers: https://nextjs.org/docs/app/getting-started/route-handlers  
- Error Handling: https://nextjs.org/docs/app/getting-started/error-handling  
- Fetching Data: https://nextjs.org/docs/app/getting-started/fetching-data  
- Updating Data: https://nextjs.org/docs/app/getting-started/updating-data  
- Caching & Revalidating: https://nextjs.org/docs/app/getting-started/caching-and-revalidating  
- Cache Components: https://nextjs.org/docs/app/getting-started/cache-components  
- Image Optimization: https://nextjs.org/docs/app/getting-started/images  
- Fonts: https://nextjs.org/docs/app/getting-started/fonts  
- Metadata & OG Images: https://nextjs.org/docs/app/getting-started/metadata-and-og-images  
- CSS & Tailwind: https://nextjs.org/docs/app/getting-started/css#tailwind-css  
- Proxy: https://nextjs.org/docs/app/getting-started/proxy  
- Deploying: https://nextjs.org/docs/app/getting-started/deploying  
- Upgrading: https://nextjs.org/docs/app/getting-started/upgrading  
- Production Checklist: https://nextjs.org/docs/app/guides/production-checklist  
- Environment Variables: https://nextjs.org/docs/app/guides/environment-variables  
- Data Security: https://nextjs.org/docs/app/guides/data-security  
- Content Security Policy: https://nextjs.org/docs/app/guides/content-security-policy  
- Analytics: https://nextjs.org/docs/app/guides/analytics  
- Authentication: https://nextjs.org/docs/app/guides/authentication  
- Backend for Frontend (BFF): https://nextjs.org/docs/app/guides/backend-for-frontend  
- CI Build Caching: https://nextjs.org/docs/app/guides/ci-build-caching  
- Testing: https://nextjs.org/docs/app/guides/testing  
  - Jest: https://nextjs.org/docs/app/guides/testing/jest  
  - Vitest: https://nextjs.org/docs/app/guides/testing/vitest  
  - Playwright: https://nextjs.org/docs/app/guides/testing/playwright  
  - Cypress: https://nextjs.org/docs/app/guides/testing/cypress  
- Scripts: https://nextjs.org/docs/app/guides/scripts  
- Prefetching: https://nextjs.org/docs/app/guides/prefetching  
- Instrumentation: https://nextjs.org/docs/app/guides/instrumentation  
- OpenTelemetry: https://nextjs.org/docs/app/guides/open-telemetry  
- Internationalization: https://nextjs.org/docs/app/guides/internationalization  
- MDX: https://nextjs.org/docs/app/guides/mdx  
- Redirecting: https://nextjs.org/docs/app/guides/redirecting  
- Static Exports: https://nextjs.org/docs/app/guides/static-exports  
- Self-hosting: https://nextjs.org/docs/app/guides/self-hosting  
- PWA: https://nextjs.org/docs/app/guides/progressive-web-apps  
- Lazy Loading: https://nextjs.org/docs/app/guides/lazy-loading  
- Optimizing Package Bundling: https://nextjs.org/docs/app/guides/package-bundling  
- Third-party libraries: https://nextjs.org/docs/app/guides/third-party-libraries  
- Memory usage: https://nextjs.org/docs/app/guides/memory-usage  
- Debugging: https://nextjs.org/docs/app/guides/debugging  
- Draft Mode: https://nextjs.org/docs/app/guides/draft-mode  
- JSON-LD: https://nextjs.org/docs/app/guides/json-ld  
- Incremental Static Regeneration (ISR): https://nextjs.org/docs/app/guides/incremental-static-regeneration  
- Multi-zones (Micro-frontends): https://nextjs.org/docs/app/guides/multi-zones  
- Custom Server: https://nextjs.org/docs/app/guides/custom-server  
- Upgrading Guides / Codemods: https://nextjs.org/docs/app/guides/upgrading  

> **Note:** This SOP intentionally references the official docs as the source of truth. If Next.js behavior changes, update this SOP with the newest official guidance.

---

## 1) Project Setup & Structure

### 1.1 TypeScript (Required)

**Rule:** This repository must be TypeScript-first.

**Must:**
- Create the project using `create-next-app` with TypeScript enabled.
- Use strict typing at boundaries: API responses, Route Handlers, Server Actions, and shared DTOs.
- Keep `any` usage to an absolute minimum and only at integration edges (document why).

**Deliverables:**
- `tsconfig.json` committed
- `src/types/` for stable shared types
- `src/lib/` for server-only modules (DB clients, secrets, service SDKs)

---

### 1.2 Repository Organization (Required)

**Rule:** Follow Next.js conventions and keep routing code in `app/`.

#### 1.2.1 Canonical Layout

```text
.
├─ app/
│  ├─ (marketing)/
│  │  └─ page.tsx
│  ├─ (app)/
│  │  ├─ layout.tsx
│  │  ├─ dashboard/
│  │  │  ├─ page.tsx
│  │  │  ├─ loading.tsx
│  │  │  ├─ error.tsx
│  │  │  └─ components.tsx
│  ├─ api/
│  │  └─ health/route.ts
│  ├─ layout.tsx
│  ├─ global.css
│  └─ not-found.tsx
├─ src/
│  ├─ components/
│  ├─ features/
│  ├─ lib/
│  ├─ styles/
│  ├─ types/
│  └─ utils/
├─ public/
├─ next.config.*
├─ proxy.ts
├─ instrumentation.ts
└─ ...
```

#### 1.2.2 Rules for `app/`

- `app/` owns **routing** and **route composition** (layouts, pages, special UI states).
- Do not place general utilities in `app/` unless they are route-local and tightly coupled to that segment.

#### 1.2.3 Feature Module Rules (`src/features/*`)

Each feature module should contain:
- `components/` (UI)
- `data/` (fetchers, selectors)
- `actions/` (Server Actions for mutations, when applicable)
- `types.ts` (local feature types; export only if used cross-feature)

---

### 1.3 Styling (Required)

Pick a **primary** strategy and document it in `/docs/architecture.md`.

**Allowed primary strategies:**
1. Tailwind CSS (recommended default)
2. CSS Modules
3. Global CSS only for base styles

**Rules:**
- Import global CSS in **root layout** only.
- Prefer utility-first or modular CSS; avoid sprawling global CSS.
- Design tokens live in `src/styles/`.

---

## 2) Core Concepts & Rendering

### 2.1 Routing (App Router)

**Rule:** App Router conventions are mandatory. Use file-system routing.

#### 2.1.1 Required conventions

- `page.tsx` defines a route.
- `layout.tsx` defines a layout shared by all routes under the segment.
- `loading.tsx` provides a streaming fallback for the segment.
- `error.tsx` handles exceptions for the segment.
- `not-found.tsx` defines 404 UI.

#### 2.1.2 Organization patterns

- Use **Route Groups** `(group)` to organize without changing URLs.
- Use **Dynamic Segments** `[id]` for parameterized routes.
- Consider **Parallel Routes** and **Intercepting Routes** only when you need complex UI composition (modals, split panes). Document rationale.

#### 2.1.3 Navigation & Prefetching

- Use `<Link />` for internal navigation.
- Ensure prefetch behavior is not disabled unless you have a measurable performance reason.

---

### 2.2 Components (Server vs Client)

**Default:** Server Components.

#### 2.2.1 Server Components (Default)

Use Server Components when:
- Rendering can happen on the server
- You need to access secrets or server-only resources
- You want minimal client-side JavaScript

#### 2.2.2 Client Components (Opt-in)

Use Client Components when:
- You need state, effects, event handlers
- You need browser-only APIs (localStorage, media queries, etc.)

**Rule:** Client Components must be “leafy”:
- Push client boundaries down the tree.
- Keep layout shells and large content as Server Components.

#### 2.2.3 Directives & conventions

- Use `'use client'` only at the top of Client Component files.
- Use `'use server'` for Server Actions files (or functions) that must run on the server.
- Use Cache Components directives (`'use cache'`) only with a documented caching strategy.

---

### 2.3 Data Fetching & Caching (Required)

This is the most important section. Every route must have an explicit caching/freshness plan.

#### 2.3.1 Data fetching rules

**Prefer server-side fetching** in Server Components whenever possible.

**Patterns:**
- `src/lib/data/*`: typed fetchers for external APIs
- `src/features/<feature>/data/*`: feature-specific fetchers/selectors

**Rule:** Never fetch from your own Route Handler from a Server Component unless you have a specific reason. Call the underlying service/data function directly to avoid an unnecessary hop.

#### 2.3.2 Caching & revalidation strategy

For each route (page), classify it as one of:

- **Static / fully cached**
- **ISR / time-based revalidation**
- **Tag-based invalidation**
- **Fully dynamic (no-store)**

**Must:**
- Document the route’s freshness requirement (SLA).
- Implement explicit revalidation behavior (time or tags).
- Define mutation triggers (Server Actions / Route Handlers) that invalidate caches.

#### 2.3.3 Cache Components (advanced)

Use Cache Components (`'use cache'`) to cache expensive server computations.
- Must document: cache key shape, cache lifetime, invalidation mechanism.
- Must be validated with tests/observability to avoid stale or wrong data.

#### 2.3.4 Updating data (mutations)

Prefer Server Actions for mutations and revalidation:
- Server Action validates input
- Performs mutation
- Calls `revalidatePath` / `revalidateTag` as required
- Returns typed result

**Must:**
- Validate all inputs on the server
- Avoid trusting client-provided state

---

### 2.4 Image Optimization (Required)

**Rule:** Use `next/image` for performance-sensitive images.

**Must:**
- Prefer local images in `public/` when feasible.
- Configure allowed remote image sources.
- Always provide stable sizing (width/height or `fill` with correct container constraints) to avoid layout shifts.

**Should:**
- Prefer modern formats where possible
- Use responsive images for large hero content

---

### 2.5 Fonts (Required)

**Rule:** Use `next/font` for font optimization whenever feasible.

**Must:**
- Use `next/font` in the root layout or per-segment layout.
- Avoid loading fonts via external `<link>` tags when `next/font` can manage it.

---

### 2.6 Metadata, OG Images, and SEO (Required)

**Must:**
- Use the Metadata API (`metadata` object or `generateMetadata`) for pages.
- Implement OpenGraph and Twitter images using Next.js conventions.
- For structured data, use JSON-LD where appropriate and document it.

**Deliverables:**
- `app/<route>/metadata.ts` or per-route `generateMetadata`
- `public/` or generated OG assets in accordance with docs

---

## 3) Development, Testing, and Deployment

### 3.1 Local Development (Required)

**Standard scripts (minimum):**
- `dev`
- `build`
- `start`
- `lint`
- `test`

**Rules:**
- All features must be runnable locally with documented steps.
- Use Next.js debugging guidance when troubleshooting build/runtime issues.

**Optional (recommended):**
- Add instrumentation early if you expect production tracing/metrics.

---

### 3.2 Testing (Required)

Testing must cover multiple levels:

#### 3.2.1 Unit / Component tests
- Use Jest or Vitest.
- Focus on pure logic, utilities, and isolated components.

#### 3.2.2 E2E tests (required for critical flows)
- Use Playwright or Cypress.
- Cover authentication flows, core navigation, and mutation flows.
- Include a smoke test suite that runs on every PR.

#### 3.2.3 Notes about Server Components
Some test environments have limited support for async Server Components; rely on E2E tests for full fidelity where needed.

**Deliverables:**
- `tests/unit/`
- `tests/e2e/`
- CI workflows that run tests on PR

---

### 3.3 Secrets Management (Required)

**Rules:**
- Never commit `.env` files.
- Use `.env.local` for local dev only.
- Only expose variables to the browser with `NEXT_PUBLIC_` prefix.
- Use platform secret stores in production.

**Must:**
- Keep secrets in server-only modules (`src/lib/*`) and Server Components/Actions.

---

### 3.4 Security (Required)

#### 3.4.1 Data security
- Do not pass secrets to Client Components.
- Validate all inputs server-side (Route Handlers and Server Actions).
- Use least privilege for service credentials.

#### 3.4.2 Content Security Policy (CSP)
- Implement CSP for production.
- Prefer nonces/hashes for scripts when needed.
- Document all required third-party domains.

---

### 3.5 Analytics (Recommended)

- Implement analytics per Next.js guidance.
- Track Web Vitals for performance regression detection.

---

### 3.6 CI Build Caching (Required)

- Configure CI to persist `.next/cache` between builds.
- Validate caching doesn’t produce stale build artifacts across branches.

---

### 3.7 Production Checklist (Required)

Before every release, verify:

#### Performance
- Minimize Client Components
- Use `next/image`, `next/font`
- Avoid unbounded third-party scripts
- Validate route caching correctness

#### Reliability
- `error.tsx` present for routes that depend on external systems
- `loading.tsx` present for slow routes
- Health endpoint exists (`/api/health`)

#### Security
- Env vars correct (no secrets exposed to client)
- CSP enabled and documented
- Authz checks enforced on server

#### SEO
- Metadata implemented
- OG/Twitter images present where needed
- JSON-LD for structured content where applicable

---

### 3.8 Deployment (Required)

#### 3.8.1 Platform deployment
- Follow Next.js deploying guidance for your platform.
- Ensure environment variables are configured in the platform.

#### 3.8.2 Release steps
1. Run `lint`
2. Run unit tests
3. Run E2E smoke tests
4. Run `build`
5. Deploy
6. Verify `/api/health`
7. Monitor errors and Web Vitals

#### 3.8.3 Rollback strategy
- Must have a documented rollback plan (platform-dependent).
- Must be able to roll back within an agreed SLA.

---

## 4) Route Handlers, Proxy, and BFF Patterns

### 4.1 Route Handlers (BFF)

Use Route Handlers under `app/api/*/route.ts` for:
- Secure server-side proxying to upstream APIs
- Consolidating multiple upstream calls
- Normalizing response shapes for the UI

**Rules:**
- Validate inputs
- Enforce authentication and authorization server-side
- Use typed DTOs

---

### 4.2 Proxy

Use `proxy.ts` for request-time routing logic:
- Redirects/rewrites
- Header augmentation
- Request gating

**Rules:**
- Keep Proxy logic minimal and deterministic.
- Document any non-trivial Proxy behavior.

---

## 5) Upgrading & Maintenance (Required)

### 5.1 Upgrade cadence
- Review Next.js upgrade guides periodically.
- Use official codemods when upgrading.

### 5.2 Migration planning
- When migrating routing systems (Pages → App Router), follow official migration guidance.
- Document migration steps and risks in an ADR.

---

## 6) Operational Playbooks

### 6.1 Incident response (minimum)
- Identify scope (routes affected, error rates, latency)
- Check recent deployments and env var changes
- Roll back if necessary
- Post-incident review: add tests and monitoring to prevent recurrence

### 6.2 Debugging
- Use Next.js debugging guidance.
- Add instrumentation or logs where needed (avoid logging secrets).

---

## 7) Definition of Done (DoD)

A feature is “done” only if:

- ✅ Types are correct; no unsafe `any` without justification
- ✅ Routing follows App Router conventions
- ✅ Server/Client boundaries are correct (no secrets in client)
- ✅ Data fetching + caching strategy is explicitly defined and implemented
- ✅ Error and loading states exist where needed
- ✅ Tests updated (unit and/or E2E)
- ✅ Production checklist items remain green
- ✅ Deployment pipeline passes

---

## Appendix A — Templates

### A.1 Route checklist template

For each route:

- Route: `/...`
- Data sources:
- Freshness SLA:
- Caching mode: static | ISR(time) | tag-based | dynamic(no-store)
- Invalidation triggers:
- Error handling:
- Loading/streaming:
- SEO metadata:
- Images/fonts considerations:

### A.2 Server Action checklist template

- Input validation:
- Auth/authz:
- Mutation:
- Cache invalidation (path/tag):
- Typed return value:
- Logging/metrics (no secrets):

---



**Last updated:** 2026-01-10
