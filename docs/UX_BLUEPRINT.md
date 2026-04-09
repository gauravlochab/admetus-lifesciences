# Admetus Lifesciences -- UX Blueprint

> A cinematic, scroll-driven editorial experience for a B2B softgel manufacturer.
> Inspired by oryzo.ai's immersive storytelling -- adapted for pharmaceutical gravitas.

---

## 1. Design System

### 1.1 Color Palette

The palette shifts from the current teal/navy tech aesthetic to a **warm, dark, editorial** tone -- think luxury whiskey branding meets pharmaceutical precision.

```
BACKGROUNDS
--bg-black:        #0A0A0A    (true black -- hero, pinned sections)
--bg-charcoal:     #141414    (section backgrounds)
--bg-warm-dark:    #1A1710    (warm dark -- editorial sections)
--bg-cream:        #F5F0E8    (light contrast sections -- 1-2 max)

TEXT
--text-white:      #FAFAFA    (primary on dark)
--text-cream:      #E8E0D0    (warm white -- body text on dark)
--text-muted:      #8A8274    (captions, labels)
--text-dark:       #1A1710    (text on light sections)

ACCENTS
--gold:            #C8A951    (primary accent -- CTAs, highlights)
--gold-light:      #E2CC7A    (hover state)
--gold-muted:      #8A7B3E    (subtle gold -- borders, lines)
--teal:            #0097A7    (secondary accent -- certifications, tech)
--teal-glow:       #00E5FF    (glow effects only)

UTILITY
--border-subtle:   rgba(255,255,255,0.06)
--border-gold:     rgba(200,169,81,0.2)
--overlay-black:   rgba(10,10,10,0.7)
```

### 1.2 Typography

**Font Stack:**
- Display/Headlines: **"Instrument Serif"** (Google Fonts) -- editorial, high-fashion feel
- Body/UI: **"Inter"** (already installed) -- clean, professional
- Accent/Labels: **"JetBrains Mono"** or **"Space Mono"** -- technical credibility for specs/data

**Scale (Desktop):**
```
--display-hero:    clamp(5rem, 10vw, 9rem)     / 0.9 line-height / -0.02em tracking
--display-section: clamp(3.5rem, 7vw, 7rem)    / 0.95 line-height / -0.02em tracking
--heading-1:       clamp(2.5rem, 4vw, 4rem)    / 1.1 line-height / -0.01em tracking
--heading-2:       clamp(1.75rem, 3vw, 2.5rem) / 1.2 line-height / 0em tracking
--body-large:      1.25rem                      / 1.7 line-height / 0em tracking
--body:            1rem                         / 1.7 line-height / 0em tracking
--caption:         0.875rem                     / 1.5 line-height / 0.02em tracking
--label:           0.75rem                      / 1.4 line-height / 0.15em tracking / uppercase
```

All display text uses **ALL-CAPS** with tight tracking. Body text is sentence case.

### 1.3 Spacing System

8px base grid:
```
--space-1:   0.25rem   (4px)
--space-2:   0.5rem    (8px)
--space-3:   0.75rem   (12px)
--space-4:   1rem      (16px)
--space-6:   1.5rem    (24px)
--space-8:   2rem      (32px)
--space-12:  3rem      (48px)
--space-16:  4rem      (64px)
--space-24:  6rem      (96px)
--space-32:  8rem      (128px)
--space-48:  12rem     (192px)
```

Section vertical padding: `--space-32` to `--space-48` on desktop, `--space-16` to `--space-24` on mobile.

### 1.4 Layout Constants

```
--container-max:    1400px
--content-narrow:   800px    (for centered text blocks)
--gutter:           clamp(1.5rem, 4vw, 4rem)
```

---

## 2. Homepage -- Section-by-Section Blueprint

The homepage is a **12-section cinematic scroll experience**. Each section is full-viewport or near-full-viewport. The scroll should feel like turning pages of a luxury magazine.

---

### Section 1: HERO -- "The Opening Statement"

**Purpose:** Instant authority. Visitor knows exactly what this company does within 2 seconds.

