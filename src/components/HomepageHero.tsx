import React, { useEffect, useState } from "react";
import { useSplitTypewriter } from "./TypeWriter";
import { Button } from "@/components/ui/button";

const HomepageHero = () => {
  const heroHeadline = "Hire The Top 5% of India's Student Talent";
  const breakAfter = heroHeadline.indexOf("5%") + "5%".length;
  const heroSubtitle =
    "Hustlr is the fastest, easiest way to hire pre-vetted Gen Z students for design, content, tech, and research gigs — in hours, not weeks.";

  const [typedBefore, typedAfter] = useSplitTypewriter(
    heroHeadline,
    breakAfter,
    90
  );

  const isTyping = typedBefore.length + typedAfter.length < heroHeadline.length;

  return (
    <section className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Left side content */}
      <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display text-white text-pretty mb-8 leading-tight">
          {typedBefore}
          {typedBefore.length === breakAfter && <br />}
          {typedAfter}
          {isTyping && (
            <span className="inline-block w-1 h-10 sm:h-12 align-middle bg-white ml-2 animate-pulse" />
          )}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/70 font-serif leading-relaxed mb-12 max-w-xl">
          {heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
          <a href="/get-started">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-serif font-semibold text-base rounded-full"
            >
              Hire Now
            </Button>
          </a>
          <p className="text-sm sm:text-base text-white/60 font-serif">
            3000+ students on the waitlist
          </p>
        </div>
      </div>

      {/* Right side 3D images */}
      <div className="relative w-[45%] h-[80vh] hidden lg:block">
        <div className="absolute top-[10%] right-[10%] w-[240px] h-[480px] transform perspective-1000 animate-fadeInTop">
          <img
            src="/images/client.png"
            alt="Client UI"
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
            style={{
              transform: "rotateY(-20deg) rotateX(5deg) translateZ(100px)",
              transformStyle: "preserve-3d",
              transition: "transform 0.3s ease-out",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            onError={(e) => {
              console.error("Error loading client image:", e);
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="absolute top-[25%] right-[65%] w-[240px] h-[480px] transform perspective-1000 animate-fadeInBottom">
          <img
            src="/images/freelancer.png"
            alt="Freelancer UI"
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
            style={{
              transform: "rotateY(20deg) rotateX(5deg) translateZ(100px)",
              transformStyle: "preserve-3d",
              transition: "transform 0.3s ease-out",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            onError={(e) => {
              console.error("Error loading freelancer image:", e);
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
