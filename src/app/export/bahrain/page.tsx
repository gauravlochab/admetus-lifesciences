import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const marketHighlights = [
  {
    title: "Easiest GCC entry point",
    desc: "Bahrain has the most simplified regulatory registration process among all GCC countries. The National Health Regulatory Authority (NHRA) offers a streamlined product registration pathway with shorter processing timelines compared to SFDA, KDCPA, or MoHAP. For Indian nutraceutical manufacturers seeking their first GCC market entry, Bahrain is the lowest-barrier starting point — allowing brands to establish a GCC presence and build a regulatory track record before expanding to larger markets.",
  },
  {
    title: "1.5M population — compact but affluent",
    desc: "Bahrain has a population of approximately 1.5 million — the smallest GCC state — but with high GDP per capita and sophisticated healthcare infrastructure. The compact geography means a single distributor in Manama can effectively cover the entire country. Despite its small size, Bahrain's affluent consumer base and modern pharmacy retail environment create attractive per-capita demand for quality nutraceutical products.",
  },
  {
    title: "Large Indian community",
    desc: "Indians constitute the largest expatriate community in Bahrain, numbering approximately 350,000-400,000 people — roughly 25% of the total population. This creates one of the highest Indian population concentrations in any GCC country on a per-capita basis. Indian community pharmacies, health stores, and grocery chains in Manama actively seek Indian-manufactured supplements, creating built-in consumer familiarity and demand.",
  },
  {
    title: "Gateway to Saudi Arabia",
    desc: "Bahrain is connected to Saudi Arabia via the 25 km King Fahd Causeway, with approximately 30 million crossings annually. Products registered in Bahrain can be physically distributed to the Eastern Province of Saudi Arabia through informal trade channels. Bahrain's proximity to Saudi Arabia's Dammam/Dhahran metropolitan area (population 5M+) extends the effective market reach beyond Bahrain's own borders.",
  },
];

const regulatoryReqs = [
  {
    title: "NHRA product registration",
    desc: "All pharmaceutical and nutraceutical products imported into Bahrain require registration with the National Health Regulatory Authority (NHRA). NHRA offers a streamlined registration process that is generally faster and simpler than other GCC regulatory bodies. The registration validates manufacturer credentials, product composition, quality documentation, and labeling compliance.",
  },
  {
    title: "GMP / WHO-GMP certificate",
    desc: "The manufacturer must hold a valid GMP certificate, with WHO-GMP certification preferred by NHRA. Admetus Lifesciences holds both GMP and WHO-GMP certifications for our Jind, Haryana facility — these are submitted as part of the NHRA registration package. WHO-GMP certification accelerates the NHRA review process and strengthens the registration application.",
  },
  {
    title: "Free Sale Certificate from FSSAI",
    desc: "A Free Sale Certificate issued by FSSAI (Food Safety and Standards Authority of India) confirming that the products are legally manufactured and freely sold in India. This is a required document in the NHRA registration submission, establishing the product's regulatory status in the country of origin.",
  },
  {
    title: "Halal certification — required",
    desc: "Bahrain requires Halal certification for all food, pharmaceutical, and nutraceutical products. Our facility holds Halal certification covering raw materials, manufacturing process, and finished products. Product-specific Halal certificates are included with every shipment to Bahrain and submitted as part of the NHRA registration package.",
  },
  {
    title: "Arabic labeling required",
    desc: "All product labels must include Arabic text covering product name, composition, dosage instructions, warnings, manufacturer details, batch number, and expiry date. Admetus Lifesciences provides complete Arabic labeling support — translation, design, compliance review, and print-ready artwork as part of our Bahrain export service.",
  },
  {
    title: "Local authorized agent",
    desc: "A Bahrain-based authorized agent with a valid commercial registration is required to submit the NHRA registration and act as the local representative. The simplified NHRA process means agent responsibilities are less burdensome than in other GCC countries, making Bahrain an attractive entry point for new market entrants.",
  },
  {
    title: "GSO 2571/2021 compliance",
    desc: "Products must comply with GSO 2571/2021 — the Gulf Standards Organization technical regulation for pre-packaged food labeling, applicable to nutraceuticals sold across the GCC including Bahrain. This covers labeling format, nutritional information, allergen declarations, and Arabic language requirements.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Bahrain — driven by indoor lifestyles, air conditioning dependency, and limited outdoor activity during extreme summer heat. Cholecalciferol 60,000 IU weekly softgels are a high-volume category in Bahraini pharmacy retail, prescribed by physicians and available over-the-counter. The compact market means pharmacy distribution is efficient — a limited number of pharmacy chains serve the entire country.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular health supplementation driven by high rates of obesity and metabolic syndrome in Bahrain. Omega-3 softgels with Vitamin E are prescribed by cardiologists and purchased as preventive supplements. Bahrain's modern pharmacy retail environment and health-conscious consumer segment drive consistent demand for cardiovascular health supplements.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health formulations targeting Bahrain's aging population and post-menopausal women. Calcitriol (active Vitamin D metabolite) combined with Calcium Citrate and K2-7 for enhanced calcium absorption and bone mineralization. Addresses the downstream effects of widespread Vitamin D deficiency in the Bahraini population.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    desc: "Premium multivitamin softgel combining Korean Ginseng and Astaxanthin — positioned for Bahrain's health-conscious consumer segment. Bahrain's affluent demographics and modern retail environment support premium-priced supplement categories. Strong demand in Manama's pharmacy chains and health food retailers.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Kalonji)",
    desc: "Nigella Sativa — known as Habbatus Sauda across the Arab world — holds deep cultural and religious significance in Bahrain. As a traditional remedy referenced in Islamic hadith, black seed oil commands consistent demand across all demographics. Standardized softgel capsules deliver the traditional remedy in a convenient, dose-controlled format. The large Indian community in Bahrain also recognizes this product as Kalonji, creating dual-market demand.",
  },
  {
    name: "Glutathione + ALA + Grape Seed Extract",
    desc: "Antioxidant and skin health formulation with growing demand in Bahrain's beauty and wellness market. Glutathione softgels are gaining popularity across GCC pharmacy retail. Bahrain's modern, cosmopolitan consumer base drives demand for premium skin health and antioxidant supplements.",
  },
  {
    name: "Krill Oil Softgel Capsules",
    desc: "Premium Omega-3 source with superior bioavailability. Bahrain's affluent consumer demographics support premium-tier nutraceutical products. Krill oil softgels carry a higher price point than standard fish oil, appealing to quality-conscious consumers in Bahrain's premium pharmacy and health food retail channels.",
  },
];

