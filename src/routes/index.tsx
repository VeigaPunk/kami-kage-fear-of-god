import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/i18n/I18nProvider";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { ZhuRong } from "@/components/ZhuRong";
import { Editions } from "@/components/Editions";
import { LimitedSet } from "@/components/LimitedSet";
import { Runway } from "@/components/Runway";
import { Details } from "@/components/Details";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const targets = Array.from(document.querySelectorAll("main section:not(#top) > div"));
    if (targets.length === 0) return;
    for (const el of targets) el.classList.add("reveal-scroll");
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );
    for (const el of targets) io.observe(el);
    return () => {
      io.disconnect();
      document.documentElement.classList.remove("js-reveal");
      for (const el of targets) el.classList.remove("reveal-scroll", "is-revealed");
    };
  }, []);

  return (
    <I18nProvider>
      <div className="min-h-dvh">
        <SiteNav />
        <main id="main">
          <Hero />
          <Story />
          <ZhuRong />
          <Editions />
          <LimitedSet />
          <Runway />
          <Details />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
