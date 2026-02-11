import React from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold mb-16 sm:mb-20 text-white"
      >
        Hustlr's Promise
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl p-12 sm:p-16 border border-white/20 bg-white/5 backdrop-blur-sm"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold mb-8 text-white leading-tight text-balance">
            To redefine the standard for hiring top college talent — with speed,
            trust, and zero compromises
          </h3>

          <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed font-serif">
            At Hustlr, we're building the first freelance platform that truly
            cares for both sides — where trust isn't a feature, it's a commitment.
          </p>

          <div className="space-y-4 text-lg sm:text-xl text-white font-serif leading-relaxed">
            <p>This is the new future of freelancing.</p>
            <p className="text-white/80">
              Powered by Gen Z. Protected by Hustlr.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
