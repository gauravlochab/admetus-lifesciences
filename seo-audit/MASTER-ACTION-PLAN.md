# Master Google SEO + GEO Action Plan — Admetus Lifesciences

**Date:** 2026-04-30
**Synthesizes 4 research reports:**
- `GEO-AUDIT-REPORT.md` — site audit, score 34/100
- `competitor-analysis.md` — top 7 ranking competitors, beatability tiers
- `keyword-opportunities.md` — 27 long-tail keyword targets
- `directory-targets.md` — 30+ B2B directories ranked by ROI
- `ranking-factors-2026.md` — what actually moves Google rankings in 2026

---

## The honest assessment

After parallel research, here's what we know:

**The good news**
1. The competitive space has **low DA across the board** (estimated DR 10–25 across the 7 ranking competitors). No one has a Wikipedia entry. Nobody appears in IndiaMart's top organic. **This is a content + schema fight, not a backlink fight.**
2. **Zero of 7 competitors expose Product, FAQPage, or LocalBusiness schema.** Admetus already deployed all three in Week 1+2. Technical lead.
3. **None of 7 have case studies, certificate PDF downloads, or named equipment.** All three are easy moats for Admetus.
4. The keyword research surfaced 27 specific long-tail opportunities mapped to existing pages or near-existing content.

**The hard truth**
1. **"Softgel manufacturer India" head term — out of reach for 12+ months.** Capsoft (10 certs, 40+ branded bioactives) and United Laboratories (238 Google reviews, 15+ awards) own that SERP. Don't waste time fighting them direct.
2. **AI Overviews + Google's March 2024 update** have shifted the game toward demonstrated E-E-A-T. Admetus has founder bio (Week 2) but needs cert PDFs + case studies + association memberships to compete.
3. **Cloudflare AI bot block** still un-fixed. The whole GEO investment is dormant until Dhruv flips the switch.

**The win path**
- **Tier A (90 days)**: Geographic + ingredient long-tails. Rank for "softgel manufacturer Haryana", "softgel manufacturer Jind", "Cholecalciferol 60000 IU manufacturer India", "Krill oil contract manufacturer", "Halal softgel manufacturer India". Competition is essentially nonexistent on these.
- **Tier B (4-6 months)**: Outrank Apkavit (Panchkula) and Medella (J&K) on geo+state queries with deeper content + complete schema.
- **Tier C (12+ months)**: Capsoft and United Labs require digital PR budget. Skip until ready.

---

## Priority Matrix — What to do, in what order

### 🚨 Week 0 (this week) — Unblock & finalize foundation

**Dhruv's actions** (only Dhruv can do these):
1. **Disable Cloudflare AI bot block** (5 min): Dashboard → Security → Bots → AI Scrapers → OFF
2. **Verify custom robots.txt is being served**: `curl -A "Mozilla/5.0" https://admetuslifesciences.com/robots.txt` should show our explicit Allow list, not Cloudflare's default
3. **Set up Google Business Profile**: business.google.com → claim Village Anta, Tehsil Safidon facility. Verify via postcard (~7 days). Add photos, hours, services, specialties.
4. **Send me certification PDFs**: FSSAI, GMP, HACCP, Halal, WHO-GMP. I'll host them at `/certifications/{name}.pdf`.

**My actions** (already done in Weeks 1-2):
- ✅ robots.txt allow-list
- ✅ sitemap.xml with all 18 routes
- ✅ llms.txt with structured page index
- ✅ Organization + LocalBusiness + WebSite + Person JSON-LD
- ✅ Product + BreadcrumbList JSON-LD on all 10 product pages
- ✅ FAQPage schema on /contract-manufacturing, /manufacturing, /quality, /export, all 10 product pages
- ✅ Founder bio for Anudeep Deswal
- ✅ Manufacturing Specs grid on each product page
- ✅ og:image with brand styling

---

### 🟢 Week 3 — High-leverage code work (I can do this)

Based on competitor analysis: every top-ranking competitor has **a keyword-targeted landing page** with 1,500-3,000 words + FAQ + schema. Admetus doesn't have any of these yet. This is the single biggest win.

**Build 3 keyword-targeted landing pages:**

1. **`/softgel-capsule-manufacturer-haryana/`** — primary geo target
   - H1: *"Softgel Capsule Manufacturer in Haryana, India"*
   - 1,800+ words: Haryana pharma cluster, Jind district, NCR/Mumbai/Mundra port logistics, facility tour, ARBES SGX-806P, certifications, formulations, MOQ flexibility, lead times, why-Haryana-pharma section, 8 FAQs
   - Schema: LocalBusiness + FAQPage + BreadcrumbList
   - Cross-link to /manufacturing, /quality, /products
   - **Targets keywords**: "softgel manufacturer Haryana" (50-100/mo), "softgel manufacturer Jind" (<30/mo), "softgel manufacturer Sonipat" (<30/mo)

