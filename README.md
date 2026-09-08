# NOLBVIA Corporate

Production-oriented corporate experience for NOLBVIA — Systems & Aerospace
Engineering. The current site uses React, TypeScript and Vite with a global,
scroll-controlled 300-frame WebP canvas sequence.

NOLBVIA Development is available at `/development`. It is loaded as a separate,
lightweight route and does not mount or request the Corporate cinematic sequence.

Development has its own fixed cinematic background spanning Hero through footer.
Run `npm run optimize:development` after updating PNGs in
`public/development/sequence-source/`. The optimizer validates continuous numeric
filenames and consistent dimensions, retains originals, and writes quality-88 WebP
files plus a generated frame-count manifest into `public/development/sequence/`.
The browser reads only the WebP output. Its independent canvas retains at most
12 decoded frames on mobile or 24 on desktop, loads 2/3 images concurrently,
and follows native scrolling without autoplay. Reduced motion loads one frame.
Desktop uses proportional cover; portrait uses a shorter visual area and a dark
fade to limit cropping and protect text. Full-page scroll maps frames 001–300.
The build removes only Vite's generated copy of `sequence-source` from `dist/`;
the original PNGs remain in `public/development/sequence-source/`.

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
