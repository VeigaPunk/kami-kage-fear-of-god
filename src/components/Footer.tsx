import { Ornament, ThreeStripes } from "./Ornament";

export function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <ThreeStripes size="lg" orientation="diagonal" />
          <span className="mt-6 font-cjk text-2xl tracking-wide-cjk text-fg/20" lang="zh">
            三三三
          </span>
          <p className="mt-6 font-body text-[10px] font-medium uppercase tracking-label text-fg-subtle">
            adidas × Fear of God
          </p>
          <p className="mt-4 max-w-lg font-display text-3xl tracking-display text-balance sm:text-4xl">
            Three stripes. Three threes. One quiet fire —{" "}
            <span className="font-cjk" lang="zh">
              祝融
            </span>
            .
          </p>
          <Ornament className="mt-8 max-w-[10rem]" />
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-12 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                ["#story", "Story"],
                ["#zhurong", "Three · 祝融"],
                ["#editions", "Editions"],
                ["#limited", "三三三"],
                ["#runway", "Runway"],
                ["#details", "Details"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`text-sm text-fg-muted transition-colors hover:text-fg ${
                      label === "三三三" ? "font-cjk tracking-wide-cjk" : "font-body"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
              Editions
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-fg-muted">
              <li>Leather · 三三三</li>
              <li>Knit · Open</li>
              <li>Randoseru set</li>
            </ul>
          </div>
          <div>
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">Codex</p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-fg-muted">
              <li className="flex items-center gap-2">
                <ThreeStripes size="sm" /> Three Stripes
              </li>
              <li>
                <span className="font-cjk">三</span> · Three
              </li>
              <li>
                <span className="font-cjk">祝融</span> · Zhu Rong
              </li>
            </ul>
          </div>
          <div className="sm:col-span-3 lg:col-span-1">
            <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">Note</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-fg-muted text-pretty">
              Conceptual editorial exploration inspired by luxury sport collaborations. Not an
              official product page.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
            Special project · Editorial concept
          </p>
          <p className="font-body text-[10px] text-fg-subtle">
            Three Stripes · #001—#333 · <span className="font-cjk tracking-wide-cjk">三三三</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
