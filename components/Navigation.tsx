"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { NAV_LINKS, BRAND_CONFIG } from "@/data/navigation";

interface NavigationProps {
  onOpenApply: () => void;
}

export function Navigation({ onOpenApply }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for subtle bar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href === "#apply") {
      onOpenApply();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Fixed Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F9F8F5]/90 backdrop-blur-md border-b border-[#111111]/8 py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: MENU Button */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-[#111111] hover:opacity-60 transition-opacity focus-visible:ring-1 focus-visible:ring-[#111111]"
              aria-expanded={isOpen}
              aria-label="Open Fullscreen Navigation"
            >
              <span className="inline-block w-4 h-[1px] bg-[#111111] transition-transform group-hover:scale-x-125 origin-left" />
              <span>Menu</span>
            </button>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="flex-initial text-center">
            <Link
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#hero");
              }}
              className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-[#111111] hover:opacity-80 transition-opacity"
            >
              {BRAND_CONFIG.name}
            </Link>
          </div>

          {/* Right: Apply for Coaching CTA */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={onOpenApply}
              className="group text-xs tracking-[0.18em] uppercase font-medium text-[#111111] border-b border-[#111111] pb-0.5 hover:border-transparent hover:opacity-60 transition-all focus-visible:ring-1 focus-visible:ring-[#111111]"
            >
              <span className="hidden sm:inline">Apply for Coaching</span>
              <span className="sm:hidden">Apply</span>
              <span className="inline-block ml-1.5 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Curtain Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#0E0E0E] text-[#F5F3EF] transition-all duration-500 flex flex-col ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
      >
        {/* Overlay Header */}
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 py-6 md:py-8 flex items-center justify-between border-b border-white/10">
          <div className="text-xs tracking-[0.2em] uppercase text-[#96938D]">
            Navigation
          </div>

          <Link
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-[#F5F3EF] hover:opacity-80 transition-opacity"
          >
            {BRAND_CONFIG.name}
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#F5F3EF] hover:text-[#96938D] transition-colors"
            aria-label="Close navigation"
          >
            <span>Close</span>
            <span className="text-base font-light transition-transform group-hover:rotate-90">
              ✕
            </span>
          </button>
        </div>

        {/* Overlay Content */}
        <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 overflow-y-auto">
          {/* Left Column: Numbered Navigation Links */}
          <nav className="lg:col-span-8 flex flex-col justify-center space-y-4 md:space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.number}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="group flex items-baseline gap-4 md:gap-8 py-1 transition-transform duration-300 hover:translate-x-3"
              >
                <span className="text-xs md:text-sm font-mono tracking-widest text-[#96938D] group-hover:text-white transition-colors">
                  {link.number}
                </span>
                <span className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F3EF] group-hover:italic group-hover:text-white transition-all">
                  {link.label}
                </span>
                {link.description && (
                  <span className="hidden md:inline-block text-xs font-mono text-[#96938D] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                    — {link.description}
                  </span>
                )}
              </a>
            ))}

            {/* Direct Apply Action inside Menu */}
            <div className="pt-6 mt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenApply();
                }}
                className="group flex items-center gap-3 text-sm md:text-base font-mono tracking-[0.2em] uppercase text-white bg-white/5 hover:bg-white/10 px-6 py-4 border border-white/20 transition-all"
              >
                <span>Initiate Coaching Application</span>
                <span className="transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </nav>

          {/* Right Column: Ethos & Direct Contacts */}
          <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 text-[#96938D]">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-white mb-2">
                  Coaching Ethos
                </p>
                <p className="text-sm leading-relaxed text-[#F5F3EF]/80">
                  Calisthenics is not random exhaustion. It is the deliberate
                  cultivation of leverage, joint resilience, and neuromuscular
                  mastery.
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-white mb-2">
                  Current Status
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F3EF]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{BRAND_CONFIG.availabilityStatus}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="block text-[10px] text-[#96938D] tracking-widest uppercase mb-1">
                  Inquiries
                </span>
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="text-[#F5F3EF] hover:underline"
                >
                  {BRAND_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="block text-[10px] text-[#96938D] tracking-widest uppercase mb-1">
                  Social Archive
                </span>
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F3EF] hover:underline"
                >
                  {BRAND_CONFIG.instagram}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#96938D]/60">
                {BRAND_CONFIG.locationNotice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
