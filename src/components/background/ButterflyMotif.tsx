"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButterflyMotifProps {
  className?: string;
  size?: number;
  animateDrift?: boolean;
  glow?: boolean;
  opacity?: number;
}

export function ButterflyMotif({
  className,
  size = 48,
  animateDrift = false,
  glow = true,
  opacity = 0.85,
}: ButterflyMotifProps) {
  const content = (
    <div
      className={cn("relative inline-block select-none pointer-events-none", className)}
      style={{
        width: size,
        height: size * 0.75,
        opacity: opacity,
      }}
    >
      <svg
        viewBox="0 0 100 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Teal to Blue Wing Gradient */}
          <linearGradient id="wingGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="60%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#000d20" />
          </linearGradient>
          <linearGradient id="wingGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="60%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#000d20" />
          </linearGradient>

          {/* Wing Accent Vein Gradient */}
          <linearGradient id="veinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.1" />
          </linearGradient>

          {glow && (
            <filter id="butterflyGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          )}
        </defs>

        <g filter={glow ? "url(#butterflyGlow)" : undefined}>
          {/* Left Wing Group with Flap Animation */}
          <g className="wing-left" style={{ transformOrigin: "50px 38px" }}>
            {/* Upper Left Wing */}
            <path
              d="M 50 35 C 40 15, 10 5, 4 20 C -2 34, 15 50, 48 40 Z"
              fill="url(#wingGradLeft)"
              stroke="#2dd4bf"
              strokeWidth="0.8"
              strokeOpacity="0.8"
            />
            {/* Lower Left Wing */}
            <path
              d="M 49 39 C 35 48, 12 55, 18 68 C 24 78, 42 65, 50 45 Z"
              fill="url(#wingGradLeft)"
              stroke="#38bdf8"
              strokeWidth="0.6"
              strokeOpacity="0.7"
            />
            {/* Wing Veins Left */}
            <path
              d="M 50 35 Q 25 22 12 22 M 50 37 Q 28 35 15 42 M 49 40 Q 30 52 24 64"
              stroke="url(#veinGrad)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Right Wing Group with Flap Animation */}
          <g className="wing-right" style={{ transformOrigin: "50px 38px" }}>
            {/* Upper Right Wing */}
            <path
              d="M 50 35 C 60 15, 90 5, 96 20 C 102 34, 85 50, 52 40 Z"
              fill="url(#wingGradRight)"
              stroke="#2dd4bf"
              strokeWidth="0.8"
              strokeOpacity="0.8"
            />
            {/* Lower Right Wing */}
            <path
              d="M 51 39 C 65 48, 88 55, 82 68 C 76 78, 58 65, 50 45 Z"
              fill="url(#wingGradRight)"
              stroke="#38bdf8"
              strokeWidth="0.6"
              strokeOpacity="0.7"
            />
            {/* Wing Veins Right */}
            <path
              d="M 50 35 Q 75 22 88 22 M 50 37 Q 72 35 85 42 M 51 40 Q 70 52 76 64"
              stroke="url(#veinGrad)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Antennae */}
          <path
            d="M 49 22 Q 42 10 35 12"
            stroke="#94a3b8"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="34" cy="12" r="1.2" fill="#2dd4bf" />

          <path
            d="M 51 22 Q 58 10 65 12"
            stroke="#94a3b8"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="66" cy="12" r="1.2" fill="#2dd4bf" />

          {/* Butterfly Body (Dark Charcoal with Crimson Core) */}
          <ellipse cx="50" cy="24" rx="2.5" ry="3.5" fill="#1e1e24" stroke="#475569" strokeWidth="0.6" />
          <ellipse cx="50" cy="36" rx="2.8" ry="8" fill="#111116" stroke="#e63946" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="2" ry="6" fill="#09090b" stroke="#334155" strokeWidth="0.5" />
          
          {/* Subtle glowing core line */}
          <line x1="50" y1="30" x2="50" y2="48" stroke="#e63946" strokeWidth="0.8" strokeLinecap="round" opacity="0.8" />
        </g>
      </svg>
    </div>
  );

  if (!animateDrift) {
    return content;
  }

  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
        x: [0, 8, -6, 0],
        rotate: [0, 5, -4, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {content}
    </motion.div>
  );
}
