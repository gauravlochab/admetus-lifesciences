import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const advantages = [
  {
    title: "Pharma cluster proximity",
    desc: "Haryana sits within India's pharmaceutical manufacturing belt — Baddi (HP), Panchkula, and Faridabad form a 200km radius of supplier and equipment infrastructure. Raw material lead times are shorter than for facilities in remote states.",
  },
  {
    title: "Logistics to Delhi NCR & ports",
    desc: "Our Jind facility sits ~150km from Delhi NCR, ~1,200km from JNPT (Mumbai) for west-coast exports, and ~1,100km from Mundra port. Domestic dispatch reaches major Indian metros within 2–3 days.",
  },
  {
    title: "Skilled rural workforce",
    desc: "Our facility operates with a 90%+ women workforce drawn from surrounding Haryana villages — trained on-site in encapsulation, quality control, blister packing, and dispatch protocols.",
  },
  {
    title: "Multi-cert facility",
    desc: "FSSAI, GMP, HACCP, Halal, and WHO-GMP certifications on the same site — required for both domestic FSSAI compliance and international export documentation.",
  },
];

const faqs = [
  {
    q: "Where exactly is your Haryana softgel manufacturing facility located?",
    a: "Our facility is at Village Anta, Tehsil Safidon, District Jind, Haryana 126112, India. Jind is roughly 150km north-west of Delhi NCR, with road and rail connectivity to major Indian metros and direct truck routes to JNPT (Mumbai) and Mundra ports for west-coast export shipments.",
  },
  {
    q: "Why manufacture softgel capsules in Haryana versus other Indian states?",
    a: "Haryana sits within India's pharmaceutical manufacturing cluster (alongside Himachal Pradesh's Baddi-Solan belt and Uttarakhand). Benefits: shorter raw-material lead times due to supplier proximity, lower logistics costs to Delhi NCR for domestic distribution, established pharma workforce ecosystem, and competitive utility costs versus Mumbai or Hyderabad. The state is well-recognized in international pharma sourcing.",
  },
  {
    q: "What softgel formulations do you manufacture in Haryana?",
    a: "We manufacture 10+ standard nutraceutical softgel formulations: Cholecalciferol (Vitamin D3) 60,000 IU, Calcitriol + Calcium + K2-7, Omega-3 + Vitamin E, Krill Oil, Ginseng + Astaxanthin Multivitamin, Glutathione + ALA + Grape Seed, Lycopene + Grape Seed Multivitamin, Isoflavones + Calcium + D3 (women's health), Ginkgo + Tribulus (men's vitality), and Nigella Sativa (Kalonji). Custom formulations are developed on request.",
  },
  {
    q: "Are you FSSAI and WHO-GMP certified?",
    a: "Yes. Our Jind facility holds FSSAI (Food Safety and Standards Authority of India), GMP (Good Manufacturing Practice), HACCP (Hazard Analysis Critical Control Points), Halal certification, and WHO-GMP (World Health Organization Good Manufacturing Practice) certifications. Certificate copies and audit reports are available for qualified business inquiries.",
  },
  {
    q: "What is the minimum order quantity (MOQ) for Haryana-based softgel manufacturing?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot runs for new brands and full-scale production for established distributors. Specific MOQ for your order is confirmed within 48 hours of inquiry at admetuslifesciences@gmail.com.",
  },
  {
    q: "Can international buyers visit your Haryana facility?",
    a: "Yes — we welcome scheduled facility audits from prospective international partners, distributors, and certification bodies. Visits are typically arranged within 1–2 weeks of an audit request. The facility is approximately 3 hours by road from Indira Gandhi International Airport (Delhi).",
  },
  {
    q: "Do you ship from Haryana to international markets?",
    a: "Yes. We operate as an export-ready manufacturer with documentation support for international shipments — Certificate of Analysis (COA), Free Sale Certificate, ingredient declarations, and country-specific regulatory paperwork. Sea freight typically routes via JNPT (Mumbai) or Mundra (Gujarat); air freight via Delhi.",
  },
  {
    q: "What encapsulation equipment does your Haryana facility use?",
    a: "Our primary encapsulation line is the ARBES SGX-806P soft gelatin encapsulation machine, an industry-standard system delivering precision softgel production with consistent fill accuracy. For blister packing we run the Elmach EPI 2000 high-speed blister packing machine for tamper-evident primary packaging.",
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
      name: "Softgel Capsule Manufacturer in Haryana",
      item: "https://www.admetuslifesciences.com/softgel-capsule-manufacturer-haryana/",
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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Manufacturer"],
  "@id": "https://www.admetuslifesciences.com/softgel-capsule-manufacturer-haryana/#localbusiness",
  name: "Admetus Lifesciences — Softgel Capsule Manufacturing Facility, Haryana",
  description:
    "WHO-GMP certified softgel capsule manufacturer in Village Anta, Tehsil Safidon, District Jind, Haryana, India. Contract manufacturing, private label, and export-ready production for nutraceutical brand owners and distributors.",
  url: "https://www.admetuslifesciences.com/softgel-capsule-manufacturer-haryana/",
  image: "https://www.admetuslifesciences.com/images/logo-horizontal.png",
  parentOrganization: {
    "@id": "https://www.admetuslifesciences.com/#organization",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Village Anta, Tehsil Safidon",
    addressLocality: "Jind",
    addressRegion: "Haryana",
    postalCode: "126112",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Haryana" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide (export)" },
  ],
  hasCredential: ["FSSAI", "GMP", "HACCP", "Halal", "WHO-GMP"],
};

