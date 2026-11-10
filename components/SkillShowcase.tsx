"use client";

import { useState } from "react";
import Image from "next/image";
import { SKILLS_DATA, SkillItem } from "@/data/skills";

interface SkillShowcaseProps {
  onSelectSkillForCoaching: (skillName: string) => void;
}

export function SkillShowcase({ onSelectSkillForCoaching }: SkillShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Disciplines" },
    { id: "handstand", label: "Handstands" },
    { id: "straight-arm", label: "Straight-Arm Levers" },
    { id: "mobility", label: "Flexibility & Splits" },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "handstand") {
      return (
        skill.id === "handstand" ||
        skill.id === "handstand-pushups" ||
        skill.id === "one-arm-handstand" ||
        skill.id === "press-to-handstand"
      );
    }
    if (activeFilter === "straight-arm") {
      return (
        skill.id === "planche" ||
        skill.id === "front-lever" ||
        skill.id === "l-sit-v-sit"
      );
    }
    if (activeFilter === "mobility") {
      return (
        skill.id === "middle-splits" || skill.id === "press-to-handstand"
      );
    }
    return true;
  });

  return (
    <section id="skills" className="py-24 md:py-36 px-6 md:px-12 border-b border-[#111111]/8">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#111111]/8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#6B6862]">
                002 // ATHLETE PORTFOLIO
              </span>
            </div>
            <h2 className="font-editorial text-section-headline text-[#111111] font-light">
              Mastered Skills &amp; <span className="font-editorial-italic font-normal">Disciplines</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="max-w-md text-sm text-[#6B6862] leading-relaxed">
              Every skill here represents hundreds of hours of biomechanical
              refinement and tendon adaptation. This is the exact roadmap you will
              follow.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 border border-[#111111]/10 p-1 bg-[#F2EFE9]/60">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveFilter(c.id)}
                  className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-colors ${
                    activeFilter === c.id
                      ? "bg-[#111111] text-[#F9F8F5]"
                      : "text-[#6B6862] hover:text-[#111111]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {filteredSkills.map((skill, index) => {
            // Define varied column widths to create a deliberate editorial rhythm
            let colSpan = "md:col-span-6 lg:col-span-6";
            let aspectClass = "aspect-[3/4]";

            if (index === 0) {
              colSpan = "md:col-span-7 lg:col-span-7";
              aspectClass = "aspect-[4/5]";
            } else if (index === 1) {
              colSpan = "md:col-span-5 lg:col-span-5";
              aspectClass = "aspect-[3/4]";
            } else if (index === 2) {
              colSpan = "md:col-span-5 lg:col-span-5";
              aspectClass = "aspect-[3/4]";
            } else if (index === 3) {
              colSpan = "md:col-span-7 lg:col-span-7";
              aspectClass = "aspect-[16/10]";
            } else if (index === 4) {
              colSpan = "md:col-span-6 lg:col-span-6";
              aspectClass = "aspect-[16/10]";
            } else if (index === 5) {
              colSpan = "md:col-span-6 lg:col-span-6";
              aspectClass = "aspect-[16/10]";
            } else if (index === 6) {
              colSpan = "md:col-span-7 lg:col-span-7";
              aspectClass = "aspect-[4/3]";
            } else if (index === 7) {
              colSpan = "md:col-span-5 lg:col-span-5";
              aspectClass = "aspect-[1/1]";
            }

            return (
              <article
                key={skill.id}
                className={`${colSpan} group flex flex-col justify-between border-b border-[#111111]/8 pb-8`}
              >
                <div>
                  {/* Skill Card Header */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#6B6862]">
                      {skill.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B6862] bg-[#F2EFE9] px-2 py-0.5 border border-[#111111]/8">
                      {skill.category}
                    </span>
                  </div>

                  {/* Image Presentation Container */}
                  <div
                    className={`relative ${aspectClass} w-full overflow-hidden bg-[#EBE7DF] border border-[#111111]/10`}
                  >
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Architectural Coordinate Overlay */}
                    <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/5 transition-colors duration-300 pointer-events-none" />

                    {/* Micro Tag on Hover */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-[#111111] bg-[#FAF9F6]/90 backdrop-blur-sm px-2.5 py-1 border border-[#111111]/10 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="truncate">{skill.focus}</span>
                      <span className="shrink-0 ml-2">SPEC: 1.0</span>
                    </div>
                  </div>

                  {/* Typographic Title & Description */}
                  <div className="mt-6">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#111111] group-hover:italic transition-all">
                      {skill.title}
                    </h3>
                    <p className="text-xs font-mono tracking-wider uppercase text-[#6B6862] mt-1">
                      {skill.subtitle}
                    </p>
                    <p className="text-sm text-[#6B6862] mt-3 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Progression Milestones Checklist */}
                  <div className="mt-4 pt-4 border-t border-[#111111]/6">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#111111] block mb-2">
                      Key Progression Milestones:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#6B6862]">
                      {skill.progressionMilestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#111111]" />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-[#111111]/8 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#6B6862] tracking-widest uppercase">
                    Coaching Available
                  </span>
                  <button
                    onClick={() => onSelectSkillForCoaching(skill.title)}
                    className="group/btn inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111111] hover:opacity-60 transition-opacity"
                  >
                    <span>Apply for this skill</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
