import { Ornament, SanSeal, ThreeStripes } from "./Ornament";
import { useI18n } from "@/i18n/I18nProvider";

export function ZhuRong() {
  const { t } = useI18n();
  const [titleLine1, titleLine2] = t.zhurong.title.split("\n");

  const pillars = [
    {
      mark: "stripes" as const,
      kanji: "三",
      title: t.zhurong.p1Title,
      body: t.zhurong.p1Body,
    },
    {
      mark: "kanji" as const,
      kanji: "火",
      title: t.zhurong.p2Title,
      body: t.zhurong.p2Body,
    },
    {
      mark: "kanji" as const,
      kanji: "影",
      title: t.zhurong.p3Title,
      body: t.zhurong.p3Body,
    },
  ];

  return (
    <section id="zhurong" className="border-b border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <SanSeal size="md" />
          <p className="mt-8 font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
            {t.zhurong.kicker}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-display text-balance sm:text-5xl md:text-6xl">
            {titleLine1}
            {titleLine2 ? (
              <>
                <br className="hidden sm:block" />
                {titleLine2}
              </>
            ) : null}
          </h2>
          <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-fg-muted text-pretty sm:text-base">
            {t.zhurong.body}
          </p>
        </div>

        <Ornament className="mx-auto mt-14 max-w-md" />

        {/* Visual bridge: stripes → 三 → 333 */}
        <div className="mx-auto mt-14 flex max-w-lg flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
          <div className="flex flex-col items-center gap-3">
            <ThreeStripes size="lg" orientation="diagonal" />
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">adidas</p>
          </div>
          <span className="font-display text-2xl text-fg-subtle/40">→</span>
          <div className="flex flex-col items-center gap-2">
            <span className="font-cjk text-4xl leading-none text-fg" lang="zh">
              三
            </span>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              {t.zhurong.kanjiThree}
            </p>
          </div>
          <span className="font-display text-2xl text-fg-subtle/40">→</span>
          <div className="flex flex-col items-center gap-2">
            <span className="font-cjk text-2xl leading-none tracking-wide-cjk text-fg" lang="zh">
              三三三
            </span>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              {t.zhurong.units}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="flex flex-col bg-bg-elevated px-7 py-10 sm:px-8 sm:py-12"
            >
              {p.mark === "stripes" ? (
                <ThreeStripes size="lg" orientation="diagonal" className="mb-1" />
              ) : (
                <span className="font-cjk text-4xl leading-none text-fg sm:text-5xl" lang="zh">
                  {p.kanji}
                </span>
              )}
              <h3 className="mt-6 font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
                {p.title}
              </h3>
              <p className="mt-3 font-display text-xl leading-snug tracking-display text-pretty text-fg sm:text-2xl">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border border-border bg-bg p-8 sm:p-12 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between gap-8 lg:col-span-4">
            <div>
              <ThreeStripes size="md" orientation="diagonal" />
              <p
                className="mt-5 font-cjk text-4xl leading-none tracking-wide-cjk text-fg/20 sm:text-5xl"
                lang="zh"
              >
                三
              </p>
              <p className="mt-4 font-body text-[10px] uppercase tracking-label text-fg-subtle">
                {t.zhurong.bridge}
              </p>
            </div>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            <p className="font-display text-2xl leading-snug tracking-display italic text-pretty sm:text-3xl">
              {t.zhurong.quote}
            </p>
            <p className="font-body text-sm leading-relaxed text-fg-muted text-pretty">
              {t.zhurong.after}
            </p>
            <a
              href="#limited"
              className="inline-flex items-center gap-3 pt-2 font-body text-[11px] font-medium uppercase tracking-label text-fg transition-opacity hover:opacity-55"
            >
              <ThreeStripes size="sm" />
              <span className="h-px w-6 bg-fg" />
              {t.zhurong.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
