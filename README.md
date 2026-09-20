# Personal Portfolio

Alex Lam's personal portfolio site — full-stack developer & registered pharmacist, showcasing background, skills, and projects.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- TanStack Router
- Radix UI, lucide-react

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server with HMR
- `npm run build` — type-check and build for production
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally

## Deployment

Deployed on Cloudflare Pages: https://personal-portfolio-52b.pages.dev/

Connected directly to this GitHub repo via Cloudflare Pages' Git integration (Workers & Pages → personal-portfolio → Settings → Builds and deployments) — no `wrangler.toml`, GitHub Actions workflow, or manual deploy step involved. A push to `main` triggers an automatic build and deploy.

- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variables:** none set
