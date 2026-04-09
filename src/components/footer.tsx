import Link from "next/link";

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
    <footer className="bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]" role="contentinfo">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-[var(--space-24)]">
        {/* Top gold rule */}
        <div className="gold-rule w-16 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <span
              className="text-[var(--text-white)] tracking-[0.18em] text-lg font-bold"
              style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
            >
              ADMETUS
            </span>
            <p className="mt-5 body-text text-[var(--text-cream)] max-w-xs !text-[0.9375rem]">
              Precision-engineered softgel capsules manufactured in India.
              Contract manufacturing, private label, and export-ready
              nutraceuticals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["FSSAI", "GMP", "HACCP", "Halal", "WHO-GMP"].map((cert) => (
                <span
                  key={cert}
                  className="label-text !text-[0.5625rem] text-[var(--gold-muted)]"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="label-text text-[var(--gold)] mb-6">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-text text-[var(--text-cream)] hover:text-[var(--text-white)] transition-colors duration-300 !text-[0.875rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="label-text text-[var(--gold)] mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-text text-[var(--text-cream)] hover:text-[var(--text-white)] transition-colors duration-300 !text-[0.875rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-text text-[var(--gold)] mb-6">Contact</h3>
            <address className="not-italic space-y-4">
              <div>
                <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-1">Address</span>
                <p className="body-text text-[var(--text-cream)] !text-[0.875rem]">
                  Village Anta, Tehsil Safidon,
                  <br />
                  Distt. Jind, Haryana - 126112, India
                </p>
              </div>
              <div>
                <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-1">Email</span>
                <a
                  href="mailto:admetuslifesciences@gmail.com"
                  className="body-text text-[var(--text-cream)] hover:text-[var(--text-white)] transition-colors !text-[0.875rem]"
                >
                  admetuslifesciences@gmail.com
                </a>
              </div>
            </address>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
              <p className="mono-text text-[0.6875rem] text-[var(--text-muted)]">
                GSTIN: 06ABRFA9749C1Z3
              </p>
              <p className="mono-text text-[0.6875rem] text-[var(--text-muted)] mt-1">
                License: 10020064002545
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-text text-[var(--text-muted)] !text-[0.8125rem]">
            &copy; {new Date().getFullYear()} Admetus Lifesciences. All rights
            reserved.
          </p>
          <p className="label-text !text-[0.5625rem] text-[var(--text-muted)]">
            Manufactured in India
          </p>
        </div>
      </div>
    </footer>
  );
}
