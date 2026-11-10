"use client";

import Link from "next/link";
import { NAV_LINKS, BRAND_CONFIG } from "@/data/navigation";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 md:pt-28 pb-12 px-6 md:px-12 bg-[#F9F8F5] text-[#111111] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#111111]/10">
          {/* Brand Vision */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#6B6862] uppercase block">
              BodyweightLab Archive
            </span>
            <p className="text-base text-[#6B6862] leading-relaxed max-w-sm font-light">
              Personalized skill development for athletes who want to master
              advanced bodyweight movements. Precision, control, and structural
              longevity.
            </p>
            <div className="pt-2 text-xs font-mono text-[#6B6862]">
              Status: <span className="text-[#111111]">{BRAND_CONFIG.availabilityStatus}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-[#6B6862] uppercase block mb-4">
              Directory
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {NAV_LINKS.map((link) => (
                <li key={link.number}>
                  <a
                    href={link.href}
                    className="text-[#6B6862] hover:text-[#111111] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-[#96938D]">{link.number}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-3 space-y-4 text-xs font-mono">
            <span className="text-xs font-mono tracking-widest text-[#6B6862] uppercase block mb-4">
              Connect
            </span>
            <div>
              <span className="text-[10px] text-[#6B6862] block uppercase tracking-wider">
                Direct Inquiries
              </span>
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="text-sm font-editorial text-[#111111] hover:underline"
              >
                {BRAND_CONFIG.email}
              </a>
            </div>

            <div>
              <span className="text-[10px] text-[#6B6862] block uppercase tracking-wider">
                Instagram Archive
              </span>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:underline"
              >
                {BRAND_CONFIG.instagram} ↗
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#6B6862] hover:text-[#111111] transition-colors"
              >
                <span>Back to top</span>
                <span>↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* Massive Editorial Baseline Wordmark */}
        <div className="pt-12 pb-6 border-b border-[#111111]/8">
          <div className="text-[12vw] font-editorial tracking-[0.05em] uppercase font-light text-[#111111]/90 leading-none select-none text-center">
            {BRAND_CONFIG.name}
          </div>
        </div>

        {/* Baseline Metadata & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#6B6862]">
          <div>
            © 2026 {BRAND_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>{BRAND_CONFIG.locationNotice}</span>
            <span>Art-Directed Calisthenics System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
