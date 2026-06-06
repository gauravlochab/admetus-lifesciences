# Admetus Lifesciences — SEO/GEO/AEO Gap Implementation Plan + Test Cases

**Audit Date:** 2026-06-06
**Current Scores:** SEO 8/10 | GEO 7/10 | AEO 7/10 — Combined 22/30
**Target Scores:** SEO 9/10 | GEO 9/10 | AEO 9/10 — Combined 27/30

---

## Phase 1: Critical Fixes (Blocks Rich Results)

### 1.1 — Populate `sameAs` in Organization schema
**File:** `src/app/layout.tsx`
**Gap:** `sameAs: []` — empty array. AI engines can't verify entity.
**Fix:** Add IndiaMart, Google Maps, TradeIndia, LinkedIn URLs.

**Test Cases:**
```
TC-1.1.1: Parse JSON-LD from layout.tsx → Organization.sameAs array has >= 3 URLs
TC-1.1.2: Every URL in sameAs starts with https://
TC-1.1.3: sameAs does NOT contain empty strings or placeholder values
TC-1.1.4: JSON-LD is valid JSON (JSON.parse succeeds)
```

### 1.2 — Add `offers` + `image` to Product schema
**File:** `src/app/products/[slug]/page.tsx`
**Gap:** Product schema missing `offers` and `image` — Google silently ignores Product rich results.
**Fix:** Add `offers` with `priceCurrency: "INR"` and `availability`, and `image` property.

**Test Cases:**
```
TC-1.2.1: Every Product JSON-LD has an "offers" property
TC-1.2.2: offers.@type === "Offer" or "AggregateOffer"
TC-1.2.3: offers has "priceCurrency" property
TC-1.2.4: offers has "availability" property
TC-1.2.5: Product JSON-LD has "image" property that is a non-empty string or array
TC-1.2.6: Product JSON-LD has "image" URL that starts with https:// or /
```

### 1.3 — Add `image` to Article schemas (case studies)
**Files:** `src/app/case-studies/vitamin-d3-stability-challenge/page.tsx`, `halal-kosher-gcc-export/page.tsx`
**Gap:** Article schema missing required `image` property.

**Test Cases:**
```
TC-1.3.1: Article JSON-LD has "image" property
TC-1.3.2: image URL points to a real file in public/images/
TC-1.3.3: Article JSON-LD has "author" property with @type "Person" or "Organization"
```

### 1.4 — Add JSON-LD to Contact page
**File:** `src/app/contact/page.tsx`
**Gap:** Zero structured data on the contact page.
**Fix:** Add `ContactPage` + `LocalBusiness` + `ContactPoint` schema.

**Test Cases:**
```
TC-1.4.1: Contact page has at least one <script type="application/ld+json"> element
TC-1.4.2: JSON-LD contains "@type": "ContactPage" or "@type": "LocalBusiness"
TC-1.4.3: ContactPoint has "telephone" property
TC-1.4.4: ContactPoint has "email" property
TC-1.4.5: ContactPoint has "contactType" property (e.g., "sales")
```

### 1.5 — Fix homepage entity-defining sentence
**File:** `src/app/page.tsx`
**Gap:** First prose paragraph doesn't name the company. AI can't extract entity definition.
**Fix:** Change hero paragraph to include "Admetus Lifesciences is a WHO-GMP certified softgel capsule manufacturer in Haryana, India".

**Test Cases:**
```
TC-1.5.1: Homepage <p> text within Hero section contains "Admetus Lifesciences"
TC-1.5.2: Homepage <p> text within Hero section contains "softgel capsule manufacturer"
TC-1.5.3: Homepage <p> text within Hero section contains "India" or "Haryana"
TC-1.5.4: Entity-defining sentence appears within first 150 words of visible page content
```

### 1.6 — Add `telephone` + `contactPoint` to Organization schema
**File:** `src/app/layout.tsx`
**Gap:** Organization schema has email but no phone or ContactPoint.

