import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Ornament, ThreeStripes } from "./Ornament";
import { media } from "@/lib/assets";

const ctrlBtn =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center border border-fg-inverse/30 text-fg-inverse/80 transition-colors hover:border-fg-inverse/60 hover:text-fg-inverse";

/** Official ZHU, partywithray — Zhudio54 MV (not remix), first 59s. Muted until opt-in. */
export function Runway() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  // Keep the DOM property in sync — attribute alone is flaky across browsers.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !soundOn;
    if (soundOn) v.volume = 1;
  }, [soundOn]);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!started || v.paused) {
      play();
      return;
    }
    v.pause();
    setPlaying(false);
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !soundOn;
    v.muted = !next;
    if (next) v.volume = 1;
    setSoundOn(next);
    // Opt-in sound from a user gesture — start playback if idle.
    if (next && (v.paused || !started)) {
      setStarted(true);
      v.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
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
              preload="auto"
              poster={media("zhudio54-poster.jpg")}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            >
              <source src={media("zhudio54.mp4")} type="video/mp4" />
            </video>
          </div>

          <div className="flex items-center gap-3 border-t border-fg-inverse/10 px-5 py-4">
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={soundOn}
              aria-label={soundOn ? "Mute Zhudio54" : "Opt in — turn Zhudio54 sound on"}
              className={ctrlBtn}
            >
              {soundOn ? (
                <Volume2 className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <VolumeX className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pause Zhudio54" : "Play Zhudio54 muted"}
              className={ctrlBtn}
            >
              {playing ? (
                <Pause className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Play className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>

            <div className="min-w-0 flex-1">
              <p className="font-body text-[10px] uppercase tracking-label text-fg-inverse/65">
                ZHU — Zhudio54 (Official) · 0:59
                {soundOn ? " · sound on" : " · muted"}
                {started && !playing ? " · paused" : ""}
              </p>
            </div>
            <ThreeStripes tone="dark" size="sm" orientation="diagonal" className="shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