const whyAdmetus = [
  {
    title: "Halal certified — full supply chain",
    desc: "Our Halal certification covers the entire manufacturing chain: raw material sourcing (Halal-certified gelatin suppliers), production process, packaging, and finished products. Bahrain requires Halal compliance for all nutraceutical imports — our certification meets these requirements at every level. Product-specific Halal certificates accompany every export shipment.",
  },
  {
    title: "WHO-GMP certified facility",
    desc: "Our Jind, Haryana facility holds WHO-GMP certification — the gold standard recognized by NHRA and regulatory authorities across the GCC. WHO-GMP certification accelerates the NHRA registration process and establishes strong manufacturer credibility with Bahraini importers and pharmacy chains.",
  },
  {
    title: "Easiest GCC market entry",
    desc: "Bahrain's NHRA offers the most streamlined registration process among all GCC regulatory bodies. For Indian manufacturers seeking their first GCC footprint, Bahrain provides the lowest-barrier entry point. Once established in Bahrain, the regulatory track record strengthens applications in larger GCC markets like Saudi Arabia and UAE.",
  },
  {
    title: "Arabic labeling support",
    desc: "We provide end-to-end Arabic labeling support for Bahrain-bound products — translation coordination with native Arabic speakers, label design, GSO 2571/2021 compliance review, and print-ready artwork. Products arrive ready for Bahraini pharmacy shelves with no additional labeling work required.",
  },
  {
    title: "5-7 day shipping to Bahrain",
    desc: "Sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Khalifa Bin Salman Port takes approximately 5-7 days. Air freight from Delhi or Mumbai reaches Bahrain International Airport in approximately 4 hours for sample shipments or urgent orders. Bahrain's compact geography means port-to-pharmacy delivery is same-day upon customs clearance.",
  },
  {
    title: "Private label & contract manufacturing",
    desc: "Full private-label service for Bahraini brands — your brand identity, packaging design, and Arabic labeling on our manufactured products. We handle formulation, production, quality testing, export packaging, and documentation. Bahrain's simplified registration makes private-label market entry faster than other GCC countries.",
  },
];

