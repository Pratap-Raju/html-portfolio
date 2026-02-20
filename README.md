# Premium Developer Portfolio (React + Vite)

A production-ready, high-conversion personal portfolio scaffolded with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Architecture decisions

- **Componentized sections** for maintainability (`src/components/*Section.tsx`).
- **Reusable primitives** (`Button`, `Card`, `SectionHeading`) for consistent interaction and visual language.
- **Data-driven content** in `src/data/portfolioData.ts` for easier updates and future CMS integration.
- **Theme hook** (`src/hooks/useTheme.ts`) for persistent dark/light mode.
- **Performance-first defaults**: Vite bundling, lean dependency set, semantic HTML, and simple animations.

## Commands

```bash
npm install
npm run dev
npm run build
```
