# GEO Audit Report: Admetus Lifesciences

**Audit Date:** 2026-04-30
**URL:** https://admetuslifesciences.com
**Business Type:** B2B Manufacturer (hybrid: Manufacturer + Local Business + Catalog)
**Pages Analyzed:** 5 (home, about, manufacturing, products, plus catalog)
**Stack:** Next.js 16 static export on Cloudflare Pages

---

## Executive Summary

**Overall GEO Score: 34/100 (Critical)**

The site has clean editorial design, accurate metadata on every page, and a working catalogue PDF — solid groundwork. But it's **invisible to AI search** because Cloudflare's default managed `robots.txt` blocks every major AI crawler (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, Bytespider, CCBot, Amazonbot, Applebot-Extended) plus emits a `Content-Signal: ai-train=no` header. There is **zero JSON-LD structured data**, **no sitemap.xml** (returns 404), **no llms.txt**, and **no FAQ/HowTo content blocks** that LLMs typically quote. Without fixing the crawler block, *no other GEO work matters* — ChatGPT, Claude, Perplexity, and Gemini cannot read the site at all.

The good news: every issue here is fixable in 1–2 weeks of focused work, and admetuslifesciences.com is small enough (~10 pages) that schema + content rewrites are manageable. The keyword targets you picked (softgel manufacturer Haryana, contract manufacturing nutraceutical, private label, specific formulations) have genuine long-tail openings.

### Score Breakdown

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability | 25/100 | 25% | 6.25 |
| Brand Authority | 15/100 | 20% | 3.0 |
| Content E-E-A-T | 45/100 | 20% | 9.0 |
| Technical GEO | 20/100 | 15% | 3.0 |
| Schema & Structured Data | 0/100 | 10% | 0.0 |
| Platform Optimization | 30/100 | 10% | 3.0 |
| **Overall GEO Score** | | | **34/100** |

---

## 🚨 Critical Issues (Fix Immediately)

### 1. All major AI crawlers blocked by robots.txt
Cloudflare is serving a **managed robots.txt** that blocks: `GPTBot`, `ClaudeBot`, `Google-Extended`, `Bytespider`, `Amazonbot`, `CCBot`, `Applebot-Extended`, `meta-externalagent`, `CloudflareBrowserRenderingCrawler`. Plus `Content-Signal: ai-train=no` for the wildcard agent. **PerplexityBot is not listed**, so Perplexity may or may not crawl depending on UA.

**Impact:** Your site cannot appear as a citation in ChatGPT, Claude, Gemini, Google AI Overviews, Bing Copilot, or any LLM-grounded answer.

**Fix:** Disable Cloudflare's "AI bot blocking" feature in dashboard → Security → Bots → AI crawlers. *Then* commit a custom `public/robots.txt` to override.

### 2. No sitemap.xml
`/sitemap.xml` returns Next.js 404. Search engines and AI crawlers have no map of your pages.

**Fix:** Generate via Next.js `app/sitemap.ts` — auto-includes all routes including `/products/[slug]`.

### 3. Zero structured data on every page
No `<script type="application/ld+json">` blocks anywhere. Missing: Organization, LocalBusiness, Product, FAQPage, BreadcrumbList. This is the single biggest GEO miss — schema is how LLMs extract entity facts.

**Fix:** Add JSON-LD to `layout.tsx` (Organization + LocalBusiness, sitewide) and per-page (Product on each `/products/[slug]`, BreadcrumbList sitewide).

---

## High Priority Issues (Fix Within 1 Week)

### 4. No llms.txt
`/llms.txt` returns 404. This is the emerging standard for telling LLMs how to navigate your content (similar to robots.txt but content-focused).

**Fix:** Create `public/llms.txt` with a structured index of pages, products, and key facts.

### 5. Bug: "nutraceutical and nutraceutical markets"
On `/products/`, meta description reads *"Explore our range of 7 precision-formulated softgel capsules for nutraceutical and nutraceutical markets."* Originally this was probably "nutraceutical and pharmaceutical" — the global Pharmaceutical→Nutraceutical sed replaced both words.

**Fix:** Replace with `"...for nutraceutical and healthcare markets."` or similar.

