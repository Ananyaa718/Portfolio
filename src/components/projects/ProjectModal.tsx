"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/data/portfolioData";
import { PillTag } from "@/components/ui/PillTag";
import { X, BarChart3, Lock, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#111116] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-[#e63946] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#e63946] font-bold">
              PROJECT {project.number}
            </span>
            <PillTag color={project.pillColor}>{project.categoryPill}</PillTag>
            <span className="font-mono text-xs text-neutral-400">
              YEAR {project.year}
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {project.title}
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
            {project.description}
          </p>

          {/* Project Highlights Breakdown */}
          {project.highlights && (
            <div className="mb-6 p-4 rounded-xl bg-neutral-900/70 border border-white/10">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#e63946] font-bold mb-3">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-200">
                    <CheckCircle className="w-4 h-4 text-[#2dd4bf] mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Visual Interactive Demo / Representation */}
          {project.id === "life-expectancy-eda" && (
            <div className="mb-6 rounded-xl bg-[#0a0a0f] border border-teal-500/30 p-4 font-mono text-xs text-neutral-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#2dd4bf]" />
                  <span className="text-[#2dd4bf] font-bold">EDA Notebook Execution Snippet</span>
                </div>
                <span className="text-neutral-500">Python 3.11</span>
              </div>
              <pre className="text-neutral-300 overflow-x-auto p-2 bg-neutral-950/80 rounded">
{`# Descriptive correlation matrix
correlation = df[['Life_Expectancy', 'Adult_Mortality', 'BMI', 'GDP', 'Schooling']].corr()
print("Top Positive Correlation:", correlation['Life_Expectancy'].nlargest(2))

# IQR Outlier filter
Q1 = df['Life_Expectancy'].quantile(0.25)
Q3 = df['Life_Expectancy'].quantile(0.75)
IQR = Q3 - Q1
cleaned_df = df[~((df['Life_Expectancy'] < (Q1 - 1.5 * IQR)))]`}
              </pre>
            </div>
          )}

          {project.id === "supabase-github-auth" && (
            <div className="mb-6 rounded-xl bg-[#0a0a0f] border border-purple-500/30 p-4 font-mono text-xs text-neutral-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#c084fc]" />
                  <span className="text-[#c084fc] font-bold">Supabase OAuth Implementation</span>
                </div>
                <span className="text-neutral-500">React + Supabase JS</span>
              </div>
              <pre className="text-neutral-300 overflow-x-auto p-2 bg-neutral-950/80 rounded">
{`const handleGitHubLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: window.location.origin + '/auth/callback'
    }
  });
  if (error) console.error('OAuth flow error:', error.message);
};`}
              </pre>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mb-6">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block mb-2 font-semibold">
              Technologies & Libraries
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techChips.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700/80 text-neutral-200 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e63946] text-white font-semibold text-sm hover:bg-[#ff4d5e] transition-colors shadow-lg"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-neutral-300 hover:text-white transition-colors text-sm font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
