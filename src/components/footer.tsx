import Link from "next/link";

const productLinks = [
  { href: "/catalog/", label: "Catalog (PDFs)" },
  { href: "/products/", label: "All Products" },
  { href: "/products/cholecalciferol-60000-iu/", label: "Vitamin D3 60K IU" },
  { href: "/products/calcitriol-calcium-k27-softgel/", label: "Calcitriol + K2-7" },
  { href: "/products/omega-3-vitamin-e-softgel/", label: "Omega-3 + Vit E" },
  { href: "/products/krill-oil-softgel/", label: "Krill Oil" },
  { href: "/products/glutathione-ala-grape-seed/", label: "Glutathione + ALA" },
  { href: "/products/ginseng-astaxanthin-multivitamin/", label: "Ginseng + Astaxanthin" },
  { href: "/products/nigella-sativa-kalonji/", label: "Nigella Sativa" },
];

const serviceLinks = [
  { href: "/contract-manufacturing/", label: "Contract Manufacturing" },
  { href: "/third-party-softgel-manufacturer-india/", label: "Third Party Manufacturing" },
  { href: "/private-label-softgel-manufacturer-india/", label: "Private Label India" },
  { href: "/nutraceutical-manufacturer-india/", label: "Nutraceutical Manufacturer" },
  { href: "/halal-softgel-manufacturer-india/", label: "Halal Softgel Manufacturer" },
  { href: "/omega-3-softgel-manufacturer-india/", label: "Omega-3 Manufacturer" },
  { href: "/softgel-capsule-exporter-india/", label: "Softgel Exporter India" },
  { href: "/contract-manufacturing-vitamin-d3-softgel/", label: "Vitamin D3 Manufacturing" },
  { href: "/softgel-capsule-manufacturer-haryana/", label: "Haryana Facility" },
  { href: "/export/", label: "Export" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/blog/", label: "Blog & Insights" },
  { href: "/contact/", label: "Request a Quote" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bg-charcoal)] border-t border-[var(--gold)]/10" role="contentinfo">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {/* Company Info */}
          <div>
            <img
              src="/images/logo-horizontal.png"
              alt="Admetus Lifesciences"
              className="h-10 sm:h-12 w-auto max-w-[200px]"
              width={200}
              height={48}
              aria-hidden="true"
            />
            <h3 className="sr-only">Admetus Lifesciences</h3>
            <p className="mt-4 body-text text-[var(--text-cream)] max-w-xs !text-[0.75rem]" style={{ lineHeight: 1.65 }}>
              Precision-engineered softgel capsules manufactured in&nbsp;India.
              Contract manufacturing, private label, and export-ready
              nutraceuticals.
            </p>
            <div className="mt-5 flex flex-wrap gap-3" aria-label="Certifications">
              {["FSSAI", "GMP", "HACCP", "Halal", "WHO-GMP"].map((cert) => (
                <span
                  key={cert}
                  className="text-[0.625rem] font-semibold tracking-[0.18em] uppercase text-[var(--gold)]"
                  style={{ fontFamily: "var(--font-display)" }}
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
                    className="footer-link body-text text-[var(--text-cream)] !text-[0.75rem]"
                    style={{ transition: "color 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}
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
                    className="footer-link body-text text-[var(--text-cream)] !text-[0.75rem]"
                    style={{ transition: "color 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}
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
                <p className="body-text text-[var(--text-cream)] !text-[0.75rem]">
                  Village Anta, Tehsil Safidon,
                  <br />
                  Distt. Jind, Haryana - 126112, India
                </p>
              </div>
              <div>
                <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Phone</span>
                <a
                  href="tel:+917497841608"
                  className="footer-link body-text text-[var(--text-cream)] !text-[0.75rem] block"
                  style={{ transition: 'color 200ms cubic-bezier(0.23, 1, 0.32, 1)' }}
                >
                  +91-7497841608
                </a>
                <a
                  href="tel:+919729977795"
                  className="footer-link body-text text-[var(--text-cream)] !text-[0.75rem] block"
                  style={{ transition: 'color 200ms cubic-bezier(0.23, 1, 0.32, 1)' }}
                >
                  +91-9729977795
                </a>
              </div>
              <div>
                <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Hours</span>
                <p className="body-text text-[var(--text-cream)] !text-[0.75rem]">
                  Mon - Sat, 9:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Email</span>
                <a
                  href="mailto:admetuslifesciences@gmail.com"
                  className="footer-link body-text text-[var(--text-cream)] !text-[0.75rem] break-all"
                  style={{ transition: "color 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}
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
        <div className="mt-10 md:mt-16 pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="body-text text-[var(--text-muted)] !text-[0.625rem] opacity-60">
            &copy; {new Date().getFullYear()} Admetus Lifesciences. All rights
            reserved.
          </p>
          <p className="text-[0.625rem] font-semibold tracking-[0.18em] uppercase text-[var(--gold)] opacity-60" style={{ fontFamily: "var(--font-display)" }}>
            Manufactured in India
          </p>
        </div>
      </div>
    </footer>
  );
}
