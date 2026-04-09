"use client";

import { useState, useEffect } from "react";
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
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-black)]/85 backdrop-blur-[20px] border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)] flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="group">
            <span
              className="text-[#FAFAFA] tracking-[0.15em] text-xl"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              ADMETUS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2.5 py-2 text-[0.7rem] font-medium text-[#8A8274] hover:text-[#FAFAFA] transition-colors duration-300 uppercase tracking-[0.08em] whitespace-nowrap"
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
              className="px-5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-[var(--gold)] border border-[var(--gold)]/30 rounded-full hover:bg-[var(--gold)]/10 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="xl:hidden p-2 text-[var(--gold)]"
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
            className="fixed inset-0 z-[60] bg-[var(--bg-black)] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-5 right-6 p-2 text-[var(--gold)]"
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
                  className="px-8 py-3 text-sm font-semibold text-[#0A0A0A] bg-[var(--gold)] rounded-full"
                >
                  REQUEST A QUOTE
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
