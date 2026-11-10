"use client";

interface FinalCTAProps {
  onOpenApply: () => void;
}

export function FinalCTA({ onOpenApply }: FinalCTAProps) {
  const scrollToSkills = (e: React.MouseEvent) => {
    e.preventDefault();
    const skills = document.getElementById("skills");
    if (skills) {
      skills.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 md:py-44 px-6 md:px-12 bg-[#F9F8F5] border-b border-[#111111]/8 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono tracking-widest uppercase text-[#6B6862] block mb-4">
          008 // INITIATE YOUR PROGRESSION
        </span>

        <h2 className="font-editorial text-hero-headline text-[#111111] font-light leading-[0.98]">
          Your next skill <br />
          <span className="font-editorial-italic font-normal">starts here</span>.
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#6B6862] max-w-xl mx-auto leading-relaxed font-light">
          Stop guessing your progressions. Start training with a plan built around
          the skills you actually want to master.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onOpenApply}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111111] text-[#F9F8F5] px-10 py-5 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#262626]"
          >
            <span>Apply for Coaching</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <a
            href="#skills"
            onClick={scrollToSkills}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-[#111111]/20 px-8 py-5 text-xs font-mono tracking-[0.2em] uppercase text-[#111111] hover:border-[#111111] transition-colors"
          >
            <span>Explore the Skills</span>
            <span className="text-[#6B6862]">↓</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-[#111111]/8 flex items-center justify-center gap-6 text-[11px] font-mono text-[#6B6862]">
          <span>• 100% Bespoke Programming</span>
          <span>• Video Audits</span>
          <span>• No Fluff Routines</span>
        </div>
      </div>
    </section>
  );
}