**Layout:**
- Full viewport (100vh), edge-to-edge
- Background: Full-bleed hero image (softgel capsules on dark surface, dramatic lighting) with a dark gradient overlay (bottom 40%)
- Center-bottom: text block, left-aligned on desktop, centered on mobile
- Top-right corner: small animated "Scroll" indicator with downward line

**Typography:**
```
Label:    FSSAI  |  GMP  |  HACCP  |  HALAL  |  WHO-GMP
          (--label size, gold color, letter-spaced, horizontal row with dividers)

Headline: PRECISION
          SOFTGEL
          CAPSULES
          (--display-hero, all caps, Instrument Serif, white, each word on its own line)

Subhead:  Contract manufacturing & private label
          nutraceuticals from India.
          (--body-large, cream color, Inter, max-width 500px)

CTA:      [ REQUEST A QUOTE ]   [ EXPLORE PRODUCTS ]
          (Gold filled button)    (White outline button)
```

**Animation (GSAP ScrollTrigger):**
- On load: Headline lines stagger in from bottom (0.15s delay each), label fades in, subhead fades in, CTAs fade in -- total 1.2s sequence
- On scroll down: Image parallax (moves up at 0.3x scroll speed), text fades out and shifts up, gold certification label stays longest
- Background image has subtle Ken Burns (very slow zoom over 20s)

**Image:** Full-bleed photograph -- golden/amber softgel capsules scattered on a matte black surface with dramatic side lighting. Depth of field blur on edges.

---

### Section 2: TRUST BAR -- "The Credentials"

**Purpose:** Immediate credibility. Certifications as social proof before any content.

**Layout:**
- Narrow horizontal strip (auto height, ~120px)
- Background: `--bg-charcoal` with subtle top/bottom border (`--border-subtle`)
- 5 certification badges in a row, evenly spaced
- Each badge: icon/logo + name + one-line description, monochrome until hover

**Typography:**
```
Badge Name:  GMP  (--caption, white, bold)
Badge Desc:  Good Manufacturing Practice  (--label, muted)
```

**Animation:**
- Fade-in-up stagger as section enters viewport (0.1s per badge)
- On hover: badge glows with subtle teal backlight

**Image:** No images -- use minimal line-art icons or SVG certification marks in monochrome white.

---

### Section 3: MANIFESTO -- "Who We Are" (Pinned Text Reveal)

**Purpose:** Emotional hook. Not "about us" content -- a bold identity statement.

**Layout:**
- Full viewport, pinned for ~3 scroll-lengths
- Background: `--bg-black`
- Single large text block, centered on screen
- Text reveals word-by-word or line-by-line as user scrolls

**Typography:**
```
WE DON'T JUST MANUFACTURE.
WE ENGINEER WELLNESS
AT MOLECULAR PRECISION.

(--display-section, all caps, Instrument Serif, white)
(Key words "ENGINEER" and "MOLECULAR PRECISION" in gold)
```

Below the manifesto, as scroll continues:
```
Based in Haryana, India -- Admetus Lifesciences
is a specialized softgel capsule manufacturer
built on advanced encapsulation technology and
uncompromising quality control.

(--body-large, cream, Inter, centered, max-width 700px)
```

**Animation (GSAP ScrollTrigger -- pinned):**
- Section pins at top of viewport
- As user scrolls, each line of the manifesto fades in and shifts up (scrub: true, tied to scroll position)
- Gold-highlighted words get a subtle glow animation when they appear
- After all text is revealed, body paragraph fades in
- Section unpins and scrolls away naturally

**Image:** None. Pure typography. The text IS the visual.

---

### Section 4: STATS COUNTER -- "The Numbers"

**Purpose:** Quantitative proof of scale and capability.

**Layout:**
- Full viewport height
- Background: Split -- left 60% is a large photograph, right 40% is `--bg-warm-dark` with stats
- On mobile: image on top (50vh), stats below
- 4 stat counters stacked vertically on the right panel

**Typography:**
```
Label:    BY THE NUMBERS  (--label, gold)

Stat 1:   7+      Product Lines
Stat 2:   5       International Certifications
Stat 3:   100M+   Capsules Annual Capacity
Stat 4:   10+     Years of Excellence

(Numbers: --display-section size, Instrument Serif, white)
(Labels: --caption, muted, Inter)
```

