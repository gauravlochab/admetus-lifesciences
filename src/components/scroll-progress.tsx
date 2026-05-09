"use client";

import { useScroll, useSpring, motion } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
        transformOrigin: "0% 50%",
        scaleX,
        zIndex: 100,
      }}
    />
  );
}
