import { Ornament, ThreeStripes } from "./Ornament";
import { media } from "@/lib/assets";

export function Hero() {
  return (
    <section id="top" className="relative min-h-dvh overflow-hidden bg-bg-ink text-fg-inverse">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          poster={media("leather.jpg")}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={media("runway.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(10_10_10)_0%,rgb(10_10_10/0.55)_42%,rgb(10_10_10/0.35)_100%)]" />
      </div>

      {/* Large watermark 三 */}
      <div
        className="pointer-events-none absolute right-[-4%] top-[18%] select-none font-cjk text-[min(42vw,18rem)] leading-none text-fg-inverse/[0.04]"
        aria-hidden="true"
        lang="zh"
      >
        三
      </div>

      <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="reveal flex items-center gap-4">
          <ThreeStripes tone="dark" size="sm" orientation="diagonal" />
          <span className="h-px w-6 bg-fg-inverse/25" />
          <span className="font-cjk text-sm tracking-wide-cjk text-fg-inverse/50" lang="zh">
            祝融
          </span>
          <span className="h-px w-6 bg-fg-inverse/25" />
          <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-inverse/55">
            Special Project · Concept
          </p>
        </div>

        <h1 className="reveal reveal-delay-1 mt-6 max-w-4xl font-display text-[3.25rem] leading-[0.92] tracking-display text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Kami Kage
        </h1>
        <p className="reveal reveal-delay-1 mt-3 font-display text-2xl italic tracking-display text-fg-inverse/70 sm:text-3xl md:text-4xl">
          adidas × Fear of God
        </p>

        <Ornament tone="dark" className="reveal reveal-delay-2 mt-8 max-w-xs" />

        <p className="reveal reveal-delay-2 mt-8 max-w-lg font-body text-sm leading-relaxed text-fg-inverse/65 sm:text-[0.95rem]">
          The house of the Three Stripes meets Fear of God volume — optic white leather and knit,
          sealed under Zhu Rong as a set of{" "}
          <span className="font-cjk text-fg-inverse/90">三三三</span> with a matching randoseru.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#editions"
            className="inline-flex h-12 items-center justify-center bg-fg-inverse px-8 font-body text-[10px] font-medium uppercase tracking-label text-fg transition-opacity hover:opacity-90"
          >
            View Editions
          </a>
          <a
            href="#runway"
            className="inline-flex h-12 items-center justify-center gap-3 border border-fg-inverse/30 px-8 font-body text-[10px] font-medium uppercase tracking-label text-fg-inverse transition-colors hover:border-fg-inverse/55 hover:bg-fg-inverse/5"
          >
            <ThreeStripes tone="dark" size="sm" />
            Watch Runway
          </a>
        </div>

        <div className="reveal reveal-delay-4 mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-fg-inverse/12 pt-8">
          {[
            { label: "Brand Mark", value: "stripes" as const },
            { label: "Leather Set", value: "三三三" },
            { label: "Includes", value: "鞋 · 鞄" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-body text-[9px] uppercase tracking-label text-fg-inverse/40">
                {stat.label}
              </p>
              {stat.value === "stripes" ? (
                <div className="mt-3">
                  <ThreeStripes tone="dark" size="md" orientation="diagonal" />
                </div>
              ) : (
                <p
                  className="mt-2 font-cjk text-xl leading-none text-fg-inverse/90 sm:text-2xl"
                  lang="zh"
                >
                  {stat.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
