"use client";

import { useState } from "react";
import { TESTIMONIALS_DATA, TestimonialItem } from "@/data/testimonials";

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  // We display 3 panels on large desktop simultaneously, or navigate smoothly
  return (
    <section
      id="testimonials"
      data-theme="dark"
      className="section-dark py-28 md:py-44 px-6 md:px-12 bg-[#0E0E0E] text-[#F5F3EF] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 bg-[#F5F3EF]" />
              <span className="text-xs font-mono tracking-widest text-[#96938D] uppercase">
                006 // ATHLETE OUTCOMES &amp; CRITIQUE
              </span>
            </div>
            <h2 className="font-editorial text-section-headline text-[#F5F3EF] font-light">
              Athlete <span className="font-editorial-italic font-normal">Feedback</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#96938D] leading-relaxed">
              Real progress in calisthenics is measured in seconds held, degrees
              gained, and clean repetitions. Here is how structured programming
              transforms athletic capability.
            </p>
          </div>
        </div>

        {/* DESIGN PLACEHOLDER NOTICE (Visible in Dev & Clearly Identified in Code) */}
        <div className="mt-8 py-2.5 px-4 bg-[#161616] border border-white/10 text-[11px] font-mono text-[#96938D] flex items-center justify-between">
          <span>
            [ ARCHITECTURAL LAYOUT PLACEHOLDERS // REPLACE WITH REAL ATHLETE FEEDBACK IN DATA/TESTIMONIALS.TS ]
          </span>
          <span className="hidden sm:inline text-white/50">FICTIONAL DESIGN PREVIEWS</span>
        </div>

        {/* 3 Horizontally Arranged Testimonial Panels on Desktop */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#161616] border border-white/10 p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:border-white/30"
            >
              {/* Top: Identifier & Quote */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 text-[10px] font-mono tracking-widest text-[#96938D]">
                  <span>{item.clientIdentifier}</span>
                  <span className="text-white/40">{item.trainingDuration}</span>
                </div>

                <div className="mt-8">
                  <p className="font-editorial text-xl sm:text-2xl text-[#F5F3EF] font-light leading-snug">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom: Client Profile & Achievement */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#222222] border border-white/20 flex items-center justify-center font-mono text-xs text-[#F5F3EF] shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg text-[#F5F3EF] font-normal leading-tight">
                      {item.clientName}
                    </h3>
                    <p className="text-xs font-mono text-[#96938D] tracking-wider mt-0.5">
                      {item.coachingGoal}
                    </p>
                  </div>
                </div>

                {item.skillAchievement && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <span className="text-xs">✓</span>
                    <span>{item.skillAchievement}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional 4th Testimonial Featured Quote Banner */}
        {TESTIMONIALS_DATA[3] && (
          <div className="mt-8 bg-[#161616] border border-white/10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-[10px] font-mono tracking-widest text-[#96938D] uppercase block mb-3">
                  {TESTIMONIALS_DATA[3].clientIdentifier} // SPOTLIGHT CASE
                </span>
                <p className="font-editorial text-2xl sm:text-3xl text-[#F5F3EF] font-light italic leading-relaxed">
                  &ldquo;{TESTIMONIALS_DATA[3].quote}&rdquo;
                </p>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-8">
                <div className="font-editorial text-xl text-[#F5F3EF]">
                  {TESTIMONIALS_DATA[3].clientName}
                </div>
                <div className="text-xs font-mono text-[#96938D] mt-1">
                  {TESTIMONIALS_DATA[3].coachingGoal}
                </div>
                <div className="text-xs font-mono text-emerald-400 mt-2">
                  Achievement: {TESTIMONIALS_DATA[3].skillAchievement}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
