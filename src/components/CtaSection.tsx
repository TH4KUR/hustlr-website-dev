import React, { useEffect, useRef } from "react";
import MixedHeadline from "./MixedHeadline";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const container = sectionRef.current.querySelector(".max-w-4xl");
    if (container) {
      gsap.fromTo(
        container,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            markers: false,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-[50vh] text-center px-4 py-16 sm:py-32 bg-[#111]/20 scroll-snap-section"
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-8 text-white"
        >
          Join the Waitlist
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
        >
          Be among the first to experience the future of student freelancing.
          Limited spots available.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="/get-started?type=student"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold text-base sm:text-lg shadow-lg hover:scale-105 hover:bg-black hover:text-white border border-white transition-all duration-300"
          >
            Join as a Student
          </a>
          <a
            href="/get-started?type=client"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-transparent text-white font-semibold text-base sm:text-lg shadow-lg hover:scale-105 hover:bg-white hover:text-black border border-white transition-all duration-300"
          >
            Join as a Client
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