**Animation:**
- Image parallax on scroll (slight upward drift)
- Counter numbers animate from 0 to final value when section enters viewport (2s duration, ease-out)
- Each stat staggers in 0.2s apart
- A thin gold horizontal line draws itself between each stat

**Image:** Bird's-eye view of the manufacturing facility interior -- clean room with workers in white coats, blue lighting, encapsulation machinery visible. Should look massive and modern.

---

### Section 5: PRODUCT SHOWCASE -- "The Portfolio" (Horizontal Scroll)

**Purpose:** Show all 7 products in a premium, browsable format.

**Layout:**
- Full viewport height, pinned
- Horizontal scroll carousel -- 7 large product cards scroll left-to-right as user scrolls vertically
- Left side (fixed): Section title and description
- Right side (scrolling): Product cards, each ~60vw wide on desktop

**Product Card Layout:**
```
Each card:
- Full-height (80vh), rounded corners (16px)
- Background: gradient from product's brand color (very subtle, 5% opacity) to --bg-charcoal
- Left half: large softgel capsule image (product-specific color)
- Right half: product info

Card Content:
  Product Name:   ADLIFE 12G  (--heading-1, white, all caps)
  Tagline:        Comprehensive Multivitamin Softgel  (--body, gold)
  Composition:    First 3 key ingredients listed  (--caption, muted)
  Category Badge: [ MULTIVITAMIN ]  (pill-shaped, outline, product color)
  CTA:            View Details ->  (--caption, gold, with arrow)
```

**Fixed Left Panel:**
```
Label:    OUR PRODUCTS  (--label, gold)
Headline: THE
          PORTFOLIO
          (--display-section, white, all caps)
Body:     7 precision-formulated softgel capsules.
          (--body, cream)

Progress: 01 / 07  (updates as cards scroll, monospace font)
```

**Animation (GSAP ScrollTrigger -- horizontal scroll):**
- Section pins when it reaches top of viewport
- Vertical scroll maps to horizontal movement of cards
- Cards have subtle parallax -- image layer moves slightly slower than text layer
- Active card scales up slightly (1.02), inactive cards have reduced opacity (0.6)
- Progress counter updates in real-time
- When last card is reached, section unpins

**Images:** Individual softgel capsules -- macro photography, each capsule's unique color, floating against dark background with colored light splash matching the capsule. Think Apple product photography.

---

### Section 6: MANUFACTURING -- "The Process" (Pinned Step Reveal)

**Purpose:** Show the 7-step manufacturing process as a cinematic walkthrough.

**Layout:**
- Full viewport, pinned for ~7 scroll-lengths (one per step)
- Split screen: Left 50% shows the step image (changes per step), Right 50% shows step text
- Step indicator on the far right: vertical numbered dots (01-07), active dot is gold
- On mobile: stacked -- image top, text bottom, swipe or scroll

**Steps Content:**
```
Step 01 -- RAW MATERIAL SOURCING
Globally sourced ingredients, each tested
for purity before entering our facility.
Image: Raw ingredients in laboratory setting

Step 02 -- PRECISION FORMULATION
Batch formulation following exact specifications
for optimal bioavailability.
Image: Scientists working with lab equipment

Step 03 -- ENCAPSULATION
ARBES SGX-806P encapsulation line producing
precision-engineered softgel capsules.
Image: Encapsulation machine in operation

Step 04 -- CONTROLLED DRYING
Temperature and humidity controlled drying
for consistent capsule integrity.
Image: Drying chamber/racks

Step 05 -- QUALITY INSPECTION
Multi-point quality control ensuring every
capsule meets international standards.
Image: Quality inspector examining capsules

Step 06 -- BLISTER PACKING
Elmach EPI 2000 blister machine for
tamper-evident, export-ready packaging.
Image: Blister packing machine

Step 07 -- DISPATCH
Export-ready packaging with full documentation
for international markets.
Image: Packaged products ready for shipment
```

