# AI Agent Instructions for this Repository

## Project overview
- A React + Vite portfolio website.
- Uses plain JavaScript and JSX only; no TypeScript source files are present.
- Entry point: `src/main.jsx` renders `src/App.jsx`.
- Main visible content is in `src/Home.jsx`.
- CSS is authored in `src/App.css` and `src/index.css`.
- The site is deployed to GitHub Pages under the `homepage` path `/portfolio/`.

## Key scripts
- `npm run dev` — start Vite development server.
- `npm run build` — build production assets into `dist`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint across the repository.
- `npm run deploy` — publish `dist` to GitHub Pages using `gh-pages`.

## Important conventions
- Preserve the `base: '/portfolio/'` Vite configuration when updating production deployment.
- Keep `package.json` as an ES module project (`type: "module"`).
- `eslint.config.js` is the source of linting rules. It uses:
  - `@eslint/js` recommended config
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-react-refresh`
- Avoid introducing TypeScript or additional build tools unless the project explicitly adds them.
- `dist` is a generated output directory and should be ignored by source changes.

## What to change and what to preserve
- Add new UI components under `src/` with `.jsx` extension.
- Keep the main app structure simple: `src/main.jsx` → `src/App.jsx` → `src/Home.jsx`.
- Use standard CSS files for styling; no Sass/LESS/PostCSS is configured.
- Use relative imports with file extensions when needed in source files.

## Notes for agents
- This repository is a small frontend-only codebase.
- There is no backend code or API server in this workspace.
- Refer to `README.md` for the template description and React/Vite context.
