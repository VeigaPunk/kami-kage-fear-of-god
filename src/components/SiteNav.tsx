import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThreeStripes } from "./Ornament";

const links = [
  { href: "#story", label: "Story" },
  { href: "#zhurong", label: "Three · 祝融" },
  { href: "#editions", label: "Editions" },
  { href: "#limited", label: "三三三" },
  { href: "#runway", label: "Runway" },
  { href: "#details", label: "Details" },
];

function isCjk(label: string) {
  return /[\u4e00-\u9fff]/.test(label) && !label.includes("·");
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        light
          ? "border-b border-border/80 bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <ThreeStripes
            tone={light ? "light" : "dark"}
            size="sm"
            orientation="diagonal"
          />
          <span className="hidden h-4 w-px bg-current opacity-20 sm:block" />
          <span className="flex flex-col leading-none">
            <span
              className={`font-body text-[9px] font-medium uppercase tracking-label transition-colors ${
                light ? "text-fg-subtle" : "text-fg-inverse/55"
              }`}
            >
              Special Project
            </span>
            <span
              className={`mt-1 font-display text-base tracking-display transition-colors sm:text-lg ${
                light ? "text-fg" : "text-fg-inverse"
              }`}
            >
              adidas × Fear of God
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-[10px] font-medium transition-colors hover:opacity-100 ${
                isCjk(link.label)
                  ? "font-cjk text-[13px] tracking-wide-cjk"
                  : "uppercase tracking-label"
              } ${
                light
                  ? "text-fg-muted hover:text-fg"
                  : "text-fg-inverse/60 hover:text-fg-inverse"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#limited"
            className={`hidden items-center gap-2.5 px-4 py-2.5 font-body text-[10px] font-medium uppercase tracking-label transition-opacity hover:opacity-75 sm:inline-flex ${
              light ? "bg-fg text-fg-inverse" : "bg-fg-inverse text-fg"
            }`}
          >
            <ThreeStripes
              tone={light ? "dark" : "light"}
              size="sm"
            />
            Explore Set
          </a>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center lg:hidden ${
              light
                ? "border border-border text-fg"
                : "border border-fg-inverse/25 text-fg-inverse"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <nav className="flex flex-col px-5 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`border-b border-border py-4 text-fg ${
                  isCjk(link.label)
                    ? "font-cjk text-base tracking-wide-cjk"
                    : "font-body text-xs font-medium uppercase tracking-label"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
