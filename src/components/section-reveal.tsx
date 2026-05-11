"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const directions = {
    up: "translate-y-5",
    down: "-translate-y-5",
    left: "translate-x-5",
    right: "-translate-x-5",
  };

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directions[direction]}`
      } ${className}`}
      style={{
        transition: `opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)`,
        transitionDelay: `${delay * 1000}ms`,
      }}
    >
      {children}
    </div>
  );
}
