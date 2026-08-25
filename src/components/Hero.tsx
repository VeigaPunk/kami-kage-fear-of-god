import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Ornament, ThreeStripes } from "./Ornament";
import { media } from "@/lib/assets";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        v.pause();
        setPlaying(false);
      } else {
        v.play().catch(() => {});
        setPlaying(true);
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="top" className="relative min-h-dvh overflow-hidden bg-bg-ink text-fg-inverse">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={media("leather.jpg")}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={media("runway.webm")} type="video/webm" />
          <source src={media("runway.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(10_10_10)_0%,rgb(10_10_10/0.55)_42%,rgb(10_10_10/0.35)_100%)]" />
      </div>

      {/* Large watermark 三 */}
      <div
        className="pointer-events-none absolute right-[-4%] top-[18%] select-none font-cjk text-[min(42vw,18rem)] leading-none text-fg-inverse/[0.04] md:right-[1%] md:top-[10%] md:text-[min(26vw,15rem)]"
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
        <p className="reveal reveal-delay-1 mt-3 font-display text-2xl italic tracking-display text-fg-inverse/70 sm:text-3xl md:text-4xl lg:text-[2.75rem]">
          adidas × Fear of God
        </p>

        <Ornament tone="dark" className="reveal reveal-delay-2 mt-8 max-w-xs" />

        <p className="reveal reveal-delay-2 mt-8 max-w-md font-body text-sm leading-relaxed text-fg-inverse/65 sm:max-w-lg sm:text-[0.95rem]">
          The house of the Three Stripes meets Fear of God volume — optic white leather and knit,
          sealed under Zhu Rong as a set of{" "}
          <span className="font-cjk text-fg-inverse/90">三三三</span> with a matching randoseru.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#editions"
            className="inline-flex h-12 w-full items-center justify-center bg-fg-inverse px-8 font-body text-[10px] font-medium uppercase tracking-label text-fg transition-opacity hover:opacity-90 sm:w-auto"
          >
            View Editions
          </a>
          <a
            href="#limited"
            className="inline-flex h-12 w-full items-center justify-center gap-3 border border-fg-inverse/30 px-8 font-body text-[10px] font-medium uppercase tracking-label text-fg-inverse transition-colors hover:border-fg-inverse/55 hover:bg-fg-inverse/5 sm:w-auto"
          >
            <ThreeStripes tone="dark" size="sm" />
            The Numbered Set
          </a>
        </div>

        <div className="reveal reveal-delay-4 mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-fg-inverse/12 pt-8">
          {[
            { label: "Brand Mark", value: "stripes" as const },
            { label: "Leather Set", value: "三三三" },
            { label: "Includes", value: "鞋 · 鞄" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-body text-[10px] uppercase tracking-label text-fg-inverse/70">
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

      <button
        type="button"
        onClick={toggleVideo}
        aria-pressed={!playing}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute bottom-5 right-5 z-10 inline-flex h-11 w-11 items-center justify-center border border-fg-inverse/30 text-fg-inverse/80 transition-colors hover:border-fg-inverse/60 hover:text-fg-inverse sm:bottom-8 sm:right-8"
      >
        {playing ? (
          <Pause className="h-4 w-4" strokeWidth={1.5} />
        ) : (
          <Play className="h-4 w-4" strokeWidth={1.5} />
        )}
      </button>
    </section>
  );
}
