"use client";

import Image from "next/image";

interface HeroProps {
  onOpenApply: () => void;
}

export function Hero({ onOpenApply }: HeroProps) {
  const scrollToSkills = (e: React.MouseEvent) => {
    e.preventDefault();
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32 px-6 md:px-12 border-b border-[#111111]/8 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top Eyebrow / Disciplinary Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 md:pb-12 border-b border-[#111111]/8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#111111]" />
            <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#6B6862]">
              Online Calisthenics &amp; Handstand Coaching
            </span>
          </div>
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#6B6862]">
            Curated Skill Acquisition — Jaipur, India &amp; Worldwide
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-10 md:pt-16 items-start">
          {/* Left Column: Typographic Statements & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              <h1 className="font-editorial text-hero-headline text-[#111111] font-light tracking-tight">
                <span className="block">Strength is built.</span>
                <span className="block mt-1 sm:mt-2">
                  <em className="font-editorial-italic font-normal">Control</em> is earned.
                </span>
              </h1>

              <div className="mt-8 md:mt-12 max-w-xl">
                <p className="text-base sm:text-lg md:text-xl text-[#6B6862] leading-relaxed font-light">
                  Master the skills you&apos;ve been working towards. Personalized
                  calisthenics coaching built around your body, your current
                  mobility, and measurable, injury-free progress.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <button
                  onClick={scrollToServices}
                  className="group inline-flex items-center justify-center gap-3 bg-[#111111] text-[#F9F8F5] px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#262626]"
                >
                  <span>Explore Coaching</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <a
                  href="#skills"
                  onClick={scrollToSkills}
                  className="group inline-flex items-center justify-center gap-3 border border-[#111111]/20 px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase text-[#111111] hover:border-[#111111] transition-colors"
                >
                  <span>View My Skills</span>
                  <span className="text-[#6B6862] group-hover:text-[#111111] transition-colors">
                    ↓
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-16 md:mt-24 pt-8 border-t border-[#111111]/8 grid grid-cols-3 gap-6">
              <div>
                <span className="block text-2xl sm:text-3xl font-editorial font-light text-[#111111]">
                  1-on-1
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B6862] mt-1 block">
                  Bespoke Structure
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-editorial font-light text-[#111111]">
                  Frame-by-Frame
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B6862] mt-1 block">
                  Video Diagnostics
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-editorial font-light text-[#111111]">
                  Longevity
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B6862] mt-1 block">
                  Tendon &amp; Joint Prep
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Athletic Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full bg-[#EBE7DF] overflow-hidden border border-[#111111]/10">
              <Image
                src="/images/hero/hero-athlete.svg"
                alt="BodyweightLab Coach Calisthenics Mastery"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />

              {/* Editorial Frame Labels */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="bg-[#111111] text-[#F9F8F5] text-[9px] font-mono uppercase tracking-[0.2em] px-2.5 py-1">
                  Plate 01 // Handstand Stillness
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[9px] font-mono tracking-widest text-[#111111] uppercase pointer-events-none bg-[#EBE7DF]/80 backdrop-blur-sm px-3 py-1.5 border border-[#111111]/10">
                <span>Straight-Line Alignment</span>
                <span>Elevation: 180°</span>
              </div>
            </div>

            {/* Micro Caption */}
            <p className="mt-3 text-[11px] font-mono tracking-wider text-[#6B6862] text-right">
              [ Coach Photography Container — Replaceable in /public/images/hero/ ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
