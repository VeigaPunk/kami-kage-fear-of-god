import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

// `0.0.0.0:8080` is the live-preview contract — don't change host/port.
// Keep `nitro` gated to `build`: enabled in dev it opens a second dev-server
// port, which breaks the single-port preview.
//
// GitHub Pages: scripts/build-pages.mjs sets GITHUB_PAGES=true so the project
// base path is used, then SSR-snapshots the vercel-preset output to static
// files (the nitro github_pages preset is incompatible with this stack).
const isGithubPages =
  process.env.NITRO_PRESET === "github_pages" || process.env.GITHUB_PAGES === "true";
const nitroPreset = process.env.NITRO_PRESET || (isGithubPages ? "github_pages" : "vercel");
const base = isGithubPages ? "/kami-kage-fear-of-god/" : "/";

export default defineConfig(({ command }) => ({
  base,
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    // Allow Cloudflare Tunnel / preview proxy hosts in dev
    allowedHosts: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    ...(command === "build" ? [nitro({ preset: nitroPreset })] : []),
    viteReact(),
  ],
}));
