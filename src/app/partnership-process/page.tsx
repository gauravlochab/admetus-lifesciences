import Link from "next/link";
import { ArrowRight, ArrowLeft, Mail, Phone, MessageCircle, FileText, CheckCircle, Clock, Shield, Package, Truck, Users } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const processSteps = [
  {
    step: "01",
    title: "Inquiry",
    icon: Mail,
    summary: "Share your requirements — we respond within 24 hours",
    details:
      "Begin by reaching out via email (team@admetuslifesciences.com), WhatsApp (+91-7497841608), or the contact form on our website. The more detail you provide upfront, the faster we can move to a formal quotation. At minimum, include: your product interest (e.g. Vitamin D3, Omega-3, custom formulation), estimated volume per order and annual volume, target market (domestic India, Africa, Middle East, Southeast Asia, etc.), packaging preference (blister packs, bottles, bulk drums), and whether you require private-label branding or plain packaging. Our business development team reviews every inquiry within one business day. If your requirement falls within our manufacturing capability, you will receive a preliminary response confirming feasibility and outlining next steps. If your requirement involves a novel formulation we have not manufactured before, we will discuss custom development timelines and any additional R&D costs before proceeding.",
  },
  {
    step: "02",
    title: "Quotation",
    icon: FileText,
    summary: "Detailed proforma invoice within 48 hours of inquiry",
    details:
      "Once we understand your requirements, our commercial team prepares a detailed proforma invoice. This document includes: unit pricing broken down by volume tier (so you can see exactly how pricing changes at higher quantities), minimum order quantity for your specific formulation and packaging configuration, estimated lead time from order confirmation to dispatch, all available packaging options with per-unit cost differences, and a complete list of documentation included with the shipment. We price transparently — there are no hidden fees for standard documentation (Certificate of Analysis, batch records, packing list, commercial invoice). Additional documentation such as Free Sale Certificates, Halal certificates, or country-specific regulatory filings are provided on request at no extra manufacturing cost, though government fees for document issuance (if any) are passed through at cost. Quotations are valid for 30 days. If raw material prices fluctuate significantly during that period, we will notify you before proceeding.",
  },
  {
    step: "03",
    title: "Sample Evaluation",
    icon: Package,
    summary: "Evaluate product quality before committing to a full order",
    details:
      "Before placing a production order, you can request evaluation samples — typically 100 to 500 capsules depending on the formulation. Samples are produced on the same ARBES SGX-806P encapsulation line used for full production runs, so what you evaluate is exactly what you will receive at scale. Sample shipment is dispatched within 5 to 7 business days of sample confirmation. We recommend evaluating: capsule shell integrity and appearance, fill accuracy and weight consistency, dissolution performance (if you have lab access), stability under your local storage conditions, and packaging suitability for your market. For private-label orders, we can include sample packaging with your branding so you can evaluate the complete finished product before committing. Sample costs are nominal and typically credited against your first production order. International sample shipments are sent via courier (DHL, FedEx) with tracking provided.",
  },
  {
    step: "04",
    title: "Order Confirmation",
    icon: CheckCircle,
    summary: "Confirm your order and we begin production scheduling",
    details:
      "Once you are satisfied with the samples, confirm your order by signing the proforma invoice and remitting the agreed advance payment. Payment can be made via Telegraphic Transfer (TT/wire transfer) or Letter of Credit (LC) for larger orders. Upon receipt of payment confirmation, our production planning team schedules your order into the manufacturing queue. We begin raw material procurement immediately — active pharmaceutical ingredients, excipients, gelatin, and packaging materials are sourced from our network of certified suppliers. You will receive a production schedule confirmation within 3 business days of payment, including expected completion date and dispatch window. If you have specific batch coding, labeling, or artwork requirements for private-label orders, this is the stage to finalize all artwork and packaging specifications.",
  },
  {
    step: "05",
    title: "Production & Quality Control",
    icon: Shield,
    summary: "30-45 day production cycle with rigorous batch inspection",
    details:
      "Your order enters our documented production workflow. Raw materials undergo incoming quality control — identity testing, potency verification, and microbial screening — before being released to the production floor. Encapsulation runs on the ARBES SGX-806P soft gelatin encapsulation machine, which delivers precision fill accuracy and consistent capsule weight across the entire batch. After encapsulation, capsules move through controlled-environment drying tunnels to reach target moisture content. Every batch undergoes 100% visual inspection for shell defects, followed by analytical testing: active ingredient assay, dissolution testing, weight variation, moisture content, and microbial limits (total aerobic count, yeast and mold, E. coli, Salmonella). Blister packing is performed on the Elmach EPI 2000 high-speed blister packing machine for tamper-evident primary packaging. A Certificate of Analysis (COA) is generated for each production batch, documenting all test results against specification. If any batch fails QC, it is rejected and re-manufactured at no additional cost to you.",
  },
  {
    step: "06",
    title: "Dispatch & Documentation",
    icon: Truck,
    summary: "Finished goods shipped with complete documentation",
    details:
      "Once production and quality control are complete, finished goods are packed for shipment. Domestic orders are dispatched via road transport to your warehouse or distribution center — most Indian metros are reachable within 2 to 3 days from our Jind facility. International orders are dispatched to your nominated freight forwarder or directly to port (JNPT Mumbai or Mundra Gujarat for sea freight, Delhi IGI for air freight). Every shipment includes comprehensive documentation: Certificate of Analysis (COA) for each batch, batch manufacturing records, packing list with batch codes, quantities, and gross/net weights, and commercial invoice for customs clearance. On request, we provide: Free Sale Certificate (government-issued, required by most importing countries), GMP certificate, Halal certificate (for Muslim-majority markets), FSSAI license copy, Certificate of Pharmaceutical Product (CPP), stability data, and regulatory dossier support for your destination country. We assist with shipping documentation but recommend that international buyers work with their own customs broker or freight forwarder for destination-side clearance.",
  },
];

