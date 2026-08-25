"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  eyebrow,
  number,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={cn("w-full max-w-full flex flex-col mb-10 md:mb-16 overflow-hidden", alignmentClass, className)}>
      {/* Red Eyebrow Label */}
      {(eyebrow || number) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-3"
        >
          {number && (
            <span className="font-mono text-xs md:text-sm font-bold text-[#e63946] tracking-widest">
              {number}
            </span>
          )}
          {number && eyebrow && (
            <span className="text-neutral-600 text-xs font-mono">//</span>
          )}
          {eyebrow && (
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest uppercase text-[#e63946]">
              {eyebrow}
            </span>
          )}
        </motion.div>
      )}

      {/* Responsive Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display edge-bleed-text text-white leading-[0.92] tracking-tighter max-w-full break-words"
      >
        {title}
      </motion.h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-base md:text-xl text-neutral-400 max-w-2xl font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
