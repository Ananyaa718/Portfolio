"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroRevealTextProps {
  scrollYProgress: MotionValue<number>;
}

export function HeroRevealText({ scrollYProgress }: HeroRevealTextProps) {
  // Reveal opacity and scale as user scrolls
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [0.12, 0.45, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.95, 1.05]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0 w-full max-w-full">
      <motion.div
        style={{ opacity, scale, y }}
        className="w-full max-w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >
        {/* Giant Cropped Wordmark Behind Badge */}
        <span className="font-display text-[clamp(3rem,13vw,11rem)] font-black text-neutral-800/80 tracking-tighter leading-none block whitespace-nowrap select-none">
          PORTFOLIO
        </span>
        <span className="font-display text-[clamp(1.1rem,4vw,3.2rem)] font-black text-[#e63946]/20 tracking-[0.2em] -mt-1 md:-mt-4 block uppercase select-none whitespace-nowrap">
          ANANYA RASTOGI
        </span>
      </motion.div>
    </div>
  );
}
