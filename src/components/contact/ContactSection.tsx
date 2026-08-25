"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButterflyMotif } from "@/components/background/ButterflyMotif";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  MapPin,
  Check,
  Send,
  ArrowRight,
  Copy,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    opportunityType: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#e63946", "#2dd4bf", "#c084fc", "#ffffff"],
      });
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: "", email: "", opportunityType: "", message: "" });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Drifting Butterfly Accent */}
      <div className="absolute right-8 top-12 pointer-events-none opacity-50 hidden md:block">
        <ButterflyMotif size={52} animateDrift={true} glow={true} />
      </div>

      {/* Section Header */}
      <SectionHeading
        number="04"
        eyebrow="GET IN TOUCH"
        title="LET'S CONNECT"
        subtitle="Open to internship and early-career opportunities in software development, data analytics, and machine learning."
      />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative glass-card rounded-2xl p-6 sm:p-10 border border-white/15 overflow-hidden"
        >
          {/* Subtle Butterfly drifting behind the button / card */}
          <div className="absolute right-6 bottom-4 pointer-events-none opacity-20 -z-0">
            <ButterflyMotif size={100} animateDrift={false} glow={true} />
          </div>

          {isSent ? (
            <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display text-2xl font-black text-white">
                Message Sent Successfully!
              </h4>
              <p className="text-neutral-300 text-sm font-light">
                Thank you for reaching out! Ananya will reply to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                    Name <span className="text-[#e63946]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946] transition-all font-body text-sm"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                    Email Address <span className="text-[#e63946]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946] transition-all font-body text-sm"
                  />
                </div>
              </div>

              {/* Project / Opportunity Type */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                  Project / Opportunity Type
                </label>
                <input
                  type="text"
                  placeholder="Internship, Collaboration, Project Idea…"
                  value={formData.opportunityType}
                  onChange={(e) =>
                    setFormData({ ...formData, opportunityType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946] transition-all font-body text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                  Message <span className="text-[#e63946]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about the role, opportunity, or what you'd like to build together..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946] transition-all font-body text-sm resize-none"
                />
              </div>

              {/* Red Pill SEND MESSAGE Button with butterfly drift */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#e63946] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#ff4d5e] transition-all duration-300 shadow-[0_0_25px_rgba(230,57,70,0.35)] disabled:opacity-50 cursor-pointer overflow-hidden"
                >
                  <span>{isSubmitting ? "Sending..." : "SEND MESSAGE"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <span className="font-mono text-xs text-neutral-500 hidden sm:inline">
                  ⚡ Response time: within 24–48 hours
                </span>
              </div>
            </form>
          )}
        </motion.div>

        {/* Contact Detail Rows Below Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3"
        >
          {/* EMAIL */}
          <div className="p-4 sm:p-5 rounded-xl glass-card border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-[#e63946]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                  EMAIL
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-sm text-neutral-200 hover:text-white transition-colors"
                >
                  {personal.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#e63946] transition-all cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* GITHUB */}
          <div className="p-4 sm:p-5 rounded-xl glass-card border border-white/10 flex items-center justify-between gap-3 group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 group-hover:text-white">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                  GITHUB
                </span>
                <span className="font-mono text-sm text-neutral-200">
                  {personal.githubUrl}
                </span>
              </div>
            </div>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#e63946] transition-all"
            >
              <span>VISIT</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="p-4 sm:p-5 rounded-xl glass-card border border-white/10 flex items-center justify-between gap-3 group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-[#38bdf8]">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                  LINKEDIN
                </span>
                <span className="font-mono text-sm text-neutral-200 truncate max-w-xs sm:max-w-md block">
                  Ananya Rastogi (Profile)
                </span>
              </div>
            </div>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#38bdf8] transition-all"
            >
              <span>CONNECT</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* LOCATION */}
          <div className="p-4 sm:p-5 rounded-xl glass-card border border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-amber-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                  LOCATION
                </span>
                <span className="font-mono text-sm text-neutral-200">
                  Mathura / Moradabad, India · Open to remote/internship opportunities
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
              AVAILABLE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
