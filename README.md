# Finsweet Agency

Multi-page agency website built from the Figma design "Finsweet Agency".

**Stack:** React 18, TypeScript, Vite, React Router 6, CSS Modules. Architecture: Feature-Sliced Design.

## Scripts

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + production build
npm run preview   # serve the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services (anchors: `#technical-support`, `#development`, …) |
| `/company` | Company |
| `/career` | Career (vacancy filter) |
| `/career/:id` | Vacancy details + apply form |
| `/blog` | Blog (pagination) |
| `/blog/:id` | Blog post |
| `/team/:id` | Team member |
| `/contacts` | Contact us |
| `/privacy-policy` | Privacy Policy |
| `*` | 404 |

The "Have a Question?" popup opens from "Request Quote", "Start a Project" and "Clone project".

## Structure (FSD)

```
src/
  app/        providers, router (paths, routes), global styles
  pages/      route pages
  widgets/    page sections (header, footer, hero, blog-section, …)
  features/   user actions (forms, filters, pagination, mobile menu)
  entities/   business entities: model (types + mock data) and cards
  shared/     ui kit, hooks, utils, config, assets
```

Import rule: a layer may only import from layers below it (`app → pages → widgets → features → entities → shared`).
Mock data lives in `entities/*/model/data.ts`; forms simulate submission (no backend yet).
