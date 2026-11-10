"use client";

import Image from "next/image";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-28 md:py-44 px-6 md:px-12 border-b border-[#111111]/8 bg-[#F9F8F5]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono tracking-widest text-[#6B6862]">
            003 // PHILOSOPHY &amp; ETHOS
          </span>
          <span className="h-[1px] w-12 bg-[#111111]/20" />
        </div>

        {/* Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-editorial text-section-headline text-[#111111] font-light leading-[1.02]">
              Beyond strength. <br />
              Towards <span className="font-editorial-italic font-normal">complete control</span>.
            </h2>

            <div className="mt-12 space-y-6 text-base sm:text-lg text-[#6B6862] leading-relaxed max-w-2xl font-light">
              <p>
                Calisthenics isn&apos;t just about getting stronger. It&apos;s about
                developing the control, mobility, coordination and discipline to make
                difficult movements look effortless.
              </p>
              <p>
                Most athletes plateau because they treat bodyweight training like
                traditional bodybuilding: doing random reps to failure, ignoring
                scapular mechanics, and rushing into advanced shapes before their
                tendons have structurally adapted.
              </p>
              <p>
                At BodyweightLab, every training block is engineered with surgical
                intent. We calibrate your lever lengths, strengthen your end-range
                flexibility, and decode the subtle biomechanical cues that turn
                frustrating plateaus into repeatable mastery.
              </p>
            </div>

            {/* Three Core Tenets */}
            <div className="mt-16 pt-10 border-t border-[#111111]/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <span className="font-mono text-xs text-[#111111] tracking-widest uppercase block mb-1">
                  01 / Precision
                </span>
                <p className="text-xs text-[#6B6862] leading-relaxed">
                  Millimeters in shoulder elevation separate a wobbly kick-up from a
                  60-second motionless hold.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-[#111111] tracking-widest uppercase block mb-1">
                  02 / Longevity
                </span>
                <p className="text-xs text-[#6B6862] leading-relaxed">
                  Tendon adaptation takes 3x longer than muscular strength. We protect
                  wrists and elbows through periodized prehab.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-[#111111] tracking-widest uppercase block mb-1">
                  03 / Structure
                </span>
                <p className="text-xs text-[#6B6862] leading-relaxed">
                  Zero guesswork. Every session has explicit hold targets, RPE caps,
                  and video submission check-points.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Accent */}
          <div className="lg:col-span-4 relative mt-8 lg:mt-0">
            <div className="relative aspect-[3/4] w-full bg-[#EBE7DF] border border-[#111111]/10 overflow-hidden">
              <Image
                src="/images/skills/press-handstand.jpg"
                alt="BodyweightLab Biomechanical Precision"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F6]/90 backdrop-blur-sm p-3 border border-[#111111]/10 text-[10px] font-mono tracking-wider text-[#111111] uppercase">
                <span className="block font-semibold">Active Compression</span>
                <span className="text-[#6B6862]">Flexibility + Active Press Mechanics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
