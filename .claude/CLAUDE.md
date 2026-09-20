# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then build for production via Vite
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally

There is no test runner configured in this project yet.

## Architecture

- React 19 + TypeScript, built with Vite, routed with TanStack Router (`@tanstack/react-router`), styled with Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no standalone `tailwind.config` file).
- Routes are declared imperatively in `src/App.tsx` (`createRootRoute` / `createRoute` / `createRouter`), not file-based — adding a page means adding both a route entry there and a component under `src/pages`.
- Path alias `@` maps to `src/` (set in both `vite.config.ts` and the tsconfig files) — prefer `@/...` imports over relative paths for cross-directory imports.
- Dark/light theme is applied before React mounts: `public/theme-init.js` is loaded as a blocking `<script>` in `index.html` and sets the `dark` class on `<html>` from `localStorage` to avoid a flash of unstyled content. `src/components/ThemeToggle.tsx` toggles the class and `localStorage` at runtime — both places encode the same light/dark logic and need to stay in sync if that logic changes.
- `cn()` in `src/lib/utils.ts` (clsx + tailwind-merge) is the established convention for conditional/merged Tailwind class names; components use it instead of manual string concatenation.
- `src/models/` (`Star.ts`, `Meteor.ts`) holds plain data classes consumed by `src/components/StarBackground.tsx` to drive the animated background effect.

## Portfolio maintenance

This site is a living record of the owner's skillset. When a session working in this repo (or in a related project) surfaces a new technology, tool, or skill the owner has genuinely used or built — including AI/agentic tooling like GitHub Copilot or Claude Code (agents, skills, plans) — propose adding it to the Skills section rather than waiting to be asked.
