"use client";

import Image from "next/image";

interface ExperienceProps {
  onOpenApply: () => void;
}

export function Experience({ onOpenApply }: ExperienceProps) {
  const pillars = [
    {
      num: "01",
      title: "Individualized Training Programming",
      desc: "Weekly training blocks tailored to your current equipment, training schedule, and individual recovery capacity. Zero generic templates."
    },
    {
      num: "02",
      title: "Skill-Specific Progressions",
      desc: "Methodical micro-progressions designed to bridge the gap between where you are and the full movement, eliminating frustrating guesswork."
    },
    {
      num: "03",
      title: "Baseline & Mobility Assessment",
      desc: "Comprehensive testing of wrist extension, shoulder flexion, thoracic mobility, and pelvic alignment before any advanced volume is programmed."
    },
    {
      num: "04",
      title: "Technique Analysis & Video Feedback",
      desc: "Detailed video breakdowns analyzing your balance corrections, joint angles, and scapular engagement to dial in execution immediately."
    },
    {
      num: "05",
      title: "Progressive Metric Tracking",
      desc: "Rigorous logging of hold durations, eccentric control tempos, and loaded mobility degrees to guarantee objective forward momentum."
    },
    {
      num: "06",
      title: "Regular 1-on-1 Check-ins",
      desc: "Structured weekly audits to evaluate fatigue, recalibrate weights or leverage bands, and ensure adherence to your goals."
    },
    {
      num: "07",
      title: "Tendon & Joint Conditioning Prehab",
      desc: "Proactive wrist, elbow, and shoulder preparation routines woven into every session to protect connective tissue as intensity escalates."
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-12 border-b border-[#111111]/8 bg-[#F9F8F5]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono tracking-widest text-[#6B6862]">
            005 // THE COACHING METHOD
          </span>
          <span className="h-[1px] w-12 bg-[#111111]/20" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and 7 Core Pillars */}
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-section-headline text-[#111111] font-light leading-[1.02]">
              Not another workout plan. <br />
              <span className="font-editorial-italic font-normal">A system built around your progress.</span>
            </h2>

            <p className="mt-8 text-base sm:text-lg text-[#6B6862] leading-relaxed max-w-xl font-light">
              Athletes fail when they copy routines that were built for someone
              else&apos;s anatomy. Calisthenics coaching at BodyweightLab combines
              scientific progression with real-time technical feedback.
            </p>

            {/* 7 Pillars Matrix */}
            <div className="mt-12 divide-y divide-[#111111]/10 border-t border-b border-[#111111]/10">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 group">
                  <span className="font-mono text-xs tracking-widest text-[#6B6862] group-hover:text-[#111111] transition-colors shrink-0 sm:pt-1">
                    {pillar.num} //
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#111111] font-normal group-hover:italic transition-all">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#6B6862] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-3 bg-[#111111] text-[#F9F8F5] px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase hover:bg-[#262626] transition-colors"
              >
                <span>Apply for 1-on-1 Coaching</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural System Visualization */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full bg-[#EBE7DF] border border-[#111111]/10 overflow-hidden">
              <Image
                src="/images/experience/experience-breakdown.svg"
                alt="BodyweightLab Coaching System Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#111111] text-[#F9F8F5] text-[9px] font-mono tracking-widest uppercase px-2.5 py-1">
                Protocol Architecture // 7 Pillars
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F6]/90 backdrop-blur-sm p-3 border border-[#111111]/10 text-[10px] font-mono text-[#111111] uppercase flex items-center justify-between">
                <span>Tailored Progression</span>
                <span>Zero Guesswork</span>
              </div>
            </div>
            <p className="mt-2 text-[10px] font-mono text-[#6B6862] text-right">
              [ Systematic Skill Development Structure ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
