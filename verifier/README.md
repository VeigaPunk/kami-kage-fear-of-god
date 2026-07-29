# Verifier index (append-only)

## v1 — 2026-07-30

- File: `v1/criteria.md`
- Measures: typecheck, eslint (0 warnings), prettier, production build, video weight (≤10MB), SEO/OG/favicon head tags, a11y (skip link, decorative video hidden, th scope, reduced-motion ticker, sr-only serial text), package name, headless browser smoke with zero console errors.
- Baseline: 1 lint warning, 25 unformatted files, 33MB hero video, missing SEO/a11y items. All fixed and re-verified same day; final run: all gates PASS locally (see `runs/`). Binary video swap delivered out-of-band (MCP push is text-only).
