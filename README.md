# Inventory App

![Inventory App Logo](public/img/logo.jpg)

Open-source Next.js (v16.0.5) inventory management app — inspired by GLPI, focused on material control. The repository currently contains only a few initial components and a basic layout.

Primary files and components

- Next.js config: `next.config.ts`
- TypeScript config: `tsconfig.json`
- Scripts & deps: `package.json`
- Global styles: `app/globals.css`
- Layout and pages: `app/layout.tsx`, `app/page.tsx`, `app/login/page.tsx`
- UI components:
  - `components/ui/button.tsx`
  - `components/ui/input.tsx`
  - `components/ui/label.tsx`
- Utility: `lib/utils.ts` (classnames helper)

Getting started (same as plain Next.js)

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm run dev
# Open http://localhost:3000
```

Production build & run (Next.js)

1. Build

```bash
npm run build
```

2. Start

```bash
npm start
```

Notes:

- Ensure you are using a supported Node.js LTS (Node 18+ or Node 20 recommended).
- Environment-specific values should be provided via environment variables (.env.local for local development; do not commit secrets).

Deploy recommendations

- Vercel — native Next.js support, simplest option: connect the repository and use default settings.
- Docker — example Dockerfile for containerized deployment:

```dockerfile
# filepath: /home/daniel/Study/inventory_app/Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
```

Production best practices

- Store secrets in provider-managed env vars.
- Use a process manager (PM2) or container orchestration for uptime.
- Enable logging, monitoring, and backups for any data stores.
- Serve static assets via a CDN when appropriate.
- Harden security headers and enable compression at the proxy/load-balancer.

How to contribute

- Fork → branch → PR.
- Keep TypeScript types and linting consistent.
- Run tests/linter before opening a PR (see `package.json` scripts).

Current status and suggestions

- Minimal implementation so far (layout + a few components). Suggested next steps: model entities (materials, categories, movements, users), implement API routes, add auth, and inventory workflows.

References

- Next.js docs: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
