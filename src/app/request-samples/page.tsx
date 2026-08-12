import Link from "next/link";
import { ArrowRight, Package, ClipboardCheck, Truck, FlaskConical } from "lucide-react";
import { products } from "@/data/products";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.admetuslifesciences.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Request Samples",
      item: "https://www.admetuslifesciences.com/request-samples/",
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Request Product Samples — Softgel Capsules | Admetus Lifesciences",
  description:
    "Request evaluation samples of our softgel capsules — Vitamin D3, Omega-3, Calcitriol K2-7, Krill Oil, Glutathione and more. Samples shipped within 5-7 business days.",
  url: "https://www.admetuslifesciences.com/request-samples/",
  publisher: {
    "@id": "https://www.admetuslifesciences.com/#organization",
  },
  mainEntity: {
    "@type": "Offer",
    name: "Softgel Capsule Evaluation Samples",
    description:
      "Complimentary evaluation samples of 100-500 softgel capsules per SKU for qualified business enquiries. WHO-GMP certified manufacturer.",
    availability: "https://schema.org/InStock",
    seller: {
      "@id": "https://www.admetuslifesciences.com/#organization",
    },
  },
};

const steps = [
  {
    icon: ClipboardCheck,
    label: "Request",
    description: "Submit your sample request via our contact form or WhatsApp",
  },
  {
    icon: FlaskConical,
    label: "Review",
    description: "Our team reviews your requirements and confirms sample availability",
  },
  {
    icon: Truck,
    label: "Ship",
    description: "Samples dispatched within 5-7 business days with COA documentation",
  },
  {
    icon: Package,
    label: "Evaluate",
    description: "Test capsule quality, dissolution, shell integrity, and formulation fit",
  },
];

