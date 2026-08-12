import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const marketHighlights = [
  {
    title: "Closest GCC country to India",
    desc: "Oman is the closest GCC country to India geographically, with sea freight from JNPT or Mundra reaching Sohar or Salalah port in just 3-5 days. This proximity translates to the shortest lead times, lowest shipping costs, and fastest replenishment cycles of any GCC export destination from India. For Indian nutraceutical manufacturers, Oman offers the most efficient supply chain corridor in the Gulf region.",
  },
  {
    title: "5M population with growing health sector",
    desc: "Oman's population of approximately 5 million is served by a rapidly modernizing healthcare system. The Omani government is investing heavily in healthcare infrastructure under Oman Vision 2040, with new hospitals, specialty clinics, and pharmacy chains being established across the Sultanate. This healthcare expansion directly increases demand for imported nutraceutical products.",
  },
  {
    title: "Strong India-Oman historical trade ties",
    desc: "India and Oman share centuries-old trade relationships dating back to ancient maritime commerce across the Arabian Sea. The Omani port of Muscat was historically one of the most important trading partners for Indian merchants. Today, India remains one of Oman's largest trade partners, with bilateral trade exceeding $12 billion annually. This deep historical relationship creates strong institutional trust for Indian-manufactured products.",
  },
  {
    title: "Large Indian community",
    desc: "Indians constitute one of the largest expatriate communities in Oman, numbering approximately 700,000 people. This population is already familiar with Indian-manufactured pharmaceutical and nutraceutical brands, creating built-in consumer trust and demand. Indian community pharmacies and health stores in Muscat, Sohar, and Salalah actively seek Indian-sourced supplements and nutraceuticals.",
  },
];

const regulatoryReqs = [
  {
    title: "MOH product registration",
    desc: "All pharmaceutical and nutraceutical products imported into Oman require registration with the Ministry of Health (MOH). The Directorate General of Pharmaceutical Affairs and Drug Control oversees the registration process, validating manufacturer credentials, product quality documentation, and labeling compliance before granting import approval.",
  },
  {
    title: "GMP / WHO-GMP certificate",
    desc: "The manufacturer must hold a valid GMP certificate, with WHO-GMP certification strongly preferred by Oman's MOH. Admetus Lifesciences holds both GMP and WHO-GMP certifications for our Jind, Haryana facility — these certificates are submitted as part of the MOH registration package and establish manufacturer credibility with Omani regulators and importers.",
  },
  {
    title: "Free Sale Certificate from FSSAI",
    desc: "A Free Sale Certificate issued by FSSAI (Food Safety and Standards Authority of India) confirming that the products are legally manufactured and freely sold in India. This is a mandatory document in the MOH registration submission, establishing the product's regulatory status in the country of origin.",
  },
  {
    title: "Halal certification — mandatory",
    desc: "Oman mandates Halal certification for all food, pharmaceutical, and nutraceutical products. Halal compliance is a legal requirement enforced at customs. Our facility holds Halal certification covering raw materials, manufacturing process, and finished products — meeting Oman's requirements at every stage of the supply chain.",
  },
  {
    title: "Arabic labeling required",
    desc: "All product labels must include Arabic text covering product name, composition, dosage instructions, warnings, manufacturer details, batch number, and expiry date. Admetus Lifesciences provides end-to-end Arabic labeling support — translation coordination, label design, and print-ready artwork as part of our Oman export service.",
  },
  {
    title: "Local authorized agent",
    desc: "An Oman-based authorized agent with a valid commercial registration is required to submit the MOH registration and act as the local representative for the product. The agent is responsible for in-country regulatory liaison, post-market surveillance, and product recall coordination if required.",
  },
  {
    title: "GSO 2571/2021 compliance",
    desc: "Products must comply with GSO 2571/2021 — the Gulf Standards Organization technical regulation for pre-packaged food labeling, applicable to nutraceuticals sold across the GCC including Oman. This covers labeling format, nutritional information, allergen declarations, and Arabic language requirements. Our export documentation team ensures label compliance before production.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Oman — affecting a significant portion of the population despite abundant sunshine. The hot climate drives indoor lifestyles and limited sun exposure, creating endemic deficiency. Cholecalciferol 60,000 IU weekly softgels are among the highest-demand nutraceutical categories in Omani pharmacy retail, prescribed by physicians and available over-the-counter across pharmacy chains in Muscat and other governorates.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular health supplementation is a growing category in Oman's healthcare market, driven by rising rates of obesity, diabetes, and metabolic syndrome. Omega-3 softgels with Vitamin E are prescribed by cardiologists and recommended as preventive supplements. Strong demand across hospital pharmacy channels and retail pharmacies throughout the Sultanate.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health formulations targeting Oman's aging population and post-menopausal women. Calcitriol (active Vitamin D metabolite) combined with Calcium Citrate and K2-7 for enhanced calcium absorption and bone mineralization. Addresses the downstream effects of widespread Vitamin D deficiency in the Omani population.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Comprehensive multivitamin formulations for Oman's growing wellness market. Rising health awareness and government investment in preventive healthcare under Oman Vision 2040 are driving demand for daily multivitamin supplementation across all demographics, from young professionals to elderly populations.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Kalonji)",
    desc: "Nigella Sativa — known as Habbatus Sauda across the Arab world — holds deep cultural and religious significance in Oman. As a traditional remedy referenced in Islamic hadith, black seed oil commands consistent demand across both traditional souq channels and modern pharmacy retail. Standardized softgel capsules deliver the traditional remedy in a convenient, dose-controlled format with documented health benefits including immune support and anti-inflammatory properties.",
  },
  {
    name: "Glutathione + ALA + Grape Seed Extract",
    desc: "Antioxidant and skin health formulation with growing demand in Oman. Glutathione softgels are an emerging category in Omani pharmacy retail, driven by rising awareness of antioxidant supplementation and skin health benefits. The formulation combines three potent antioxidants in a single softgel for consumer convenience.",
  },
  {
    name: "Krill Oil Softgel Capsules",
    desc: "Premium Omega-3 source with superior bioavailability — positioned for Oman's growing premium supplement segment. Krill oil softgels carry a higher price point than standard fish oil, appealing to health-conscious consumers in Muscat's premium pharmacy chains and health food retailers.",
  },
];

