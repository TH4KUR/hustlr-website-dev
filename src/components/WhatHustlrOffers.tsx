"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clientBenefits = [
  {
    title: "Top 5% Talent Only",
    description: "We vet every student so you don't have to.",
  },
  {
    title: "Swipe to Hire",
    description: "Simplified, quick hiring process.",
  },
  {
    title: "Find Future Employees",
    description: "Discover students you may want to recruit full-time.",
  },
  {
    title: "Replacement Guarantee",
    description: "If it's not right, we fix it.",
  },
];

const studentBenefits = [
  {
    title: "Easy Job Discovery",
    description: "Swipe, match, and start fast.",
  },
  {
    title: "Work with Real Clients",
    description: "No fake gigs, ever.",
  },
  {
    title: "Real World Experience",
    description: "Build a strong portfolio.",
  },
  {
    title: "Get Paid Fast & Fair",
    description: "Escrow-protected payouts.",
  },
];

const WhatHustlrOffers = ({ scrollY }: { scrollY: number }) => {
  const [tab, setTab] = useState("clients");
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const benefits = tab === "clients" ? clientBenefits : studentBenefits;

  useEffect(() => {
    if (!containerRef.current) return;

    console.log("[v0] WhatHustlrOffers: Initializing card animations", {
      cardCount: cardsRef.current.length,
    });

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const isLeftSide = index % 2 === 0;
      const fromX = isLeftSide ? -200 : 200;

      console.log("[v0] Animating card:", { index, isLeftSide, fromX });

      // Set initial state
      gsap.set(card, {
        opacity: 0,
        x: fromX,
      });

      // Animate in on scroll with staggered timing
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 55%",
          scrub: 1.5,
          markers: false,
        },
        opacity: 1,
        x: 0,
        duration: 1,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });

    return () => {
      console.log("[v0] Cleaning up WhatHustlrOffers animations");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [tab]);

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-32">
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-display text-white mb-20 text-balance">
          What Hustlr Offers
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-24 gap-4">
          <button
            onClick={() => handleTabChange("clients")}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-serif transition-all duration-300 text-base sm:text-lg ${
              tab === "clients"
                ? "bg-white text-black shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            For Clients
          </button>
          <button
            onClick={() => handleTabChange("students")}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-serif transition-all duration-300 text-base sm:text-lg ${
              tab === "students"
                ? "bg-white text-black shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            For Students
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div
          ref={containerRef}
          className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative h-72 sm:h-80 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 p-8 sm:p-10 overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif-display text-white mb-4 text-left">
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/70 font-serif leading-relaxed text-left">
                    {benefit.description}
                  </p>
                </div>

                {/* Icon placeholder */}
                <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white/60 group-hover:text-white/80 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatHustlrOffers;
