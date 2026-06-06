# Admetus Lifesciences — Export Order Acquisition Masterplan

**Date:** 2026-06-06 | **Source:** 5 parallel research agents covering buyer journey, competitors, country pages, trust signals, technical SEO

---

## The Core Problem

Admetus has real manufacturing capabilities (WHO-GMP facility, ARBES SGX-806P, 40+ formulations, 5 certifications, Halal) but is **digitally invisible** to international buyers. When a buyer in Nigeria, UAE, or Kenya Googles "softgel capsule manufacturer India" — Admetus does not appear. At all. For any query.

**Current state:** 0 ranking keywords | ~5 pages indexed | Gmail as business email | No Alibaba | No Google Business Profile | No country pages | Old PHP site returns 403 to bots

---

## The 4 Pillars (Ordered by Impact)

### PILLAR 1: DEPLOY + FIX CRAWLABILITY (Week 1) 🔴 CRITICAL
### PILLAR 2: COUNTRY-SPECIFIC LANDING PAGES (Week 2-4) 🔴 HIGH  
### PILLAR 3: TRUST SIGNALS + CONVERSION (Week 2-3) 🟡 HIGH
### PILLAR 4: PLATFORM PRESENCE + BACKLINKS (Week 3-6) 🟡 MEDIUM

---

## PILLAR 1: Deploy the New Site + Fix Crawlability

### Why This Is #1
The old PHP site at admetuslifesciences.com returns HTTP 403 to bots. Google has only ~5 pages indexed. Our new Next.js site has 24 pages, 31/31 SEO tests passing, full schema, blog, FAQs — but it's running on localhost. **Nothing else matters until this site is live.**

| Action | Details | Effort |
|--------|---------|--------|
| **1.1** Deploy Next.js site to Cloudflare Pages / Vercel | Replace old PHP site. The `output: "export"` static site deploys trivially. | 1 day |
| **1.2** Redirect .in → .com | Two competing domains cannibalize SEO. Consolidate all traffic to admetuslifesciences.com | 1 hour |
| **1.3** Set up corporate email | Get info@admetuslifesciences.com, export@admetuslifesciences.com. Gmail kills credibility with international buyers. | 1 day |
| **1.4** Submit to Google Search Console | Verify ownership, submit sitemap, request indexing of all 24+ pages | 1 hour |
| **1.5** Verify robots.txt allows all bots | Already done in our site — GPTBot, ClaudeBot, PerplexityBot, etc. all explicitly allowed | ✅ Done |
| **1.6** Create Google Business Profile | "Admetus Lifesciences" at Village Anta, Safidon, Jind. Add photos, hours, phone, website. Zero competitors have nailed this. | 2 hours |

---

## PILLAR 2: Country-Specific Landing Pages

### Why This Is the Biggest Opportunity
**Zero Indian softgel manufacturers have country-specific landing pages.** The few pharma exporters that do (Weefsel, JoinHub) use shallow templates with no regulatory detail. Admetus can leapfrog ALL competitors by creating genuinely useful, information-rich country pages.

**Search queries with ZERO competition:**
- "softgel manufacturer India for Nigeria" → 0 results from manufacturers
- "softgel capsule supplier India for UAE" → 0 dedicated pages
- "halal softgel manufacturer India for Saudi Arabia" → 0 results
- "pharma exporter India to Kenya" → only generic blogs

### Priority 10 Country Pages

| # | Country | URL | Market Size | Why Priority |
|---|---------|-----|-------------|--------------|
| 1 | 🇳🇬 Nigeria | `/export/nigeria/` | $449M pharma imports from India | Largest African market, 70% import-dependent, NAFDAC process knowledge = trust |
| 2 | 🇰🇪 Kenya | `/export/kenya/` | $353M | East Africa gateway, +48% growth, PPB registration |
| 3 | 🇦🇪 UAE | `/export/uae/` | $212M | Dubai = re-export hub for entire GCC + Africa. Halal differentiator |
| 4 | 🇵🇭 Philippines | `/export/philippines/` | $443M | India is #1 supplier (53% of softgel imports). Goldmine nobody targets |
| 5 | 🇸🇦 Saudi Arabia | `/export/saudi-arabia/` | ~$150M | $8.9B pharma market, SFDA gateway to 57 OIC countries, Halal required |
| 6 | 🇬🇭 Ghana | `/export/ghana/` | $220M | Fastest-growing African market (+22.6% YoY) |
| 7 | 🇿🇦 South Africa | `/export/south-africa/` | $669M | Largest African market by value |
| 8 | 🇲🇾 Malaysia | `/export/malaysia/` | $155M | Halal + JAKIM certification, +65% shipment growth |
| 9 | 🇹🇿 Tanzania | `/export/tanzania/` | $205M | Gateway to landlocked East/Central Africa |
| 10 | 🇪🇹 Ethiopia | `/export/ethiopia/` | ~$120M | Growing market, Horn of Africa gateway |