**Typography per step:**
```
Step Number:  07  (--display-hero, gold, Instrument Serif, very large, low opacity 0.15 as bg element)
Step Label:   RAW MATERIAL SOURCING  (--heading-2, white, all caps)
Step Body:    Description text  (--body, cream)
```

**Animation (GSAP ScrollTrigger -- pinned):**
- Section pins at viewport top
- Each scroll increment crossfades to next step
- Image crossfades with a subtle scale transition (1.05 -> 1.0)
- Step number in background morphs between numbers
- Step indicator dot slides to new position
- Text exits left, new text enters from right
- On final step, section unpins

**Images:** One per step -- see image strategy section below.

---

### Section 7: FACILITY -- "The Space" (Full-Bleed Image Break)

**Purpose:** Visual breather. Show the scale of the facility. Pure photography moment.

**Layout:**
- Full viewport, edge-to-edge image
- Thin text overlay at bottom-left
- Dark gradient overlay on bottom 30%

**Typography:**
```
Location Label:  VILLAGE ANTA, HARYANA, INDIA  (--label, gold, letter-spaced)
Caption:         State-of-the-art manufacturing facility  (--caption, cream)
```

**Animation:**
- Parallax: image moves at 0.5x scroll speed, creating depth
- Text fades in as section enters center of viewport

**Image:** Wide panoramic shot of a pharmaceutical manufacturing facility exterior or clean room interior -- expansive, modern, well-lit. This is the money shot.

---

### Section 8: WHY CHOOSE US -- "The Advantages" (Editorial Cards)

**Purpose:** Differentiators presented as editorial feature cards, not a boring grid.

**Layout:**
- Two rows of 3 cards each (6 total), full-width container
- Each card: large (takes 1/3 of container width), tall (400px+)
- Card style: image background with dark overlay, text at bottom
- On mobile: single column, each card full-width

**Cards:**
```
Card 1: QUALITY-DRIVEN
        Icon: Shield
        FSSAI, GMP, HACCP, Halal, WHO-GMP certified.
        Image: Close-up of quality inspection

Card 2: ADVANCED MACHINERY
        Icon: Factory
        ARBES SGX-806P & Elmach EPI 2000 lines.
        Image: Machinery close-up

Card 3: SOFTGEL SPECIALISTS
        Icon: Pill
        Dedicated nutraceutical softgel expertise.
        Image: Softgel capsules macro

Card 4: GLOBAL EXPORT
        Icon: Globe
        Export documentation & international packaging.
        Image: Shipping/logistics

Card 5: PRIVATE LABEL
        Icon: Package
        Custom branding & formulation support.
        Image: Branded packaging examples

Card 6: RELIABLE DELIVERY
        Icon: Truck
        Consistent schedules, committed timelines.
        Image: Warehouse/dispatch
```

**Typography per card:**
```
Title:  QUALITY-DRIVEN  (--heading-2, white, all caps)
Body:   Description  (--caption, cream)
Icon:   Top-left corner, 24px, gold
```

**Animation:**
- Cards stagger in as they enter viewport (fade-up, 0.15s apart)
- On hover: image zooms slightly (1.05), overlay lightens, subtle gold border appears
- Cards have a very subtle tilt on mouse move (optional -- same as current GlassCard)

---

### Section 9: CONTRACT MANUFACTURING -- "The Partnership" (Split Pinned)

**Purpose:** Primary conversion section for B2B buyers.

**Layout:**
- Full viewport
- Left half: large editorial image (factory floor, professional)
- Right half: `--bg-black` with content
- On mobile: image reduced to 40vh, content below

**Typography:**
```
Label:    CONTRACT MANUFACTURING  (--label, gold)

Headline: YOUR BRAND.
          OUR SCIENCE.
          (--display-section, white, all caps, Instrument Serif)

Body:     From custom formulation and private label
          packaging to bulk supply -- we partner with
          brands, importers, and distributors worldwide.
          (--body-large, cream)

Services List:
          * Custom Formulation
          * Private Label Packaging
          * Third-Party Manufacturing
          * Bulk Softgel Supply
          * Export Documentation
          (--body, cream, each with a small gold dash prefix)

CTA:      [ DISCUSS YOUR PROJECT ]  (gold filled, large)
```

