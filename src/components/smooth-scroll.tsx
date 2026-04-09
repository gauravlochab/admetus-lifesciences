"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis").default> | null = null;
    let rafId: number | null = null;

    async function init() {
      // Skip smooth scroll if user prefers reduced motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    init();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
