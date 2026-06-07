import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyKyrgyzstan = [
  {
    title: "Minimal domestic pharmaceutical manufacturing",
    desc: "Kyrgyzstan has virtually no domestic softgel capsule manufacturing capability. The country's pharmaceutical industry is limited to basic tablet and liquid formulations, with the vast majority of finished pharmaceutical products imported from India, Russia, Turkey, and neighbouring Central Asian countries. This import dependency creates a sustained opportunity for Indian softgel manufacturers offering WHO-GMP certified products at competitive pricing.",
  },
  {
    title: "Muslim-majority market with Halal expectations",
    desc: "Kyrgyzstan is approximately 90% Muslim (primarily Sunni). Halal certification significantly enhances product acceptance across pharmacy retail and clinical channels — particularly in the southern regions (Osh, Jalal-Abad) where religious observance strongly influences consumer purchasing decisions. Admetus Lifesciences holds Halal certification across the entire manufacturing chain, making our softgel capsules immediately acceptable in Kyrgyz consumer markets.",
  },
  {
    title: "CIS and EAEU membership — structured trade framework",
    desc: "Kyrgyzstan is a member of both the CIS (Commonwealth of Independent States) and the EAEU (Eurasian Economic Union). EAEU membership means that pharmaceutical imports are subject to Eurasian technical regulations — but these standards are structured and navigable for WHO-GMP certified Indian manufacturers. Compliance with EAEU pharmaceutical standards provides access not just to Kyrgyzstan but to the broader Eurasian market of 180+ million consumers.",
  },
  {
    title: "Growing healthcare sector in a 7-million population",
    desc: "Kyrgyzstan's population of approximately 7 million is experiencing steady growth in healthcare expenditure, supported by World Bank programmes, Asian Development Bank health investments, and government commitment to primary care modernization. The nutraceutical segment is expanding as pharmacy networks develop across Bishkek, Osh, and regional centres — creating demand for affordable, quality-certified softgel capsules from established manufacturers.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Kyrgyzstan — harsh Central Asian winters with limited sunlight, high-altitude geography, indoor lifestyles, and dietary gaps create sustained clinical demand for therapeutic Vitamin D supplementation. Cholecalciferol 60,000 IU softgels are prescribed for weekly deficiency correction across Kyrgyz clinics and pharmacies, particularly during the 5-6 month winter season.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is a leading cause of mortality in Kyrgyzstan — driven by high-fat dietary patterns, limited access to marine-sourced nutrients, and cold-climate cardiovascular stress. Omega-3 softgels with Vitamin E support cardiac health, lipid management, and anti-inflammatory response, addressing a critical public health priority in a population with limited dietary access to essential fatty acids.",
  },
  {
    name: "Nigella Sativa (Kalonji / Kara Dona)",
    desc: "Nigella Sativa — known as Kara Dona in Kyrgyz — has traditional significance across Central Asian and Islamic medicine. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death, giving it cultural resonance in Kyrgyzstan's 90% Muslim population. Our softgel encapsulation delivers standardised Nigella Sativa oil with consistent potency — a modern pharmaceutical format bridging traditional usage with quality-controlled delivery.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health is a significant therapeutic category in Kyrgyzstan — the mountainous terrain, harsh winters limiting outdoor activity, and nutritional deficiencies contribute to elevated fracture risk and osteoporosis rates, particularly among women. Calcitriol + K2-7 formulations support bone mineralisation and calcium metabolism across Kyrgyz healthcare facilities.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing micronutrient deficiencies common in populations with limited dietary diversity. Kyrgyzstan's dietary patterns — heavy in bread, meat, and dairy but often low in fruits, vegetables, and micronutrient variety — create sustained demand for quality multivitamin supplementation through pharmacy retail channels.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading. Russian-language COA translations available upon request.",
  },
  {
    title: "Sea freight to Bandar Abbas, then overland",
    desc: "Primary route: sea freight from JNPT (Mumbai) to Bandar Abbas (Iran), then overland through Turkmenistan and Uzbekistan to Kyrgyzstan. Cargo enters Kyrgyzstan via the Uzbekistan-Kyrgyzstan border crossing or via Kazakhstan (Almaty corridor).",
  },
  {
    title: "Via Tashkent or Almaty transit hubs",
    desc: "Tashkent (Uzbekistan) and Almaty (Kazakhstan) serve as major transit hubs for cargo destined for Kyrgyzstan. Both cities have established trade infrastructure with Bishkek and Osh — road and rail connections are well-maintained within the EAEU trade zone.",
  },
  {
    title: "Transit time: 16-22 days",
    desc: "Sea-plus-overland transit via Bandar Abbas to Bishkek takes approximately 22-28 days. Air freight via Dubai or Delhi to Manas International Airport (Bishkek) offers 3-5 day delivery for urgent or sample shipments. For established orders, the overland route via Tashkent is the most cost-effective.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment. Russian-language translations available for Kyrgyz regulatory submissions under EAEU requirements.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Kyrgyzstan's 90% Muslim population and pharmacy retail acceptance.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance under EAEU protocols at the Kyrgyz border or designated entry point.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — the primary quality credential recognised by Kyrgyzstan's DMP (Department of Medicine Provision).",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Kyrgyz customs and import duty assessment under applicable bilateral and EAEU trade agreements.",
  },
];

