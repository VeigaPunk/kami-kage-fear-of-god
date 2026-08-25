import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThreeStripes } from "./Ornament";
import { useI18n } from "@/i18n/I18nProvider";
import { LOCALE_META, type Locale } from "@/i18n/types";

function isCjk(label: string) {
  return /[\u4e00-\u9fff]/.test(label) && !label.includes("·");
}

export function SiteNav() {
  const { t, locale, setLocale, locales } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#story", label: t.nav.story },
    { href: "#zhurong", label: t.nav.zhurong },
    { href: "#editions", label: t.nav.editions },
    { href: "#limited", label: t.nav.limited },
    { href: "#runway", label: t.nav.runway },
    { href: "#details", label: t.nav.details },
  ];

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

  const langSelect = (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t.nav.lang}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className={`appearance-none border bg-transparent py-2 pl-2.5 pr-7 font-body text-[10px] font-medium uppercase tracking-label outline-none ${
          light
            ? "border-border text-fg-muted hover:text-fg"
            : "border-fg-inverse/25 text-fg-inverse/70 hover:text-fg-inverse"
        }`}
        aria-label={t.nav.lang}
      >
        {locales.map((code) => (
          <option key={code} value={code} className="bg-bg text-fg">
            {LOCALE_META[code].native}
          </option>
        ))}
      </select>
    </label>
  );

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
          <ThreeStripes tone={light ? "light" : "dark"} size="sm" orientation="diagonal" />
          <span className="hidden h-4 w-px bg-current opacity-20 sm:block" />
          <span className="flex flex-col leading-none whitespace-nowrap">
            <span
              className={`font-body text-[10px] font-medium uppercase tracking-label transition-colors ${
                light ? "text-fg-subtle" : "text-fg-inverse/55"
              }`}
            >
              {t.nav.special}
            </span>
            <span
              className={`mt-1 font-display text-base tracking-display transition-colors sm:text-lg ${
                light ? "text-fg" : "text-fg-inverse"
              }`}
            >
              {t.nav.brand}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-[10px] font-medium transition-colors hover:opacity-100 ${
                isCjk(link.label)
                  ? "font-cjk text-[13px] tracking-wide-cjk"
                  : "uppercase tracking-label"
              } ${
                light ? "text-fg-muted hover:text-fg" : "text-fg-inverse/60 hover:text-fg-inverse"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">{langSelect}</div>
          <a
            href="#limited"
            className={`hidden items-center gap-2.5 px-4 py-2.5 font-body text-[10px] font-medium uppercase tracking-label transition-opacity hover:opacity-75 sm:inline-flex ${
              light ? "bg-fg text-fg-inverse" : "bg-fg-inverse text-fg"
            }`}
          >
            <ThreeStripes tone={light ? "dark" : "light"} size="sm" />
            {t.nav.explore}
          </a>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center lg:hidden ${
              light ? "border border-border text-fg" : "border border-fg-inverse/25 text-fg-inverse"
            }`}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
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
          <nav className="flex flex-col px-5 py-2" aria-label="Primary">
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
            <div className="py-4 sm:hidden">{langSelect}</div>
          </nav>
        </div>
      )}
    </header>
  );
}