**Test Cases:**
```
TC-1.6.1: Organization JSON-LD has "telephone" property starting with "+91"
TC-1.6.2: Organization JSON-LD has "contactPoint" property
TC-1.6.3: contactPoint.@type === "ContactPoint"
TC-1.6.4: contactPoint.contactType exists and is non-empty
```

### 1.7 — Create site.webmanifest
**File:** `public/site.webmanifest` (new file)
**Gap:** No web manifest for PWA signals.

**Test Cases:**
```
TC-1.7.1: public/site.webmanifest exists
TC-1.7.2: manifest JSON has "name" property
TC-1.7.3: manifest JSON has "icons" array with at least 1 icon
TC-1.7.4: manifest JSON has "theme_color" property
TC-1.7.5: manifest JSON has "background_color" property
```

---

## Phase 2: GEO Optimization (AI Search Visibility)

### 2.1 — Add external citations to content pages
**Files:** Multiple service and product pages
**Gap:** Zero external citations. AI engines heavily weight citation-worthy content.
**Fix:** Add real references to WHO, FSSAI, Grand View Research, clinical guidelines.

**Test Cases:**
```
TC-2.1.1: Homepage or nutraceutical page contains at least 1 external link (href starting with http) to an authoritative source
TC-2.1.2: Quality page references a WHO standard (e.g., "WHO TRS" or "WHO GMP guidelines")
TC-2.1.3: At least 3 pages across the site contain <a> tags with href pointing to external domains
TC-2.1.4: External links have rel="noopener noreferrer" and target="_blank"
```

### 2.2 — Add `SpeakableSpecification` to top pages
**Files:** Homepage, about, contract-manufacturing, export, manufacturing
**Gap:** Zero pages have SpeakableSpecification. Blocks voice search.

**Test Cases:**
```
TC-2.2.1: Homepage JSON-LD contains "@type": "SpeakableSpecification"
TC-2.2.2: SpeakableSpecification has "cssSelector" property OR "xpath" property
TC-2.2.3: At least 3 pages have SpeakableSpecification
```

### 2.3 — Add `HowTo` schema for manufacturing process
**File:** `src/app/manufacturing/page.tsx`
**Gap:** 7-step manufacturing process is a textbook HowTo candidate.

**Test Cases:**
```
TC-2.3.1: Manufacturing page JSON-LD contains "@type": "HowTo"
TC-2.3.2: HowTo has "name" property containing "softgel"
TC-2.3.3: HowTo has "step" array with >= 7 items
TC-2.3.4: Each step has "@type": "HowToStep" and "name" and "text" properties
```

### 2.4 — Fix `areaServed` on Organization schema
**File:** `src/app/layout.tsx`
**Gap:** `AdministrativeArea` used for "Worldwide" — wrong type.

**Test Cases:**
```
TC-2.4.1: Organization or LocalBusiness areaServed does NOT contain "@type": "AdministrativeArea" with name "Worldwide"
TC-2.4.2: areaServed contains specific country or region entities
```

### 2.5 — Enhance Person schema for founder
**File:** `src/app/about/page.tsx`
**Gap:** Person schema missing `@id`, `url`, `sameAs`, `image`.

**Test Cases:**
```
TC-2.5.1: Person JSON-LD has "@id" property
TC-2.5.2: Person JSON-LD has "sameAs" array (e.g., LinkedIn URL)
TC-2.5.3: Person JSON-LD has "image" property OR Person is referenced by "@id" from Organization.founder
```

---

## Phase 3: AEO Optimization (Featured Snippets & Voice)

### 3.1 — Add homepage FAQ section + FAQPage schema
**File:** `src/app/page.tsx`
**Gap:** Homepage has 0 question-phrased headings and no FAQ. This is the highest-authority page.

**Test Cases:**
```
TC-3.1.1: Homepage contains at least 5 <h2> or <h3> elements with question marks
TC-3.1.2: Homepage JSON-LD contains "@type": "FAQPage"
TC-3.1.3: FAQPage has "mainEntity" array with >= 5 Question items
TC-3.1.4: Each Question has "name" (the question) and "acceptedAnswer.text" (the answer)
TC-3.1.5: FAQ section appears below the main content, above the CTA
```

