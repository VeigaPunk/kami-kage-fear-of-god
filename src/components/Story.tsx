import { Ornament, ThreeStripes } from "./Ornament";

export function Story() {
  return (
    <section id="story" className="border-b border-border bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
              01 — The Dialogue
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-display text-balance sm:text-5xl">
              Three stripes,
              <br />
              sacred volume
            </h2>
            <Ornament className="mt-8 max-w-[8rem]" />
          </div>

          <div className="space-y-7 lg:col-span-7 lg:col-start-6">
            <p className="font-display text-[1.65rem] leading-[1.3] tracking-display text-pretty italic text-fg sm:text-3xl">
              adidas built a language of three — three stripes of motion,
              identity, and craft. Fear of God answers with volume and silence.
              Kami Kage is where they meet.
            </p>
            <p className="max-w-2xl font-body text-[0.95rem] leading-relaxed text-fg-muted text-pretty">
              Presented in the spirit of the legendary Prada × Superstar
              collaboration: optic white, exacting leather, dual heritage marks,
              and a limited duo that elevates footwear into an object of
              collection. Two expressions — knit for the everyday rite,
              full-grain leather for the archive — share the same silent
              architecture, and the same three-stripe inheritance.
            </p>
            <p className="max-w-2xl font-body text-[0.95rem] leading-relaxed text-fg-muted text-pretty">
              The leather Kami Kage is issued under the{" "}
              <span className="text-fg">Zhu Rong</span> code —{" "}
              <span className="font-cjk text-fg">三三三</span> units — three
              threes for the Three Stripes. Each pair is accompanied by a
              randoseru cut from the same white hide. A complete ritual of
              carry and step.
            </p>

            <dl className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
              {[
                {
                  k: "Brand",
                  v: "stripes" as const,
                  label: "Three Stripes",
                },
                { k: "Silhouette", v: "High-cut boot" as const, label: "High-cut boot" },
                { k: "Codex", v: "祝融 · 三" as const, label: "祝融 · 三" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="font-body text-[9px] uppercase tracking-label text-fg-subtle">
                    {item.k}
                  </dt>
                  {item.v === "stripes" ? (
                    <dd className="mt-3 flex items-center gap-3">
                      <ThreeStripes size="md" orientation="diagonal" />
                      <span className="font-display text-lg tracking-display">
                        {item.label}
                      </span>
                    </dd>
                  ) : (
                    <dd
                      className={`mt-2.5 text-xl tracking-display ${
                        String(item.v).includes("祝") || String(item.v).includes("三")
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
