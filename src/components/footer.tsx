import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const companyLinks = [
  { href: "/about/", label: "About Us" },
  { href: "/manufacturing/", label: "Manufacturing" },
  { href: "/quality/", label: "Quality" },
];

const productLinks = [
  { href: "/products/", label: "All Products" },
  { href: "/products/adlife-12g/", label: "ADLIFE 12G" },
  { href: "/products/adlife-q10/", label: "ADLIFE Q10" },
  { href: "/products/adlife-gold/", label: "ADLIFE GOLD" },
  { href: "/products/adlife-k2-7/", label: "ADLIFE K2-7" },
];

const serviceLinks = [
  { href: "/contract-manufacturing/", label: "Contract Manufacturing" },
  { href: "/export/", label: "Export" },
  { href: "/contact/", label: "Request a Quote" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-[var(--space-24)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <span
              className="text-[#FAFAFA] tracking-[0.15em] text-xl font-bold"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              ADMETUS
            </span>
            <p className="mt-4 text-sm text-[var(--text-cream)] leading-relaxed max-w-xs">
              Precision-engineered softgel capsules manufactured in India.
              Contract manufacturing, private label, and export-ready
              nutraceuticals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["FSSAI", "GMP", "HACCP", "Halal", "WHO-GMP"].map((cert) => (
                <span
                  key={cert}
                  className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[var(--gold-muted)]"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="label-text text-[var(--gold)] mb-5">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-cream)] hover:text-[#FAFAFA] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="label-text text-[var(--gold)] mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-cream)] hover:text-[#FAFAFA] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-text text-[var(--gold)] mb-5">Contact</h3>
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
                  className="text-sm text-[var(--text-cream)] hover:text-[#FAFAFA] transition-colors"
                >
                  admetuslifesciences@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
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
        <div className="mt-16 pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.875rem] text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Admetus Lifesciences. All rights
            reserved.
          </p>
          <p className="text-[0.875rem] text-[var(--text-muted)]">
            Manufactured in India
          </p>
        </div>
      </div>
    </footer>
  );
}
