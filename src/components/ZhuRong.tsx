import { Ornament, SanSeal, ThreeStripes } from "./Ornament";

const pillars = [
  {
    mark: "stripes" as const,
    kanji: "三",
    title: "Three Stripes",
    body: "adidas’s eternal mark — three parallel lines of motion. On Kami Kage they return as emboss, midsole cut, and the quiet logic of the whole set.",
  },
  {
    mark: "kanji" as const,
    kanji: "火",
    title: "Zhu Rong · 祝融",
    body: "The fire sovereign. Not chaos, but heat that clarifies form. The leather edition burns white — three stripes held in still flame.",
  },
  {
    mark: "kanji" as const,
    kanji: "影",
    title: "Kami Kage",
    body: "Divine shadow. Volume without noise. The silhouette that remains when the three stripes have finished speaking.",
  },
];

export function ZhuRong() {
  return (
    <section id="zhurong" className="border-b border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <SanSeal size="md" />
          <p className="mt-8 font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
            Codex · Three Stripes × 祝融
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-display text-balance sm:text-5xl md:text-6xl">
            Three is the brand.
            <br className="hidden sm:block" />
            Three is the seal.
          </h2>
          <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-fg-muted text-pretty sm:text-base">
            adidas is the house of the <span className="text-fg">Three Stripes</span> — three lines
            of heritage, performance, and identity. Here that mark meets the kanji{" "}
            <span className="font-cjk text-fg">三</span> and the fire of{" "}
            <span className="italic text-fg">Zhu Rong</span> (祝融). The limited leather set is
            coded <span className="font-cjk text-fg">三三三</span> — three hundred thirty-three
            units — three threes for the three stripes.
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
              Kanji · Three
            </p>
          </div>
          <span className="font-display text-2xl text-fg-subtle/40">→</span>
          <div className="flex flex-col items-center gap-2">
            <span className="font-cjk text-2xl leading-none tracking-wide-cjk text-fg" lang="zh">
              三三三
            </span>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              333 Units
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
                Three Stripes · 三 · 祝融
              </p>
            </div>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            <p className="font-display text-2xl leading-snug tracking-display italic text-pretty sm:text-3xl">
              “Three stripes built the house. Three threes close the archive. One fire keeps them
              white.”
            </p>
            <p className="font-body text-sm leading-relaxed text-fg-muted text-pretty">
              On each leather tongue, the serial sits beside a vertical seal:{" "}
              <span className="font-cjk text-fg">三三三</span> — the three stripes rewritten as
              character. The same mark is foil-stamped inside the randoseru lid. Collectors do not
              own “number 47” alone — they own one of three-hundred-thirty-three vessels of the
              brand’s oldest number.
            </p>
            <a
              href="#limited"
              className="inline-flex items-center gap-3 pt-2 font-body text-[11px] font-medium uppercase tracking-label text-fg transition-opacity hover:opacity-55"
            >
              <ThreeStripes size="sm" />
              <span className="h-px w-6 bg-fg" />
              Enter the numbered set
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
