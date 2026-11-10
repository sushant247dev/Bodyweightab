"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SkillShowcase } from "@/components/SkillShowcase";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ApplicationModal } from "@/components/ApplicationModal";
import { CustomCursor } from "@/components/CustomCursor";
import { AnimationProvider } from "@/components/AnimationProvider";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetSkill, setTargetSkill] = useState("Handstand");

  const handleOpenApply = (skillName?: string) => {
    if (skillName) {
      setTargetSkill(skillName);
    }
    setIsModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsModalOpen(false);
  };

  return (
    <AnimationProvider>
      <div className="relative min-h-screen bg-[#F9F8F5] text-[#111111]">
        {/* Editorial Custom Cursor (Fine pointer desktop only) */}
        <CustomCursor />

        {/* Minimal Navigation & Fullscreen Curtain Menu */}
        <Navigation onOpenApply={() => handleOpenApply()} />

        {/* Main Editorial Content Sequence */}
        <main>
          {/* Section 02: Hero */}
          <Hero onOpenApply={() => handleOpenApply()} />

          {/* Section 03: Visual Skill Showcase Portfolio (8 Skills) */}
          <SkillShowcase
            onSelectSkillForCoaching={(skill) => handleOpenApply(skill)}
          />

          {/* Section 04: Philosophy & Ethos */}
          <Philosophy />

          {/* Section 05: Coaching Services Typographic List */}
          <Services
            onSelectService={(service) => handleOpenApply(service)}
          />

          {/* Section 06: The Coaching Experience (7 Pillars) */}
          <Experience onOpenApply={() => handleOpenApply()} />

          {/* Section 07: Dark Testimonials (Near-Black 3-Panel Grid) */}
          <Testimonials />

          {/* Section 08: About the Coach */}
          <About />

          {/* Section 09: Final High-Conversion CTA */}
          <FinalCTA onOpenApply={() => handleOpenApply()} />
        </main>

        {/* Section 10: Editorial Architectural Footer */}
        <Footer />

        {/* Accessible Coaching Application Modal Dialog */}
        <ApplicationModal
          isOpen={isModalOpen}
          initialSkill={targetSkill}
          onClose={handleCloseApply}
        />
      </div>
    </AnimationProvider>
  );
}
