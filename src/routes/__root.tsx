import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { asset } from "@/lib/assets";

const SITE_URL = "https://veigapunk.github.io/kami-kage-fear-of-god/";
const OG_IMAGE = `${SITE_URL}media/leather.jpg`;
const TITLE = "adidas Kami Kage × Fear of God — 祝融 · 三三三";
const DESCRIPTION =
  "Editorial exploration of the adidas Kami Kage × Fear of God collaboration — Zhu Rong coded leather set of 333 with matching randoseru.";
const OG_DESCRIPTION =
  "Three stripes. Three threes. One quiet fire — the Zhu Rong coded leather set of 333 with matching randoseru.";
const OG_IMAGE_ALT =
  "Kami Kage Fear of God Athletics × adidas Originals Superstar — leather edition";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: OG_IMAGE,
  url: SITE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": SITE_URL },
  about: [
    { "@type": "Thing", name: "adidas Kami Kage × Fear of God" },
    { "@type": "Thing", name: "Zhu Rong 祝融 numbered set of 333" },
  ],
  isAccessibleForFree: true,
  inLanguage: "en",
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Kami Kage — Editorial Concept" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1168" },
      { property: "og:image:height", content: "784" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: OG_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: asset("favicon.svg"), type: "image/svg+xml" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap",
      },
      {
        // CJK subset: only the glyphs this site renders (一二三四影火祝融鞄鞋)
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600&text=%E4%B8%80%E4%BA%8C%E4%B8%89%E5%9B%9B%E5%BD%B1%E7%81%AB%E7%A5%9D%E8%9E%8D%E9%9E%84%E9%9E%8B&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
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
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