2. **`/private-label-softgel-manufacturer-india/`** — primary commercial target
   - H1: *"Private Label Softgel Capsule Manufacturer in India"*
   - 1,800+ words: Process from brief to dispatch, brand approval workflow, packaging options (blister, bottle, custom carton), MOQs, lead times, exclusivity terms, sample policy, regulatory support, 8 FAQs
   - Schema: Service + FAQPage + BreadcrumbList
   - Cross-link to /products (each product as a private-label option), /export, /contact
   - **Targets**: "private label softgel manufacturer" (~100-300/mo), "private label softgel India" (~50/mo)

3. **`/contract-manufacturing-vitamin-d3-softgel/`** — formulation+service combo
   - H1: *"Contract Manufacturing for Vitamin D3 Softgel Capsules — India"*
   - 1,500+ words: D3 formulation expertise (60K IU + Calcitriol K2 variants), bioavailability, stability, regulatory (FSSAI Vitamin D3 requirements), MOQ, packaging, export markets where D3 sells well, 6 FAQs
   - Schema: Service + Product references + FAQPage
   - Cross-link to /products/cholecalciferol-60000-iu, /products/calcitriol-calcium-k27-softgel
   - **Targets**: "Cholecalciferol 60000 IU manufacturer" (50-100/mo), "Vitamin D3 contract manufacturer India" (50-100/mo), "Vitamin D3 softgel private label" (<50/mo)

**Estimated effort:** 1-2 days. **Estimated impact:** Largest single uplift available.

---

### 🟢 Week 3-4 — Cert PDFs + Case studies (mixed: Dhruv provides, I implement)

Per competitor analysis: zero of 7 competitors do these. Pure content moats.

