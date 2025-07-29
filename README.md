# Remote App: mfe-remote-1 (React + Vite + Module Federation)

This is a **remote microfrontend** (`MFE_1`) built with:

- React 18+
- Vite
- @module-federation/enhanced
- Tailwind CSS v4 (optional)

It exposes components to a host app using Module Federation Runtime via `remoteEntry.js`.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

By default, the app will be available at:

```
http://localhost:3001/remoteEntry.js
```

## Exposed Modules

Defined in `vite.config.ts` using `federation()`:

```ts
exposes: {
  './ShowCase': './src/page/showcase.tsx',
  './NotFound': './src/pages/NotFound.tsx',

}
```

Usage from host:

```ts
import Button from "MFE_1/Button";
```

## Production Build

Build the remote:

```bash
pnpm build
```

This will generate `remoteEntry.js` in the `dist/` folder, which must be deployed and publicly accessible by the host.

## Netlify Deployment

Ensure the `remoteEntry.js` is served from the root.

Add a `_redirects` file (in `public/` or output root like `dist/`):

```
/*    /index.html   200
```

Optional: if the host is strict with CORS, add a `_headers` file:

```
/remoteEntry.js
  Access-Control-Allow-Origin: *
```

## TODOs

- [ ] Review what components should be exposed publicly.
- [ ] Tailwind CSS v4 is JIT-only and hard to coordinate across MFEs. Consider moving shared styles to a base library.
- [ ] Define types for each exposed module to help the host (e.g., `declare module 'MFE_1/Button'`).
- [ ] Consider extracting shared logic or UI elements into a common package (`@myorg/ui`).
- [ ] Set version constraints on shared libraries like `react`, `react-dom`, etc., to avoid runtime mismatches.
