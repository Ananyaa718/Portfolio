"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LanyardBadge } from "./LanyardBadge";
import { HeroRevealText } from "./HeroRevealText";
import { ChevronDown, ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform for the badge lifting up & scaling away as user scrolls
  const badgeY = useTransform(scrollYProgress, [0, 0.8], [0, -140]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.88]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.7, 0.1]);

  // Bottom tags fade out on scroll
  const bottomInfoOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[115vh] flex flex-col justify-between items-center pt-20 pb-12 overflow-hidden"
    >
      {/* 1. Giant Background Wordmark Reveal */}
      <HeroRevealText scrollYProgress={scrollYProgress} />

      {/* Subtle Radial Crimson Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] rounded-full bg-gradient-to-br from-[#e63946]/15 via-[#00f2fe]/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* 2. Interactive Lanyard & 3D ID Badge */}
      <motion.div
        style={{
          y: badgeY,
          scale: badgeScale,
          opacity: badgeOpacity,
        }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        <LanyardBadge />
      </motion.div>

      {/* 3. Hero Bottom Elements & Metadata */}
      <motion.div
        style={{ opacity: bottomInfoOpacity }}
        className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center mt-6 space-y-6"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/60 backdrop-blur-md shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-neutral-200 uppercase">
            AVAILABLE FOR INTERNSHIPS
          </span>
        </div>

        {/* Small Caps Role Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-mono tracking-widest text-neutral-400 font-medium uppercase">
          {PORTFOLIO_DATA.personal.subRoles.map((role, idx) => (
            <React.Fragment key={role}>
              <span className="hover:text-white transition-colors">
                {role}
              </span>
              {idx < PORTFOLIO_DATA.personal.subRoles.length - 1 && (
                <span className="text-[#e63946] font-bold">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* SCROLL TO EXPLORE Indicator */}
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors pt-2"
        >
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-neutral-400 group-hover:text-[#e63946] transition-colors">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-7 rounded-full border border-neutral-700/80 group-hover:border-[#e63946] flex items-center justify-center transition-colors bg-neutral-900/50"
          >
            <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#e63946]" />
          </motion.div>
        </a>

        {/* Horizontal Divider Line with Centered ANANYA RASTOGI */}
        <div className="w-full pt-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-800" />
            </div>
            <div className="relative bg-[#0a0a0a] px-4">
              <span className="font-mono text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#e63946]">
                ANANYA RASTOGI
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
