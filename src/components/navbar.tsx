"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
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
              className="text-[var(--text-white)] tracking-[0.18em] text-lg font-bold"
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
                className="px-3 py-2 text-[0.65rem] font-semibold text-[var(--text-white)]/60 hover:text-[var(--text-white)] transition-colors duration-300 uppercase tracking-[0.1em] whitespace-nowrap"
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
              className="px-5 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[var(--gold)] border border-[var(--gold)]/40 hover:bg-[var(--gold)] hover:text-[var(--bg-black)] transition-all duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="xl:hidden p-3 text-[var(--text-white)]"
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            style={{ background: "rgba(10,10,10,0.97)" }}
            role="dialog"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
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
                  className="px-8 py-3 text-[0.6875rem] font-bold text-[var(--bg-black)] bg-[var(--gold)] uppercase tracking-[0.12em]"
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