**Animation:**
- Image has parallax drift
- Text elements stagger in on scroll entry
- Service list items animate in one by one (fade + slide from left, 0.1s stagger)
- CTA button pulses subtly with gold glow once all text is visible

---

### Section 10: EXPORT -- "The Global Reach"

**Purpose:** Speak to international buyers specifically.

**Layout:**
- Full viewport
- Background: `--bg-warm-dark`
- Centered layout: large headline, then a visual element (stylized map or globe illustration using CSS/SVG -- not an image), then capabilities list in 2 columns

**Typography:**
```
Label:    INTERNATIONAL MARKETS  (--label, gold)

Headline: FROM INDIA
          TO THE WORLD
          (--display-section, white, all caps)

Capabilities (2 columns):
  Left Column:
    * Export-oriented facility
    * International packaging standards
    * Multi-market regulatory awareness

  Right Column:
    * Documentation for customs
    * MOQ-based flexible pricing
    * Dedicated export support

  (--body, cream, gold checkmark prefix)

CTA:      [ ENQUIRE FOR EXPORT ]  (gold outline button)
```

**Animation:**
- Headline splits in from left and right (two lines)
- A thin gold horizontal line draws across the full width between headline and capabilities
- Capability items stagger in (left column first, then right)

---

### Section 11: TESTIMONIAL / SOCIAL PROOF -- "The Endorsement"

**Purpose:** Build trust through partner/client credibility.

**Layout:**
- Full viewport, centered
- Background: `--bg-black`
- Large pull quote in center
- Below: row of partner/certification logos in monochrome

**Typography:**
```
Quote:    "Admetus Lifesciences delivers consistent quality
           and reliable timelines -- exactly what international
           buyers need from a manufacturing partner."
           (--heading-1, cream, Instrument Serif, italic, centered)

Attribution:  -- PROCUREMENT DIRECTOR, NUTRACEUTICAL IMPORTER
              (--caption, gold, centered)

Logo Row:     FSSAI | GMP | HACCP | Halal | WHO-GMP
              (monochrome logos/text, evenly spaced, --text-muted)
```

**Animation:**
- Quote text reveals word-by-word tied to scroll (similar to manifesto but lighter)
- Attribution fades in after quote completes
- Logo row fades in last

**Note:** If real testimonials are not available, use a strong brand statement instead:
```
"WE BUILD THE CAPSULE.
 YOU BUILD THE BRAND."
```

---

### Section 12: GRAND CLOSING CTA -- "The Final Word"

**Purpose:** Last impression. Bold, unmissable call to action.

**Layout:**
- Full viewport, centered content
- Background: `--bg-black` with subtle radial gradient (gold center, very faint)
- Minimal content -- just the statement and CTA

**Typography:**
```
Headline: READY TO
          MANUFACTURE?
          (--display-hero, all caps, Instrument Serif, white)

Body:     Whether you need contract manufacturing, private label
          solutions, or export-ready softgel capsules.
          (--body-large, cream, centered, max-width 600px)

CTA:      [ REQUEST A QUOTE ]    [ EMAIL US DIRECTLY ]
          (Gold filled, large)    (White outline)

Contact:  admetuslifesciences@gmail.com
          (--caption, muted, monospace)
```

**Animation:**
- Headline scales up from 0.8 to 1.0 as section enters viewport
- Subtle gold particle/dot animation in background (CSS only -- no canvas)
- CTAs fade in with slight bounce
- On hover, gold CTA gets an expanding glow ring

---

## 3. Inner Page Strategy

All inner pages share a consistent structure:

### Common Pattern
```
1. HERO BANNER (60-70vh)
   - Full-bleed image with dark overlay
   - Page title in --display-section, all caps
   - Breadcrumb below title (--label, muted)

2. CONTENT SECTIONS
   - Alternating left-image/right-text and right-image/left-text
   - Each section separated by generous spacing (--space-32)
   - Key stats or callouts use gold accent treatment

3. CLOSING CTA
   - Always ends with a contextual CTA section
   - Same design language as homepage Section 12 but shorter (50vh)
```

