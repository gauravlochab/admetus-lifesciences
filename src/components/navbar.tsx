"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/about/", label: "About" },
  { href: "/products/", label: "Products" },
  { href: "/manufacturing/", label: "Facility" },
  { href: "/quality/", label: "Quality" },
  { href: "/contract-manufacturing/", label: "Partner" },
  { href: "/export/", label: "Export" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 100);

      if (currentY > lastScrollY.current && currentY > 300) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  /* FIX: Focus trap for mobile menu */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isMobileOpen) return;
    if (e.key === "Escape") {
      setIsMobileOpen(false);
      menuButtonRef.current?.focus();
      return;
    }
    if (e.key === "Tab" && mobileMenuRef.current) {
      const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [isMobileOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-400 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled ? "nav-glass" : "bg-transparent"
        }`}
        style={{ height: "72px" }}
        role="banner"
      >
        <nav className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] h-full flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="group" aria-label="Admetus Lifesciences home">
            <span
              className="text-[var(--foreground)] tracking-[0.18em] text-lg font-bold"
              style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
            >
              ADMETUS
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[0.6875rem] font-semibold text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-200 uppercase tracking-[0.1em] whitespace-nowrap"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact/"
              className="px-5 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[var(--gold)] border border-[var(--gold)]/40 hover:bg-[var(--gold)] hover:text-[var(--bg-black)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Quote
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="xl:hidden p-3 text-[var(--foreground)] group"
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileOpen ? (
              <X size={22} />
            ) : (
              <div className="flex flex-col gap-[6px]">
                <span className="block w-6 h-[1.5px] bg-[var(--foreground)] transition-all duration-200" />
                <span className="block w-4 h-[1.5px] bg-[var(--foreground)] group-hover:w-6 transition-all duration-200" />
              </div>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            style={{ background: "rgba(10,10,10,0.97)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => { setIsMobileOpen(false); menuButtonRef.current?.focus(); }}
              className="absolute top-5 right-6 p-3 text-[var(--text-white)]"
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>

            <nav className="flex flex-col items-center gap-7" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-xl font-semibold text-[var(--text-white)] uppercase tracking-[0.06em]"
                    style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/contact/"
                  onClick={() => setIsMobileOpen(false)}
                  className="px-7 py-3 text-[0.6875rem] font-bold text-[var(--bg-black)] bg-[var(--gold)] uppercase tracking-[0.12em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