### 3.2 — Add About page FAQ section + schema
**File:** `src/app/about/page.tsx`
**Gap:** No FAQ, no question headings. "Who is Admetus?" queries unanswered.

**Test Cases:**
```
TC-3.2.1: About page contains at least 4 <details> FAQ elements
TC-3.2.2: About page JSON-LD contains "@type": "FAQPage"
TC-3.2.3: FAQ questions include "Who" or "When" or "Where" questions about Admetus
```

### 3.3 — Add comparison tables for table snippets
**Files:** Omega-3 page, contract manufacturing page, quality page
**Gap:** Zero `<table>` elements on the entire site. Tables are #1 for table snippets.

**Test Cases:**
```
TC-3.3.1: Omega-3 page contains a <table> element with <thead> and <th> headers
TC-3.3.2: At least 2 pages across the site contain <table> elements
TC-3.3.3: Tables have proper <caption> or adjacent heading describing the comparison
TC-3.3.4: Table headers use <th> with scope="col" or scope="row"
```

### 3.4 — Add "What is X" definition paragraphs
**Files:** Contract manufacturing, export, quality pages
**Gap:** No definition-pattern sentences at top of service pages.

**Test Cases:**
```
TC-3.4.1: Contract manufacturing page first <p> after hero contains "is" or "refers to" (definition pattern)
TC-3.4.2: The definition paragraph is 40-60 words long
TC-3.4.3: At least 3 service pages have a definition paragraph within the first 200 words
```

### 3.5 — Add BreadcrumbList schema to remaining 9 pages
**Files:** homepage, about, contact, products listing, case-studies index, manufacturing, contract-manufacturing, export, quality

**Test Cases:**
```
TC-3.5.1: Every page in the sitemap has BreadcrumbList JSON-LD
TC-3.5.2: BreadcrumbList has itemListElement array with >= 2 items
TC-3.5.3: First item in itemListElement has name "Home" and item pointing to root URL
TC-3.5.4: Last item in itemListElement has name matching the page title
```

---

## Phase 4: Missing OG Tags

### 4.1 — Add OpenGraph tags to 6 pages missing them
**Files:** about/layout.tsx, export/layout.tsx, contract-manufacturing/layout.tsx, manufacturing/layout.tsx, contact/layout.tsx, quality/layout.tsx

**Test Cases:**
```
TC-4.1.1: Every layout.tsx in src/app/ has openGraph property in metadata export
TC-4.1.2: openGraph has "title" property
TC-4.1.3: openGraph has "description" property
TC-4.1.4: openGraph has "url" property matching the canonical URL
```

---

## Phase 5: Blog / Content Hub (New Section)

### 5.1 — Create blog infrastructure
**Files:** `src/app/blog/page.tsx`, `src/app/blog/layout.tsx`, `src/app/blog/[slug]/page.tsx`
**Gap:** No blog section. Competitors have blogs driving informational traffic.

**Test Cases:**
```
TC-5.1.1: /blog/ route exists and returns HTTP 200
TC-5.1.2: Blog index page has <h1> containing "Blog" or "Resources" or "Insights"
TC-5.1.3: Blog index page has metadata with title and description
TC-5.1.4: Blog index page has BreadcrumbList JSON-LD
TC-5.1.5: Blog detail page template exists at /blog/[slug]/
```

### 5.2 — Create initial blog posts (10 priority posts)
**Gap:** Zero editorial content for topical authority.