### Page-Specific Notes

**About Page:**
- Hero: Facility exterior photo
- Sections: Company story, mission/vision (use manifesto-style pinned text), team/leadership, timeline of milestones
- Unique element: A timeline component with gold dots and connecting line

**Products Page (Index):**
- Hero: Macro shot of multiple colored softgels
- Grid of product cards (similar to horizontal scroll cards but in a 2-column grid)
- Filter by category (if needed later)
- Each card links to individual product page

**Product Detail Page:**
- Hero: Product-specific softgel image, large, centered
- Product name, tagline, composition, benefits in editorial layout
- Related products carousel at bottom

**Manufacturing Page:**
- Hero: Clean room panoramic
- Reuse the 7-step process but in a vertical scroll format (not pinned)
- Equipment specifications section with technical data
- Facility photos gallery

**Quality Page:**
- Hero: Quality inspection close-up
- Certification cards (one per cert, with details)
- Quality process flowchart
- Testing capabilities

**Contract Manufacturing Page:**
- Hero: Partnership-themed image
- Services breakdown with icons
- Process: How to partner with us (3-4 steps)
- FAQ accordion

**Export Page:**
- Hero: Global/shipping themed
- Capabilities list
- Markets served (if applicable)
- Documentation support details

**Contact Page:**
- Hero: Minimal, text-focused
- Two-column: Contact form left, company details right
- Map embed (optional)
- WhatsApp integration

---

## 4. Navigation Design

### Desktop Navigation

**Initial State (Hero visible):**
- Fully transparent background
- Logo (wordmark "ADMETUS" in Instrument Serif, white, letter-spaced) on left
- Nav links on right: About | Products | Manufacturing | Quality | Contract | Export | Contact
- Links in --caption size, white, uppercase, letter-spaced
- CTA button: "Get Quote" -- small, gold outline pill

**Scrolled State (after hero):**
- Background transitions to `--bg-black` with `backdrop-filter: blur(20px)` and `rgba(10,10,10,0.85)`
- Subtle bottom border (`--border-subtle`)
- Logo stays, links stay, same styling
- Transition: 0.3s ease

**Section Indicator (Homepage only):**
- Right edge of viewport: vertical dots indicating current section (like elevator indicators)
- Active dot is gold, others are muted
- Clicking a dot smooth-scrolls to that section
- Only visible on desktop

### Mobile Navigation

- Hamburger icon (3 lines, gold) on right
- Opens full-screen overlay (`--bg-black`, 100vh)
- Links listed vertically, large (--heading-2), centered
- Stagger animation on open (each link slides in from right, 0.08s apart)
- Close button (X) top-right, gold
- Contact CTA at bottom of overlay

---

## 5. Animation Strategy

### GSAP ScrollTrigger Patterns

**Pattern 1: Pinned Text Reveal (Sections 3, 6)**
```javascript
// Pin the section, reveal text line-by-line tied to scroll
ScrollTrigger.create({
  trigger: sectionRef,
  start: "top top",
  end: "+=300%",       // 3x viewport = scroll length while pinned
  pin: true,
  scrub: 1,            // smooth tie to scroll position
});
// Each line gets a fromTo animation on opacity and y position
```

**Pattern 2: Horizontal Scroll (Section 5)**
```javascript
// Pin section, translate cards container horizontally
gsap.to(cardsContainer, {
  x: () => -(cardsContainer.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef,
    start: "top top",
    end: () => `+=${cardsContainer.scrollWidth - window.innerWidth}`,
    pin: true,
    scrub: 1,
  }
});
```

**Pattern 3: Parallax Image (Sections 1, 4, 7, 9)**
```javascript
// Image moves slower than scroll
gsap.to(imageRef, {
  y: "-20%",
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});
```

**Pattern 4: Stagger Fade-In (Sections 2, 5, 8, 10)**
```javascript
// Elements fade in and slide up, staggered
gsap.from(elements, {
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: sectionRef,
    start: "top 80%",
    toggleActions: "play none none none",
  }
});
```

