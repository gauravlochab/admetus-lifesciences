"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = localStorage.getItem("admetus-theme");
    if (saved === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLight(false);
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

  if (!mounted) {
    return <div className="w-[31px] h-[31px]" />;
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
