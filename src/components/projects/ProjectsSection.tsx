"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PORTFOLIO_DATA, ProjectData } from "@/data/portfolioData";
import { ButterflyMotif } from "@/components/background/ButterflyMotif";

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Butterfly Accent */}
      <div className="absolute left-6 top-12 pointer-events-none opacity-50 hidden md:block">
        <ButterflyMotif size={48} animateDrift={true} glow={true} />
      </div>

      {/* Section Header */}
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="PROJECTS"
        subtitle="A collection of hands-on builds in data exploration and modern web development."
      />

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelectProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
