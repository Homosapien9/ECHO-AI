# ECHO — The Sentient Core

A FrontEnd Battle 3.0-ready Next.js 14 landing page with:

- pricing matrix driven by a multi-dimensional config object
- ref-only price text updates with no parent re-renders
- responsive bento ↔ accordion switch with shared state persistence
- lightweight loader and deferred Three.js scene after TTI
- SEO metadata, robots, sitemap, semantic sections

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Deploy

Works on Vercel or any Node host that supports Next.js 14.

```bash
vercel --prod
```

## Notes

- Three.js scene mounts after idle time to protect TTI.
- Pricing text changes are direct DOM text updates via `useRef` + `textContent`.
- Loader is intentionally short to stay under the performance budget.
