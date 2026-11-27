# `package.json` Audit & Modernization Roadmap

Audit of dependencies in `package.json` (Next.js `14.2.13`, React `18.3.1`, TypeScript `^5.3.3`) with concrete replacement recommendations.

## 1. High Priority: Outdated, Unmaintained, or React/SSR-Hostile Packages

| Current Package | Issue / Limitation | Recommended Replacement |
| :--- | :--- | :--- |
| `react-text-mask` (`^5.5.0`) + `@types/react-text-mask` | Abandoned; uses legacy React patterns (`findDOMNode`), incompatible with React 19 and strict mode | `@react-input/mask` or `react-imask` |
| `react-quill` (`^2.0.0`) | Built on Quill v1 + `findDOMNode`; breaks SSR (`document` access) and blocks React 19 upgrade | `@tiptap/react` (`@tiptap/starter-kit`) or `lexical` |
| `@tippyjs/react` (`^4.2.6`) + `react-popper` (`^2.3.0`) | Unmaintained Popper v2 ecosystem; `components/dropdown.tsx` uses custom `usePopper` | `@floating-ui/react` or `@headlessui/react` / Radix UI Popover & Tooltip |
| `react-copy-to-clipboard` (`^5.1.0`) + `@types/react-copy-to-clipboard` | Unmaintained legacy wrapper | Native `navigator.clipboard.writeText()` (~10-line hook) |
| `react-click-away-listener` (`^2.2.2`) | Unmaintained small wrapper | Custom `useClickOutside` hook or `@headlessui/react` built-in dismissal |
| `react-perfect-scrollbar` (`^1.5.8`) | Unmaintained JS scrollbar wrapper; degrades mobile touch UX and accessibility | Native CSS `overflow-auto` + `tailwind-scrollbar` (or CSS `scrollbar-width`) |
| `react-sortablejs` (`^6.1.4`) + `sortablejs` (`^1.15.0`) | Weak React 18/19 ref & typing support | `@dnd-kit/core` + `@dnd-kit/sortable` |
| `@x1mrdonut1x/nouislider-react` (`^3.4.3`) | Unofficial fork wrapping imperative DOM slider | `@radix-ui/react-slider` or styled native range input |
| `ni18n` (`^1.0.5`) + `i18n.ts` workaround | Designed for Pages Router (`next-i18next`); currently commented out in `provider-component.tsx`, while `i18n.ts` bundles all 16 locales | `next-intl` (native App Router Server + Client i18n with per-locale code splitting) |

## 2. Medium Priority: Heavy or Legacy-Generation Packages

| Current Package | Issue / Limitation | Recommended Replacement / Action |
| :--- | :--- | :--- |
| `@mantine/core` (`^5.10.5`), `@mantine/hooks` (`^5.10.5`), `@emotion/react` (`^11.10.6`), `mantine-datatable` (`^1.7.35`) | Mantine v5 is several major versions behind; uses Emotion CSS-in-JS (extra runtime + SSR friction in App Router) and overlaps with Tailwind + Headless UI | **Option A (Recommended for Tailwind stack)**: Remove Mantine/Emotion and standardize on `@headlessui/react` v2 (or shadcn/ui + Radix) + `@tanstack/react-table`. **Option B**: Upgrade to Mantine v7/v8 + `mantine-datatable` v7+ (removes Emotion). |
| `formik` (`^2.2.9`) + `yup` (`^1.4.0`) | Formik maintenance is minimal and causes full-form re-renders; Yup TS inference is weaker | `react-hook-form` + `zod` + `@hookform/resolvers` |
| `react-flatpickr` (`^3.10.13`) + `@types/react-flatpickr` | Wraps imperative vanilla `flatpickr`; SSR & React StrictMode friction | `react-day-picker` (pairs cleanly with Tailwind / `date-fns`) |
| `sweetalert2` (`^11.7.1`) + `sweetalert2-react-content` (`^5.0.7`) | Heavy imperative global DOM modals/toasts; harder to style with Tailwind dark mode & React state | `sonner` for toasts + `@headlessui/react` `Dialog` for confirm modals |
| `react-simplemde-editor` (`^5.2.0`) + `easymde` (`^2.18.0`) | Imperative CodeMirror 5 wrapper, SSR-unsafe | `@uiw/react-md-editor` or Tiptap Markdown |
| `react-images-uploading` (`^3.1.7`) | Limited, older upload wrapper | `react-dropzone` + custom preview/upload hook |
| `apexcharts` (`^4.0.0`) + `react-apexcharts` (`^1.4.0`) | `window`-dependent (`ssr: false` required); older ApexCharts ecosystem | Keep updated in 4.x/5.x if keeping template charts, or adopt `recharts` / `echarts` for custom dashboards |
| `react-select` (`^5.7.0`) | Emotion-based styling harder to sync with Tailwind dark tokens | `@headlessui/react` `Combobox` / `Listbox` or `cmdk` |
| `react-animate-height` (`^3.1.0`) | Unnecessary runtime dependency for accordion height | CSS Grid height transition (`grid-rows-[0fr]` / `grid-rows-[1fr]`) or Headless UI `Disclosure` / `Transition` |

