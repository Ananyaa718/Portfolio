"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PillTagProps {
  children: React.ReactNode;
  color?: "teal" | "purple" | "crimson" | "gold" | "blue" | "default";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PillTag({
  children,
  color = "default",
  size = "sm",
  className,
}: PillTagProps) {
  const colorStyles = {
    crimson: "bg-red-950/40 text-red-300 border-red-500/40 hover:border-red-400/80 shadow-[0_0_12px_rgba(230,57,70,0.15)]",
    teal: "bg-teal-950/40 text-teal-300 border-teal-500/40 hover:border-teal-400/80 shadow-[0_0_12px_rgba(45,212,191,0.15)]",
    purple: "bg-purple-950/40 text-purple-300 border-purple-500/40 hover:border-purple-400/80 shadow-[0_0_12px_rgba(192,132,252,0.15)]",
    gold: "bg-amber-950/40 text-amber-300 border-amber-500/40 hover:border-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.15)]",
    blue: "bg-sky-950/40 text-sky-300 border-sky-500/40 hover:border-sky-400/80 shadow-[0_0_12px_rgba(56,189,248,0.15)]",
    default: "bg-neutral-900/60 text-neutral-300 border-neutral-700/50 hover:border-neutral-500",
  };

  const sizeStyles = {
    sm: "text-[10px] md:text-xs px-2.5 py-1 tracking-wider uppercase font-semibold",
    md: "text-xs md:text-sm px-3.5 py-1.5 tracking-wider uppercase font-semibold",
    lg: "text-sm md:text-base px-4 py-2 tracking-wider uppercase font-bold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md transition-all duration-200",
        colorStyles[color],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