**Cert PDF hosting** (waiting on Dhruv's PDFs):
- Host at `/certifications/fssai.pdf`, `/certifications/gmp.pdf`, etc.
- Add a `/certifications/` page with download cards + cert numbers + valid-through dates + scope per cert
- Internal-link from /quality, /manufacturing, every landing page

**2 case studies** (need Dhruv's input on real but anonymizable client work):
- *"Vitamin D3 60K Stability Challenge: How Admetus Solved a 3-Month Shelf-Life Issue in 6 Weeks"*
- *"Halal + Kosher Dual Certification for GCC Export: A Brand Owner's 12-Week Launch"*
- Each ~1,200 words, structured: client context (anonymized) → challenge → approach → result → metrics
- Schema: Article + Organization
- Add a `/case-studies/` index page

---

### 🟡 Week 4-5 — Off-site authority (Dhruv executes)

Per directory-targets.md, **Day-1 priorities** ranked by impact-to-effort:

| # | Action | Cost | Time to set up | Approval lead time | Lead-gen value | SEO value |
|---|---|---|---|---|---|---|
| 1 | **IndiaMart free profile** + catalog upload (10 products) | ₹0 | 2-3 hours | Instant | ★★★★★ | ★★★ (NoFollow on free, but high DR citation) |
| 2 | **TradeIndia free profile** + catalog | ₹0 | 2-3 hours | Instant | ★★★★ | ★★★ |
| 3 | **Google Business Profile** | ₹0 | 30 min | 7 days (postcard) | ★★★★★ | ★★★★ (huge for "softgel manufacturer Haryana" Local Pack) |
| 4 | **JustDial business listing** | ₹0 | 30 min | 1-2 days | ★★★ | ★★ |
| 5 | **Sulekha B2B** | ₹0 | 30 min | Instant | ★★ | ★★ |
| 6 | **ZaubaCorp claim** (already auto-listed from MCA) | ₹0 | 15 min | Instant | ★ | ★★★ (DoFollow citation) |
| 7 | **Tofler claim** (also auto-listed) | ₹0 | 15 min | Instant | ★ | ★★★ (DoFollow citation) |
| 8 | **Made-in-India.com listing** | ₹0 free tier | 1 hour | 2 days | ★★ | ★★ |
| 9 | **MSME Udyam** registration update (likely already done) | ₹0 | 30 min | Instant | ★ | ★★ (govt domain DoFollow) |
| 10 | **DGFT IEC** (Importer Exporter Code) — likely already done | ₹500 | If not done | 1-2 weeks | ★ (export prerequisite) | ★ |

**Total Week 4-5 cost**: ₹0–₹500. **Total time**: ~6-7 hours of admin work.

**Then Week 5-8** (paid associations, optional):
- Pharmexcil RCMC — ₹13,500/yr — strong authority + export legitimacy. **Recommended.**
- HADSA membership — ~₹30-75K/yr — most niche-relevant for nutraceuticals. **Optional but valuable.**
- Skip CII / FICCI / ASSOCHAM for now (₹40K+/yr each, marginal SEO value, networking play not B2B-leadgen).

---

### 🟡 Week 5-8 — Long-tail SEO optimization (I do, code-only)

Per keyword-opportunities.md, optimize existing pages for 10 quick-win keywords. These are mostly meta-tag, H1, and schema additions. Examples:

- `/quality/` — title tag → *"WHO-GMP, FSSAI & HACCP Certified Softgel Manufacturer | Admetus"*; add cert table with cert numbers; target "WHO-GMP certified softgel manufacturer India" + "FSSAI certified softgel manufacturer"
- `/export/` — add H2 *"Halal-Certified Softgel Manufacturing for GCC, Middle East & ASEAN Markets"*; target "Halal certified softgel manufacturer India"
- `/products/cholecalciferol-60000-iu/` — title tag → *"Cholecalciferol 60,000 IU Softgel Manufacturer & Private Label | Admetus"*; target "Cholecalciferol 60000 IU manufacturer"
- `/products/krill-oil-softgel/` — similar treatment for "Krill oil contract manufacturer India"
- `/manufacturing/` — add H2 *"Softgel Manufacturing Facility in Jind, Haryana"*; target "softgel manufacturer Jind Haryana"
- `/contract-manufacturing/` — title tag includes "MOQ" and "Sample Policy"; target buyer-journey FAQs ("MOQ for softgel contract manufacturing India")

**Estimated effort:** Half a day across all pages. **Impact:** Compounds over 3-6 months as Google re-crawls and re-indexes.

---

### 🟢 Week 6-12 — Educational content for topical authority

Per ranking-factors-2026.md: topical authority demonstrated through comprehensive coverage helps long-tail rankings.

**3 pillar blog posts** (each 2,000+ words):

1. *"Soft Gelatin Capsule Manufacturing: A Complete Guide for Brand Owners"*
   - Process step-by-step, equipment (ARBES SGX-806P), capacity, raw materials, QC, regulatory
   - Targets: "soft gelatin encapsulation process", "softgel manufacturing process", "how are softgel capsules made"
   - Internal links: /manufacturing, /quality, /contract-manufacturing

2. *"FSSAI vs WHO-GMP vs HACCP: A Certification Guide for Nutraceutical Brand Owners"*
   - What each cert covers, when you need it, how to verify a manufacturer's certs
   - Targets: "FSSAI WHO-GMP HACCP difference", "nutraceutical certifications India"
   - Internal links: /quality, /export

3. *"How to Choose a Contract Manufacturer for Your Softgel Brand: A Buyer's Checklist"*
   - 15-point checklist, MOQ red flags, certification verification, sample policy questions to ask
   - Targets: "how to choose contract manufacturer", "softgel contract manufacturer checklist"
   - Internal links: /contract-manufacturing, /quality

**Estimated effort:** 1-2 days per post (3-6 days total). **Impact:** medium — these are buyer-journey content that converts to commercial intent.

---

### 🟡 Week 8-12 — Press / digital PR (Dhruv-led)

Per ranking-factors-2026.md: backlinks are still a top-3 correlation signal. We need ~15-20 quality referring domains in 90 days.

**Recommended press placements:**

1. **FnB News sponsored article** (~₹20-60K) — best fit for nutraceutical angle. DoFollow.
2. **Pharmabiz sponsored article** (~₹25-75K) — pharma audience, indirect leads + authority.
3. **EIN Presswire press release** (~$149-499) — wide syndication, Google News indexing. Mostly NoFollow but useful for brand-name SEO.
4. **Pitch FnB News for editorial** — angle: "Rural women workforce builds nutraceutical export brand from Haryana." Free if accepted; high authority.

**Total Week 8-12 cost**: ₹40K–₹2L depending on packages.

---

## 90-Day Cumulative Budget

| Category | Min | Recommended | Max |
|---|---|---|---|
| Free directory listings (10) | ₹0 | ₹0 | ₹0 |
| Google Business Profile | ₹0 | ₹0 | ₹0 |
| IndiaMart paid catalog (Mini) | — | ₹3K/mo × 3 = ₹9K | ₹6K/mo × 3 = ₹18K |
| Pharmexcil RCMC | — | ₹13.5K/yr | ₹13.5K/yr |
| HADSA membership | — | ₹30K/yr | ₹75K/yr |
| FnB News sponsored article | — | ₹40K | ₹60K |
| Pharmabiz sponsored | — | ₹0 (skip) | ₹50K |
| EIN Presswire | — | $499 (~₹40K) | $999 (~₹85K) |
| **Total 90-day** | **₹0** | **₹130K** | **₹300K** |

**My recommendation**: Start with the ₹0 plan (Week 0 → Week 5 free directories + Google Business Profile + my code work). After 60 days, measure organic traffic delta with Google Search Console. If results are tracking, add Pharmexcil + 1 press placement (~₹55K). Don't pre-commit to the ₹300K plan.

---

## Expected GEO score progression

| Phase | When | GEO score | Driver |
|---|---|---|---|
| Baseline (audit) | Apr 30 (today) | 34/100 (Critical) | AI bots blocked, no schema, no FAQs |
| Week 1+2 (done) | Apr 30 (now) | ~50/100 (Poor → Fair, pending Cloudflare unblock) | Schema + FAQs + sitemap + llms.txt + founder bio |
| Week 0 unblock | +1 day after Dhruv's CF action | ~75/100 (Good) | All technical work activates |
| Week 3-4 + cert PDFs | +30 days | ~80/100 (Good) | Landing pages + case studies + cert downloads |
| Week 5-8 + directories + 1 press | +60 days | ~85/100 (Good→Excellent) | Off-site authority signals |
| Week 8-12 + blog content | +90 days | ~88-92/100 (Excellent) | Topical authority + backlink stack |

---

## Expected Google ranking progression

**Realistic 90-day outcomes** (assumes Cloudflare unblock + Week 3-5 work shipped):

| Keyword | Current | 30 days | 90 days |
|---|---|---|---|
| "softgel manufacturer Jind Haryana" | unranked | Top 3 | #1-2 |
| "softgel manufacturer Haryana" | unranked | Top 10 | Top 5 |
| "softgel manufacturer Sonipat" | unranked | Top 5 | Top 3 |
| "Cholecalciferol 60000 IU manufacturer" | unranked | Top 10 | Top 5 |
| "Krill oil contract manufacturer India" | unranked | Top 10 | Top 5-8 |
| "Halal softgel manufacturer India" | unranked | Top 20 | Top 10 |
| "WHO-GMP softgel manufacturer India" | unranked | Top 30 | Top 15 |
| "private label softgel manufacturer" | unranked | Top 50 | Top 20-30 |
| "softgel manufacturer India" (head) | unranked | unchanged | unchanged (out of reach) |

**Caveat**: Rankings depend on Cloudflare unblock (else nothing indexes properly), Google re-crawl frequency, and competitive movement. These are realistic best-case numbers, not guarantees.

---

## What I'm NOT doing (and why)

1. **No PBN backlinks, no purchased links.** Manual penalty risk in 2026 is high. Per ranking-factors-2026.md: site reputation abuse is the #1 enforcement priority.
2. **No AI-generated thin content.** March 2024 update specifically targeted this. Better to ship 3 deep pages than 30 thin ones.
3. **No fighting Capsoft / United Laboratories head-to-head** for "softgel manufacturer India". 12+ months out, requires digital PR budget Admetus doesn't have yet.
4. **No CII / FICCI / ASSOCHAM memberships** initially — ₹40K+/yr each, marginal SEO ROI vs. Pharmexcil RCMC at ₹13.5K.
5. **No Wikipedia entry attempt** (yet). Notability bar is high; brands under 5 years old usually get rejected. Revisit at Year 5.

---

## Decision points for Dhruv

Before I start Week 3 work, please confirm:

1. **Which keyword-targeted landing pages should I build first?** I recommend all 3 (Haryana, private-label, Vitamin D3) but if you want to start with 1, which is the priority?

2. **Do you have client work I can anonymize for case studies?** Even one is better than zero.

3. **What's the budget commitment for press / paid memberships?** ₹0 / ₹130K / ₹300K plan?

4. **Will you commit to the Cloudflare unblock + GBP setup this week?** Without those, the rest doesn't index.

---

## Files referenced

- `/Users/gauravlochab/admetus-lifesciences/seo-audit/GEO-AUDIT-REPORT.md`
- `/Users/gauravlochab/admetus-lifesciences/seo-audit/competitor-analysis.md`
- `/Users/gauravlochab/admetus-lifesciences/seo-audit/keyword-opportunities.md`
- `/Users/gauravlochab/admetus-lifesciences/seo-audit/directory-targets.md`
- `/Users/gauravlochab/admetus-lifesciences/seo-audit/ranking-factors-2026.md`
- `/Users/gauravlochab/admetus-lifesciences/seo-audit/MASTER-ACTION-PLAN.md` (this file)
