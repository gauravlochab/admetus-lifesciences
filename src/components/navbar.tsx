"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/about/", label: "About" },
  { href: "/products/", label: "Products" },
  { href: "/catalog/", label: "Catalog" },
  { href: "/manufacturing/", label: "Facility" },
  { href: "/quality/", label: "Quality" },
  { href: "/contract-manufacturing/", label: "Contract Mfg" },
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

  /* Focus trap for mobile menu */
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
        className={`fixed top-0 left-0 right-0 z-50 ${isHidden ? "-translate-y-full" : "translate-y-0"
          } ${isScrolled ? "nav-glass" : "bg-transparent"
          }`}
        style={{
          height: "72px",
          transition: "transform 400ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        role="banner"
      >
        <nav className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] h-full flex items-center justify-between" aria-label="Main navigation">
          {/* Wordmark */}
          <Link href="/" className="group flex items-center gap-4 sm:gap-5 shrink-0" aria-label="Admetus Lifesciences home">
            <img
              src="/images/logo-mark.png"
              alt=""
              className="h-8 sm:h-9 w-auto shrink-0"
              width={40}
              height={40}
            />
            <span
              className={`tracking-[0.18em] text-base sm:text-lg font-bold ${isScrolled ? "text-[var(--foreground)]" : "text-[var(--hero-text)]"}`}
              style={{
                fontFamily: "var(--font-display), Archivo, sans-serif",
                transition: "letter-spacing 300ms cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.letterSpacing = "0.22em"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.letterSpacing = "0.18em"; }}
            >
              ADMETUS
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-0.5 ml-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-hover px-3 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] whitespace-nowrap ${isScrolled ? "text-[var(--foreground)]/60" : "text-[var(--hero-text)]/70"}`}
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
              className="btn-editorial px-5 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[var(--gold)] border border-[var(--gold)]/40 hover:bg-[var(--gold)] hover:text-[var(--bg-black)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Quote
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`xl:hidden flex items-center justify-center min-w-[48px] min-h-[48px] p-3 group ${isScrolled ? "text-[var(--foreground)]" : "text-[var(--hero-text)]"}`}
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileOpen ? (
              <X size={22} />
            ) : (
              <div className="flex flex-col gap-[6px]">
                <span className={`block w-6 h-[1.5px] ${isScrolled ? "bg-[var(--foreground)]" : "bg-[var(--hero-text)]"}`} style={{ transition: "width 200ms cubic-bezier(0.23, 1, 0.32, 1)" }} />
                <span className={`block w-4 h-[1.5px] ${isScrolled ? "bg-[var(--foreground)]" : "bg-[var(--hero-text)]"} group-hover:w-6`} style={{ transition: "width 200ms cubic-bezier(0.23, 1, 0.32, 1)" }} />
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
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => { setIsMobileOpen(false); menuButtonRef.current?.focus(); }}
              className="absolute top-4 right-4 flex items-center justify-center min-w-[48px] min-h-[48px] p-3 text-foreground"
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
                  transition={{ delay: i * 0.05, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-xl font-semibold text-foreground uppercase tracking-[0.06em] py-1"
                    style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="mt-6"
              >
                <Link
                  href="/contact/"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-editorial px-7 py-3.5 text-[0.6875rem] font-bold text-primary-foreground bg-primary uppercase tracking-[0.12em]"
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
