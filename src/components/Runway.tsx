import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Ornament, ThreeStripes } from "./Ornament";
import { media } from "@/lib/assets";

/** Official ZHU, partywithray — Zhudio54 MV (not remix), first 59s. Muted until opt-in. */
export function Runway() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const startMuted = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setSoundOn(false);
    setStarted(true);
    v.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!started) {
      startMuted();
      return;
    }
    if (v.paused) {
      v.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!started) {
      startMuted();
    }
    const next = !soundOn;
    v.muted = !next;
    setSoundOn(next);
  };

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
                  <dt className="font-body text-[10px] uppercase tracking-label text-fg-subtle">
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

        <div className="mt-14 bg-bg-ink shadow-border">
          <div className="relative aspect-video w-full overflow-hidden">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              playsInline
              muted={!soundOn}
              preload="metadata"
              poster={media("zhudio54-poster.jpg")}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            >
              <source src={media("zhudio54.mp4")} type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col gap-4 border-t border-fg-inverse/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="font-body text-[10px] uppercase tracking-label text-fg-inverse/65">
                ZHU, partywithray — Zhudio54 (Official Music Video) · first 59s · muted until opt-in
                {started && !playing ? " · paused" : ""}
              </p>
            </div>
            <ThreeStripes tone="dark" size="sm" orientation="diagonal" className="shrink-0" />
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-fg-inverse/10 px-5 py-4">
            {!started ? (
              <button
                type="button"
                onClick={startMuted}
                aria-label="Play Zhudio54 muted — first 59 seconds"
                className="inline-flex h-11 items-center gap-2 border border-fg-inverse/35 bg-transparent px-4 text-fg-inverse/90 transition-colors hover:border-fg-inverse/60 hover:bg-fg-inverse/5"
              >
                <Play className="h-4 w-4 translate-x-px" strokeWidth={1.5} fill="currentColor" />
                <span className="font-body text-[10px] font-medium uppercase tracking-label">
                  Play muted · 0:59
                </span>
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? "Pause video" : "Play video"}
                  className="inline-flex h-11 w-11 items-center justify-center border border-fg-inverse/35 text-fg-inverse/90 transition-colors hover:border-fg-inverse/60 hover:bg-fg-inverse/5"
                >
                  {playing ? (
                    <Pause className="h-4 w-4" strokeWidth={1.5} />
                  ) : (
                    <Play className="h-4 w-4 translate-x-px" strokeWidth={1.5} />
                  )}
                </button>
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-pressed={soundOn}
                  aria-label={soundOn ? "Mute audio" : "Opt in — turn sound on"}
                  className="inline-flex h-11 items-center gap-2 border border-fg-inverse/35 px-3 text-fg-inverse/90 transition-colors hover:border-fg-inverse/60 hover:bg-fg-inverse/5"
                >
                  {soundOn ? (
                    <Volume2 className="h-4 w-4" strokeWidth={1.5} />
                  ) : (
                    <VolumeX className="h-4 w-4" strokeWidth={1.5} />
                  )}
                  <span className="font-body text-[10px] font-medium uppercase tracking-label">
                    {soundOn ? "Sound on" : "Sound off"}
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
