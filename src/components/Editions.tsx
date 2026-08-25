import { Ornament, ThreeStripes } from "./Ornament";
import { media } from "@/lib/assets";
import { useI18n } from "@/i18n/I18nProvider";

export function Editions() {
  const { t } = useI18n();

  const editions = [
    {
      id: "leather",
      label: t.editions.leatherLabel,
      name: t.editions.leatherName,
      tag: t.editions.leatherTag,
      material: t.editions.leatherMaterial,
      description: t.editions.leatherDesc,
      image: media("leather.jpg"),
      specs: t.editions.leatherSpecs,
      cta: t.editions.leatherCta,
    },
    {
      id: "knit",
      label: t.editions.knitLabel,
      name: t.editions.knitName,
      tag: t.editions.knitTag,
      material: t.editions.knitMaterial,
      description: t.editions.knitDesc,
      image: media("knit.jpg"),
      specs: t.editions.knitSpecs,
      cta: t.editions.knitCta,
    },
  ];

  return (
    <section id="editions" className="border-b border-border bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
              {t.editions.kicker}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-display sm:text-5xl">
              {t.editions.title}
            </h2>
            <Ornament className="mt-6 max-w-[7rem]" />
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-fg-muted">
            {t.editions.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {editions.map((item) => (
            <article key={item.id} className="group flex flex-col bg-bg-elevated shadow-border">
              <div className="relative aspect-[5/4] overflow-hidden bg-bg-soft">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute left-0 top-0 flex">
                  <span className="bg-bg-elevated/95 px-4 py-2.5 font-body text-[10px] font-medium uppercase tracking-label text-fg backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col px-7 py-8 sm:px-9 sm:py-10">
                <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
                  {item.label} · {item.material}
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-display">{item.name}</h3>
                <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-fg-muted text-pretty">
                  {item.description}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {item.specs.map((spec) => (
                    <li
                      key={spec}
                      className="border border-border px-3 py-1.5 font-body text-[10px] text-fg-muted"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.id === "leather" ? "#limited" : "#details"}
                  className="mt-9 inline-flex w-fit items-center gap-3 font-body text-[10px] font-medium uppercase tracking-label text-fg transition-opacity hover:opacity-50"
                >
                  {item.id === "leather" ? (
                    <>
                      <ThreeStripes size="sm" />
                      {item.cta}
                    </>
                  ) : (
                    item.cta
                  )}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
