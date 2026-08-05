import { Ornament, ThreeStripes } from "./Ornament";
import { media } from "@/lib/assets";

export function Runway() {
  return (
    <section id="runway" className="border-b border-border bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
              04 — Presentation
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-display sm:text-5xl">
              On the floor
            </h2>
            <Ornament className="mt-6 max-w-[7rem]" />
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-fg-muted text-pretty">
              Concrete, glass, and silence. The collection debuted in a gallery setting — monochrome
              tailoring, the Kami Kage high-cut, and the slow walk that defines Fear of God presence
              over Three Stripes inheritance.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="grid grid-cols-3 gap-6">
              {[
                { k: "Venue", v: "Gallery" },
                { k: "Brand", v: "stripes" as const },
                { k: "Codex", v: "祝融" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="font-body text-[9px] uppercase tracking-label text-fg-subtle">
                    {item.k}
                  </dt>
                  {item.v === "stripes" ? (
                    <dd className="mt-3">
                      <ThreeStripes size="md" orientation="diagonal" />
                    </dd>
                  ) : (
                    <dd
                      className={`mt-2 text-xl tracking-display ${
                        item.v === "祝融" ? "font-cjk" : "font-display"
                      }`}
                    >
                      {item.v}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 overflow-hidden bg-bg-ink shadow-border">
          <div className="relative aspect-video w-full">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              poster={media("leather.jpg")}
              preload="metadata"
            >
              <source src={media("runway.mp4")} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col gap-2 border-t border-fg-inverse/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-[10px] uppercase tracking-label text-fg-inverse/50">
              Runway film — Kami Kage presentation
            </p>
            <ThreeStripes tone="dark" size="sm" orientation="diagonal" />
          </div>
        </div>
      </div>
    </section>
  );
}
