"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    // Only enable on desktop with fine pointing (mouse)
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    // Check reduced motion preference
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    setIsPointerFine(true);
    setMounted(true);
    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      // Check if target or parent is interactive
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, select, textarea, [data-cursor-hover]"
      );
      setIsHovered(!!interactive);

      // Check if hovering over a dark section
      const darkContainer = target.closest(
        "[data-theme='dark'], .section-dark"
      );
      setIsDarkSection(!!darkContainer);
    };

    const onMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []); // Run once on mount

  if (!mounted || !isPointerFine) return null;

  return (
    <div
      className={`cursor-dot transition-transform duration-75 ease-out ${
        isHovered ? "cursor-hover" : ""
      } ${isDarkSection ? "cursor-dark" : ""}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        opacity: isVisible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
}
