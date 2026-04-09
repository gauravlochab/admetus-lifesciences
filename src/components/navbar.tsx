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

      // Hide on rapid scroll down, show on scroll up
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
          isScrolled
            ? "bg-[rgba(10,10,10,0.9)] backdrop-blur-[20px] border-b border-[var(--border-subtle)]"
            : "bg-transparent"
        }`}
        style={{ height: "72px" }}
      >
        <nav className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] h-full flex items-center justify-between">
          {/* Wordmark — always white */}
          <Link href="/" className="group">
            <span
              className="text-[#FAFAFA] tracking-[0.15em] text-xl font-bold"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              ADMETUS
            </span>
          </Link>

          {/* Desktop Nav — always white text */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[0.7rem] font-medium text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-colors duration-300 uppercase tracking-[0.08em] whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Theme */}
          <div className="hidden xl:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact/"
              className="px-5 py-2 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--gold)] border border-[var(--gold)]/40 hover:bg-[var(--gold)] hover:text-[#0A0A0A] transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="xl:hidden p-2 text-[#FAFAFA]"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 z-[60] glass flex flex-col items-center justify-center"
            style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)" }}
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-5 right-6 p-2 text-[#FAFAFA]"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-2xl font-medium text-[#FAFAFA] uppercase tracking-[0.05em]"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/contact/"
                  onClick={() => setIsMobileOpen(false)}
                  className="px-8 py-3 text-sm font-bold text-[#0A0A0A] bg-[var(--gold)] uppercase tracking-[0.1em]"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
