import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { PetalParticles } from "@/components/background/PetalParticles";
import { NoiseOverlay } from "@/components/background/NoiseOverlay";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-slate-100 selection:bg-[#e63946] selection:text-white overflow-hidden">
      {/* Background Ambience & Motifs */}
      <PetalParticles />
      <NoiseOverlay />

      {/* Main Navigation */}
      <Navbar />

      {/* Hero Section with Interactive Lanyard ID Badge */}
      <HeroSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Skills & Focus Areas Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer with Edge-bleeding Name */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
