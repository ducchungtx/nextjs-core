# Project Conventions & Architecture Map

## Directory Layout

- `app/layout.tsx`: Root layout loading Google Font `Nunito` (`--font-nunito`), `styles/tailwind.css`, `react-perfect-scrollbar/dist/css/styles.css`, and wrapping `{children}` with `ProviderComponent`.
- `app/(defaults)/layout.tsx`: Main dashboard shell (`Sidebar`, `Header`, `ContentAnimation`, `Footer`, `Portals`).
- `app/(auth)/layout.tsx`: Minimal layout for auth/standalone pages.
- `App.tsx`: Client wrapper hydrating `themeConfig` from `localStorage` into Redux (`theme`, `menu`, `layout`, `rtlClass`, `animation`, `navbar`, `semidark`) and initializing `i18n`.
- `components/layouts/`: Shell components (`provider-component.tsx`, `sidebar.tsx`, `header.tsx`, `footer.tsx`, `setting.tsx`, `loading.tsx`).
- `components/icon/`: Inline SVG icon components (`icon-*.tsx`). Note: no icon library like `lucide-react` is currently installed; icons are local TSX components.
- `components/portals.tsx`: Renders `#popper-portal` and `#modal-portal`.
- `store/index.tsx` & `store/themeConfigSlice.tsx`: Redux Toolkit store (`themeConfig` slice; note slice `name` is `'auth'` in template code).
- `styles/`: Modular CSS files imported at the top of `styles/tailwind.css`.
- `theme.config.tsx`: Default layout/theme/locale configuration.

## Tailwind & Styling Tokens (`tailwind.config.js` & `styles/tailwind.css`)

- **Font**: `font-nunito` (`var(--font-nunito)`).
- **Dark mode**: `darkMode: 'class'`. `themeConfigSlice` toggles `.dark` on `document.querySelector('body')`.
- **Brand palette**:
  - `primary`: `#4361ee` (`light`: `#eaf1ff`, `dark-light`: `rgba(67,97,238,.15)`)
  - `secondary`: `#805dca`
  - `success`: `#00ab55`
  - `danger`: `#e7515a`
  - `warning`: `#e2a03f`
  - `info`: `#2196f3`
  - `dark`: `#3b3f5c`, `black`: `#0e1726`, `white`: `#ffffff` (`white-light`: `#e0e6ed`, `white-dark`: `#888ea8`)
- **Plugins**: `@tailwindcss/forms` (with `strategy: 'class'`, so form styling uses `.form-input`, `.form-select`, `.form-checkbox`, `.form-radio`, `.form-textarea`), `@tailwindcss/typography`, and custom `.rotate-y-180`.
- **Component classes in `styles/tailwind.css`**:
  - Cards: `.panel`
  - Buttons: `.btn`, `.btn-sm`, `.btn-lg`, `.btn-{color}`, `.btn-outline-{color}`, `.btn-gradient`
  - Badges: `.badge`, `.badge-outline-{color}`
  - Validation states: `.has-error`, `.has-success` wrapping `.form-input` / `label`

## Known Quirks in Existing Template Files

1. **`tsconfig.json`**: Updated `"target"` from `es5` to `es2022`. `"strict": true` and `@/*` path alias are enabled.
2. **`next.config.js`**: `eslint: { ignoreDuringBuilds: true }` hides lint errors during `next build`. `swcMinify: true` is default in Next 14 and removed in Next 15.
3. **`i18n.ts` vs `ni18n.config.ts.js`**: `ProviderComponent` has `appWithI18Next` commented out (`// todo`). Active translation is `getTranslation()` in `i18n.ts`, which synchronously imports all 16 JSON files from `public/locales/` and reads the `i18nextLng` cookie via `universal-cookie` (client) or `next/headers` (server).
4. **Static imports of browser-only libs**: Existing template files in `components/charts/` and `components/forms/quill-editor/` import `react-apexcharts` and `react-quill` directly at module top level instead of using `next/dynamic(..., { ssr: false })`. Do not repeat this pattern in new files.