### What Each Country Page Must Contain (2,500-3,500 words)

```
1. Hero: "Softgel Capsule Manufacturer India for [Country]" + CTA
2. Market overview: Import data, health demand drivers, India export value
3. Regulatory compliance: Name the body (NAFDAC/PPB/SFDA/etc.), step-by-step process, what docs Admetus provides
4. Certifications: WHO-GMP, FSSAI, Halal (for ME/SEA), with downloadable PDFs
5. Product range: Formulations relevant to country's disease burden
6. Shipping logistics: Origin port → destination port, transit time, cold chain
7. Why Admetus for [Country]: Specific reasons, not generic
8. FAQ: 5-6 questions with FAQPage schema
9. CTA: Contact form with country pre-selected + WhatsApp link
10. Schema: BreadcrumbList + FAQPage + Service JSON-LD
```

### Key Regulatory Bodies (Include by Name on Each Page)

| Country | Body | Key Requirement |
|---------|------|----------------|
| Nigeria | NAFDAC | Local agent + GMP inspection + Free Sale Certificate (authenticated by Nigerian Embassy) |
| Kenya | PPB | Local agent + CTD dossier + WHO-format CPP + import permit via KESWS |
| UAE | MoHAP / Dubai Municipality | Montaji system + Halal cert + Arabic labeling + local agent with trade license |
| Saudi Arabia | SFDA | Electronic submission + Halal cert + Arabic labels + SFDA.FD 55 compliance |
| Philippines | FDA Philippines | LTO + CPR + ACTD dossier + CDSCO Certificate of Pharmaceutical Product |
| Ghana | FDA Ghana | Importer license + ICUMS registration + **Tema Port only** |
| Malaysia | NPRA | JAKIM-recognized Halal + Zone IVB stability data (30°C/75% RH) + QUEST 3+ submission |
| South Africa | SAHPRA | Strict GMP + product registration + Form GW 12/44 permits |

### Shipping Routes to Include

| Route | Port | Transit |
|-------|------|---------|
| India → Nigeria | JNPT → Lagos (Apapa) | 18-22 days |
| India → Kenya | JNPT/Mundra → Mombasa | 10-14 days |
| India → UAE | JNPT/Mundra → Jebel Ali (Dubai) | 3-5 days |
| India → Philippines | Chennai → Manila | 10-14 days |
| India → Saudi | JNPT → Jeddah/Dammam | 5-7 days |
| India → Ghana | JNPT → Tema | 16-20 days |
| India → Malaysia | Chennai → Port Klang | 7-10 days |

---

## PILLAR 3: Trust Signals + Conversion Optimization

### The International Buyer's 10-Point Risk Assessment

When a buyer lands on your site, they're mentally checking:
1. "Is this a real company?" → Registered address, GST, facility photos
2. "Are they legally allowed to export?" → IEC code, Drug Export License
3. "Will the product pass MY country's inspection?" → Certifications with proof
4. "Can they manufacture at scale?" → Capacity figures, equipment photos
5. "Who else trusts them?" → Client logos, testimonials, export stats
6. "How fast can they respond/ship?" → Lead time, response promise
7. "Can I get samples first?" → Sample request process
8. "What documentation will I receive?" → COA, CPP, FSC checklist
9. "What's the MOQ and payment terms?" → Transparency
10. "Can I verify independently?" → CDSCO links, FSSAI verification

### Website Additions Needed

