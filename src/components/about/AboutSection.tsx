"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillTag } from "@/components/ui/PillTag";
import { ButterflyMotif } from "@/components/background/ButterflyMotif";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { MapPin, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const { personal, quickStats } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Floating Butterfly in About section */}
      <div className="absolute right-4 top-10 pointer-events-none opacity-60 hidden md:block">
        <ButterflyMotif size={56} animateDrift={true} glow={true} />
      </div>

      {/* Red Eyebrow Label & Oversized Stacked Heading */}
      <div className="relative z-10 w-full max-w-full overflow-hidden">
        <SectionHeading
          number="01"
          eyebrow="ANANYA RASTOGI"
          title="about me."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Duotone / High Contrast Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative max-w-full"
        >
          <div className="relative group rounded-2xl overflow-hidden glass-card border border-white/15 p-3 sm:p-4">
            {/* Duotone Visual Frame */}
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gradient-to-br from-neutral-900 via-[#13131a] to-black border border-white/10 flex flex-col justify-between p-6">
              
              {/* Top Card Badge */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#e63946]" />
                  <span className="font-mono text-[11px] text-neutral-300 font-semibold uppercase">
                    CSE UNDERGRAD
                  </span>
                </div>
                <span className="font-mono text-xs text-neutral-500">2023 — 2027</span>
              </div>

              {/* Center Portrait Duotone Graphic */}
              <div className="relative flex flex-col items-center justify-center my-auto text-center py-6">
                {/* Glowing Duotone Ring & Avatar */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-white/20 bg-gradient-to-tr from-[#e63946]/30 via-neutral-900 to-[#2dd4bf]/20 p-1 flex items-center justify-center shadow-2xl group-hover:border-[#e63946] transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-neutral-950/90 flex flex-col items-center justify-center overflow-hidden relative">
                    {/* Artistic Duotone Silhouette Graphic / Profile Image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e63946]/10 to-black/80 z-10 pointer-events-none" />
                    <img
                      src="/profile.jpg"
                      alt="Ananya Rastogi"
                      className="w-full h-full object-cover relative z-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop";
                      }}
                    />
                    <span className="font-mono text-[10px] text-[#2dd4bf] mt-1 absolute bottom-2 z-20 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
                      BUILDER
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-black text-white mt-4 tracking-tight">
                  Ananya Rastogi
                </h3>
                <p className="font-script text-xl text-red-300/90 mt-0.5">
                  Computer Science Student
                </p>
              </div>

              {/* Bottom Card Footer Details */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-neutral-400">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-[#e63946]" />
                  <span>Moradabad / Mathura, IN</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Actively Building</span>
                </div>
              </div>
            </div>

            {/* Glowing Accent Corner Glow */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#e63946]/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Column: Narrative, Pill Tags, and Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-6 max-w-full"
        >
          {/* Category Pill Tags Row */}
          <div className="flex flex-wrap gap-2 pt-2">
            <PillTag color="crimson">SOFTWARE DEV</PillTag>
            <PillTag color="teal">DATA ANALYTICS</PillTag>
            <PillTag color="purple">MACHINE LEARNING</PillTag>
            <PillTag color="gold">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                MORADABAD / MATHURA, INDIA
              </span>
            </PillTag>
          </div>

          {/* Subheading */}
          <div>
            <h3 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-black text-white tracking-tight leading-tight">
              {personal.aboutHeadline}
            </h3>
            <div className="w-16 h-1 bg-[#e63946] mt-2 rounded-full" />
          </div>

          {/* Exact Student Bio Copy */}
          <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            <p>
              I&apos;m Ananya, a Computer Science student who&apos;s genuinely curious about how software, data, and machine learning come together to solve real problems.
            </p>
            <p>
              I&apos;m currently building my skills through coursework, coding practice, and hands-on projects — working with <span className="text-white font-medium">Java, Python, and SQL</span>, exploring data analysis with <span className="text-[#2dd4bf] font-medium">Pandas and NumPy</span>, and getting comfortable with web development using <span className="text-[#c084fc] font-medium">React, Git, and GitHub</span>.
            </p>
            <p>
              I like learning by building rather than just reading about it, so this space is where I share what I&apos;m working on as I grow. Still very much a work in progress — thanks for stopping by!
            </p>
          </div>

          {/* Handwritten Signature */}
          <div className="pt-2">
            <p className="font-script text-3xl sm:text-4xl text-[#e63946] font-bold tracking-wide">
              {personal.signature}
            </p>
          </div>

          {/* Key Student Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800/80">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <span className="font-mono text-2xl sm:text-3xl font-black text-white block">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#e63946] block mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] text-neutral-400 block truncate mt-0.5">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
