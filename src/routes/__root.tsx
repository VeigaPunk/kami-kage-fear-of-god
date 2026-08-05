import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import appCss from "../styles.css?url";
import { media } from "@/lib/assets";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "adidas Kami Kage × Fear of God — 祝融 · 三三三",
      },
      {
        name: "description",
        content:
          "Editorial exploration of the adidas Kami Kage × Fear of God collaboration — Zhu Rong coded leather set of 333 with matching randoseru.",
      },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "adidas Kami Kage × Fear of God — 祝融 · 三三三",
      },
      {
        property: "og:description",
        content:
          "Three stripes. Three threes. One quiet fire — the Zhu Rong coded leather set of 333 with matching randoseru.",
      },
      { property: "og:image", content: media("set-pairing.jpg") },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "adidas Kami Kage × Fear of God — 祝融 · 三三三",
      },
      {
        name: "twitter:description",
        content:
          "Three stripes. Three threes. One quiet fire — the Zhu Rong coded leather set of 333 with matching randoseru.",
      },
      { name: "twitter:image", content: media("set-pairing.jpg") },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Noto+Serif+JP:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-bg text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-fg focus:px-4 focus:py-2 focus:font-body focus:text-xs focus:uppercase focus:tracking-label focus:text-fg-inverse"
        >
          Skip to content
        </a>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
