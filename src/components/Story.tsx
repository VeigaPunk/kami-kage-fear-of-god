import { Ornament, ThreeStripes } from "./Ornament";
import { useI18n } from "@/i18n/I18nProvider";

export function Story() {
  const { t } = useI18n();
  const [titleLine1, titleLine2] = t.story.title.split("\n");

  return (
    <section id="story" className="border-b border-border bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
              {t.story.kicker}
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-display text-balance sm:text-5xl">
              {titleLine1}
              {titleLine2 ? (
                <>
                  <br />
                  {titleLine2}
                </>
              ) : null}
            </h2>
            <Ornament className="mt-8 max-w-[8rem]" />
          </div>

          <div className="space-y-7 lg:col-span-7 lg:col-start-6">
            <p className="font-display text-[1.65rem] leading-[1.3] tracking-display text-pretty italic text-fg sm:text-3xl">
              {t.story.lead}
            </p>
            <p className="max-w-2xl font-body text-[0.95rem] leading-relaxed text-fg-muted text-pretty">
              {t.story.p1}
            </p>
            <p className="max-w-2xl font-body text-[0.95rem] leading-relaxed text-fg-muted text-pretty">
              {t.story.p2}
            </p>

            <dl className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
              {(
                [
                  { k: t.story.brand, kind: "stripes" as const, label: t.story.brandLabel },
                  {
                    k: t.story.silhouette,
                    kind: "text" as const,
                    label: t.story.silhouetteLabel,
                  },
                  { k: t.story.codex, kind: "text" as const, label: t.story.codexLabel },
                ] as const
              ).map((item) => (
                <div key={item.k}>
                  <dt className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
                    {item.k}
                  </dt>
                  {item.kind === "stripes" ? (
                    <dd className="mt-3 flex items-center gap-3">
                      <ThreeStripes size="md" orientation="diagonal" />
                      <span className="font-display text-lg tracking-display">{item.label}</span>
                    </dd>
                  ) : (
                    <dd
                      className={`mt-2.5 text-xl tracking-display ${
                        item.label.includes("祝") || item.label.includes("三")
                          ? "font-cjk"
                          : "font-display"
                      }`}
                    >
                      {item.label}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