**Pattern 5: Split Text Animation (Headlines)**
```javascript
// Split headline into chars/words, animate each
// Use GSAP SplitText plugin or manual splitting
// Each char fades in from bottom with rotation
gsap.from(chars, {
  y: 80,
  opacity: 0,
  rotateX: -40,
  stagger: 0.03,
  duration: 0.6,
  ease: "back.out(1.7)",
});
```

**Pattern 6: Counter Animation (Section 4)**
```javascript
// Animate number from 0 to target
gsap.to(counterRef, {
  innerText: targetNumber,
  duration: 2,
  ease: "power2.out",
  snap: { innerText: 1 },
  scrollTrigger: {
    trigger: counterRef,
    start: "top 80%",
    toggleActions: "play none none none",
  }
});
```

**Pattern 7: Draw Line (Sections 4, 10)**
```javascript
// SVG line or CSS border draws itself
gsap.from(lineRef, {
  scaleX: 0,
  transformOrigin: "left center",
  duration: 1.2,
  ease: "power3.inOut",
  scrollTrigger: { trigger: lineRef, start: "top 85%" }
});
```

### Lenis Smooth Scroll

Already installed. Configure for:
```javascript
const lenis = new Lenis({
  duration: 1.2,        // smooth but not sluggish
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
});
```

### Framer Motion Usage

Reserve Framer Motion for:
- Page transitions (route changes)
- Interactive component animations (hover states, button clicks)
- AnimatePresence for modal/overlay enter/exit

Do NOT use Framer Motion for scroll-driven animations -- GSAP ScrollTrigger handles those.

---

## 6. Image Strategy

### Placeholder Image Search Terms

For development, use high-quality stock photos from Unsplash or Pexels. Below are exact search terms grouped by section.

**Hero (Section 1):**
- `"softgel capsule macro dark background"`
- `"golden capsules pharmaceutical dark"`
- `"supplement capsules dramatic lighting"`
- `"omega 3 capsules amber close up"`

**Facility/Manufacturing:**
- `"pharmaceutical factory clean room"`
- `"pharmaceutical manufacturing workers"`
- `"pharmaceutical production line"`
- `"pharmaceutical machinery close up"`
- `"clean room pharmaceutical blue light"`
- `"pharmaceutical quality control laboratory"`

**Process Steps:**
- Step 1 (Raw Material): `"pharmaceutical raw materials laboratory"`
- Step 2 (Formulation): `"scientist pharmaceutical lab formulation"`
- Step 3 (Encapsulation): `"capsule manufacturing machine"`
- Step 4 (Drying): `"pharmaceutical drying chamber industrial"`
- Step 5 (Inspection): `"quality control pharmaceutical inspection"`
- Step 6 (Packing): `"blister pack pharmaceutical machine"`
- Step 7 (Dispatch): `"pharmaceutical packaging shipping warehouse"`

**Product Cards:**
- `"single softgel capsule golden transparent"`
- `"vitamin capsule macro photography"`
- `"supplement capsule isolated dark"`
- `"coenzyme q10 capsule close up"`
- `"fish oil capsule amber"`
- `"vitamin d softgel capsule"`
- `"vitamin k capsule"`

**Editorial Cards (Section 8):**
- `"pharmaceutical quality assurance"`
- `"industrial machinery pharmaceutical"`
- `"softgel capsule close up"`
- `"global shipping pharmaceutical export"`
- `"private label pharmaceutical packaging"`
- `"warehouse pharmaceutical dispatch"`

**Contract Manufacturing (Section 9):**
- `"pharmaceutical business partnership"`
- `"pharmaceutical factory floor panoramic"`

**Export (Section 10):**
- `"cargo shipping containers port"`
- `"global pharmaceutical distribution"`

### Image Treatment Guidelines

- All images should be **warm-toned** -- increase warmth, reduce blue cast
- Apply a subtle **color grade**: shadows pushed toward warm brown, highlights toward cream
- On dark sections, images should have **reduced contrast** with lifted blacks (cinematic look)
- Use `object-fit: cover` with strategic `object-position` for all hero/background images
- Image overlays: linear-gradient from `rgba(10,10,10,0)` to `rgba(10,10,10,0.85)` for text readability
- Aim for **16:9** or **3:2** aspect ratios for editorial images, **1:1** or **4:5** for product shots

