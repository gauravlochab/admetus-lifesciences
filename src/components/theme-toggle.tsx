"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("admetus-theme");
    const osLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    if (saved === "light" || (!saved && osLight)) {
      setIsLight(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  function toggle() {
    const next = !isLight;
    
    const applyTheme = () => {
      setIsLight(next);
      if (next) {
        document.documentElement.classList.add("light");
        localStorage.setItem("admetus-theme", "light");
      } else {
        document.documentElement.classList.remove("light");
        localStorage.setItem("admetus-theme", "dark");
      }
    };

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme();
    } else {
      document.startViewTransition(applyTheme);
    }
  }

  return (
    <button
      onClick={toggle}
      className="p-2 transition-colors duration-300 hover:bg-[var(--border-subtle)]"
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? (
        <Moon size={15} className="text-[var(--foreground)]" />
      ) : (
        <Sun size={15} className="text-[var(--text-muted)]" />
      )}
    </button>
  );
}
