# Repository Guidelines

## Project Structure & Module Organization

This is a static CA Electric landing page built with React 18 and Vite.

- `index.html` contains the root document, SEO metadata, and Open Graph tags.
- `src/main.jsx` mounts the React app.
- `src/App.jsx` composes the page sections and page-level browser behavior.
- `src/components.jsx` contains the landing page sections, header, footer, form, and shared UI blocks.
- `src/icons.jsx` defines inline SVG icons.
- `src/constants.js` stores contact values such as phone, WhatsApp, email, web URL, and message limits.
- `src/styles.css` contains the full stylesheet.
- `public/assets/` stores images and logo files served as static assets.
- `public/fonts/` stores local Montserrat font files.

## Build, Test, and Development Commands

Use `pnpm` because this repository includes `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev
pnpm run build
pnpm run preview
```

- `pnpm install` installs dependencies.
- `pnpm dev` starts the Vite development server at `http://localhost:5173`.
- `pnpm run build` creates the production-ready static output in `dist/`.
- `pnpm run preview` serves the built output locally for final checks.

## Coding Style & Naming Conventions

Use ES modules and React function components. Keep component names in PascalCase, constants in uppercase snake case when they are shared configuration values, and CSS classes aligned with the existing `l-*`, `hero__*`, and section-specific naming patterns.

Prefer two-space indentation in JSX and JavaScript. Keep copy and contact details centralized in `src/constants.js` when reused across the page. Static image references should use root-relative paths such as `/assets/logo.png`.

## Testing Guidelines

No automated test runner is configured in `package.json`. Before submitting changes, run:

```bash
pnpm run build
pnpm run preview
```

Manually verify the landing page, responsive layout, contact links, and WhatsApp form behavior. For visual edits, check desktop and mobile widths.

## Commit & Pull Request Guidelines

This checkout does not expose Git history, so no repository-specific commit convention can be inferred. Use short, imperative commits such as `Update contact form copy` or `Fix mobile hero spacing`.

Pull requests should include a concise description, affected sections, manual verification notes, and screenshots for visual changes. Mention any updates to contact data, SEO metadata, or deployment output expectations.

## Security & Configuration Tips

Do not hard-code private credentials. This app is static; deployment should upload the contents of `dist/` only. Keep public business contact settings in `src/constants.js`, and avoid adding server-only secrets to the frontend bundle.
