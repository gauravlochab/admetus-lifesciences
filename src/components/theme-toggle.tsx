"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("admetus-theme");
    if (saved === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.classList.add("light");
      localStorage.setItem("admetus-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("admetus-theme", "dark");
    }
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-[var(--border)]"
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? (
        <Moon size={16} className="text-[var(--foreground)]" />
      ) : (
        <Sun size={16} className="text-[var(--text-muted)]" />
      )}
    </button>
  );
}
