---
name: nextjs-project-dev
description: >-
  Development workflow, Next.js 16 App Router best practices, nextis-core UI + Ant Design v6
  conventions, Zustand state management, and dependency modernization guide for this
  repository. Use when creating new pages or components, building forms/tables/charts,
  refactoring legacy template code, or auditing and upgrading packages in package.json.
---

# Next.js Project Development & Modernization Skill

Use this skill when working on features, refactoring, or dependency upgrades in this Next.js 16 (React 19, Tailwind CSS v4, Ant Design v6, Zustand) project.

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
- Support both light and dark modes (`dark:` Tailwind variants; `.dark` class is toggled on `<body>` via `useThemeStore`, and Ant Design `ConfigProvider` in `App.tsx` syncs `darkAlgorithm` + `direction`).
- Use Tailwind logical or directional classes (`ltr:` / `rtl:`) if adding horizontal spacing/positioning so RTL mode in `useThemeStore` stays intact.
- For UI components, tables, forms, modals, and notifications, prefer **Ant Design v6 (`antd`)** or **`@headlessui/react` v2** with Tailwind CSS v4.

### 3. Handle Forms, Tables & Browser-Only Libraries Safely
- **Forms & Tables**: Prefer **Ant Design (`Form`, `Table`)** or `react-hook-form` + `zod` (for custom Tailwind forms) and semantic HTML + `.table-responsive` styles from `styles/tailwind.css` for simple tables.
- **SSR-Unsafe Libraries**: Always lazy-load browser-only widgets with `next/dynamic`:
  ```tsx
  import dynamic from 'next/dynamic';

  const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
  ```
  Apply the same `ssr: false` pattern to `react-quill-new` and `@fullcalendar/react` if touched or reused.
- **No legacy utility wrappers or `lodash`**: Use native ES2022+ (`toSorted`, `Object.groupBy`, `structuredClone`, `navigator.clipboard.writeText()`), native CSS `overflow-auto` instead of `react-perfect-scrollbar`, CSS grid/Headless UI transitions instead of `react-animate-height`, and `es-toolkit` only if a utility library is truly needed.

### 4. State, Data Fetching & i18n
- Use `store/useThemeStore.ts` (`useThemeStore`, powered by `zustand`) only for global UI/layout state (`theme`, `isDarkMode`, `sidebar`, `rtlClass`, `menu`, `layout`, `navbar`, `animation`, `semidark`).
- Fetch server data in Server Components (`fetch` with Next.js caching/revalidation) or mutate via Route Handlers (`app/api/.../route.ts`) / Server Actions. When adding backend APIs that need client-side caching, table pagination, or polling, use **`@tanstack/react-query`** rather than storing server cache in client stores.
- When adding user-facing copy, check `i18n.ts` and `public/locales/en.json` if multi-language support is required on that screen.

### 5. Verify Before Completing Work
Run checks explicitly because `next.config.js` ignores ESLint during builds (project package manager is `pnpm`):
1. Typecheck: `pnpm typecheck`
2. Lint: `pnpm lint`
3. Build check (for new routes, dynamic imports, or config edits): `pnpm build`
