"use client";

import { useState } from "react";
import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "@/data/services";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 border-b border-[#111111]/8 bg-[#F9F8F5]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#111111]/8">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#6B6862] block mb-3">
              004 // COACHING DISCIPLINES
            </span>
            <h2 className="font-editorial text-section-headline text-[#111111] font-light">
              Train with intention. <br />
              <span className="font-editorial-italic font-normal">Master your next skill.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#6B6862] leading-relaxed">
              Every coaching track is a dedicated curriculum with specific weekly
              drills, personalized cues, and video checkpoints. Select a discipline
              to explore its architecture.
            </p>
          </div>
        </div>

        {/* Oversized Typographic Service List */}
        <div className="mt-8 divide-y divide-[#111111]/10">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group py-8 md:py-12 transition-colors duration-300"
              >
                {/* Header Row (Always Visible) */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-sm md:text-base text-[#6B6862] tracking-widest">
                      {service.number}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111111] group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="hidden sm:inline-block text-xs font-mono tracking-wider text-[#6B6862] uppercase">
                      {service.tagline}
                    </span>
                    <span className="text-lg font-light text-[#111111] w-8 h-8 rounded-full border border-[#111111]/20 flex items-center justify-center transition-transform duration-300">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Expanded Architectural Details */}
                <div
                  className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100 mt-8 pt-8 border-t border-[#111111]/8"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left: Description & Deliverables */}
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-base text-[#6B6862] leading-relaxed max-w-2xl">
                        {service.description}
                      </p>

                      <div>
                        <span className="text-xs font-mono tracking-widest uppercase text-[#111111] block mb-3">
                          Curriculum Deliverables:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#6B6862]">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#111111] mt-0.5">▪</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 text-xs font-mono text-[#6B6862]">
                        <span className="text-[#111111] font-semibold">Ideal candidate: </span>
                        {service.idealFor}
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => onSelectService(service.title)}
                          className="inline-flex items-center gap-3 bg-[#111111] text-[#F9F8F5] px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase hover:bg-[#262626] transition-colors"
                        >
                          <span>Apply for {service.title}</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Technical Schema Slot */}
                    <div className="lg:col-span-4 relative aspect-[4/3] bg-[#EBE7DF] border border-[#111111]/10 overflow-hidden hidden sm:block">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[#111111] text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5">
                        {service.number} // PROGRAM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
