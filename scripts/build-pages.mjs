#!/usr/bin/env node
/**
 * Build a static GitHub Pages site from the TanStack Start + Nitro Vercel output.
 * Nitro's github_pages preset fails with this stack; instead we:
 *  1. Build with base `/kami-kage-fear-of-god/` + vercel nitro preset
 *  2. SSR-render `/` via the serverless fetch handler
 *  3. Write index.html + 404.html into the static asset tree
 *  4. Emit `.output/public` for actions/upload-pages-artifact
 */
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const base = "/kami-kage-fear-of-god/";
const staticDir = join(root, ".vercel/output/static");
const outDir = join(root, ".output/public");

console.log("[build-pages] building with GitHub Pages base…");
const env = {
  ...process.env,
  GITHUB_PAGES: "true",
  NITRO_PRESET: "vercel",
};
const build = spawnSync("npx", ["vite", "build"], {
  cwd: root,
  env,
  stdio: "inherit",
  shell: false,
});
if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const entry = pathToFileURL(join(root, ".vercel/output/functions/__server.func/index.mjs")).href;
const { default: handler } = await import(entry);
if (!handler?.fetch) {
  console.error("[build-pages] serverless handler has no fetch()");
  process.exit(1);
}

async function render(pathname) {
  const url = `https://veigapunk.github.io${base.replace(/\/$/, "")}${pathname === "/" ? "/" : pathname}`;
  const res = await handler.fetch(new Request(url));
  const html = await res.text();
  if (res.status >= 500 || !html.includes("Kami Kage")) {
    console.error(
      `[build-pages] render ${pathname} failed status=${res.status} len=${html.length}`,
    );
    process.exit(1);
  }
  return html;
}

console.log("[build-pages] SSR-rendering / …");
const indexHtml = await render("/");
// SPA fallback for unknown paths on GitHub Pages
const notFoundHtml = indexHtml;

// Ensure media + assets land in Pages artifact root
if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
cpSync(staticDir, outDir, { recursive: true });
writeFileSync(join(outDir, "index.html"), indexHtml);
writeFileSync(join(outDir, "404.html"), notFoundHtml);

// GitHub Pages project sites need no .nojekyll for most assets; still useful
writeFileSync(join(outDir, ".nojekyll"), "");

console.log("[build-pages] wrote", outDir);
console.log("[build-pages] index.html bytes", readFileSync(join(outDir, "index.html")).length);
// quick sanity: leather image referenced
const html = readFileSync(join(outDir, "index.html"), "utf8");
if (!html.includes("leather.jpg")) {
  console.warn("[build-pages] warning: leather.jpg not found in HTML");
}
if (!existsSync(join(outDir, "media/leather.jpg"))) {
  console.error("[build-pages] media/leather.jpg missing from output");
  process.exit(1);
}
console.log("[build-pages] done");
