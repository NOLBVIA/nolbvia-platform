# NOLBVIA brand asset slots

The current production fallback is the approved raster source at `/nolbvia.png`.
No vector logo has been inferred or redrawn from that file.

When the official vector package is supplied, add these exact files:

- `nolbvia-logo.svg`
- `nolbvia-logo-dark.svg`
- `nolbvia-logo-light.svg`
- `nolbvia-isotipo.svg`
- `nolbvia-favicon.svg`

After the files are added, update `src/config/brand.ts` and the favicon links in
`index.html` to promote the official SVG variants. Do not use generated or traced
substitutes for these slots.
