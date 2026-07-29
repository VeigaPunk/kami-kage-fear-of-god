# Verifier v1 — acceptance criteria

Created: 2026-07-30. Repo: VeigaPunk/kami-kage-fear-of-god @ aade4a9.

## Gates (must all pass)

1. `npm run typecheck` — exit 0
2. `npm run lint` — 0 errors, 0 warnings
3. `npx prettier --check .` — clean (with .prettierignore for generated/build output)
4. `npm run build` — exit 0
5. `public/media/runway.mp4` ≤ 10 MB (was 33 MB)
6. SEO/social: title, description, og:title/description/type/image, twitter card, theme-color, favicon present in root head
7. A11y: skip-to-content link targeting #main; decorative hero video aria-hidden; spec table th scope="col"; serial ticker respects prefers-reduced-motion
8. package.json name reflects the project
9. Browser smoke: dev server renders, no console errors (scripts/browser-smoke.mjs)

## Baseline (2026-07-30, see verifier/runs/)

- typecheck: PASS (0 errors)
- lint: PASS w/ 1 warning (unused eslint-disable in src/lib/auth/use-current-user.ts:59)
- prettier: FAIL — 25 files unformatted
- build: PASS
- runway.mp4: 33 MB — FAIL vs gate 5
- No OG/Twitter meta, no favicon, no theme-color — FAIL vs gate 6
- No skip link; hero video announced though decorative; table th lack scope; serial ticker ignores reduced-motion — FAIL vs gate 7
- package.json name = "app-builder-workspace" — FAIL vs gate 8

## Note on gate 5 delivery

The compressed video (33 MB → 3.0 MB, H.264 CRF 26, 1280w, faststart, no audio track) was verified locally. The GitHub MCP push path only supports UTF-8 text, so the binary swap could not be committed through it; the compressed asset is delivered alongside this polish pass for drop-in replacement of `public/media/runway.mp4`. All other gates are committed to main.