**Blog Post Test Cases (per post):**
```
TC-5.2.1: Blog post has <h1> matching the post title
TC-5.2.2: Blog post has Article JSON-LD with datePublished, author, headline, image
TC-5.2.3: Blog post has BreadcrumbList JSON-LD (Home > Blog > Post Title)
TC-5.2.4: Blog post has FAQPage JSON-LD with >= 3 questions
TC-5.2.5: Blog post word count >= 1500 words (pillar content)
TC-5.2.6: Blog post has at least 2 internal links to product/service pages
TC-5.2.7: Blog post has at least 1 external citation link
TC-5.2.8: Blog post metadata has title (50-60 chars) and description (150-160 chars)
TC-5.2.9: Blog post metadata has canonical URL
TC-5.2.10: Blog post has OpenGraph tags
```

### 5.3 — Priority Blog Posts (from competitor research)

| # | Title | Primary Keyword | Type | Priority |
|---|-------|----------------|------|----------|
| 1 | What Are Softgel Capsules? A Complete Guide | softgel capsules | Educational | P0 |
| 2 | Softgel vs Tablet vs Hard Capsule: Which Is Better? | softgel vs tablet | Comparison | P0 |
| 3 | How Softgel Capsules Are Made: 7-Step Manufacturing Process | how softgel capsules are made | How-to | P0 |
| 4 | Vitamin D3 Deficiency in India: Causes, Symptoms & Treatment | vitamin D3 deficiency India | Educational | P1 |
| 5 | Benefits of Omega-3 Fish Oil: Heart, Brain & Joint Health | omega 3 benefits | Educational | P1 |
| 6 | How to Choose a Softgel Manufacturer in India: Buyer's Guide | softgel manufacturer India guide | Buyer Guide | P1 |
| 7 | Contract Manufacturing vs Private Label: What's the Difference? | contract manufacturing vs private label | Comparison | P1 |
| 8 | Halal Certification for Nutraceuticals: Complete Guide | halal certification nutraceuticals | Guide | P2 |
| 9 | How to Start a Nutraceutical Brand in India | start nutraceutical brand India | Guide | P2 |
| 10 | WHO-GMP Certification: What It Means for Pharma Manufacturing | WHO GMP certification meaning | Educational | P2 |

---

## Phase 6: Technical Debt

### 6.1 — Standardize inconsistent numbers
**Gap:** Homepage says "80+" formulations, about says "10+", catalog says "115+".

**Test Cases:**
```
TC-6.1.1: All references to formulation count use the same number across pages
TC-6.1.2: OR clearly distinguish "10+ private label SKUs" vs "115+ licensed formulations"
```

### 6.2 — Fix phone number inconsistency
**Gap:** CTA section shows +91-7497841608, Contact page shows +91-9729977795.

**Test Cases:**
```
TC-6.2.1: Primary phone number is consistent in footer, contact page, and CTA sections
TC-6.2.2: Organization schema telephone matches the primary number shown on contact page
```

### 6.3 — Fix Contact form placeholder API key
**File:** `src/app/contact/page.tsx`
**Gap:** `access_key: "YOUR_ACCESS_KEY_HERE"` — form doesn't work.

**Test Cases:**
```
TC-6.3.1: Contact form access_key value does NOT contain "YOUR_ACCESS_KEY_HERE"
TC-6.3.2: Contact form access_key value is a valid Web3Forms key (32+ characters)
```

---

## Master Test Suite Summary

| Phase | Tests | Priority |
|-------|-------|----------|
| Phase 1: Critical Fixes | 25 tests | P0 |
| Phase 2: GEO Optimization | 14 tests | P1 |
| Phase 3: AEO Optimization | 17 tests | P1 |
| Phase 4: Missing OG Tags | 4 tests | P2 |
| Phase 5: Blog / Content | 14 tests | P2 |
| Phase 6: Technical Debt | 5 tests | P3 |
| **TOTAL** | **79 tests** | |

---

## Implementation Order

1. **Phase 1** — Do first. These block Google rich results and AI entity recognition.
2. **Phase 3.1** — Homepage FAQ. Highest-impact single change for AEO.
3. **Phase 2** — GEO changes. Unlock AI search citation.
4. **Phase 4** — OG tags. Quick wins.
5. **Phase 5** — Blog. Largest effort but biggest long-term payoff.
6. **Phase 6** — Cleanup.
