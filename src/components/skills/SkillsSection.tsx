"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Code, Database, BrainCircuit, Globe, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  const cardIcons = {
    "01": <Code className="w-5 h-5 text-[#e63946]" />,
    "02": <Database className="w-5 h-5 text-[#2dd4bf]" />,
    "03": <BrainCircuit className="w-5 h-5 text-[#fbbf24]" />,
    "04": <Globe className="w-5 h-5 text-[#c084fc]" />,
  };

  const accentColors = {
    crimson: {
      borderHover: "hover:border-[#e63946]/50",
      underline: "bg-[#e63946]",
      tagText: "text-[#e63946]",
      tagBg: "bg-red-950/40 border-red-500/30",
      glow: "hover:shadow-[0_0_30px_rgba(230,57,70,0.15)]",
    },
    teal: {
      borderHover: "hover:border-[#2dd4bf]/50",
      underline: "bg-[#2dd4bf]",
      tagText: "text-[#2dd4bf]",
      tagBg: "bg-teal-950/40 border-teal-500/30",
      glow: "hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]",
    },
    gold: {
      borderHover: "hover:border-[#fbbf24]/50",
      underline: "bg-[#fbbf24]",
      tagText: "text-[#fbbf24]",
      tagBg: "bg-amber-950/40 border-amber-500/30",
      glow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    },
    purple: {
      borderHover: "hover:border-[#c084fc]/50",
      underline: "bg-[#c084fc]",
      tagText: "text-[#c084fc]",
      tagBg: "bg-purple-950/40 border-purple-500/30",
      glow: "hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]",
    },
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <SectionHeading
        number="02"
        eyebrow="SKILLS & FOCUS AREAS"
        title="SKILLS"
        subtitle="Current technical toolkit and active areas of study — learning through hands-on practice, code analysis, and building projects."
      />

      {/* Numbered Cards Grid (01–04) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skills.map((card, index) => {
          const colorTheme = accentColors[card.color as keyof typeof accentColors] || accentColors.crimson;

          return (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300",
                colorTheme.borderHover,
                colorTheme.glow
              )}
            >
              {/* Giant Faded Number in Top Right */}
              <div className="absolute top-2 right-4 select-none pointer-events-none">
                <span className="font-display text-7xl sm:text-8xl md:text-9xl font-black text-neutral-800/25 group-hover:text-neutral-700/40 transition-colors duration-300">
                  {card.number}
                </span>
              </div>

              {/* Card Header Content */}
              <div className="relative z-10">
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-neutral-900/90 border border-white/10">
                      {cardIcons[card.number as keyof typeof cardIcons]}
                    </div>
                    <span
                      className={cn(
                        "font-mono text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border",
                        colorTheme.tagBg,
                        colorTheme.tagText
                      )}
                    >
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-2">
                  <span>{card.number} —</span>
                  <span>{card.title}</span>
                </h3>

                {/* Thin Underline */}
                <div className={cn("w-12 h-[2px] mt-3 mb-6 transition-all duration-300 group-hover:w-20", colorTheme.underline)} />

                {/* Bullet List with Diamond / Star Bullet Icons */}
                <ul className="space-y-3.5 pt-2">
                  {card.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-neutral-200 group/item"
                    >
                      {/* Diamond Bullet Icon */}
                      <span className="mt-1.5 flex-shrink-0">
                        <svg
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200 group-hover/item:scale-125",
                            colorTheme.tagText
                          )}
                        >
                          <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                        </svg>
                      </span>

                      <span className="leading-snug">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Corner Accent */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Module {card.number}</span>
                </span>
                <span className="text-neutral-400 group-hover:text-white transition-colors">
                  Focus Area
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
