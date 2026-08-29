# NOLBVIA Corporate

Production-oriented corporate experience for NOLBVIA — Systems & Aerospace
Engineering. The current site uses React, TypeScript and Vite with a global,
scroll-controlled 300-frame WebP canvas sequence.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

The production output is generated in `dist/`. Netlify configuration is kept in
`netlify.toml`.

## Cinematic sequence

Frames live in `public/sequence/` and must retain the exact naming convention
`ezgif-frame-001.webp` through `ezgif-frame-300.webp`. The canvas loader uses a
bounded LRU cache and progressive, directional preloading; it does not retain all
300 frames in memory.

## Brand assets

The approved raster source is currently `public/nolbvia.png`. Reserved official
SVG filenames and the promotion steps are documented in `public/brand/README.md`.
Those SVG slots must remain empty until the official vector files are supplied.
