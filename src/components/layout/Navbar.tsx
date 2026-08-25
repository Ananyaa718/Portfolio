"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            className="group font-display text-2xl sm:text-3xl font-black text-white tracking-tighter flex items-baseline"
          >
            <span>ANANYA</span>
            <span className="text-[#e63946] group-hover:scale-125 transition-transform inline-block">
              .
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-neutral-300 hover:text-[#e63946] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}

            {/* Quick Action Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#e63946] border border-white/15 hover:border-[#e63946] text-white text-xs font-mono tracking-wider uppercase transition-all duration-200"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-xl bg-neutral-900/90 border border-white/15 text-white hover:border-[#e63946] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0a0a0d]/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#e63946] font-bold">
                NAVIGATION
              </span>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-4xl font-black text-white hover:text-[#e63946] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Links */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-4 text-neutral-400">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:text-white"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:text-white"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ananya.rastogi@example.com"
                  className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:text-white"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="font-mono text-xs text-neutral-500">
                Ananya Rastogi · CS Student Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
