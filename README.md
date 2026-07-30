# adidas Kami Kage × Fear of God

Editorial concept site for the **Kami Kage** collaboration — Three Stripes · 三 · 祝融 · 三三三 leather set with matching randoseru.

## Stack

- React 19 + TanStack Start / Router
- Tailwind CSS v4
- Vite 8 · Nitro (Vercel preset)

## Develop

Requires Node.js >= 22.12.

```bash
npm install
npm run dev        # http://localhost:8080
npm run build
npm run typecheck
npm run lint
npm run format     # prettier --write
```

Quality gates live in `verifier/` (acceptance criteria + timestamped run logs).

## Deploy (Vercel)

1. Import this repository in [Vercel](https://vercel.com/new)
2. Framework preset is detected via Nitro `vercel` output
3. Build command: `npm run build`
4. Deploy

## Concept

| Mark          | Meaning                   |
| ------------- | ------------------------- |
| Three Stripes | adidas brand identity     |
| 三            | Kanji for three           |
| 三三三        | 333 limited leather units |
| 祝融          | Zhu Rong — fire sovereign |

Not an official adidas or Fear of God product page — editorial concept exploration.

---
_Last push: 2026-07-30 (trigger redeploy)_