const faqs = [
  {
    q: "What is the regulatory process for importing nutraceutical softgels into Kyrgyzstan?",
    a: "Kyrgyzstan's pharmaceutical imports are regulated by the Department of Medicine Provision (DMP) within the framework of EAEU (Eurasian Economic Union) technical regulations. Key requirements include: WHO-GMP certificate from the manufacturer, Certificate of Analysis per batch, Free Sale Certificate, Halal certificate (recommended), and standard commercial documentation. As an EAEU member, Kyrgyzstan follows Eurasian pharmaceutical standards — Russian-language translations of key documents may be required. Your Kyrgyz import agent will advise on current DMP registration procedures.",
  },
  {
    q: "Is Halal certification important for the Kyrgyz market?",
    a: "Yes. Kyrgyzstan is approximately 90% Muslim, and Halal certification significantly enhances product acceptance — particularly in southern Kyrgyzstan (Osh, Jalal-Abad) where religious observance strongly influences consumer purchasing. While the regulatory framework does not mandate Halal certification, it is a de facto market requirement for pharmaceutical and nutraceutical products containing gelatin. Our Halal certification covers the entire manufacturing chain and is included with every export shipment.",
  },
  {
    q: "How are shipments routed from India to Kyrgyzstan?",
    a: "Primary route: sea freight from JNPT (Mumbai) to Bandar Abbas (Iran), then overland through Central Asia to Bishkek via Tashkent (Uzbekistan) or Almaty (Kazakhstan) transit hubs — approximately 22-28 days total. Alternative: air freight via Dubai or Delhi to Manas International Airport (Bishkek), 3-5 days for urgent or sample shipments. The overland route is most cost-effective for container volumes.",
  },
  {
    q: "Does EAEU membership affect import requirements for Indian pharma products?",
    a: "Yes. As an EAEU member, Kyrgyzstan follows Eurasian technical regulations for pharmaceutical products. This means more structured documentation requirements compared to non-EAEU Central Asian markets — but the standards are navigable for WHO-GMP certified manufacturers. Importantly, EAEU compliance in Kyrgyzstan can facilitate access to the broader Eurasian market (Russia, Kazakhstan, Belarus, Armenia). Russian-language documentation is typically required for regulatory submissions.",
  },
  {
    q: "What is the minimum order quantity for export to Kyrgyzstan?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Kyrgyz distributors establishing the product line, as well as full-container loads for established importers. For Kyrgyzstan specifically, we recommend starting with an air-freight pilot shipment to validate product acceptance and regulatory clearance before committing to overland container volumes. Specific MOQ is confirmed within 48 hours at team@admetuslifesciences.com.",
  },
  {
    q: "Can you supply softgels under our brand name for the Kyrgyz market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Russian and Kyrgyz language labeling for the Kyrgyzstan market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
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
      name: "Kyrgyzstan",
      item: "https://www.admetuslifesciences.com/export/kyrgyzstan/",
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

export default function KyrgyzstanExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Kyrgyzstan — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Kyrgyzstan</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;KYRGYZSTAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Kyrgyzstan&apos;s growing
            healthcare market. Full export documentation, EAEU compliant,
            shipping via Tashkent/Almaty&nbsp;corridor.
          </p>
        </div>
      </section>

      {/* Kyrgyzstan Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Kyrgyzstan is a landlocked Central Asian republic with a population of
                approximately 7 million and <strong>virtually no domestic softgel capsule
                manufacturing capability</strong>. The country imports the vast majority
                of its pharmaceutical and nutraceutical products, creating a sustained
                opportunity for quality-certified international manufacturers. As an EAEU
                (Eurasian Economic Union) member state, Kyrgyzstan follows structured
                pharmaceutical import regulations &mdash; but these are navigable for
                WHO-GMP certified Indian manufacturers.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The Kyrgyz pharmaceutical market, while smaller than Uzbekistan or
                Kazakhstan, is growing steadily. Healthcare expenditure is supported by
                World Bank programmes, Asian Development Bank investments, and government
                commitment to primary care development. Pharmacy networks are expanding
                across Bishkek, Osh, Jalal-Abad, and regional centres &mdash; and the
                demand for affordable nutraceutical supplementation is increasing as
                preventive health awareness grows among Kyrgyz consumers.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified softgel capsules suited for the Kyrgyz market
                &mdash; combining Indian manufacturing economics with the Halal compliance
                that Kyrgyzstan&apos;s 90% Muslim population expects. Our facility operates
                ARBES SGX-806P and Elmach EPI 2000 encapsulation lines with FSSAI, GMP,
                HACCP, Halal, and WHO-GMP certifications.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Kyrgyzstan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;KYRGYZSTAN
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyKyrgyzstan.map((item, i) => (
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

      {/* Halal Focus */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Halal Certification</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  HALAL CERTIFIED FOR THE KYRGYZ&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Kyrgyzstan is approximately 90% Muslim. Halal certification
                  enhances product acceptance across pharmacy retail, hospital
                  channels, and direct consumer purchasing &mdash; particularly
                  in southern Kyrgyzstan where religious observance strongly
                  influences purchasing&nbsp;decisions.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences holds Halal certification covering the entire
                  manufacturing chain &mdash; from raw material sourcing (Halal-certified
                  gelatin suppliers with full traceability) through the production process
                  on our ARBES SGX-806P encapsulation line to finished product packaging.
                  This is not a third-party attestation applied at the end; it is integrated
                  into our manufacturing protocols.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For the Kyrgyz market, Halal certification addresses a specific consumer
                  concern around gelatin-based products. Softgel capsules are made with
                  gelatin, and Kyrgyz consumers &mdash; particularly in the religiously
                  observant southern regions around Osh and Jalal-Abad &mdash; are
                  increasingly aware of the distinction between Halal-sourced and non-Halal
                  gelatin. Our certification provides documented assurance that eliminates
                  this potential barrier to consumer&nbsp;acceptance.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Kyrgyzstan includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is internationally
                  recognised, meaning Kyrgyz distributors who also trade across Central
                  Asian markets &mdash; Uzbekistan, Tajikistan, Kazakhstan &mdash; can
                  use the same certification documentation across multiple EAEU
                  territories.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Kyrgyzstan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;KYRGYZSTAN
            </h2>
            <div className="gold-rule w-16 mb-10" />
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

          <SectionReveal delay={0.25}>
            <p className="mt-10 body-text text-[var(--text-muted)] max-w-[68ch]">
              Beyond these core formulations, Admetus Lifesciences develops custom
              softgel blends for Kyrgyz distributors targeting specific therapeutic
              categories. Custom formulation requests are evaluated within 48 hours.
              Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Regulatory — DMP / EAEU */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              DMP &amp; EAEU REGULATORY FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Kyrgyzstan&apos;s pharmaceutical imports are regulated by the Department
                  of Medicine Provision (DMP) within the framework of EAEU (Eurasian
                  Economic Union) technical regulations. As an EAEU member state,
                  Kyrgyzstan follows Eurasian pharmaceutical standards for product
                  registration and import clearance &mdash; providing structured but
                  navigable requirements for WHO-GMP certified Indian&nbsp;manufacturers.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The EAEU pharmaceutical framework provides an important advantage:
                  products registered in one EAEU member state can, through mutual
                  recognition procedures, potentially access other EAEU markets (Russia,
                  Kazakhstan, Belarus, Armenia). This means that Kyrgyzstan can serve
                  as an entry point for the broader Eurasian pharmaceutical&nbsp;market.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Russian remains a working language in Kyrgyzstan&apos;s pharmaceutical
                  regulatory environment. Certificates of Analysis, product specifications,
                  and key regulatory documents may require Russian-language translations
                  for DMP submissions. Admetus Lifesciences can provide Russian-language
                  COA translations to facilitate smoother regulatory review and distributor
                  communication within&nbsp;Kyrgyzstan.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Kyrgyz import clearance under EAEU standards: WHO-GMP
                  certificate, GMP certificate, Halal certificate, Free Sale Certificate
                  from FSSAI, Certificate of Analysis per batch (with Russian translation
                  available), Certificate of Origin, and commercial documentation. The
                  buyer or their Kyrgyz import agent handles the in-country DMP registration
                  and customs clearance process.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Shipping & Logistics */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  INDIA TO KYRGYZSTAN SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Overland via Tashkent (Uzbekistan) or Almaty (Kazakhstan),
                  or air freight via Dubai to Bishkek. Transit time:
                  16-22&nbsp;days (overland) or 3-5&nbsp;days&nbsp;(air).
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {shippingSteps.map(({ title, desc }, i) => (
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

      {/* Export Documentation */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Documentation</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              EXPORT DOCUMENTATION FOR&nbsp;KYRGYZSTAN
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {exportDocs.map((doc, i) => (
              <SectionReveal key={doc.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{doc.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{doc.desc}</p>
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
              KYRGYZSTAN EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;KYRGYZSTAN
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Kyrgyz importers and distributors seeking a Halal certified
              softgel capsule manufacturer in India &mdash; share your
              requirements and our export team will respond within 48&nbsp;hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