| # | What to Add | Where | Why |
|---|-------------|-------|-----|
| **3.1** | **Sample Request page** | `/request-samples/` | No competitor has a proper one. Highest-intent conversion action in pharma B2B. |
| **3.2** | **Certificate PDFs downloadable** | `/quality/` page + link from every page | "5 certifications claimed, zero shown" — buyers assume unverified claims are false |
| **3.3** | **Product Catalog PDF (gated)** | Floating CTA + every product page | Lead capture mechanism. Gate behind name/email/country form. |
| **3.4** | **"How to Work With Us" process page** | `/partnership-process/` | MOQ, lead time, payment terms, step-by-step process visualization |
| **3.5** | **Client logos / testimonials** | Homepage + About | Collect from existing buyers. Even 3-5 anonymized quotes ("A distributor in the Middle East...") |
| **3.6** | **Facility photo gallery** | `/facility/` or `/gallery/` | Equipment with labels (ARBES SGX-806P, Elmach EPI 2000), QC lab, packaging area |
| **3.7** | **Production capacity figures** | Homepage stats bar | "X million capsules/month" — currently vague |
| **3.8** | **"Response within 24 hours" badge** | Near contact forms | Signals professionalism for international buyers in different timezones |
| **3.9** | **Export documentation checklist** | `/export/` page | List all docs Admetus provides: COA, CPP, Free Sale Certificate, stability data, etc. |
| **3.10** | **Facility walkthrough video** | Homepage + `/manufacturing/` | Smartphone is fine — authenticity > production quality |

### Self-Promoting Listicle Blog Posts (THE #1 Tactic)

**This is the single most effective SEO tactic in this industry.** Curivo, Elkos, Lifevision all do it. Write a blog post titled "Top 10 Softgel Capsule Manufacturers in India" — place Admetus at #1-3, pad with Cipla, Sun Pharma, Dr. Reddy's for credibility. These posts rank organically for high-intent buyer queries.

**Blog posts to write:**

| # | Title | Target Keyword | Priority |
|---|-------|---------------|----------|
| 1 | "Top 10 Softgel Capsule Manufacturers in India (2026)" | softgel capsule manufacturer India | 🔴 P0 — Write this first |
| 2 | "Top 10 Nutraceutical Exporters from India" | nutraceutical exporter India | 🔴 P0 |
| 3 | "Top 10 Halal Softgel Manufacturers in India" | halal softgel manufacturer India | 🔴 P1 |
| 4 | "How to Import Softgel Capsules from India: Complete Guide" | import softgel capsules from India | 🔴 P1 |
| 5 | "How to Choose a Softgel Capsule Manufacturer in India" | choose softgel manufacturer India | 🟡 P2 |
| 6 | "Softgel Capsule MOQ in India: What Buyers Need to Know" | softgel capsule MOQ India | 🟡 P2 |
| 7 | "WHO-GMP Certification: What It Means for Your Softgel Supply" | WHO GMP certified softgel manufacturer | 🟡 P2 |
| 8 | "Contract Manufacturing vs Private Label Softgels: Which Model?" | contract manufacturing vs private label | 🟡 P2 |

---

## PILLAR 4: Platform Presence + Backlinks

### B2B Platform Priority

| Platform | Action | Priority | Why |
|----------|--------|----------|-----|
| **Alibaba** | Create Gold Supplier storefront | 🔴 P0 | Where African/ME/SE Asian buyers actually search. Admetus has zero presence. |
| **IndiaMart** | Major cleanup — remove soap/sanitizer, add all 40+ softgels, add certifications, update turnover | 🔴 P1 | Already listed but diluted with non-core products. Shows ₹1.5-5Cr turnover. |
| **Google Business** | Create and verify profile | 🔴 P1 | Zero map presence. Free. |
| **TradeIndia** | Add certifications, export info, better images | 🟡 P2 | Already listed, needs optimization. Shows ₹40L turnover. |
| **CPHI Online** | Create profile + plan for CPHI India 2026 (Nov, Delhi) | 🟡 P2 | Premier pharma trade show — 50K attendees from 120 countries |
| **ExportersIndia** | Optimize listing | 🟡 P2 | Already listed with 8 products. |
| **PharmaBizConnect** | Create listing | 🟢 P3 | Pharma-specific lead portal |

### Backlink Strategy