const whyAdmetus = [
  {
    title: "Halal certified — full supply chain",
    desc: "Our Halal certification covers the entire manufacturing chain: raw material sourcing (Halal-certified gelatin suppliers), production process, packaging, and finished products. Oman mandates Halal compliance for all nutraceutical imports — our certification meets these requirements at every level. Product-specific Halal certificates accompany every export shipment.",
  },
  {
    title: "WHO-GMP certified facility",
    desc: "Our Jind, Haryana facility holds WHO-GMP certification — the gold standard for pharmaceutical and nutraceutical manufacturing recognized by Oman's MOH and regulatory authorities across the GCC. This certification is a prerequisite for MOH registration and establishes manufacturer credibility with Omani importers.",
  },
  {
    title: "Fastest shipping — 3-5 days to Sohar/Salalah",
    desc: "Oman is the closest GCC country to India. Sea freight from JNPT or Mundra reaches Sohar or Salalah port in just 3-5 days — the shortest transit time to any GCC destination. This proximity advantage means lower shipping costs, shorter lead times, and faster inventory replenishment for Omani distributors.",
  },
  {
    title: "Arabic labeling support",
    desc: "We provide end-to-end Arabic labeling support for Oman-bound products — translation coordination with native Arabic speakers, label design, GSO 2571/2021 compliance review, and print-ready artwork. Products arrive ready for Omani pharmacy shelves with no additional labeling work required.",
  },
  {
    title: "Historical trade relationship",
    desc: "India and Oman share centuries of maritime trade history. This deep institutional familiarity means Indian-manufactured products enjoy strong acceptance in Oman's import channels. Our WHO-GMP credentials and FSSAI certification align with Oman MOH expectations for Indian pharmaceutical manufacturers.",
  },
  {
    title: "Private label & contract manufacturing",
    desc: "Full private-label service for Omani brands — your brand identity, packaging design, and Arabic labeling on our manufactured products. We handle formulation, production, quality testing, export packaging, and documentation. You handle market distribution across the Sultanate.",
  },
];

