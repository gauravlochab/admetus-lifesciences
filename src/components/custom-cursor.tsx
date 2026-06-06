"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorVariant = "default" | "pointer" | "text";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Only activate on desktop (>= 1024px)
    if (window.innerWidth < 1024) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleTargetEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      const el = target.closest("a, button, [data-cursor='pointer'], [data-cursor='text']");
      if (!el) return;
      const dataCursor = el.getAttribute("data-cursor");
      if (dataCursor === "text") {
        setVariant("text");
      } else if (
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        dataCursor === "pointer"
      ) {
        setVariant("pointer");
      }
    };

    const handleTargetLeave = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as Element | null;
      const stillInside =
        relatedTarget &&
        relatedTarget.closest("a, button, [data-cursor='pointer'], [data-cursor='text']");
      if (!stillInside) setVariant("default");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleTargetEnter);
    document.addEventListener("mouseout", handleTargetLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleTargetEnter);
      document.removeEventListener("mouseout", handleTargetLeave);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Don't render on server, mobile, or before mounting
  if (!mounted || (typeof window !== "undefined" && window.innerWidth < 1024)) return null;

  const getDotStyles = () => {
    switch (variant) {
      case "pointer":
        return {
          width: 32,
          height: 32,
          backgroundColor: "rgba(0, 0, 0, 0)",
          border: "1.5px solid var(--gold)",
          borderRadius: "50%",
          x: "-50%",
          y: "-50%",
        };
      case "text":
        return {
          width: 2,
          height: 24,
          backgroundColor: "var(--gold)",
          border: "none",
          borderRadius: "1px",
          x: "-50%",
          y: "-50%",
        };
      default:
        return {
          width: 8,
          height: 8,
          backgroundColor: "var(--gold)",
          border: "none",
          borderRadius: "50%",
          x: "-50%",
          y: "-50%",
        };
    }
  };

  const dotStyles = getDotStyles();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: cursorY,
        left: cursorX,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: dotStyles.width,
        height: dotStyles.height,
        backgroundColor: dotStyles.backgroundColor,
        border: dotStyles.border,
        borderRadius: dotStyles.borderRadius,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        width: { type: "spring", damping: 20, stiffness: 400 },
        height: { type: "spring", damping: 20, stiffness: 400 },
        backgroundColor: { duration: 0.15 },
        border: { duration: 0.15 },
        borderRadius: { duration: 0.15 },
        opacity: { duration: 0.2 },
      }}
    />
  );
}
