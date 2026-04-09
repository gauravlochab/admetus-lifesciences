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
    <footer className="bg-[var(--bg-charcoal)] border-t border-[var(--gold)]/10" role="contentinfo">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Company Info */}
          <div>
            <span
              className="text-[var(--foreground)] tracking-[0.18em] text-base font-bold"
              style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
              aria-hidden="true"
            >
              ADMETUS
            </span>
            <h3 className="sr-only">Admetus Lifesciences</h3>
            <p className="mt-4 body-text text-[var(--text-cream)] max-w-xs !text-[0.875rem]">
              Precision-engineered softgel capsules manufactured in India.
              Contract manufacturing, private label, and export-ready
              nutraceuticals.
            </p>
            <div className="mt-5 flex flex-wrap gap-3" aria-label="Certifications">
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
          <nav aria-label="Products">
            <h3 className="label-text text-[var(--gold)] mb-5">Products</h3>
            <ul className="space-y-2.5" role="list">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-text text-[var(--text-cream)] hover:text-[var(--foreground)] transition-colors duration-300 !text-[0.8125rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="label-text text-[var(--gold)] mb-5">Services</h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-text text-[var(--text-cream)] hover:text-[var(--foreground)] transition-colors duration-300 !text-[0.8125rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="label-text text-[var(--gold)] mb-5">Contact</h3>
            <address className="not-italic space-y-3">
              <div>
                <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Address</span>
                <p className="body-text text-[var(--text-cream)] !text-[0.8125rem]">
                  Village Anta, Tehsil Safidon,
                  <br />
                  Distt. Jind, Haryana - 126112, India
                </p>
              </div>
              <div>
                <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Email</span>
                <a
                  href="mailto:admetuslifesciences@gmail.com"
                  className="body-text text-[var(--text-cream)] hover:text-[var(--foreground)] transition-colors !text-[0.8125rem]"
                >
                  admetuslifesciences@gmail.com
                </a>
              </div>
            </address>

            <div className="mt-4 pt-3 border-t border-[var(--border-subtle)]">
              <p className="mono-text text-[0.625rem] text-[var(--text-muted)]">
                GSTIN: 06ABRFA9749C1Z3
              </p>
              <p className="mono-text text-[0.625rem] text-[var(--text-muted)] mt-0.5">
                License: 10020064002545
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-5 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="body-text text-[var(--text-muted)] !text-[0.75rem]">
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