| Source | Domain Authority | Action | Priority |
|--------|-----------------|--------|----------|
| **Pharmexcil** (Pharmaceutical Export Promotion Council) | High | Get RCMC registration — **mandatory** for pharma exporters | 🔴 P0 |
| **IDMA** (Indian Drug Manufacturers Association) | High | Membership + directory listing (600+ members) | 🟡 P2 |
| **FICCI** | DA 70+ | Corporate membership + directory listing | 🟡 P2 |
| **CII** | DA 70+ | Membership + directory listing | 🟡 P2 |
| **CPHI exhibitor directory** | DA 80+ | Exhibit at CPHI India 2026 → permanent high-authority backlink | 🟡 P2 |
| **IBEF** | DA 80+ | Get listed in pharma exporter profiles | 🟢 P3 |

### Google Ads (Optional — ₹50K/month Starting)

| Detail | Recommendation |
|--------|---------------|
| Starting budget | ₹50,000/month (~$600) |
| CPC for "softgel manufacturer India" | ₹20-60 ($0.24-$0.72) — very affordable |
| Target geo | Kenya + UAE first (lower competition, high demand) |
| Landing pages | Dedicated country pages (from Pillar 2) |
| Expected ROI | 1 export order = ₹5-50L revenue. 1 month of Ads = ₹50K. ROI is 10-100x. |

---

## Execution Timeline

### Week 1: Foundation
- [ ] Deploy Next.js site to production (replace PHP site)
- [ ] Redirect .in → .com
- [ ] Set up corporate email (info@, export@)
- [ ] Create Google Business Profile
- [ ] Submit sitemap to Google Search Console
- [ ] Write "Top 10 Softgel Manufacturers in India" listicle

### Week 2-3: Country Pages (Phase 1)
- [ ] Create Nigeria landing page with NAFDAC guidance
- [ ] Create Kenya landing page with PPB guidance
- [ ] Create UAE landing page with MoHAP/Halal focus
- [ ] Create Sample Request page
- [ ] Scan and upload certificate PDFs
- [ ] Create product catalog PDF (gated download)

### Week 4-5: Country Pages (Phase 2) + Trust
- [ ] Create Philippines, Saudi Arabia, Ghana pages
- [ ] Collect 5 client testimonials
- [ ] Shoot 15 facility photos
- [ ] Record facility walkthrough video
- [ ] Create "How to Work With Us" process page
- [ ] Write "How to Import Softgels from India" guide

### Week 6-8: Platforms + Scale
- [ ] Create Alibaba Gold Supplier storefront
- [ ] Clean up IndiaMart listing (remove non-core, add certs)
- [ ] Optimize TradeIndia listing
- [ ] Register with Pharmexcil (RCMC)
- [ ] Create remaining 4 country pages (South Africa, Malaysia, Tanzania, Ethiopia)
- [ ] Start Google Ads campaign (Kenya + UAE targeting)

### Month 3+: Ongoing
- [ ] 2 blog posts per month
- [ ] IDMA/FICCI/CII memberships
- [ ] Plan CPHI India 2026 participation
- [ ] Track and optimize based on Google Search Console data
- [ ] A/B test CTAs and lead capture forms

---

## Budget Estimate

| Item | Annual Cost | Priority |
|------|------------|----------|
| Corporate email (Google Workspace) | ₹15,000/yr | 🔴 P0 |
| Cloudflare Pages hosting | Free | 🔴 P0 |
| Google Business Profile | Free | 🔴 P0 |
| Alibaba Gold Supplier | $2,000-5,000/yr | 🔴 P1 |
| IndiaMart Premium | ₹40K-2L/yr | 🟡 P2 |
| Google Ads | ₹6L/yr (₹50K/month) | 🟡 P2 |
| Pharmexcil RCMC | ₹10K-25K/yr | 🔴 P1 |
| CPHI India 2026 booth | ₹2-5L | 🟡 P2 |
| IDMA membership | ₹15K-50K/yr | 🟢 P3 |
| **Total (minimum viable)** | **~₹1.5-3L/yr** | |
| **Total (full execution)** | **~₹15-20L/yr** | |

---

## Competitive Model to Copy

**Aliyan Pharmaceuticals (aliyanpharma.com)** — Their region-specific content strategy is the gold standard:
- Country-specific blog posts for Kenya, Nigeria, UAE, Lebanon, etc.
- Halal + EU-GMP positioning
- Resources section with case studies and eBooks
- Named regulatory body references (NAFDAC, SFDA, etc.)
- 2,500+ product portfolio signal

**Copy their content model, but do it better** — add genuine regulatory guidance, shipping logistics, and gated PDF downloads that they don't offer.