const faqs = [
  {
    q: "What is the MOH registration process for importing softgels to Oman?",
    a: "The Ministry of Health (MOH) requires product registration for all nutraceutical imports into Oman. The Directorate General of Pharmaceutical Affairs and Drug Control oversees the process. Required documentation includes: manufacturer's GMP/WHO-GMP certificate, Free Sale Certificate from FSSAI, Halal certificate, Certificate of Analysis, product composition and specifications, stability data, and label artwork with Arabic text. An Oman-based authorized agent submits the registration. Admetus Lifesciences provides all manufacturer-side documentation required for MOH submission.",
  },
  {
    q: "Is Halal certification mandatory for nutraceutical exports to Oman?",
    a: "Yes. Oman mandates Halal certification for all food, pharmaceutical, and nutraceutical products. Our Jind facility holds Halal certification covering the entire manufacturing chain — raw material sourcing (Halal-certified gelatin suppliers), production process, and finished products. Product-specific Halal certificates are included with every export shipment to Oman. The certification covers all softgel formulations in our portfolio.",
  },
  {
    q: "How long does shipping from India to Oman take?",
    a: "Oman is the closest GCC country to India. Sea freight from JNPT (Nhava Sheva, Mumbai) or Mundra (Gujarat) to Sohar Port or Salalah Port takes just 3-5 days — the shortest transit time to any GCC destination. Air freight from Delhi or Mumbai reaches Muscat International Airport in approximately 3-4 hours of flight time. This proximity advantage means lower shipping costs and faster replenishment cycles for Omani importers.",
  },
  {
    q: "What is the minimum order quantity for Oman export?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Omani distributors testing product acceptance, as well as regular replenishment orders and full-container loads for established importers. The short 3-5 day transit time from India to Oman enables lean inventory models. Specific MOQ and pricing is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Does India have a trade advantage with Oman?",
    a: "Yes. India and Oman share centuries-old trade relationships and India remains one of Oman's largest trade partners with bilateral trade exceeding $12 billion annually. Indian-manufactured pharmaceutical products are well-accepted by Oman's MOH. The geographic proximity (3-5 day sea transit) provides a significant logistics advantage over European and East Asian competitors. Our WHO-GMP, FSSAI, and Halal certifications meet all MOH requirements for nutraceutical registration in Oman.",
  },
  {
    q: "What documentation is provided with each Oman export shipment?",
    a: "Every shipment includes: Certificate of Analysis (COA) per batch, Halal certificate, Free Sale Certificate from FSSAI, GMP/WHO-GMP certificate copies, commercial invoice with HS codes, packing list, bill of lading, and Certificate of Origin from the Indian Chamber of Commerce. For MOH-registered products, we also provide stability data, product specifications, and any additional documentation requested during the registration review.",
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
      name: "Export",
      item: "https://www.admetuslifesciences.com/export/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Oman",
      item: "https://www.admetuslifesciences.com/export/oman/",
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

export default function OmanExportPage() {
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
          src="/images/facility/softgels-hero-golden.jpg"
          alt="Halal certified WHO-GMP softgel capsules manufactured in India for export to Oman — Admetus Lifesciences"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/export/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            Export Markets
          </Link>
          <span className="label-text text-[var(--gold)]">India &rarr; Oman</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;OMAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            the closest GCC country to India. MOH documentation support, Arabic
            labeling, and 3-5 day shipping to Sohar and&nbsp;Salalah.
          </p>
        </div>
      </section>

      {/* Oman Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Oman is the <strong>closest GCC country to India</strong> geographically,
                with sea freight reaching Omani ports in just 3-5 days from JNPT
                or Mundra. The Sultanate has a population of approximately 5 million
                and a rapidly modernizing healthcare system driven by{" "}
                <strong>Oman Vision 2040</strong>, which is expanding hospital
                infrastructure, pharmacy networks, and preventive healthcare
                programs across the country.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The <strong>Ministry of Health (MOH)</strong> regulates all
                pharmaceutical and nutraceutical imports into Oman. The Directorate
                General of Pharmaceutical Affairs and Drug Control oversees
                product registration, manufacturer validation, and labeling
                compliance. Registration is mandatory before any product can
                be distributed in the Sultanate.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                India and Oman share <strong>centuries-old trade relationships</strong>{" "}
                dating back to ancient maritime commerce across the Arabian Sea.
                The port of Muscat was historically one of the most important
                trading partners for Indian merchants. Today, bilateral trade
                exceeds $12 billion annually, and India remains one of Oman&apos;s
                largest trade partners. This deep historical relationship creates
                strong institutional trust for Indian-manufactured pharmaceutical
                products.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                <strong>Halal certification is mandatory</strong> for all food,
                pharmaceutical, and nutraceutical products sold in Oman. As a
                Muslim-majority country, Halal compliance is not optional &mdash;
                it is a legal prerequisite enforced at customs. Products without
                valid Halal certification are rejected at the port of entry.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana
                126112, manufactures Halal-certified, WHO-GMP compliant nutraceutical
                softgel capsules specifically configured for the Omani market &mdash;
                with full MOH documentation support, Arabic labeling, and the
                fastest shipping route from India to any GCC destination.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              OMAN &mdash; CLOSEST GCC MARKET TO&nbsp;INDIA
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {marketHighlights.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{item.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Section */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Oman Regulatory Framework</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              MOH REGISTRATION &amp;&nbsp;COMPLIANCE
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              The Ministry of Health (MOH) administers product registration
              for all pharmaceutical and nutraceutical imports into Oman. The
              Directorate General of Pharmaceutical Affairs and Drug Control
              oversees the process. Below are the key requirements &mdash;
              Admetus Lifesciences provides all manufacturer-side documentation.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {regulatoryReqs.map((req, i) => (
              <SectionReveal key={req.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{req.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{req.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Trade Ties */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Strategic Advantage</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  INDIA-OMAN: CENTURIES OF&nbsp;TRADE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  India and Oman share the deepest historical trade
                  relationship in the GCC &mdash; spanning centuries of
                  maritime commerce across the Arabian&nbsp;Sea.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The India-Oman trade corridor is one of the oldest in the
                  Indian Ocean region. Omani and Indian merchants have traded
                  across the Arabian Sea for over a thousand years, establishing
                  deep institutional familiarity and trust that persists in
                  modern commercial relationships. Bilateral trade now exceeds
                  $12 billion annually.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The Indian community in Oman numbers approximately 700,000
                  people &mdash; one of the largest expatriate groups in the
                  Sultanate. This population creates built-in consumer familiarity
                  with Indian-manufactured pharmaceutical products and provides
                  a ready market segment for Indian nutraceutical exporters.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Oman&apos;s geographic proximity to India is a significant
                  logistics advantage. The 3-5 day sea transit from JNPT or
                  Mundra to Sohar or Salalah is the <strong>shortest shipping
                  route from India to any GCC country</strong>. This enables
                  lean inventory models, faster replenishment cycles, and
                  lower total logistics costs for Omani importers.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Admetus Lifesciences, Oman represents a natural market
                  entry point &mdash; combining geographic proximity, historical
                  trust, a large Indian community, and growing healthcare
                  demand into a compelling export opportunity.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Portfolio</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;OMAN
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              All products are Halal certified and manufactured at our WHO-GMP
              facility in Jind, Haryana. The full portfolio is available for
              private-label manufacturing with custom branding and Arabic
              labeling for the Omani&nbsp;market.
            </p>
          </SectionReveal>

          <div className="space-y-0">
            {products.map((product, i) => (
              <SectionReveal key={product.name} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] last:border-b flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{product.name}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[68ch]">{product.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <p className="mt-10 body-text text-[var(--text-muted)] max-w-[68ch]">
              Custom softgel formulations are developed on request for Omani
              distributors targeting specific therapeutic categories or consumer
              segments. Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements &mdash; evaluation within 48 hours.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              INDIA TO OMAN: SOHAR &amp;&nbsp;SALALAH
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Origin Ports", value: "JNPT (Mumbai), Mundra (Gujarat)" },
              { label: "Destination", value: "Sohar Port, Salalah Port" },
              { label: "Sea Transit", value: "3-5 days (closest GCC)" },
              { label: "Air Freight", value: "Under 4 hours (Delhi/Mumbai)" },
              { label: "Facility to Port", value: "~1,200 km (Jind to JNPT)" },
              { label: "FCL Support", value: "20ft & 40ft containers" },
              { label: "Incoterms", value: "FOB, CIF, CFR available" },
              { label: "Documentation", value: "COA, Halal, FSC, CO, invoice, BL" },
            ].map((spec) => (
              <div key={spec.label} className="p-5 bg-[var(--background)]">
                <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                  {spec.label}
                </span>
                <p className="body-text text-[var(--foreground)] !text-[0.875rem]">{spec.value}</p>
              </div>
            ))}
          </div>

          <SectionReveal delay={0.15}>
            <div className="mt-10 max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Oman is the closest GCC country to India, with sea freight from
                JNPT (Mumbai) or Mundra (Gujarat) reaching <strong>Sohar Port</strong> or{" "}
                <strong>Salalah Port</strong> in just 3-5 days. This is the shortest
                transit time from India to any GCC destination, providing Omani
                importers with a significant logistics advantage.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                For sample shipments and urgent orders, air freight from Delhi or
                Mumbai reaches Muscat International Airport in approximately 3-4
                hours of flight time. We coordinate with the buyer&apos;s preferred
                freight forwarder or recommend trusted logistics partners
                experienced with the India-Oman trade corridor.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus for Oman */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY ADMETUS FOR THE OMANI&nbsp;MARKET
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyAdmetus.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{item.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              OMAN EXPORT Q&amp;A
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
              SUPPLY SOFTGELS TO&nbsp;OMAN
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Omani importers, Muscat-based distributors, and GCC trading
              companies seeking a WHO-GMP and Halal certified softgel
              manufacturer in India &mdash; share your requirements and our
              export team will respond within 48&nbsp;hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919729977795?text=I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Oman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[#25D366] hover:bg-[#20bd5a] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WhatsApp +91-9729977795
                <ArrowRight size={14} />
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request Export Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/products/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View Product Catalog
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
