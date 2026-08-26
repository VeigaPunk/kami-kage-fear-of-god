import { Ornament, ThreeStripes } from "./Ornament";
import { useI18n } from "@/i18n/useI18n";

function isCjkOnly(label: string) {
  return /[\u4e00-\u9fff]/.test(label) && !label.includes("·");
}

export function Footer() {
  const { t } = useI18n();

  const navLinks = [
    ["#story", t.nav.story],
    ["#zhurong", t.nav.zhurong],
    ["#editions", t.nav.editions],
    ["#limited", t.nav.limited],
    ["#runway", t.nav.runway],
    ["#details", t.nav.details],
  ] as const;

  const taglineParts = t.footer.tagline.split("祝融");

  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <ThreeStripes size="lg" orientation="diagonal" />
          <span className="mt-6 font-cjk text-2xl tracking-wide-cjk text-fg/20" lang="zh">
            三三三
          </span>
          <p className="mt-6 font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
            {t.nav.brand}
          </p>
          <p className="mt-4 max-w-lg font-display text-3xl tracking-display text-balance sm:text-4xl">
            {taglineParts.length > 1 ? (
              <>
                {taglineParts[0]}
                <span className="font-cjk" lang="zh">
                  祝融
                </span>
                {taglineParts[1]}
              </>
            ) : (
              t.footer.tagline
            )}
          </p>
          <Ornament className="mt-8 max-w-[10rem]" />
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-12 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              {t.footer.navigate}
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`text-sm text-fg-muted transition-colors hover:text-fg ${
                      isCjkOnly(label) ? "font-cjk tracking-wide-cjk" : "font-body"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              {t.footer.editions}
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-fg-muted">
              <li>{t.footer.edLeather}</li>
              <li>{t.footer.edKnit}</li>
              <li>{t.footer.edBag}</li>
            </ul>
          </div>
          <div>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              {t.footer.codex}
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-fg-muted">
              <li className="flex items-center gap-2">
                <ThreeStripes size="sm" /> {t.footer.threeStripes}
              </li>
              <li>{t.footer.three}</li>
              <li>{t.footer.zhurong}</li>
            </ul>
          </div>
          <div className="sm:col-span-3 lg:col-span-1">
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              {t.footer.note}
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-fg-muted text-pretty">
              {t.footer.noteBody}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
            {t.footer.bottom}
          </p>
          <p className="font-body text-[10px] text-fg-subtle">{t.footer.serial}</p>
        </div>
        <p className="mt-5 font-body text-[9px] tracking-wide text-fg-subtle/60 text-pretty sm:text-right">
          {t.footer.lead}
        </p>
      </div>
    </footer>
  );
}
