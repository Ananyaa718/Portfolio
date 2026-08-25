"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectData } from "@/data/portfolioData";
import { PillTag } from "@/components/ui/PillTag";
import { ArrowUpRight, BarChart2, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: ProjectData;
  onSelectProject?: (project: ProjectData) => void;
  index: number;
}

export function ProjectCard({ project, onSelectProject, index }: ProjectCardProps) {
  const isComingSoon = project.isComingSoon;

  // Placeholder coming soon card styling
  if (isComingSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        className="relative rounded-2xl border-2 border-dashed border-neutral-700/60 bg-neutral-900/30 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between opacity-75 hover:opacity-100 hover:border-neutral-500 transition-all duration-300 group"
      >
        {/* Large Faded Number */}
        <div className="absolute top-3 right-6 select-none pointer-events-none">
          <span className="font-display text-7xl sm:text-8xl font-black text-neutral-800/30 group-hover:text-neutral-700/50 transition-colors">
            {project.number}
          </span>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <PillTag color="crimson">IN PROGRESS</PillTag>
            <span className="font-mono text-xs text-neutral-400">UPCOMING</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-300 group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.techChips.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-neutral-950/60 border border-neutral-800 text-[11px] font-mono text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#e63946] hover:text-[#ff4d5e] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>VISIT GITHUB PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-[#e63946]/40 transition-all duration-300"
    >
      {/* Large Faded Number */}
      <div className="absolute top-2 right-6 select-none pointer-events-none">
        <span className="font-display text-7xl sm:text-8xl md:text-9xl font-black text-neutral-800/25 group-hover:text-neutral-700/40 transition-colors">
          {project.number}
        </span>
      </div>

      <div className="relative z-10 space-y-4">
        {/* Category Pill and Year */}
        <div className="flex items-center justify-between">
          <PillTag color={project.pillColor}>{project.categoryPill}</PillTag>
          <span className="font-mono text-xs text-neutral-400 font-semibold">
            {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-[#f8fafc] transition-colors tracking-tight">
          {project.number} — {project.title}
        </h3>

        {/* Project Visual Representation / Preview Container */}
        <div className="relative rounded-xl overflow-hidden bg-neutral-950/90 border border-white/10 p-4 group-hover:border-white/20 transition-colors">
          {project.id === "life-expectancy-eda" ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-teal-400/90 border-b border-white/5 pb-1.5">
                <span className="flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-[#2dd4bf]" />
                  <span>dataset_analysis_eda.ipynb</span>
                </span>
                <span className="text-neutral-500">BoxPlot & Correlations</span>
              </div>
              
              {/* Simulated stylized visual data chart */}
              <div className="grid grid-cols-4 gap-2 pt-2 h-16 items-end">
                <div className="bg-teal-500/20 border-t-2 border-teal-400 rounded-t h-[75%] flex items-center justify-center">
                  <span className="text-[9px] font-mono text-teal-300">76.4</span>
                </div>
                <div className="bg-sky-500/20 border-t-2 border-sky-400 rounded-t h-[55%] flex items-center justify-center">
                  <span className="text-[9px] font-mono text-sky-300">68.2</span>
                </div>
                <div className="bg-purple-500/20 border-t-2 border-purple-400 rounded-t h-[85%] flex items-center justify-center">
                  <span className="text-[9px] font-mono text-purple-300">81.9</span>
                </div>
                <div className="bg-red-500/20 border-t-2 border-[#e63946] rounded-t h-[40%] flex items-center justify-center">
                  <span className="text-[9px] font-mono text-red-300">54.1</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-purple-400/90 border-b border-white/5 pb-1.5">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span>auth_client_supabase.tsx</span>
                </span>
                <span className="text-neutral-500">GitHub OAuth 2.0</span>
              </div>
              
              {/* Simulated Auth Flow Badge & Tokens */}
              <div className="flex items-center justify-between p-2 rounded bg-neutral-900/90 border border-white/5 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-neutral-300">Session Verified</span>
                </div>
                <span className="text-[10px] text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20">
                  JWT Secured
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Exact Project Description */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light pt-1">
          {project.description}
        </p>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techChips.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-neutral-900/90 border border-white/10 text-xs font-mono text-neutral-300 group-hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer with GitHub Link and Details Modal trigger */}
      <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#e63946] hover:text-[#ff4d5e] transition-colors group/link"
        >
          <GithubIcon className="w-4 h-4" />
          <span>VIEW ON GITHUB</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>

        {onSelectProject && (
          <button
            onClick={() => onSelectProject(project)}
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Details & Code →
          </button>
        )}
      </div>
    </motion.div>
  );
}
