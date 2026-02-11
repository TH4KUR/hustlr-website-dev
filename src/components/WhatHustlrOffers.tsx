import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clientBenefits = [
  "Top 5% Talent Only - We vet every student so you don't have to.",
  "Swipe to Hire - Simplified, quick hiring.",
  "Find Future Employees - Discover students you may want to recruit full-time.",
  "Replacement Guarantee - If it's not right, we fix it.",
];

const studentBenefits = [
  "Easy job discovery — Swipe, match, and start fast.",
  "Work with real clients — No fake gigs, ever.",
  "Gain real world experience — Build a strong portfolio.",
  "Get paid fast & fair — Escrow-protected payouts.",
];

function splitBenefit(benefit: string): { main: string; info: string } {
  const match = benefit.match(/(.+?)[\u2013\u2014-]+(.+)/);
  if (match) {
    return {
      main: match[1].trim(),
      info: match[2].trim(),
    };
  }
  return { main: benefit, info: "" };
}

const WhatHustlrOffers = ({ scrollY }: { scrollY: number }) => {
  const [tab, setTab] = useState("clients");
  const benefits = tab === "clients" ? clientBenefits : studentBenefits;
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".benefit-card");

    // Staggered card animations with better timing
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 55%",
            scrub: 0.5,
            markers: false,
          },
          duration: 0.6,
          delay: i * 0.08,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [benefits]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-24 scroll-snap-section"
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      }}
    >
      <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-normal mb-12 sm:mb-16 text-white">
        What Hustlr Offers
      </h2>
      {/* Tabs */}
      <div className="flex justify-center mb-12 gap-4 sm:gap-16">
        <button
          className={`px-6 sm:px-10 py-2 rounded-t-lg font-semibold transition-all duration-300 text-base sm:text-lg ${
            tab === "clients"
              ? "bg-white text-black shadow"
              : "bg-transparent text-white border-b-2 border-transparent hover:border-white"
          }`}
          onClick={() => setTab("clients")}
        >
          For Clients
        </button>
        <button
          className={`px-6 sm:px-10 py-2 rounded-t-lg font-semibold transition-all duration-300 text-base sm:text-lg ${
            tab === "students"
              ? "bg-white text-black shadow"
              : "bg-transparent text-white border-b-2 border-transparent hover:border-white"
          }`}
          onClick={() => setTab("students")}
        >
          For Students
        </button>
      </div>
      {/* Benefits */}
      <div
        ref={cardsRef}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4"
      >
        {benefits.map((benefit) => {
          const { main, info } = splitBenefit(benefit);
          return (
            <div
              key={benefit}
              className="benefit-card group relative flex flex-col items-center justify-center w-full aspect-square max-w-[280px] mx-auto bg-[#111] text-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 text-center transition-all duration-300 z-10">
                <span
                  className="font-ovo text-base sm:text-lg font-normal break-words transition-all duration-300 group-hover:text-black"
                  style={{ fontFamily: "'Ovo', serif" }}
                >
                  {main}
                </span>
                <span
                  className="opacity-0 group-hover:opacity-100 mt-3 sm:mt-4 text-sm sm:text-base font-ovo font-normal text-black transition-all duration-300 break-words"
                  style={{ fontFamily: "'Ovo', serif" }}
                >
                  {info}
                </span>
              </div>
              {/* Shadow/enlarge on hover */}
              <style jsx>{`
                .group:hover,
                .group:focus {
                  box-shadow:
                    0 8px 32px 0 rgba(0, 0, 0, 0.25),
                    0 1.5px 8px 0 #fff2;
                  transform: scale(1.05);
                }
              `}</style>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default WhatHustlrOffers;
