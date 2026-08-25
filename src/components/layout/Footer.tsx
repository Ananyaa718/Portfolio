"use client";

import React from "react";
import { ButterflyMotif } from "@/components/background/ButterflyMotif";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/ui/Icons";

export function Footer() {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  // Dynamic Month & Year e.g. August 2026
  const currentMonthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="relative bg-[#060608] border-t border-white/10 pt-20 pb-16 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Hero Box */}
        <div className="flex flex-col items-center text-center space-y-6 pb-16 border-b border-white/10 max-w-full overflow-hidden">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63946]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-300 font-semibold">
              PORTFOLIO
            </span>
          </div>

          {/* Giant Wordmark "Ananya" */}
          <div className="relative inline-flex items-baseline justify-center max-w-full overflow-hidden px-2">
            <h2 className="font-display text-[clamp(2.75rem,11vw,8.5rem)] font-black text-white tracking-tighter leading-none break-words">
              Ananya
            </h2>
            <div className="absolute -top-3 -right-8 hidden sm:block">
              <ButterflyMotif size={40} animateDrift={true} glow={true} />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-xl text-neutral-300 max-w-xl font-light leading-relaxed">
            {personal.footerTagline}
          </p>

          {/* Red START A CONVERSATION Button */}
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e63946] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#ff4d5e] transition-all shadow-[0_0_30px_rgba(230,57,70,0.4)] group"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Small Text: Open to internships · MONTH YEAR */}
          <div className="pt-2">
            <span className="font-mono text-xs text-neutral-400">
              Open to internships · {currentMonthYear}
            </span>
          </div>
        </div>

        {/* Navigation & Social Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/5">
          {/* Footer Nav Links */}
          <div className="flex items-center gap-6 sm:gap-8 font-mono text-xs font-semibold tracking-widest text-neutral-400">
            <a href="#projects" className="hover:text-white transition-colors">
              PROJECTS
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              SKILLS
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              CONTACT
            </a>
          </div>

          {/* Social Row */}
          <div className="flex items-center gap-6 font-mono text-xs font-semibold tracking-wider text-neutral-400">
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-[#38bdf8]" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>GITHUB</span>
            </a>
            <a
              href="https://leetcode.com/u/Ananya718/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <LeetCodeIcon className="w-4 h-4 text-amber-400" />
              <span>LEETCODE</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400 text-center sm:text-left">
          <p>© {currentYear} Ananya Rastogi. All rights reserved.</p>
          <p className="text-neutral-300">
            Built with Next.js, React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>

      {/* Extra-large cropped "ANANYA" wordmark bleeding off bottom edge of screen */}
      <div className="w-full max-w-full overflow-hidden select-none pointer-events-none pt-12 text-center opacity-10">
        <span className="font-display text-[clamp(4rem,20vw,16rem)] leading-[0.75] font-black text-neutral-400 whitespace-nowrap block tracking-tighter -mb-6 md:-mb-14">
          ANANYA
        </span>
      </div>
    </footer>
  );
}
