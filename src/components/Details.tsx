import { Ornament, ThreeStripes } from "./Ornament";

const rows = [
  { label: "Model", leather: "Kami Kage Leather", knit: "Kami Kage Knit" },
  { label: "Upper", leather: "Full-grain optic white leather", knit: "Engineered monochrome knit" },
  { label: "Brand mark", leather: "Three Stripes emboss + 三 seal", knit: "Three Stripes knit-in" },
  {
    label: "Closure",
    leather: "Cross wrap strap with emboss",
    knit: "Cross wrap strap with emboss",
  },
  { label: "Midsole", leather: "Unit sole + translucent air", knit: "Unit sole + translucent air" },
  { label: "Edition", leather: "三三三 · Zhu Rong sealed", knit: "Open release" },
  { label: "Companion", leather: "White leather randoseru", knit: "—" },
  { label: "Presentation", leather: "Archival box + 三 plaque", knit: "Standard box" },
];

export function Details() {
  return (
    <section id="details" className="border-b border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
            05 — Specifications
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-display sm:text-5xl lg:text-6xl">
            Side by side
          </h2>
          <Ornament className="mt-6 max-w-[7rem]" />
          <p className="mt-6 font-body text-sm leading-relaxed text-fg-muted text-pretty">
            Same bones, different skins — both carry the Three Stripes. The leather path is
            exclusive under Zhu Rong; the knit path is continuous.
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
          aria-label="Kami Kage specifications"
          tabIndex={0}
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="pb-5 pr-4 text-left font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle"
                >
                  Spec
                </th>
                <th
                  scope="col"
                  className="pb-5 pr-4 text-left font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle"
                >
                  Leather · 三三三
                </th>
                <th
                  scope="col"
                  className="pb-5 text-left font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle"
                >
                  Knit
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
              title: "Three Stripes",
              body: "adidas’s core identity — three parallel lines of motion — embossed, knit-in, and echoed as the 三 seal on every leather unit.",
            },
            {
              mark: "三" as const,
              title: "Numbering",
              body: "Hand-applied plaques from 001–333 beside the vertical 三三三 seal. Three threes for the three stripes. No reprints.",
            },
            {
              mark: "鞄" as const,
              title: "Randoseru",
              body: "Japanese schoolbag architecture — rigid structure, top handle, dual straps — in pure white leather, matched to the shoe.",
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
