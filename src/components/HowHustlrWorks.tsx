"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowHustlrWorks = () => {
  const clientSteps = [
    {
      title: "Join and get verified",
      description: "Upload ID and business documents for a trusted ecosystem.",
    },
    {
      title: "Post your gig",
      description: "Set your scope, timeline, and budget.",
    },
    {
      title: "Swipe and shortlist",
      description: "Discover top 5% student talent instantly.",
    },
    {
      title: "Chat and hire",
      description: "Connect, brief, and fund via escrow.",
    },
    {
      title: "Approve and pay",
      description: "Release payment after delivery, with replacement guarantee.",
    },
  ];

  const studentSteps = [
    {
      title: "Apply to Hustlr",
      description: "Share resume and personal details.",
    },
    {
      title: "Get shortlisted",
      description: "Skill test, portfolio check, and test project.",
    },
    {
      title: "Clear AI interview",
      description: "Prove you're top 5% material.",
    },
    {
      title: "Swipe to find gigs",
      description: "Discover paid, real-world projects.",
    },
    {
      title: "Deliver and earn",
      description: "Submit, get rated, and paid via escrow.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [tab, setTab] = useState("clients");
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !stepsContainerRef.current) return;

    // Create a ScrollTrigger to snap to each step
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center",
      end: "bottom center",
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        const progress = self.getVelocity() > 0 ? self.progress : self.progress;
        const stepIndex = Math.round(progress * 4);
        setActiveStep(Math.min(Math.max(stepIndex, 0), 4));
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    setActiveStep(0);
  };

  const steps = tab === "clients" ? clientSteps : studentSteps;

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20"
    >
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold mb-12 text-white">
          How Hustlr Works
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-16 gap-4">
          <button
            onClick={() => handleTabChange("clients")}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-serif font-semibold transition-all duration-300 text-base sm:text-lg ${
              tab === "clients"
                ? "bg-white text-black shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            For Clients
          </button>
          <button
            onClick={() => handleTabChange("students")}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-serif font-semibold transition-all duration-300 text-base sm:text-lg ${
              tab === "students"
                ? "bg-white text-black shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            For Students
          </button>
        </div>

        {/* Timeline Container */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Timeline Progress Dots */}
          <div className="flex justify-center items-center mb-12 gap-3 sm:gap-6">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif font-bold transition-all duration-300 ${
                    index <= activeStep
                      ? "bg-white text-black scale-100"
                      : "bg-white/20 text-white/50 scale-90"
                  }`}
                >
                  {index + 1}
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 w-12 sm:w-20 mx-1 sm:mx-2 transition-all duration-300 ${
                      index < activeStep ? "bg-white" : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div
            ref={stepsContainerRef}
            className="relative min-h-80 flex flex-col items-center justify-center"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-700 ease-out ${
                  index === activeStep
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="flex flex-col items-center px-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-white mb-4 text-balance">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl font-serif leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Message */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-sm sm:text-base text-white/60 font-serif italic">
              {tab === "clients"
                ? "Trust built-in every step. Verified clients only. Quality guaranteed or we replace."
                : "Top 5% only. Real gigs, verified clients, fast payments."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowHustlrWorks;
