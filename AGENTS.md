# Project AI Guidelines (`vristo-next` / Next.js 14 App Router)

This repository is a Next.js 14 App Router (`app/`) dashboard application using React 18, TypeScript (`strict: true`, `@/*` path alias to repo root), Tailwind CSS 3, and Redux Toolkit (`store/`).

## Core Architecture & Next.js Rules

- **Server Components by default**: Keep `app/**/page.tsx` and `app/**/layout.tsx` as Server Components whenever possible (export `metadata` here, fetch server data here) and push `'use client'` down to leaf interactive components under `components/`.
- **Route groups**: Authenticated/main dashboard routes belong in `app/(defaults)/`; auth/minimal layouts belong in `app/(auth)/`.
- **Path aliases**: Always use `@/` imports (configured in `tsconfig.json`: `"@/*": ["./*"]`). Avoid deep relative `../../../` imports.
- **No `any` in new code**: TypeScript `strict: true` is enabled. Define explicit interfaces/types for props, Redux payloads, form values, and API responses instead of copying legacy `any` patterns from template examples.

## Styling, Dark Mode & RTL

- **Tailwind-first**: Use Tailwind utilities and the project's semantic color tokens in `tailwind.config.js` (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `dark`, `black`, `white`).
- **Dark mode**: Configured as `darkMode: 'class'` (toggled on `<body>` via `themeConfigSlice`). Always include `dark:` variants when building custom UI.
- **RTL support**: Use `ltr:` / `rtl:` variants or logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`) where layout direction matters.
- **Existing CSS primitives**: `styles/tailwind.css` provides `.panel`, `.btn`, `.btn-primary`, `.badge`, `.form-input`, `.form-select`, `.form-checkbox`, `.has-error`, `.has-success`. Reuse these for visual consistency with existing pages.

## State & Data Fetching

- **Redux Toolkit (`store/`)**: Use `themeConfigSlice` only for layout/theme/UI preferences. Do **not** store server/API cache manually in Redux slices unless using RTK Query or a dedicated server-state layer (e.g., TanStack Query).
- **i18n**: Currently handled by cookie-based `getTranslation()` in `i18n.ts` (`ni18n` in `components/layouts/provider-component.tsx` is disabled). Note that `i18n.ts` imports all locale JSONs statically — do not add large payloads to `public/locales/*.json`.

## Legacy Library Guardrails (Critical)

Several dependencies in `package.json` are outdated, DOM-imperative, or SSR-unsafe:

1. **Always use `next/dynamic(..., { ssr: false })`** (not static imports) when rendering browser-only libraries in new code: `react-apexcharts`, `react-quill`, `react-simplemde-editor`, `@fullcalendar/*`, `react-flatpickr`.
2. **Do not introduce new usages** of abandoned/legacy wrappers: `react-text-mask`, `react-copy-to-clipboard`, `react-click-away-listener`, `react-perfect-scrollbar`, `@tippyjs/react`, `react-popper`, `react-sortablejs`, `react-animate-height`, `@x1mrdonut1x/nouislider-react`. Prefer native Web APIs, CSS, `@headlessui/react` v2, or modern replacements documented in `.agents/skills/nextjs-project-dev/references/library-modernization.md`.
3. **Avoid mixing styling systems**: Do not add new `@mantine/core` v5 or Emotion (`@emotion/react`) usage for new UI; prefer Tailwind CSS + `@headlessui/react` (or upgrade Mantine to v7+ if Mantine is kept long-term).

## Verification Before Finishing

- `next.config.js` currently sets `eslint.ignoreDuringBuilds = true`. Always run checks explicitly after edits:
  - `pnpm typecheck` (`tsc --noEmit`)
  - `pnpm lint`
  - `pnpm build` (when changing routes, layouts, dynamic imports, or configs)

## Project Skill

For step-by-step feature workflows, codebase conventions, and the full dependency upgrade roadmap, activate and read `.agents/skills/nextjs-project-dev/SKILL.md`.
