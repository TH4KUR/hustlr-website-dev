import Head from "next/head";
import Nav from "@/src/components/Nav";
import HomepageHero from "@/src/components/HomepageHero";
import CtaSection from "@/src/components/CtaSection";
import WhatHustlrOffers from "@/src/components/WhatHustlrOffers";
import HowHustlrWorks from "@/src/components/HowHustlrWorks";
import VisionSection from "@/src/components/VisionSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hustlr</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Hire top 5% of India's student talent. Fast, easy, and trusted freelancing platform."
        />
      </Head>
      <main className="relative bg-[#111] text-foreground w-full font-serif overflow-x-hidden">
        {/* HEADER BAR */}
        <Nav />
        {/* HERO SECTION CONTAINER */}
        <HomepageHero />
        {/* WHAT HUSTLR OFFERS SECTION */}
        <WhatHustlrOffers scrollY={0} />
        {/* HOW HUSTLR WORKS section */}
        <HowHustlrWorks />
        {/* VISION STATEMENT section */}
        <VisionSection />
        {/* Final CTA Section */}
        <CtaSection />
      </main>
    </>
  );
}