---

## 7. Responsive Breakpoints

```
MOBILE:       320px - 767px
TABLET:       768px - 1023px
DESKTOP:      1024px - 1439px
LARGE:        1440px+
```

### Key Responsive Behaviors

- **Horizontal scroll section (5):** Converts to vertical card stack on mobile
- **Split-screen sections (4, 6, 9):** Stack vertically on mobile (image top, text bottom)
- **Pinned sections (3, 6):** Reduce pin duration on mobile (shorter scroll), or convert to simple scroll-reveal
- **Display typography:** Uses `clamp()` to scale smoothly -- no jarring size jumps
- **Navigation:** Hamburger below 1024px
- **Editorial cards (8):** 3-column -> 2-column (tablet) -> 1-column (mobile)
- **Section padding:** Reduces from `--space-48` to `--space-16` on mobile

---

## 8. Performance Considerations

- **Images:** Use Next.js `<Image>` with priority on hero, lazy load everything else. Use WebP/AVIF formats.
- **GSAP:** Only register ScrollTrigger for sections currently near viewport. Use `gsap.matchMedia()` to disable heavy animations on mobile.
- **Fonts:** Preload Instrument Serif (display) and Inter (body). Use `font-display: swap`.
- **Lenis:** Disable on low-power devices / reduced-motion preference.
- **CSS:** Use `will-change: transform` sparingly and only on actively animating elements. Remove after animation completes.
- **Respect `prefers-reduced-motion`:** Fall back to simple fade-in for all scroll animations.

---

## 9. Theme Toggle

Given the dark editorial aesthetic, the site is **dark-mode primary**. A light mode is not appropriate for this design language -- the warm dark palette IS the brand. No theme toggle is needed.

If a light mode is later required, restrict it to inner pages only (never the homepage).

---

## 10. File Structure for Implementation

```
src/
  app/
    page.tsx                    # Homepage (12 sections)
    layout.tsx                  # Root layout with nav + footer + Lenis
    about/page.tsx
    products/page.tsx
    products/[slug]/page.tsx
    manufacturing/page.tsx
    quality/page.tsx
    contract-manufacturing/page.tsx
    export/page.tsx
    contact/page.tsx
    globals.css                 # Design tokens, base styles, keyframes

  components/
    layout/
      navbar.tsx                # Transparent -> solid nav with scroll detection
      footer.tsx                # Minimal editorial footer
      section-indicator.tsx     # Vertical dot nav (homepage right edge)
    
    homepage/
      hero.tsx                  # Section 1
      trust-bar.tsx             # Section 2
      manifesto.tsx             # Section 3 (pinned text reveal)
      stats.tsx                 # Section 4 (split + counters)
      product-showcase.tsx      # Section 5 (horizontal scroll)
      manufacturing-process.tsx # Section 6 (pinned step reveal)
      facility.tsx              # Section 7 (full-bleed image)
      advantages.tsx            # Section 8 (editorial cards)
      contract-cta.tsx          # Section 9 (split pinned)
      export-section.tsx        # Section 10
      testimonial.tsx           # Section 11
      closing-cta.tsx           # Section 12
    
    shared/
      animated-counter.tsx      # Reusable counter with GSAP
      split-text.tsx            # Text splitting utility for char animations
      parallax-image.tsx        # Image with scroll-based parallax
      editorial-card.tsx        # Image + overlay + text card
      scroll-reveal.tsx         # Generic fade-in-up on scroll
    
    ui/                         # shadcn/ui primitives (existing)

  hooks/
    use-gsap.ts                 # GSAP + ScrollTrigger setup hook
    use-lenis.ts                # Lenis integration hook
    use-section-observer.ts     # IntersectionObserver for active section tracking

  lib/
    utils.ts                    # cn() utility (existing)
    fonts.ts                    # Next.js font configuration (Instrument Serif + Inter)
```

---

*Blueprint authored by ArchitectUX. Ready for frontend implementation.*
