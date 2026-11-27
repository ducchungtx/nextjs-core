---
name: nextjs-project-dev
description: >-
  Development workflow, Next.js 14 App Router best practices, Vristo UI conventions,
  and dependency modernization guide for this repository. Use when creating new pages
  or components, building forms/tables/charts, refactoring legacy template code, or
  auditing and upgrading outdated packages in package.json.
---

# Next.js Project Development & Modernization Skill

Use this skill when working on features, refactoring, or dependency upgrades in this Next.js 14 (`vristo-next`) project.

## Reference Map (Read On Demand)

- **Codebase architecture, theme tokens, state & i18n details**: [project-conventions.md](./references/project-conventions.md)
- **Package audit, limitations, and modern replacement roadmap**: [library-modernization.md](./references/library-modernization.md)

## Workflow for Building New Features

### 1. Plan Server vs. Client Boundaries
1. Put route entry files in `app/(defaults)/<feature>/page.tsx` (or `app/(auth)/...`) as **Server Components** (no `'use client'`).
2. Export Next.js `Metadata` (`export const metadata: Metadata = { title: '...' }`) from `page.tsx`.
3. Extract interactive UI into `components/<domain>/<feature-name>.tsx` with `'use client'` at the top.
4. Keep `components/` organized by domain; import with `@/components/...`, `@/store/...`, `@/i18n`.

### 2. Follow UI, Dark Mode & Layout Conventions
- Wrap sections in `<div className="panel">` where appropriate to match the dashboard card aesthetic.
- Support both light and dark modes (`dark:` Tailwind variants; dark mode class is toggled on `<body>`).
- Use Tailwind logical or directional classes (`ltr:` / `rtl:`) if adding horizontal spacing/positioning so RTL mode in `themeConfigSlice` stays intact.
- For modals, popovers, dropdowns, tabs, and disclosures in new features, prefer `@headlessui/react` (`^2.1.2`, already installed) with Tailwind classes instead of `sweetalert2`, `@tippyjs/react`, or custom `react-popper` wrappers.

### 3. Handle Forms, Tables & Browser-Only Libraries Safely
- **Forms**: Existing template demos use `formik` + `yup`. For new complex forms, prefer `react-hook-form` + `zod` if approved for installation; otherwise keep Formik strictly typed (no `any`) and avoid `react-text-mask` (use native formatting/controlled inputs or `@react-input/mask`).
- **Tables**: `mantine-datatable` (`^1.7.35`) is tied to Mantine v5. For simple tables, use semantic HTML + `.table-responsive` styles from `styles/tailwind.css`. For new feature-rich data grids, prefer `@tanstack/react-table` with Tailwind (or upgrade Mantine + `mantine-datatable` together).
- **SSR-Unsafe Libraries**: Always lazy-load browser-only widgets with `next/dynamic`:
  ```tsx
  import dynamic from 'next/dynamic';

  const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
  ```
  Apply the same `ssr: false` pattern to `react-quill`, `react-simplemde-editor`, `react-flatpickr`, and `@fullcalendar/react` if touched or reused.
- **No legacy utility wrappers**: Use `navigator.clipboard.writeText()` instead of `react-copy-to-clipboard`, native CSS `overflow-auto` instead of `react-perfect-scrollbar`, and a custom `useEffect` click-outside hook instead of `react-click-away-listener`.

### 4. State, Data Fetching & i18n
- Use `store/index.tsx` (`IRootState`) only for global UI/app state (`themeConfig`).
- Fetch server data in Server Components (`fetch` with Next.js caching/revalidation) or mutate via Route Handlers (`app/api/.../route.ts`) / Server Actions. For client-side caching/pagination/polling, prefer `@tanstack/react-query` or RTK Query.
- When adding user-facing copy, check `i18n.ts` and `public/locales/en.json` if multi-language support is required on that screen.

### 5. Verify Before Completing Work
Run checks explicitly because `next.config.js` ignores ESLint during builds (project package manager is `pnpm`):
1. Typecheck: `pnpm typecheck`
2. Lint: `pnpm lint`
3. Build check (for new routes, dynamic imports, or config edits): `pnpm build`
