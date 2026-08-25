import { Ornament, ThreeStripes } from "./Ornament";
import { useI18n } from "@/i18n/useI18n";

export function Details() {
  const { t } = useI18n();
  const rows = t.details.rows;

  return (
    <section id="details" className="border-b border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
            {t.details.kicker}
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-display sm:text-5xl lg:text-6xl">
            {t.details.title}
          </h2>
          <Ornament className="mt-6 max-w-[7rem]" />
          <p className="mt-6 font-body text-sm leading-relaxed text-fg-muted text-pretty">
            {t.details.intro}
          </p>
        </div>

        {/* mobile stacked cards */}
        <div className="mt-14 space-y-4 sm:hidden">
          {rows.map((row) => (
            <div key={row.label} className="border-b border-border pb-4">
              <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
                {row.label}
              </p>
              <p className="mt-2 font-body text-lg tracking-normal text-fg">{row.leather}</p>
              <p className="mt-1 font-body text-base tracking-normal text-fg-muted">{row.knit}</p>
            </div>
          ))}
        </div>

        {/* tablet+ table */}
        <div
          className="mt-14 hidden overflow-x-auto focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-fg sm:block"
          role="region"
          aria-label={t.details.tableAria}
          tabIndex={0}
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="pb-5 pr-4 text-left font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle"
                >
                  {t.details.spec}
                </th>
                <th
                  scope="col"
                  className="pb-5 pr-4 text-left font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle"
                >
                  {t.details.colLeather}
                </th>
                <th
                  scope="col"
                  className="pb-5 text-left font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle"
                >
                  {t.details.colKnit}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th
                    scope="row"
                    className="py-6 pr-4 text-left font-body text-[10px] font-medium uppercase tracking-label text-fg-muted"
                  >
                    {row.label}
                  </th>
                  <td className="py-6 pr-4 align-top font-body text-base tracking-normal text-fg sm:text-lg">
                    {row.leather.includes("三") ||
                    row.leather.includes("Zhu") ||
                    row.leather.includes("Three") ? (
                      <span
                        className={
                          row.leather.includes("三") ? "font-cjk text-[1.05em]" : undefined
                        }
                      >
                        {row.leather}
                      </span>
                    ) : (
                      row.leather
                    )}
                  </td>
                  <td className="py-6 align-top font-body text-base tracking-normal text-fg sm:text-lg">
                    {row.knit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
          {[
            {
              mark: "stripes" as const,
              title: t.details.c1Title,
              body: t.details.c1Body,
            },
            {
              mark: "三" as const,
              title: t.details.c2Title,
              body: t.details.c2Body,
            },
            {
              mark: "鞄" as const,
              title: t.details.c3Title,
              body: t.details.c3Body,
            },
          ].map((card) => (
            <article key={card.title} className="bg-bg-elevated p-7 sm:p-9">
              {card.mark === "stripes" ? (
                <ThreeStripes size="md" orientation="diagonal" />
              ) : (
                <span className="font-cjk text-2xl text-fg/25" lang="zh">
                  {card.mark}
                </span>
              )}
              <h3 className="mt-5 font-display text-2xl tracking-display">{card.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-fg-muted text-pretty">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