export default function HaryanaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-detail.jpg"
          alt="Premium softgel capsules — Admetus Lifesciences manufacturing facility in Jind, Haryana"
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
          <span className="label-text text-[var(--gold)]">Jind  ·  Haryana  ·  India</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER IN&nbsp;HARYANA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel manufacturing in Jind, Haryana — precision
            encapsulation, contract manufacturing, private label, and export-ready
            production for nutraceutical brand&nbsp;owners.
          </p>
        </div>
      </section>

      {/* Intro / context */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences operates a precision softgel capsule manufacturing
                facility in <strong>Village Anta, Tehsil Safidon, District Jind, Haryana 126112</strong>.
                Founded in 2020 by Mr. Anudeep Deswal, the facility serves brand owners,
                distributors, and importers across India and international markets — supplying
                nutraceutical softgel capsules under contract manufacturing, private label,
                and bulk supply arrangements.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Haryana is one of India&apos;s recognized pharmaceutical and nutraceutical
                manufacturing clusters. The state offers strong logistics connectivity to
                Delhi NCR (~150km), JNPT and Mundra ports for west-coast export shipments,
                and a skilled pharmaceutical workforce ecosystem. Our location specifically
                serves brands looking for a Haryana softgel manufacturer with documented
                quality systems and international certification.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Haryana */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Haryana</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY MANUFACTURE SOFTGELS IN&nbsp;HARYANA
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

      {/* Facility specs */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Facility Specifications</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              JIND FACILITY AT A&nbsp;GLANCE
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Location", value: "Village Anta, Safidon, Jind, Haryana 126112" },
              { label: "Founded", value: "2020" },
              { label: "Founder", value: "Mr. Anudeep Deswal" },
              { label: "Encapsulation", value: "ARBES SGX-806P" },
              { label: "Blister Packing", value: "Elmach EPI 2000" },
              { label: "Formulations", value: "10+ standard, custom on request" },
              { label: "Certifications", value: "FSSAI, GMP, HACCP, Halal, WHO-GMP" },
              { label: "Workforce", value: "90%+ women, on-site trained" },
            ].map((spec) => (
              <div key={spec.label} className="p-5 bg-[var(--background)]">
                <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                  {spec.label}
                </span>
                <p className="body-text text-[var(--foreground)] !text-[0.875rem]">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / what we do */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Process</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  FROM BRIEF TO&nbsp;DISPATCH
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every order at our Haryana facility moves through a 7-stage production
                  process — engineered for consistency, batch traceability, and
                  documented quality at every&nbsp;step.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  ["Inquiry & quotation", "Share your formulation, MOQ, and packaging requirements. Detailed quote within 48 hours."],
                  ["Sample approval", "Pilot batch produced and shipped for your evaluation. Adjustments made until approved."],
                  ["Raw material sourcing", "Active ingredients and excipients sourced from certified suppliers with incoming QC."],
                  ["Encapsulation", "Production on the ARBES SGX-806P soft gelatin encapsulation line."],
                  ["Drying & QC", "Controlled-environment drying followed by multi-point quality testing (visual, weight, dissolution, microbial limits)."],
                  ["Blister packing & labeling", "Tamper-evident primary packaging on Elmach EPI 2000, then secondary packaging per your brand specifications."],
                  ["Dispatch & documentation", "Full Certificate of Analysis (COA), batch records, and export documentation if applicable. Dispatch to your warehouse or freight forwarder."],
                ].map(([title, desc], i) => (
                  <li key={title} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                    <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>{title}</h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] max-w-[58ch] !text-[0.9375rem]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Who We Serve</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              BUYERS WE WORK&nbsp;WITH
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <SectionReveal delay={0.05}>
              <div>
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                  Brand owners launching softgel lines
                </h3>
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  Whether you&apos;re launching your first nutraceutical softgel or expanding
                  an existing portfolio, our private-label service handles formulation,
                  manufacturing, and packaging under your brand identity. Pilot MOQs
                  are achievable; we don&apos;t require massive volume commitments.
                  See our <Link href="/private-label-softgel-manufacturer-india/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">private label service page</Link> for full process details.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div>
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                  Distributors & importers
                </h3>
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  Full-volume bulk supply with documented batch traceability, COA per
                  batch, and country-specific export documentation. Our{" "}
                  <Link href="/export/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">export operations</Link> support
                  international shipments with regulatory paperwork (Free Sale Certificate,
                  ingredient declarations, Halal certification for GCC, kosher attestation).
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                  Hospital chains & retailers
                </h3>
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  Direct supply of clinically-relevant formulations (Cholecalciferol 60K,
                  Calcitriol K2, Omega-3) to hospital pharmacy chains and retail networks.
                  Browse our <Link href="/products/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">10+ product portfolio</Link>.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                  Custom formulation requests
                </h3>
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  Beyond our 10 standard formulations, we develop custom softgel
                  blends — composition design, stability validation, regulatory
                  alignment — for brands targeting specific therapeutic categories
                  or international regulatory frameworks. See our{" "}
                  <Link href="/quality/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">quality and certification framework</Link>.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              HARYANA MANUFACTURING Q&amp;A
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
              VISIT OUR HARYANA&nbsp;FACILITY
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              We welcome facility audits and partnership discussions. Schedule a
              visit to our Jind facility or request a custom manufacturing&nbsp;quote.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
