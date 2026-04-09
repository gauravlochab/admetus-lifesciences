import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = [
  { href: "/about/", label: "About" },
  { href: "/products/", label: "Products" },
  { href: "/manufacturing/", label: "Manufacturing" },
  { href: "/quality/", label: "Quality" },
  { href: "/contract-manufacturing/", label: "Contract" },
  { href: "/export/", label: "Export" },
  { href: "/contact/", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-black)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span
              className="text-[var(--foreground)] tracking-[0.15em] text-xl"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              ADMETUS
            </span>
            <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Precision-engineered softgel capsules manufactured in India.
              Contract manufacturing, private label, and export-ready
              nutraceuticals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["FSSAI", "GMP", "HACCP", "Halal", "WHO-GMP"].map((cert) => (
                <span
                  key={cert}
                  className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[#8A7B3E]"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-[0.75rem] font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-cream)] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.75rem] font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[var(--gold)] mt-1 shrink-0" />
                <span className="text-sm text-[var(--text-cream)]">
                  Village Anta, Tehsil Safidon,
                  <br />
                  Distt. Jind, Haryana - 126112, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[var(--gold)] shrink-0" />
                <a
                  href="mailto:admetuslifesciences@gmail.com"
                  className="text-sm text-[var(--text-cream)] hover:text-[var(--gold)] transition-colors"
                >
                  admetuslifesciences@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-xs text-[var(--text-muted)]">
                GSTIN: 06ABRFA9749C1Z3
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                License: 10020064002545
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Admetus Lifesciences. All rights
            reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Manufactured in India
          </p>
        </div>
      </div>
    </footer>
  );
}
