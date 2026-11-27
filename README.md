# nextis-core

Dashboard application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Ant Design v6**, **Tailwind CSS v4**, and **Zustand**.

## Tech Stack

- **Framework**: Next.js 16 (`app/` App Router) & React 19
- **Language**: TypeScript (`strict: true`, `@/*` path alias)
- **UI & Styling**: Ant Design v6 (`antd` + `@ant-design/nextjs-registry`), Tailwind CSS v4, `@headlessui/react` v2
- **State Management**: Zustand v5 (`store/useThemeStore.ts` for theme, dark mode, RTL, layout, sidebar, and locale)
- **Typography**: Nunito (`next/font/google` via `--font-nunito`)
- **Package Manager**: `pnpm`

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Build the application for production |
| `pnpm start` | Start the production server |
| `pnpm typecheck` | Run TypeScript type checking (`tsc --noEmit`) |
| `pnpm lint` | Run ESLint across the repository |
| `pnpm format` | Format files with Prettier |
| `pnpm format:check` | Check formatting with Prettier |

## Project Structure

```text
.
├── app/                  # Next.js App Router pages & layouts
│   ├── (defaults)/       # Main authenticated/dashboard routes
│   ├── (auth)/           # Auth & minimal layout routes
│   └── layout.tsx        # Root layout with AntdRegistry & Nunito font
├── components/           # Feature & shared UI components
│   ├── apps/             # App modules (mailbox, calendar, chat, contacts, notes, scrumboard, todolist)
│   ├── layouts/          # Shell, sidebar, header, footer, theme provider
│   └── ui/               # Shared UI primitives (e.g. app-button.tsx)
├── store/                # Zustand stores (useThemeStore.ts)
├── styles/               # Global & Tailwind CSS v4 stylesheets (tailwind.css)
└── public/               # Static assets and i18n locale JSON files
```

## Development Notes

- Keep `app/**/page.tsx` and `app/**/layout.tsx` as **Server Components** whenever possible; place `'use client'` in leaf components under `components/`.
- Use [AppButton](components/ui/app-button.tsx) as the shared Ant Design `Button` wrapper for consistent theming, semantic `tone` variants, and easy customization.
- Lazy-load browser-only widgets (`react-apexcharts`, `react-quill-new`, `@fullcalendar/react`) with `next/dynamic(..., { ssr: false })`.
- See [AGENTS.md](AGENTS.md) for full project guidelines and conventions.