## 3. Tooling, Config & Dependency Hygiene

- **ESLint 8 EOL**: `eslint` `8.57.0` is End-of-Life. Plan upgrade to Next.js 15+ and ESLint 9 flat config (`eslint.config.mjs`). Remove `eslint: { ignoreDuringBuilds: true }` from `next.config.js` once lint warnings are resolved.
- **Type & Dependency hygiene (Applied in Step 1)**:
  - Aligned `@types/react` to `^18.3.0` to match `react` (`18.3.1`) and `@types/react-dom` (`^18.3.0`).
  - Added `lodash` (`^4.17.21`) explicitly to `dependencies` because 10 existing files (`components/datatables/*.tsx` and `components/apps/mailbox/invoice/components-apps-invoice-list.tsx`) import `sortBy` from `lodash/sortBy` or `lodash` (previously a phantom dependency).
  - Updated `tsconfig.json` `target` from `es5` to `es2022`.
  - Added `.eslintrc.json`, `.prettierrc`, `.prettierignore`, and `.gitignore`.
- **Missing Server-State & Icon packages**:
  - Consider `@tanstack/react-query` (or RTK Query) before building real backend CRUD APIs.
  - Consider `lucide-react` for consistent, tree-shakable icons instead of maintaining hundreds of manual SVG files in `components/icon/`.
- **Lockfile & Package Manager**: This project uses **`pnpm`**. Always install packages with `pnpm add` / `pnpm install` and commit `pnpm-lock.yaml` (never `package-lock.json` or `yarn.lock`).

## 4. Suggested Incremental Migration Order

1. **Immediate (Low risk - Done)**: Aligned `@types/react` to `^18.3.x`, fixed phantom `lodash` dependency (critical for `pnpm`), bumped `apexcharts` to `^4.0.0` (matching `react-apexcharts` peer dependency), added `"packageManager": "pnpm@9.15.2"`, raised `tsconfig.json` `target` to `es2022`, added `.eslintrc.json`, `.prettierrc`, `.prettierignore`, `.gitignore`, and added `typecheck` / `format` scripts in `package.json`. Remaining in this phase: wrap SSR-unsafe imports (`react-apexcharts`, `react-quill`, etc.) with `next/dynamic(..., { ssr: false })`.
2. **Short term (For all new features)**: Introduce `react-hook-form` + `zod`, `sonner`, `@tanstack/react-query`, and `lucide-react`; stop using legacy wrappers (`react-copy-to-clipboard`, `react-click-away-listener`, `react-perfect-scrollbar`, `@tippyjs/react`, `react-text-mask`).
3. **Medium term (Template cleanup)**: Delete unused demo routes in `app/(defaults)/` and `components/`, then remove Mantine v5 / Emotion / Formik / Quill / SweetAlert2 / `ni18n` once replaced.
4. **Major upgrade**: Upgrade `next` (14 -> 15/16), `react` (18 -> 19), `eslint` (8 -> 9), and optionally `tailwindcss` (3 -> 4).
