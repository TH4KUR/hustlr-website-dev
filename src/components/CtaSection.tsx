import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold mb-6 text-white text-balance"
        >
          Join the Waitlist
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-serif leading-relaxed"
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
          <a href="/get-started?type=student">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-serif font-semibold text-base rounded-full px-8"
            >
              Join as a Student
            </Button>
          </a>
          <a href="/get-started?type=client">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white/10 font-serif font-semibold text-base rounded-full px-8 border-white/50 hover:border-white"
            >
              Join as a Client
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