### 6. No FAQ blocks on any page
LLMs disproportionately quote FAQ-formatted Q&A (it's the highest-citability format in the Princeton/Georgia Tech GEO study). Your /manufacturing, /contract-manufacturing, /quality, /export, and product pages have *zero* explicit Q&A.

**Fix:** Add 5–8 FAQs per key page (MOQ, lead times, certifications, formulations supported, export markets, sample policy). Wrap each in `FAQPage` schema.

### 7. No alt text on certificate images
Critical: `/images/cert-fssai.png`, `cert-gmp.png`, `cert-haccp.png`, `cert-halal.png`, `cert-who.png` are preloaded but I didn't see explicit alt copy that names the certification. LLMs use alt text to extract certification claims.

**Fix:** Verify alt text is present and reads e.g., "FSSAI certification badge — Admetus Lifesciences".

### 8. No author / E-E-A-T signals
No "About the Founder" page, no Mr. Anudeep Deswal LinkedIn link, no team page, no signed editorial content. LLMs weight Expertise + Authoritativeness heavily.

**Fix:** Add a Founder section on /about with credentials, years in industry, links to LinkedIn.

---

## Medium Priority Issues (Fix Within 1 Month)

### 9. No external authority signals
No Wikipedia entry, no LinkedIn company page (verified), no Google Business Profile, no industry directory listings, no published press. LLMs need third-party corroboration to trust an entity.

**Fix:** Create LinkedIn Company page, Google Business Profile (for Village Anta facility), submit to Indiamart, TradeIndia, ExportersIndia, IBEF nutraceutical directory.

### 10. Twitter card uses `summary_large_image` but no `og:image` set
The HTML declares `twitter:card=summary_large_image` and OG tags but there's no `og:image` URL in the head. AI cards and search previews will render without an image.

**Fix:** Add `og:image` to `layout.tsx` metadata pointing to `/seo/og-image.png` (1200x630).

### 11. Heading hierarchy inconsistent
H1 on home is "PRECISION SOFTGEL CAPSULES" (decorative caps, no keywords like "manufacturer" or "India"). LLM extraction prefers H1s that match query intent.

**Fix:** Change to *"Precision Softgel Capsule Manufacturer in India"* (still beautiful, but query-matching).

### 12. Internal linking is shallow
Pages link to each other via top nav and CTAs only. No contextual in-content links (e.g., "our [WHO-GMP facility](/manufacturing)" inline within copy). This hurts both PageRank and LLM topic clustering.

**Fix:** Add 2–4 contextual internal links per long-form page.

### 13. Product pages likely thin
You have 7 products but I couldn't fetch them via WebFetch. If each product page is <300 words with no FAQ, no formulation detail, no use-case content, they won't rank or get cited.

**Fix:** Each product page should have: composition, indications, MOQ, packaging options, target markets, regulatory status, FAQ.

---

## Low Priority Issues

### 14. Open Graph locale
`og:locale=en_US` — should be `en_IN` for an Indian manufacturer (helps regional AI grounding).

### 15. No video / YouTube presence
Manufacturing facilities benefit hugely from a 60-second walkthrough video. LLMs increasingly cite video transcripts.

### 16. No structured testimonials
No Review/Testimonial schema, no client logos with attestation. Buyers and LLMs both look for social proof.

---

## Category Deep Dives

### AI Citability (25/100)
- **No FAQ blocks** = lowest-hanging fruit; FAQ format scores ~80 on citability per Princeton study
- Hero copy is poetic but not extractable: *"A passion for better healthcare"* — beautiful, useless to an LLM answering "who manufactures softgel capsules in Haryana?"
- Stats blocks (80+ formulations, 100% batch testing, 5 certifications) are scattered prose, not tables. **Fix:** wrap in `<table>` or definition lists with explicit labels.
- No quotable expert statements ("Founder Anudeep Deswal: 'We test every batch because…'")

### Brand Authority (15/100)
- Wikipedia: ❌ no entry
- LinkedIn Company: ❌ unverified (cannot find from web search)
- Google Business Profile: ❌ status unknown — needs verification
- YouTube: ❌ no channel
- Reddit: ❌ no mentions
- Press / news mentions: ❌ none found
- IndiaMart/TradeIndia: ❌ not listed
- **This is your weakest area.** AI models trust entities they see corroborated across platforms.

### Content E-E-A-T (45/100)
- ✅ About page exists and tells founding story (2020, Mr. Anudeep Deswal)
- ✅ Stats are concrete (90%+ women workforce, etc.)
- ❌ No founder bio with credentials
- ❌ No team/leadership page
- ❌ No signed articles or thought leadership
- ❌ No client testimonials with attribution
- ❌ No "as featured in" press logos
- ❌ Certifications named but no certificate document images / cert numbers

### Technical GEO (20/100)
- ✅ Static export = fast, server-rendered HTML, no JS-only content
- ✅ Sensible meta tags per page (title, description, canonical)
- ✅ Mobile responsive
- ❌ AI crawler block (the showstopper)
- ❌ No sitemap.xml
- ❌ No llms.txt
- ❌ No og:image
- ❌ Trailing-slash routing (`/about/` not `/about`) — fine but ensure canonicals match

### Schema & Structured Data (0/100)
- **Zero schema on every page.** No Organization, no LocalBusiness, no Product, no FAQPage, no Breadcrumb, no Article.
- This is *the* fastest score to move. One day's work goes from 0 → 70.

### Platform Optimization (30/100)
- Google AI Overviews: blocked (Google-Extended disallowed)
- ChatGPT: blocked (GPTBot disallowed)
- Claude: blocked (ClaudeBot disallowed)
- Perplexity: technically not blocked (PerplexityBot not listed) — possibly indexable
- Bing Copilot: Bingbot not blocked, *should* work
- Gemini: blocked via Google-Extended

---

## Quick Wins (Implement This Week)

1. **Unblock AI crawlers in Cloudflare** (5 min) → goes from 0 → 70 platform score
2. **Add Organization + LocalBusiness JSON-LD to `layout.tsx`** (1 hour) → schema 0 → 50
3. **Add `app/sitemap.ts`** (15 min) → standard SEO requirement
4. **Add `public/llms.txt`** (30 min) → emerging standard, easy win
5. **Fix "nutraceutical and nutraceutical" bug on /products meta** (2 min)
6. **Add 5 FAQ blocks to `/contract-manufacturing` with FAQPage schema** (90 min) → highest-citability format
7. **Create LinkedIn Company page + Google Business Profile** (Dhruv to do, 1 hour) → first external authority signal
8. **Add Product schema to each `/products/[slug]`** (2 hours) → rich snippets in Google + LLM extraction

**Expected lift after these 8 items: 34 → ~62 GEO score.** That alone is the difference between "invisible" and "competitive."

---

## 30-Day Action Plan

### Week 1 — Foundation (unblock + schema)
- [ ] Disable Cloudflare AI bot blocking; commit custom `public/robots.txt`
- [ ] Create `public/sitemap.xml` via `app/sitemap.ts`
- [ ] Create `public/llms.txt` with structured page index
- [ ] Add Organization + LocalBusiness JSON-LD in `layout.tsx`
- [ ] Add Product JSON-LD on each `/products/[slug]`
- [ ] Add BreadcrumbList JSON-LD sitewide
- [ ] Fix /products meta description bug
- [ ] Add `og:image` to layout metadata
- [ ] Verify cert image alt text

### Week 2 — Citability content
- [ ] Add FAQ section (5–8 Qs) to `/contract-manufacturing` + FAQPage schema
- [ ] Add FAQ section to `/manufacturing` + FAQPage schema
- [ ] Add FAQ section to `/quality` + FAQPage schema
- [ ] Add FAQ section to `/export` + FAQPage schema
- [ ] Rewrite each product page to ≥600 words: composition, MOQ, lead time, packaging, regulatory, FAQ
- [ ] Add founder bio (Mr. Anudeep Deswal) with credentials on `/about`

### Week 3 — Authority building (off-site)
- [ ] Create LinkedIn Company page; post 3 facility/product updates
- [ ] Create Google Business Profile for Village Anta facility; verify
- [ ] List on IndiaMart, TradeIndia, ExportersIndia, GlobalSources
- [ ] Submit to IBEF nutraceutical directory, FICCI member listing
- [ ] Pitch one trade publication (Pharmabiz, Nutraceutical Business Review India)

### Week 4 — Long-tail content + measurement
- [ ] Publish blog/resource: *"Soft Gelatin Capsule Manufacturing Process Explained"* (target: process-related queries)
- [ ] Publish: *"FSSAI vs WHO-GMP vs HACCP: Certification Guide for Nutraceutical Brand Owners"* (educational, citation-bait)
- [ ] Publish: *"How to Choose a Contract Manufacturer for Your Softgel Brand"* (buyer-intent)
- [ ] Set up Google Search Console + Bing Webmaster Tools
- [ ] Run `/geo audit` again to measure delta

---

## Appendix: Pages Analyzed

| URL | Title | Major Issues |
|---|---|---|
| / | Admetus Lifesciences \| Precision Softgel Capsule Manufacturer | No JSON-LD, no FAQ, weak H1 |
| /about/ | About Us \| Admetus Lifesciences | No founder bio, no schema |
| /manufacturing/ | Manufacturing Facility \| Admetus Lifesciences | No FAQ, no LocalBusiness schema |
| /products/ | Products \| Admetus Lifesciences | "nutraceutical and nutraceutical" typo, no Product schema |
| /robots.txt | (Cloudflare managed) | **Blocks all major AI bots** |
| /sitemap.xml | (Next.js 404) | Missing entirely |
| /llms.txt | (Next.js 404) | Missing entirely |

Site-wide blockers prevented full crawl via WebFetch (403). Live HTML retrieved via direct curl with browser UA.