const faqs = [
  {
    q: "Why is Bahrain considered the easiest GCC entry point?",
    a: "Bahrain's National Health Regulatory Authority (NHRA) offers the most streamlined product registration process among all GCC regulatory bodies. Processing timelines are generally shorter, documentation requirements are well-defined, and the registration pathway is more straightforward compared to SFDA (Saudi Arabia), KDCPA (Kuwait), or MoHAP (UAE). For Indian nutraceutical manufacturers seeking their first GCC market presence, Bahrain provides the lowest-barrier entry point, allowing brands to establish regulatory credentials before expanding to larger GCC markets.",
  },
  {
    q: "Is Halal certification mandatory for nutraceutical exports to Bahrain?",
    a: "Yes. Bahrain requires Halal certification for all food, pharmaceutical, and nutraceutical products. Our Jind facility holds Halal certification covering the entire manufacturing chain — raw material sourcing (Halal-certified gelatin suppliers), production process, and finished products. Product-specific Halal certificates are included with every export shipment to Bahrain. The certification covers all softgel formulations in our portfolio including Vitamin D3, Omega-3, Nigella Sativa, and all other products.",
  },
  {
    q: "What is the NHRA registration process for importing softgels to Bahrain?",
    a: "The National Health Regulatory Authority (NHRA) requires product registration for all nutraceutical imports. Required documentation includes: manufacturer's GMP/WHO-GMP certificate, Free Sale Certificate from FSSAI, Halal certificate, Certificate of Analysis, product specifications, and label artwork with Arabic text. A Bahrain-based authorized agent submits the registration. The NHRA process is generally faster than other GCC regulatory bodies. Admetus Lifesciences provides all manufacturer-side documentation required for NHRA submission.",
  },
  {
    q: "How large is the Indian community in Bahrain?",
    a: "Indians constitute the largest expatriate community in Bahrain, numbering approximately 350,000-400,000 people — roughly 25% of the total population of 1.5 million. This is one of the highest Indian population concentrations in any GCC country on a per-capita basis. The Indian community creates built-in consumer familiarity with Indian-manufactured pharmaceutical and nutraceutical products, providing immediate demand for Indian softgel manufacturers entering the Bahrain market.",
  },
  {
    q: "How long does shipping from India to Bahrain take?",
    a: "Sea freight from JNPT (Nhava Sheva, Mumbai) or Mundra (Gujarat) to Khalifa Bin Salman Port takes approximately 5-7 days. Air freight from Delhi or Mumbai reaches Bahrain International Airport in approximately 4 hours of flight time for sample shipments or urgent orders. Bahrain's compact geography means port-to-pharmacy delivery is achievable on the same day of customs clearance.",
  },
  {
    q: "Can Bahrain serve as a stepping stone to the Saudi market?",
    a: "Yes. Bahrain is connected to Saudi Arabia via the 25 km King Fahd Causeway, with approximately 30 million crossings annually. Establishing a regulatory track record and market presence in Bahrain strengthens your position for Saudi SFDA registration. The proximity to Saudi Arabia's Dammam/Dhahran metropolitan area (population 5M+) extends market reach beyond Bahrain's borders. Many companies use Bahrain as a GCC entry point before expanding to Saudi Arabia and other GCC markets.",
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
      name: "Bahrain",
      item: "https://www.admetuslifesciences.com/export/bahrain/",
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

export default function BahrainExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Bahrain — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Bahrain</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;BAHRAIN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal certified softgel capsules from Haryana, India &mdash;
            the easiest GCC entry point. Simplified NHRA registration,
            Arabic labeling, and 5-7 day shipping to Khalifa Bin
            Salman&nbsp;Port.
          </p>
        </div>
      </section>

      {/* Bahrain Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Bahrain is the <strong>smallest GCC state</strong> with a
                population of approximately 1.5 million, but it offers the most
                strategically important advantage for Indian nutraceutical
                manufacturers: the <strong>easiest regulatory entry point</strong> in
                the Gulf Cooperation Council. The National Health Regulatory Authority
                (NHRA) provides a streamlined registration process with shorter
                timelines and clearer documentation requirements than other GCC
                regulatory bodies.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The <strong>National Health Regulatory Authority (NHRA)</strong>{" "}
                regulates all pharmaceutical and nutraceutical imports into Bahrain.
                NHRA&apos;s registration framework is well-structured and transparent,
                with processing timelines generally shorter than SFDA (Saudi Arabia),
                KDCPA (Kuwait), or MoHAP (UAE). This makes Bahrain the ideal first
                market for Indian manufacturers building their GCC portfolio.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Bahrain is home to one of the <strong>largest Indian communities
                in the GCC on a per-capita basis</strong> &mdash; approximately
                350,000-400,000 Indians, representing roughly 25% of the total
                population. This creates built-in consumer familiarity with
                Indian-manufactured pharmaceutical products and provides immediate
                market demand for Indian softgel manufacturers.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Strategically, Bahrain is connected to <strong>Saudi Arabia via
                the King Fahd Causeway</strong>, with approximately 30 million
                crossings annually. This physical connection to the largest GCC
                pharma market extends Bahrain&apos;s effective market reach well
                beyond its own borders, making it a strategic beachhead for
                broader GCC expansion.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana
                126112, manufactures Halal-certified, WHO-GMP compliant nutraceutical
                softgel capsules specifically configured for the Bahraini market &mdash;
                with full NHRA documentation support, Arabic labeling, and formulations
                aligned with GCC demand patterns.
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
              BAHRAIN &mdash; EASIEST GCC ENTRY&nbsp;POINT
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
            <span className="label-text text-[var(--gold)]">Bahrain Regulatory Framework</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              NHRA REGISTRATION &amp;&nbsp;COMPLIANCE
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              The National Health Regulatory Authority (NHRA) administers
              product registration for all pharmaceutical and nutraceutical
              imports into Bahrain. NHRA offers the most streamlined
              registration among GCC regulators. Below are the key
              requirements &mdash; Admetus Lifesciences provides all
              manufacturer-side documentation.
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

      {/* Bahrain as GCC Stepping Stone */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Strategic Advantage</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  BAHRAIN: YOUR GCC&nbsp;BEACHHEAD
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Start in Bahrain, expand to the entire GCC &mdash; the
                  simplest path for Indian manufacturers entering the
                  Gulf&nbsp;market.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Bahrain&apos;s NHRA registration is the fastest and most
                  straightforward in the GCC. For Indian nutraceutical
                  manufacturers with no existing GCC presence, Bahrain offers
                  the lowest-friction path to establishing a Gulf market
                  footprint.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Once products are NHRA-registered and selling in Bahrain,
                  the regulatory track record and market presence strengthen
                  your applications to <strong>SFDA (Saudi Arabia)</strong>,{" "}
                  <strong>KDCPA (Kuwait)</strong>, <strong>MoHAP (UAE)</strong>,{" "}
                  and <strong>MOPH (Qatar)</strong>. GCC regulatory authorities
                  view existing GCC registrations favorably during their review
                  process.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The <strong>King Fahd Causeway</strong> connecting Bahrain to
                  Saudi Arabia sees approximately 30 million crossings annually.
                  This physical connection to the Eastern Province of Saudi Arabia
                  (Dammam, Dhahran, Khobar — population 5M+) means products sold
                  in Bahrain can reach Saudi consumers through cross-border
                  commerce.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Admetus Lifesciences, Bahrain represents a strategic
                  entry point into the GCC ecosystem. Our Halal certification,
                  WHO-GMP credentials, Arabic labeling, and GSO 2571/2021
                  compliance are accepted across all GCC markets &mdash; once
                  established in Bahrain, expansion requires minimal additional
                  manufacturer-side preparation.
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
              SOFTGEL FORMULATIONS FOR&nbsp;BAHRAIN
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              All products are Halal certified and manufactured at our WHO-GMP
              facility in Jind, Haryana. The full portfolio is available for
              private-label manufacturing with custom branding and Arabic
              labeling for the Bahraini&nbsp;market.
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
              Custom softgel formulations are developed on request for Bahraini
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
              INDIA TO BAHRAIN: KHALIFA BIN SALMAN&nbsp;PORT
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Origin Ports", value: "JNPT (Mumbai), Mundra (Gujarat)" },
              { label: "Destination", value: "Khalifa Bin Salman Port" },
              { label: "Sea Transit", value: "5-7 days" },
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
                Sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Khalifa Bin
                Salman Port in Bahrain takes approximately 5-7 days. Multiple
                weekly sailings are available, ensuring reliable supply chain
                continuity for Bahraini importers.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                For sample shipments and urgent orders, air freight from Delhi or
                Mumbai reaches Bahrain International Airport in approximately 4
                hours. Bahrain&apos;s compact geography means port-to-pharmacy
                delivery is achievable on the same day of customs clearance. We
                coordinate with the buyer&apos;s preferred freight forwarder or
                recommend trusted logistics partners experienced with the
                India-Bahrain trade corridor.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus for Bahrain */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY ADMETUS FOR THE BAHRAINI&nbsp;MARKET
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
              BAHRAIN EXPORT Q&amp;A
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
              SUPPLY SOFTGELS TO&nbsp;BAHRAIN
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Bahraini importers, Manama-based distributors, and GCC
              trading companies seeking a WHO-GMP and Halal certified softgel
              manufacturer in India &mdash; share your requirements and our
              export team will respond within 48&nbsp;hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919729977795?text=I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Bahrain"
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
