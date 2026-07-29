import { useEffect, useState } from "react";
import { Ornament, ThreeStripes } from "./Ornament";

const TOTAL = 333;

export function LimitedSet() {
  const [serial, setSerial] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setSerial((n) => (n >= TOTAL ? 1 : n + 1));
    }, 120);
    return () => window.clearInterval(id);
  }, []);

  const display = String(serial).padStart(3, "0");

  return (
    <section id="limited" className="border-b border-border bg-bg-ink text-fg-inverse">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <ThreeStripes tone="dark" size="sm" orientation="diagonal" />
              <span className="h-px w-6 bg-fg-inverse/20" />
              <span className="font-cjk text-sm tracking-wide-cjk text-fg-inverse/45" lang="zh">
                祝融
              </span>
              <span className="h-px w-6 bg-fg-inverse/20" />
              <p className="font-body text-[10px] font-medium uppercase tracking-label text-fg-inverse/45">
                03 — Numbered Edition
              </p>
            </div>

            <h2 className="mt-5 font-display text-4xl tracking-display text-balance sm:text-5xl lg:text-[3.5rem]">
              The{" "}
              <span className="font-cjk not-italic" lang="zh">
                三三三
              </span>{" "}
              leather set
            </h2>

            <Ornament tone="dark" className="mt-7 max-w-[7rem]" />

            <p className="mt-7 max-w-md font-body text-sm leading-relaxed text-fg-inverse/65 text-pretty sm:text-[0.95rem]">
              Three hundred thirty-three — three threes for adidas’s Three Stripes. In the tradition
              of Prada × Superstar limited duos: a shoe and a bag, twinned in material. Each Kami
              Kage Leather is hand-numbered under the Zhu Rong seal and sold exclusively with a
              white leather randoseru cut from the same hide.
            </p>

            {/* Elegant plaque */}
            <div className="mt-10 border border-fg-inverse/12 bg-fg-inverse/[0.03] p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-body text-[9px] uppercase tracking-label text-fg-inverse/40">
                    Serial plaque
                  </p>
                  <p
                    className="mt-4 font-mono text-4xl tabular-nums tracking-tight text-fg-inverse sm:text-5xl"
                    aria-hidden="true"
                  >
                    <span className="text-fg-inverse/30">#</span>
                    {display}
                  </p>
                  <p className="sr-only">Each unit is hand-numbered from 001 to 333.</p>
                  <p className="mt-1 font-body text-[11px] text-fg-inverse/40">of {TOTAL}</p>
                </div>
                <div className="flex flex-col items-center gap-3 border border-fg-inverse/20 px-4 py-3">
                  <ThreeStripes tone="dark" size="sm" orientation="diagonal" />
                  <span
                    className="font-cjk text-xl leading-none tracking-wide-cjk text-fg-inverse/80"
                    lang="zh"
                    aria-label="San San San — three three three"
                  >
                    三
                    <br />
                    三
                    <br />三
                  </span>
                </div>
              </div>
              <p className="mt-6 border-t border-fg-inverse/10 pt-5 font-body text-xs leading-relaxed text-fg-inverse/50">
                Each unit carries a unique number from 001 to 333, embossed beside the vertical{" "}
                <span className="font-cjk text-fg-inverse/70">三三三</span> seal — the Three Stripes
                rewritten as character — and mirrored inside the randoseru lid.
              </p>
            </div>

            <ul className="mt-9 space-y-0">
              {[
                "Full-grain optic white leather Kami Kage",
                "Matching randoseru, same hide",
                "Three Stripes · Zhu Rong seal + certificate",
                "Dual-compartment archival box",
              ].map((line, i) => (
                <li
                  key={line}
                  className="flex items-baseline gap-4 border-b border-fg-inverse/10 py-4 font-body text-sm text-fg-inverse/75"
                >
                  <span className="font-cjk text-xs text-fg-inverse/30">
                    {["一", "二", "三", "四"][i]}
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            <figure className="overflow-hidden border border-fg-inverse/10 sm:col-span-2">
              <img
                src="/media/set-pairing.jpg"
                alt="Kami Kage leather boots paired with white leather randoseru backpack"
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="flex items-center justify-between border-t border-fg-inverse/10 px-5 py-4">
                <span className="font-body text-[10px] uppercase tracking-label text-fg-inverse/45">
                  The set — footwear & randoseru
                </span>
                <ThreeStripes tone="dark" size="sm" orientation="diagonal" />
              </figcaption>
            </figure>
            <figure className="overflow-hidden border border-fg-inverse/10">
              <img
                src="/media/leather.png"
                alt="Kami Kage full-grain leather high-top"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-fg-inverse/10 px-4 py-3 font-body text-[9px] uppercase tracking-label text-fg-inverse/45">
                Kami Kage Leather
              </figcaption>
            </figure>
            <figure className="overflow-hidden border border-fg-inverse/10">
              <img
                src="/media/randoseru.jpg"
                alt="White leather randoseru backpack"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-fg-inverse/10 px-4 py-3 font-body text-[9px] uppercase tracking-label text-fg-inverse/45">
                Randoseru · White Leather
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