const documents = [
  { name: "Certificate of Analysis (COA)", included: "Every batch", notes: "Active ingredient assay, microbial limits, dissolution, weight variation, moisture content" },
  { name: "Free Sale Certificate", included: "On request", notes: "Government-issued; required by most importing countries for regulatory clearance" },
  { name: "GMP Certificate", included: "On request", notes: "WHO-GMP facility certification — covers manufacturing premises, equipment, and processes" },
  { name: "Halal Certificate", included: "On request", notes: "For Muslim-majority markets — covers gelatin source, cross-contamination controls, and facility audit" },
  { name: "FSSAI License", included: "On request", notes: "Indian food safety and standards compliance — mandatory for domestic distribution" },
  { name: "HACCP Certificate", included: "On request", notes: "Hazard Analysis Critical Control Points — systematic food safety risk management" },
  { name: "Packing List", included: "Every shipment", notes: "Batch codes, quantities, gross/net weights, carton dimensions" },
  { name: "Commercial Invoice", included: "Every shipment", notes: "For customs clearance — HS codes, unit values, total shipment value, Incoterms" },
  { name: "Certificate of Pharmaceutical Product (CPP)", included: "On request", notes: "WHO-format CPP for regulatory submissions in destination countries" },
  { name: "Stability Data", included: "On request", notes: "Accelerated and real-time stability study data per ICH guidelines" },
];

