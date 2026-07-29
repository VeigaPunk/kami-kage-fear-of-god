import { createFileRoute } from "@tanstack/react-router";
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
  return (
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
  );
}
