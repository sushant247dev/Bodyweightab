"use client";

import { useEffect } from "react";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // On mobile devices (screen width < 768px), disable scroll-triggered delay so content is immediately visible
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      // Ensure all elements are immediately revealed
      document.querySelectorAll("section, article, .reveal-item").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    // Use native IntersectionObserver for smooth editorial reveals on desktop
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "150px 0px 50px 0px", // Pre-trigger before elements scroll into view
      }
    );

    // Observe all article elements, sections, and items with .reveal-item
    const elementsToReveal = document.querySelectorAll(
      "section, article, .reveal-item"
    );

    elementsToReveal.forEach((el) => {
      // If element is already in or near viewport at load, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150) {
        el.classList.add("is-revealed");
      } else {
        el.classList.add("reveal-on-scroll");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
