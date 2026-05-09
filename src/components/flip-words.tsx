"use client";
import { useState, useEffect } from "react";

interface FlipWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function FlipWords({ words, interval = 2500, className = "" }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % words.length);
        setIsExiting(false);
      }, 300);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span
      className={`inline-block overflow-hidden ${className}`}
      style={{ perspective: "400px" }}
    >
      <span
        key={currentIndex}
        className={isExiting ? "word-flip-exit" : "word-flip-enter"}
        style={{ display: "inline-block" }}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
