import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const advantages = [
  {
    title: "WHO-GMP & multi-certified facility",
    desc: "Our Jind facility holds WHO-GMP, FSSAI, GMP, HACCP, and Halal certifications — the full stack required for domestic FSSAI compliance and international export documentation. Certificate copies are shared during the qualification process.",
  },
  {
    title: "Flexible MOQ — pilot to commercial scale",
    desc: "We support pilot batches for new brand launches and scale to full commercial production for established distributors. No rigid volume gates — MOQ is confirmed per formulation within 48 hours of inquiry, so you can start small and grow.",
  },
  {
    title: "80+ formulations + custom R&D",
    desc: "Choose from 80+ ready-to-manufacture nutraceutical and pharmaceutical softgel formulations, or brief us on a custom blend. Our formulation team handles composition design, stability validation, and regulatory alignment for your target market.",
  },
  {
    title: "Complete documentation support",
    desc: "Every batch ships with Certificate of Analysis (COA), batch manufacturing records, and packaging compliance documents. For export orders: Free Sale Certificate, ingredient declarations, country-specific regulatory paperwork, and Halal certification for GCC markets.",
  },
];

const faqs = [
  {
    q: "What is third party softgel manufacturing?",
    a: "Third party softgel manufacturing is a B2B arrangement where a brand owner outsources the production of soft gelatin capsules to a certified manufacturer like Admetus Lifesciences. You provide the formulation brief (or select from our ready formulations), and we handle raw material sourcing, encapsulation, quality testing, packaging, and dispatch — all under your brand name. This eliminates the need for your own manufacturing facility, GMP compliance infrastructure, and production staff.",
  },
  {
    q: "What certifications does your third party manufacturing facility hold?",
    a: "Our facility at Village Anta, Tehsil Safidon, District Jind, Haryana 126112 holds five active certifications: FSSAI (Food Safety and Standards Authority of India), GMP (Good Manufacturing Practice), HACCP (Hazard Analysis Critical Control Points), Halal certification, and WHO-GMP (World Health Organization Good Manufacturing Practice). These cover both domestic nutraceutical compliance and international pharmaceutical export requirements.",
  },
  {
    q: "What is the MOQ for third party softgel capsule orders?",
    a: "MOQs are flexible and depend on the specific formulation, fill weight, and packaging configuration. We accommodate pilot batches for new brands testing the market as well as large commercial runs for established distributors. There is no single fixed MOQ — we confirm the exact minimum quantity within 48 hours of receiving your formulation brief at team@admetuslifesciences.com or +91-7497841608.",
  },
  {
    q: "What softgel formulations are available for third party manufacturing?",
    a: "We offer 80+ ready formulations spanning nutraceutical and pharmaceutical categories: Cholecalciferol (Vitamin D3) 60,000 IU, Calcitriol + Calcium Citrate + K2-7, Omega-3 Fatty Acids + Vitamin E, Krill Oil, Ginseng + Astaxanthin Multivitamin, Glutathione + Alpha Lipoic Acid + Grape Seed, Lycopene + Grape Seed Multivitamin, Isoflavones + Calcium + D3 (women's health), Ginkgo + Tribulus (men's vitality), Nigella Sativa (Kalonji), and many more. Custom formulations are developed on request with stability validation.",
  },
  {
    q: "What is the lead time for third party softgel manufacturing orders?",
    a: "Standard lead time is 30–45 days from order confirmation and advance payment, covering raw material procurement, encapsulation, drying, quality testing, and packaging. Pilot batches for sample approval typically take 10–15 days. Lead times may vary for custom formulations requiring new raw material sourcing or for very large batch sizes. We confirm exact timelines at the quotation stage.",
  },
  {
    q: "Do you provide PCD pharma franchise for softgel capsules?",
    a: "Yes. Admetus Lifesciences offers PCD (Propaganda Cum Distribution) pharma franchise arrangements for our softgel capsule range. As a PCD franchise partner, you receive monopoly distribution rights for a defined territory, marketing collateral, product visual aids, and competitive pricing on our certified softgel formulations. This is ideal for pharma distributors and medical representatives looking to add a nutraceutical softgel line without manufacturing investment.",
  },
  {
    q: "Can I get custom formulation in third party manufacturing?",
    a: "Yes — custom formulation is a core service. Beyond our 80+ ready formulations, our R&D team develops new softgel compositions based on your therapeutic target, dosage requirements, and target market regulations. The process includes formulation design, pilot batch production, accelerated stability testing, and regulatory documentation. We handle both oil-based and suspension-based softgel fills.",
  },
  {
    q: "What documentation do you provide with third party manufactured softgels?",
    a: "Every batch includes: Certificate of Analysis (COA) with dissolution, disintegration, weight variation, and microbial limit test results; Batch Manufacturing Record (BMR); packaging compliance certificate; and artwork proofs for your brand labeling. For export orders, we additionally provide: Free Sale Certificate, ingredient declarations per destination country norms, Halal certificate for GCC markets, and any other regulatory paperwork your import authority requires.",
  },
];

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
      name: "Third Party Softgel Manufacturer India",
      item: "https://www.admetuslifesciences.com/third-party-softgel-manufacturer-india/",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ThirdPartyManufacturerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/encapsulation-arbes.jpg"
          alt="ARBES SGX-806P encapsulation line — third party softgel capsule manufacturing at Admetus Lifesciences, Haryana, India"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            Home
          </Link>
          <span className="label-text text-[var(--gold)]">Third Party Manufacturing  ·  India</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            THIRD PARTY SOFTGEL<br />MANUFACTURER IN&nbsp;INDIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified third party softgel capsule manufacturing (PCD &amp; contract) from our
            Haryana facility — 80+ nutraceutical &amp; Ayurvedic formulations, flexible MOQ, complete
            documentation, and export-ready production for pharma and
            nutraceutical&nbsp;brands.
          </p>
        </div>
      </section>

      {/* Intro / context */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences is a third party softgel capsule manufacturer
                operating from <strong>Village Anta, Tehsil Safidon, District Jind,
                Haryana 126112, India</strong>. Founded in 2020 by Mr. Anudeep Deswal,
                we provide third party manufacturing services for pharma companies,
                nutraceutical brands, distributors, and PCD pharma franchise operators
                across India and international markets.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Third party manufacturing allows you to launch and scale a softgel
                product line without investing in your own facility, equipment, or
                GMP compliance infrastructure. You bring the brand and the market —
                we handle formulation, encapsulation on our ARBES SGX-806P line,
                quality testing, blister packing on the Elmach EPI 2000, and dispatch
                with full documentation. Our facility operates with a 90%+ women
                workforce trained on-site in every stage of softgel production.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why choose us for third party */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY CHOOSE US FOR THIRD PARTY&nbsp;MANUFACTURING
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {advantages.map((adv, i) => (
              <SectionReveal key={adv.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{adv.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{adv.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services under third party manufacturing */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Services</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  THIRD PARTY MANUFACTURING&nbsp;MODELS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  We offer multiple engagement models under third party manufacturing —
                  each designed for a different stage of brand growth. Whether you&apos;re
                  a first-time brand owner or an established pharma distributor expanding
                  into softgels, there&apos;s a clear path&nbsp;in.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="heading-2 text-[var(--foreground)] mb-2" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                    Contract manufacturing
                  </h3>
                  <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                    You supply the formulation and specifications; we manufacture softgel
                    capsules to your exact brief — raw material sourcing, encapsulation,
                    QC, packaging, and dispatch. Batch records and COA provided per lot.
                    See our{" "}
                    <Link href="/contract-manufacturing/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">contract manufacturing page</Link> for
                    full process details.
                  </p>
                </div>
                <div>
                  <h3 className="heading-2 text-[var(--foreground)] mb-2" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                    Private label softgel manufacturing
                  </h3>
                  <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                    Select from our 80+ ready formulations, apply your brand identity
                    (label, carton, blister design), and we produce finished goods under
                    your brand name. Ideal for brands entering the nutraceutical market
                    without R&D investment. Details on our{" "}
                    <Link href="/private-label-softgel-manufacturer-india/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">private label service page</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="heading-2 text-[var(--foreground)] mb-2" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                    PCD pharma franchise
                  </h3>
                  <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                    Monopoly distribution rights for a defined territory, with marketing
                    support, visual aids, and competitive pricing on our certified softgel
                    range. Suited for pharma distributors and medical representatives adding
                    a softgel line to their portfolio without any manufacturing setup.
                  </p>
                </div>
                <div>
                  <h3 className="heading-2 text-[var(--foreground)] mb-2" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                    Bulk softgel supply for export
                  </h3>
                  <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                    Full-volume bulk supply with export-ready documentation — COA,
                    Free Sale Certificate, ingredient declarations, Halal certification
                    for GCC markets, and country-specific regulatory paperwork. See our{" "}
                    <Link href="/export/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">export operations</Link> for
                    international shipping details.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Products available */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGELS AVAILABLE FOR THIRD PARTY&nbsp;MANUFACTURING
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="max-w-[68ch] space-y-5 mb-10">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Our third party manufacturing covers 80+ softgel formulations across
                nutraceutical and pharmaceutical categories. Below are some of the
                high-demand formulations regularly manufactured for third party clients.
                Custom compositions are developed on request.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { name: "Cholecalciferol (Vitamin D3) 60,000 IU", category: "Bone & immunity" },
              { name: "Calcitriol + Calcium Citrate + K2-7", category: "Bone health" },
              { name: "Omega-3 Fatty Acids + Vitamin E", category: "Cardiovascular" },
              { name: "Krill Oil softgels", category: "Heart & joint health" },
              { name: "Ginseng + Astaxanthin Multivitamin", category: "General wellness" },
              { name: "Glutathione + ALA + Grape Seed Extract", category: "Antioxidant / skin" },
              { name: "Lycopene + Grape Seed Multivitamin", category: "Men's health / antioxidant" },
              { name: "Isoflavones + Calcium + D3", category: "Women's health" },
              { name: "Nigella Sativa (Kalonji) oil", category: "Immunity / traditional" },
            ].map((product) => (
              <div key={product.name} className="p-5 bg-[var(--background)]">
                <p className="body-text text-[var(--foreground)] !text-[0.875rem] font-medium">{product.name}</p>
                <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mt-1">
                  {product.category}
                </span>
              </div>
            ))}
          </div>

          <SectionReveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products/"
                className="inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-200"
              >
                View full product catalog
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contract-manufacturing-vitamin-d3-softgel/"
                className="inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-200"
              >
                Vitamin D3 contract manufacturing details
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-black)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              THIRD PARTY MANUFACTURING Q&amp;A
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <SectionReveal key={faq.q} delay={i * 0.03}>
                <details className="group py-6 border-t border-[var(--border-subtle)] last:border-b">
                  <summary className="flex items-start gap-5 cursor-pointer list-none">
                    <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="heading-2 text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200"
                      style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                    >
                      {faq.q}
                    </h3>
                  </summary>
                  <p className="mt-4 ml-12 body-text text-[var(--text-muted)] max-w-[68ch]">
                    {faq.a}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              START THIRD PARTY&nbsp;MANUFACTURING
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Share your formulation brief, MOQ, and packaging requirements. We
              respond with a detailed quotation within 48 hours — including
              pricing, lead time, and documentation&nbsp;scope.
            </p>
            <p className="mt-3 body-text text-[var(--text-muted)] max-w-[58ch]">
              Email: <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">team@admetuslifesciences.com</a>
              {" "}&nbsp;|&nbsp;{" "}
              Phone: <a href="tel:+917497841608" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">+91-7497841608</a>
              {" "}/{" "}
              <a href="tel:+919729977795" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">+91-9729977795</a>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/products/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Browse Products
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