export default function RequestSamplesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-hero-golden.jpg"
          alt="Admetus Lifesciences softgel capsule samples — WHO-GMP certified evaluation samples for brand owners and distributors"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)] mb-8 md:mb-10 block">
            EVALUATE BEFORE YOU COMMIT
          </span>
          <h1
            className="display-section text-[var(--hero-text)] mt-6 md:mt-8 mb-8 md:mb-10 leading-snug"
            style={{ wordSpacing: "0.2em", lineHeight: "1.15" }}
          >
            REQUEST PRODUCT
            <br />
            SAMPLES
          </h1>
          <p
            className="body-large max-w-[58ch]"
            style={{ color: "#E0D8C8" }}
          >
            Evaluate our softgel capsules before committing to a production
            order. We ship evaluation samples of 100-500 capsules within 5-7
            business&nbsp;days.
          </p>
        </div>
      </section>

      {/* Available Products */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)] block mb-3">
            AVAILABLE FOR SAMPLING
          </span>
          <h2
            className="display-section text-[var(--foreground)] mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            OUR PRODUCT PORTFOLIO
          </h2>
          <div className="gold-rule w-16 mb-4" />
          <p className="body-text text-[var(--text-muted)] max-w-[62ch] mb-10">
            Every product in our portfolio is available for evaluation sampling.
            Each sample ships with a Certificate of Analysis (COA) documenting
            assay, dissolution, weight variation, and microbial&nbsp;limits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}/`}
                className="group block"
              >
                <div
                  className="relative p-5 border border-[var(--border-subtle)] hover:border-[var(--gold)]/15 hover:shadow-[0_0_0_1px_rgba(200,169,81,0.15)] transition-all duration-200 group-hover:-translate-y-px"
                  style={{
                    background: `linear-gradient(160deg, ${product.color}06, var(--bg-charcoal))`,
                  }}
                >
                  <span className="absolute top-4 right-4 mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="label-text mb-2 block text-[var(--teal)]">
                    {product.category}
                  </span>
                  <h3 className="heading-2 text-[var(--foreground)] uppercase group-hover:text-[var(--gold)] transition-colors duration-200 text-[0.95rem]">
                    {product.name}
                  </h3>
                  <p className="mt-1 body-text text-[var(--text-muted)] !text-[0.8125rem] line-clamp-1">
                    {product.composition}
                  </p>
                  <div className="mt-3 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="mono-text text-[0.625rem] text-[var(--text-muted)]">
                      {product.dosageForm}
                    </span>
                    <span className="flex items-center gap-1 label-text text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-colors duration-200 !text-[0.5625rem]">
                      View Details
                      <ArrowRight
                        size={10}
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)] block mb-3">
            HOW IT WORKS
          </span>
          <h2
            className="display-section text-[var(--foreground)] mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            SAMPLE PROCESS
          </h2>
          <div className="gold-rule w-16 mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative">
                  {/* Connector line (hidden on last item and mobile) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[-24px] h-px bg-[var(--border-subtle)]" />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--gold)]/20 bg-[var(--gold)]/[0.04] mb-4">
                      <Icon
                        size={20}
                        className="text-[var(--gold)]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="mono-text text-[0.5625rem] text-[var(--gold)] mb-1">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="heading-2 text-[var(--foreground)] uppercase mb-2"
                      style={{ fontSize: "1rem" }}
                    >
                      {step.label}
                    </h3>
                    <p className="body-text text-[var(--text-muted)] !text-[0.8125rem] max-w-[28ch]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample Details */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
            {/* Details */}
            <div>
              <span className="label-text text-[var(--gold)] block mb-3">
                SAMPLE DETAILS
              </span>
              <h2
                className="display-section text-[var(--foreground)] mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                WHAT TO EXPECT
              </h2>
              <div className="gold-rule w-16 mb-8" />

              <div className="space-y-6">
                <div className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-charcoal)]">
                  <div className="flex items-start gap-4">
                    <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-0.5">
                      01
                    </span>
                    <div>
                      <h3
                        className="heading-2 text-[var(--foreground)] mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        Sample Quantities
                      </h3>
                      <p className="body-text text-[var(--text-muted)] !text-[0.875rem]">
                        100-500 capsules per SKU. Sufficient for quality
                        evaluation, dissolution testing, stability assessment,
                        and formulation&nbsp;review.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-charcoal)]">
                  <div className="flex items-start gap-4">
                    <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-0.5">
                      02
                    </span>
                    <div>
                      <h3
                        className="heading-2 text-[var(--foreground)] mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        Cost
                      </h3>
                      <p className="body-text text-[var(--text-muted)] !text-[0.875rem]">
                        Complimentary for qualified business enquiries. Shipping
                        charged at actuals based on destination and courier
                        service&nbsp;selected.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-charcoal)]">
                  <div className="flex items-start gap-4">
                    <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-0.5">
                      03
                    </span>
                    <div>
                      <h3
                        className="heading-2 text-[var(--foreground)] mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        Dispatch Timeline
                      </h3>
                      <p className="body-text text-[var(--text-muted)] !text-[0.875rem]">
                        Within 5-7 business days from request confirmation.
                        Each sample ships with a Certificate of Analysis (COA)
                        and batch traceability&nbsp;documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-charcoal)]">
                  <div className="flex items-start gap-4">
                    <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-0.5">
                      04
                    </span>
                    <div>
                      <h3
                        className="heading-2 text-[var(--foreground)] mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        Available For
                      </h3>
                      <p className="body-text text-[var(--text-muted)] !text-[0.875rem]">
                        Brand owners, distributors, importers, and pharmacy
                        chains evaluating softgel capsule suppliers for contract
                        manufacturing, private label, or
                        export&nbsp;partnerships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-5">
              <div className="p-6 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-4">
                  REQUEST SAMPLES
                </span>
                <p className="body-text text-[var(--text-muted)] !text-[0.875rem] mb-6">
                  Submit your sample request through our contact form. Mention
                  &ldquo;Sample Request&rdquo; in your enquiry along with the
                  products you would like to&nbsp;evaluate.
                </p>
                <Link
                  href="/contact/"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(200,169,81,0.15)] active:translate-y-[1px] active:shadow-none text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-all duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Submit Enquiry
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="p-6 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-3">
                  QUICK CONNECT
                </span>
                <p className="body-text text-[var(--text-muted)] !text-[0.8125rem] mb-4">
                  Prefer WhatsApp? Send us a message directly with your sample
                  requirements.
                </p>
                <a
                  href="https://wa.me/919729977795?text=Hello%2C%20I%20would%20like%20to%20request%20evaluation%20samples%20of%20your%20softgel%20capsules.%20Please%20share%20details%20on%20availability%20and%20shipping."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-5 py-3 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(200,169,81,0.15)] active:translate-y-[1px] active:shadow-none bg-[#25D366]/[0.08] border border-[#25D366]/15 hover:bg-[#25D366]/[0.12] transition-all duration-200"
                >
                  <span className="body-text text-[var(--foreground)] !text-[0.8125rem] font-medium">
                    Chat on WhatsApp
                  </span>
                </a>
              </div>

              <div className="p-6 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-3">
                  CERTIFICATIONS
                </span>
                <ul className="space-y-2">
                  {[
                    "FSSAI Central License",
                    "GMP Certified",
                    "HACCP Certified",
                    "Halal Certified",
                    "WHO-GMP Certified",
                  ].map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-2 body-text text-[var(--text-muted)] !text-[0.8125rem]"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--gold)] shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] text-center">
          <h2
            className="display-section text-[var(--foreground)]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            READY TO EVALUATE OUR PRODUCTS?
          </h2>
          <div className="gold-rule w-12 mx-auto mt-4 mb-4" />
          <p className="body-text text-[var(--text-muted)] max-w-[50ch] mx-auto mb-8">
            Request evaluation samples today. Complimentary for qualified
            business enquiries. Samples ship within 5-7 business&nbsp;days with
            full COA&nbsp;documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 px-7 py-3 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(200,169,81,0.15)] active:translate-y-[1px] active:shadow-none text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request Samples <ArrowRight size={14} />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-3 px-7 py-3 hover:-translate-y-[1px] active:translate-y-[1px] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
