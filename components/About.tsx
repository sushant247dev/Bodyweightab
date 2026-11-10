"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-28 md:py-44 px-6 md:px-12 border-b border-[#111111]/8 bg-[#F9F8F5]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono tracking-widest text-[#6B6862]">
            007 // THE COACH
          </span>
          <span className="h-[1px] w-12 bg-[#111111]/20" />
        </div>

        {/* Grid: Photo on Left / Editorial Manifesto on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Studio Spec */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full bg-[#EBE7DF] border border-[#111111]/10 overflow-hidden">
              <Image
                src="/images/about/coach-portrait.jpg"
                alt="Head Coach — BodyweightLab"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#111111] text-[#F9F8F5] text-[9px] font-mono tracking-widest uppercase px-2.5 py-1">
                Founder &amp; Head Coach — Sushant Singh
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F6]/90 backdrop-blur-sm p-3 border border-[#111111]/10 text-[10px] font-mono text-[#111111] uppercase flex items-center justify-between">
                <span>BodyweightLab</span>
                <span>Jaipur, India // Worldwide</span>
              </div>
            </div>

            <p className="mt-2 text-[10px] font-mono text-[#6B6862] text-right">
              [ Coach Portrait Container — Replaceable in /public/images/about/ ]
            </p>

            <div className="mt-8 p-6 bg-[#F2EFE9] border border-[#111111]/8 space-y-3 text-xs font-mono">
              <div className="text-[#111111] font-semibold uppercase tracking-wider">
                Coaching Commitments
              </div>
              <div className="text-[#6B6862] flex items-center justify-between">
                <span>Head Coach:</span>
                <span className="text-[#111111] font-semibold">Sushant Singh</span>
              </div>
              <div className="text-[#6B6862] flex items-center justify-between">
                <span>Base:</span>
                <span className="text-[#111111]">Jaipur, India (Online Worldwide)</span>
              </div>
              <div className="text-[#6B6862] flex items-center justify-between">
                <span>Client Roster Limit:</span>
                <span className="text-[#111111]">15 Athletes Max</span>
              </div>
              <div className="text-[#6B6862] flex items-center justify-between">
                <span>Turnaround on Video Audits:</span>
                <span className="text-[#111111]">Under 24 Hours</span>
              </div>
              <div className="text-[#6B6862] flex items-center justify-between">
                <span>Methodology:</span>
                <span className="text-[#111111]">Biomechanics &amp; PNF</span>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Story & Philosophy */}
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-section-headline text-[#111111] font-light leading-[1.02]">
              Meet Sushant Singh, <br />
              the coach behind the <span className="font-editorial-italic font-normal">practice</span>.
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#111111] font-semibold">
                Sushant Singh
              </span>
              <span className="text-xs text-[#6B6862] font-mono tracking-wider">
                — Founder &amp; Head Calisthenics Coach, Jaipur
              </span>
            </div>

            <div className="mt-10 space-y-6 text-base sm:text-lg text-[#6B6862] leading-relaxed font-light">
              <p>
                I&apos;m Sushant Singh, founder of BodyweightLab. My journey into
                calisthenics started with the same frustration most dedicated
                athletes encounter: months of kicking up against a wall, nagging
                wrist pain, and workout routines that felt like guesswork.
              </p>
              <p>
                I quickly realized that bodyweight mastery isn&apos;t simply about
                gritting your teeth and repeating poor repetitions. It is an art of
                biomechanics, lever manipulation, structural tendon conditioning,
                and active mobility.
              </p>
              <p>
                I founded <strong>BodyweightLab</strong> to provide the structured,
                evidence-based coaching I wish I had when I was working through my
                first handstands, presses, and planche progressions.
              </p>
              <p>
                I don&apos;t sell 30-day shortcuts or cookie-cutter workout PDFs.
                Every athlete who trains with me gets a living, evolving system
                calibrated to their exact anatomical strengths, joint limitations,
                and athletic ambitions.
              </p>
            </div>

            {/* What Makes This Approach Different */}
            <div className="mt-12 pt-8 border-t border-[#111111]/10">
              <h3 className="font-editorial text-2xl text-[#111111] mb-6">
                What Sets the Lab Apart
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#6B6862]">
                <div className="border-l border-[#111111]/20 pl-4">
                  <h4 className="font-editorial text-lg text-[#111111]">
                    Direct Eyes on Every Rep
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed">
                    You won&apos;t be handed off to an assistant coach. I personally
                    analyze every video you submit.
                  </p>
                </div>

                <div className="border-l border-[#111111]/20 pl-4">
                  <h4 className="font-editorial text-lg text-[#111111]">
                    Tendon Adaptation Priority
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed">
                    We condition the distal biceps and wrist extensors before
                    attempting straight-arm levers.
                  </p>
                </div>

                <div className="border-l border-[#111111]/20 pl-4">
                  <h4 className="font-editorial text-lg text-[#111111]">
                    Active Loaded Flexibility
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed">
                    Mobility that translates immediately into press compression and
                    clean handstand lines.
                  </p>
                </div>

                <div className="border-l border-[#111111]/20 pl-4">
                  <h4 className="font-editorial text-lg text-[#111111]">
                    Objective Progression
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed">
                    Clear milestones from day one. You always know what standard is
                    required before leveling up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