const partnerTypes = [
  {
    title: "Brand owners launching new supplement lines",
    desc: "You have a brand vision and a target market. We handle formulation, manufacturing, packaging, and documentation — so you can focus on marketing and distribution. Whether you are launching a single Vitamin D3 SKU or an entire nutraceutical range, our private-label service scales to your volume. We support brands from pilot-stage (low MOQ first orders) through to full-scale production runs.",
  },
  {
    title: "Distributors seeking reliable Indian supply",
    desc: "You need consistent quality, batch-to-batch uniformity, competitive pricing, and on-time delivery. Our documented quality systems (WHO-GMP, FSSAI, HACCP, Halal) provide the certification trail your customers and regulators require. We support multi-SKU supply arrangements with scheduled production runs.",
  },
  {
    title: "Importers in Africa, Middle East, and Southeast Asia",
    desc: "These are our primary export markets. We understand the documentation requirements for Nigeria (NAFDAC), Kenya (PPB), Ghana (FDA), UAE (ESMA), Saudi Arabia (SFDA), Philippines (FDA), and other regulatory bodies. Free Sale Certificates, Halal certification, CPP, and country-specific regulatory support are available for every shipment.",
  },
  {
    title: "Pharmacy chains and hospital procurement",
    desc: "Direct supply of clinically-relevant formulations — Cholecalciferol 60,000 IU, Calcitriol + Calcium + K2-7, Omega-3, and more — with full batch traceability, COA per batch, and competitive institutional pricing for high-volume procurement.",
  },
  {
    title: "PCD pharma franchise partners",
    desc: "If you operate a PCD (Propaganda Cum Distribution) pharma franchise and want to add nutraceutical softgel capsules to your product portfolio, we offer third-party manufacturing with your branding, monopoly rights discussion, and flexible MOQs for regional distribution.",
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "MOQs are flexible and depend on the specific formulation, capsule size, and packaging format. We support pilot orders for new partners — contact us with your specific requirement and we will confirm the MOQ within 48 hours. There is no single universal MOQ across all products; each formulation has its own minimum based on raw material sourcing and production line setup.",
  },
  {
    q: "What is the typical lead time from order to dispatch?",
    a: "Standard production lead time is 30 to 45 days from order confirmation (i.e., from receipt of advance payment). Custom formulations that require stability validation may need an additional 2 to 4 weeks. Rush orders are considered on a case-by-case basis depending on production line availability. We provide a confirmed production schedule within 3 business days of order confirmation.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Telegraphic Transfer (TT / wire transfer) and Letter of Credit (LC) for larger orders. Standard payment terms for new partners are 50% advance at order confirmation and 50% before dispatch. First-time orders typically require full advance payment. As the partnership matures, we discuss adjusted terms based on order history and volume.",
  },
  {
    q: "Can I get samples before placing a full order?",
    a: "Yes. We strongly recommend sample evaluation before any production order. Request 100 to 500 capsules of any formulation in our portfolio. Samples are manufactured on the same production line used for full batches, so quality is representative. Samples are typically dispatched within 5 to 7 business days. International samples ship via DHL or FedEx with tracking. Sample costs are nominal and often credited against your first production order.",
  },
  {
    q: "Do you support private label and own-brand packaging?",
    a: "Yes — private-label manufacturing is one of our core services. We handle the complete process: formulation (from our standard portfolio or custom), encapsulation, packaging with your branding (blister packs, bottles, cartons), and labeling per your artwork specifications. You own the brand; we handle the manufacturing. See our private label service page for detailed process information.",
  },
  {
    q: "What export documentation do you provide?",
    a: "Every shipment includes a Certificate of Analysis (COA), packing list, and commercial invoice. On request, we provide: Free Sale Certificate (government-issued), GMP certificate, Halal certificate, FSSAI license copy, Certificate of Pharmaceutical Product (CPP), stability data, and country-specific regulatory dossier support. We are experienced in documentation requirements for Africa, Middle East, and Southeast Asian markets.",
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
      name: "Partnership Process",
      item: "https://www.admetuslifesciences.com/partnership-process/",
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

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function PartnershipProcessPage() {
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
          src="/images/facility/dispatch-area.jpg"
          alt="Dispatch area at Admetus Lifesciences — finished softgel capsules packed and ready for shipment to brand owners and distributors"
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
          <span className="label-text text-[var(--gold)]">Partnership Process</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            HOW TO WORK<br />WITH&nbsp;US
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            From inquiry to dispatch — a transparent partnership process for
            brand owners, distributors, and importers. Every step documented,
            every batch&nbsp;traceable.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Working with a contract manufacturer should not be opaque. At Admetus Lifesciences,
                we operate a structured, documented partnership process — from your first inquiry
                through sample evaluation, production, quality control, and final dispatch. Whether
                you are a brand owner launching your first nutraceutical softgel line, a distributor
                expanding your supplier base, or an importer sourcing from India for the first time,
                this page explains exactly how the process works, what to expect at each stage, and
                what documentation you will&nbsp;receive.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Our facility in Village Anta, Safidon, Jind, Haryana 126112 holds FSSAI, GMP, HACCP,
                Halal, and WHO-GMP certifications. We manufacture 10+ standard nutraceutical softgel
                formulations and develop custom formulations on request. Every order — regardless of
                size — moves through the same six-stage process with full quality documentation at
                every&nbsp;step.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6-Step Process Timeline */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">The Process</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              FROM INQUIRY TO&nbsp;DISPATCH
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[58ch] mb-12" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              Six clearly defined stages. At each step, you know exactly what is happening,
              what we need from you, and what you will receive from&nbsp;us.
            </p>
          </SectionReveal>

          <div className="space-y-0">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <SectionReveal key={step.step} delay={i * 0.04}>
                  <div className="relative py-8 border-t border-[var(--border-subtle)] last:border-b">
                    {/* Timeline connector line */}
                    <div className="flex items-start gap-5 lg:gap-8">
                      {/* Step number + icon */}
                      <div className="shrink-0 flex flex-col items-center gap-2">
                        <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)]">
                          {step.step}
                        </span>
                        <div className="w-10 h-10 rounded-full border border-[var(--gold)]/30 flex items-center justify-center">
                          <Icon size={18} className="text-[var(--gold)]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                          {step.title}
                        </h3>
                        <p className="mt-1 body-text text-[var(--gold)] !text-[0.875rem] font-medium">
                          {step.summary}
                        </p>
                        <p className="mt-3 body-text text-[var(--text-muted)] max-w-[68ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOQ & Pricing */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">MOQ &amp; Pricing</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  MINIMUM ORDERS &amp;&nbsp;PRICING
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  We keep our MOQ structure flexible — designed to accommodate both
                  first-time brand owners testing the market and established distributors
                  placing recurring bulk&nbsp;orders.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-0">
                {[
                  ["Flexible MOQs", "Minimum order quantities depend on the specific formulation, capsule size, and packaging format. There is no universal MOQ — each product is quoted individually based on raw material sourcing and production line configuration. This allows us to support smaller pilot orders for new brands without imposing large-volume requirements that do not match early-stage demand."],
                  ["Pilot orders for new partners", "If you are exploring a new market or testing a new formulation, we support pilot production runs. These are smaller-volume orders (lower than our standard MOQ) designed to let you evaluate product quality, packaging, market response, and logistics before committing to full-scale production. Pilot order pricing may differ slightly from volume pricing."],
                  ["Volume tiers for established distributors", "For partners placing recurring orders, we offer volume-tiered pricing — unit costs decrease as order volume increases. Volume tiers are outlined in your proforma invoice so you can see exactly how pricing scales. Multi-order annual contracts with scheduled production runs receive the most competitive pricing."],
                  ["Custom quote process", "Pricing depends on formulation complexity (standard vs. custom), order volume, packaging format (blister, bottle, bulk), and documentation requirements. Request a custom quote by emailing team@admetuslifesciences.com with your specific requirements — you will receive a detailed proforma invoice within 48 hours."],
                ].map(([title, desc], i) => (
                  <div key={title} className="py-5 border-t border-[var(--border-subtle)] last:border-b flex items-start gap-4">
                    <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>{title}</h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] max-w-[58ch] !text-[0.9375rem]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Lead Time */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Lead Time</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              PRODUCTION TIMELINES
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              {
                icon: Clock,
                label: "Standard Orders",
                time: "30 - 45 days",
                desc: "From order confirmation (receipt of advance payment) to dispatch of finished goods. Includes raw material procurement, encapsulation, drying, QC testing, packaging, and documentation preparation. Most orders in our standard formulation portfolio fall within this window.",
              },
              {
                icon: Shield,
                label: "Custom Formulations",
                time: "+ 2 - 4 weeks",
                desc: "Custom formulations that are not in our existing portfolio may require additional time for formulation development, pilot batch production, and stability validation. The additional 2 to 4 weeks covers stability testing under accelerated conditions to ensure the formulation meets shelf-life requirements before full production begins.",
              },
              {
                icon: Truck,
                label: "Rush Orders",
                time: "Case by case",
                desc: "If you have an urgent timeline, discuss it with us at the inquiry stage. Rush orders depend on current production line availability, raw material stock levels, and QC testing schedules. We will confirm feasibility and any associated expedite costs before you commit.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <SectionReveal key={item.label}>
                  <div className="p-8 bg-[var(--background)]">
                    <Icon size={24} className="text-[var(--gold)] mb-4" />
                    <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                      {item.label}
                    </span>
                    <p className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}>
                      {item.time}
                    </p>
                    <p className="body-text text-[var(--text-muted)] !text-[0.875rem]" style={{ lineHeight: 1.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Payment Terms</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              HOW PAYMENTS&nbsp;WORK
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[58ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              Our payment structure is designed to build trust progressively. First-time partners
              start with advance payment terms; as the relationship matures, we discuss adjusted
              arrangements based on order history and&nbsp;volume.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              {
                label: "Telegraphic Transfer (TT)",
                desc: "Wire transfer is our standard payment method. We provide bank details upon order confirmation. Most international partners pay via TT due to its speed and simplicity. Payments are accepted in INR, USD, and EUR.",
              },
              {
                label: "Letter of Credit (LC)",
                desc: "For larger orders (especially international), we accept irrevocable Letters of Credit. LC terms are discussed at the quotation stage and confirmed before order placement. This provides payment security for both parties on high-value shipments.",
              },
              {
                label: "New Partner Terms",
                desc: "First order: 100% advance payment before production begins. This is standard industry practice for new contract manufacturing relationships. Second order onward: 50% advance at order confirmation + 50% before dispatch. This split-payment structure lets you verify production progress before releasing the final payment.",
              },
              {
                label: "Established Partner Terms",
                desc: "After 3+ successful orders with consistent volume, we discuss adjusted payment terms based on the relationship. This may include extended payment windows, credit terms, or quarterly billing for multi-order contracts. Terms are agreed in writing as part of your supply agreement.",
              },
            ].map((term) => (
              <SectionReveal key={term.label}>
                <div className="p-8 bg-[var(--background)]">
                  <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}>
                    {term.label}
                  </h3>
                  <p className="body-text text-[var(--text-muted)] max-w-[58ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {term.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Documentation</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHAT YOU RECEIVE WITH&nbsp;EVERY&nbsp;ORDER
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[58ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              Complete documentation is included with every shipment. Additional certificates
              and regulatory documents are available on request at no extra manufacturing&nbsp;cost.
            </p>
          </SectionReveal>

          {/* Desktop table */}
          <SectionReveal delay={0.05}>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--gold)]/20">
                    <th className="py-4 pr-6 mono-text text-[0.6875rem] font-bold text-[var(--gold)] uppercase tracking-[0.1em]">
                      Document
                    </th>
                    <th className="py-4 pr-6 mono-text text-[0.6875rem] font-bold text-[var(--gold)] uppercase tracking-[0.1em]">
                      Included
                    </th>
                    <th className="py-4 mono-text text-[0.6875rem] font-bold text-[var(--gold)] uppercase tracking-[0.1em]">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.name} className="border-b border-[var(--border-subtle)]">
                      <td className="py-4 pr-6 body-text text-[var(--foreground)] !text-[0.875rem] font-medium">
                        {doc.name}
                      </td>
                      <td className="py-4 pr-6 body-text text-[var(--gold)] !text-[0.875rem]">
                        {doc.included}
                      </td>
                      <td className="py-4 body-text text-[var(--text-muted)] !text-[0.875rem]">
                        {doc.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>

          {/* Mobile cards */}
          <div className="md:hidden space-y-0">
            {documents.map((doc, i) => (
              <SectionReveal key={doc.name} delay={i * 0.03}>
                <div className="py-5 border-t border-[var(--border-subtle)] last:border-b">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="body-text text-[var(--foreground)] !text-[0.875rem] font-medium">
                      {doc.name}
                    </h3>
                    <span className="shrink-0 mono-text text-[0.625rem] text-[var(--gold)] uppercase tracking-[0.1em]">
                      {doc.included}
                    </span>
                  </div>
                  <p className="body-text text-[var(--text-muted)] !text-[0.8125rem]">
                    {doc.notes}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Who We Work With</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              PARTNERS WE&nbsp;SERVE
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="space-y-0">
            {partnerTypes.map((partner, i) => (
              <SectionReveal key={partner.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] last:border-b flex items-start gap-5">
                  <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                      {partner.title}
                    </h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[68ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                      {partner.desc}
                    </p>
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
              PARTNERSHIP Q&amp;A
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
                  <p className="mt-4 ml-12 body-text text-[var(--text-muted)] max-w-[68ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
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
              READY TO&nbsp;START?
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              Whether you are exploring a new partnership or ready to place your first order,
              our team is available to discuss your requirements, answer questions, and provide
              a custom quotation within 48&nbsp;hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Our Team
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20partnering%20with%20Admetus%20Lifesciences%20for%20softgel%20manufacturing.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)]/40 hover:border-[var(--gold)] hover:bg-[var(--gold)]/5 transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
