# Admetus Lifesciences - Complete Design System & UX Architecture

> Cinematic, scroll-driven pharma website inspired by oryzo.ai aesthetic.
> This document is the single source of truth for all frontend implementation.

---

## 1. SITE MAP

```
admetuslifesciences.com/
|
+-- / (Homepage)
|   Purpose: Cinematic scroll-driven brand experience. 12 full-screen sections
|   telling the Admetus story from authority statement to CTA.
|
+-- /about
|   Purpose: Company story, founding vision, leadership, mission/values.
|   Tone: Heritage meets modern science.
|
+-- /products
|   Purpose: Product index grid showing all 7 softgel capsules.
|   Layout: Filterable grid with category tabs (Multivitamin, Antioxidant, Bone Health, Iron).
|   |
|   +-- /products/adlife-12g
|   +-- /products/adlife-q10
|   +-- /products/adlife-ct
|   +-- /products/adlife-iron
|   +-- /products/adlife-lyco
|   +-- /products/adlife-gold
|   +-- /products/adlife-k2-7
|   Purpose (each): Full product detail — hero, composition, benefits, dosage, specs, related products.
|
+-- /manufacturing
|   Purpose: Facility showcase, equipment specs (ARBES SGX-806P, Elmach EPI 2000),
|   production capacity, cleanroom standards, process walkthrough.
|
+-- /quality
|   Purpose: Certifications deep-dive (FSSAI, GMP, HACCP, Halal, WHO-GMP),
|   quality control process, testing protocols, compliance standards.
|
+-- /contract-manufacturing
|   Purpose: B2B partnership page — private label services, MOQs, custom formulation,
|   turnkey solutions, partnership process steps.
|
+-- /export
|   Purpose: International capabilities, export markets, regulatory compliance
|   for global markets, logistics, documentation support.
|
+-- /contact
    Purpose: Enquiry form (glassmorphism), WhatsApp link, Google Maps embed,
    company address, email. Quote request form variant.
```

---

## 2. VISUAL DESIGN SYSTEM

### 2.1 Color Palette

All colors are already defined in `globals.css`. Reference the CSS custom properties below.

#### Dark Theme (Default)

| Token | Value | Usage |
|---|---|---|
| `--bg-black` | `#0A0A0A` | Primary page background, hero sections |
| `--bg-charcoal` | `#141414` | Card backgrounds, alternate sections |
| `--bg-warm-dark` | `#1A1710` | Warm-toned sections (manifesto, partnership) |
| `--bg-cream` | `#F5F0E8` | Contrast sections on dark pages (rarely used in dark mode) |
| `--text-white` | `#FAFAFA` | Primary text on dark backgrounds |
| `--text-cream` | `#E8E0D0` | Secondary text, body copy on dark backgrounds |
| `--text-muted` | `#8A8274` | Tertiary text, captions, labels |
| `--text-dark` | `#1A1710` | Text on light/cream sections |
| `--gold` | `#C8A951` | Primary accent — CTAs, highlights, active states |
| `--gold-light` | `#E2CC7A` | Gold gradient endpoint, hover states |
| `--gold-muted` | `#8A7B3E` | Subdued gold for borders, subtle accents |
| `--teal` | `#0097A7` | Secondary accent — links, science/tech contexts |
| `--teal-glow` | `#00E5FF` | Teal glow effects, gradient endpoint |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Card borders, dividers |
| `--border-gold` | `rgba(200,169,81,0.2)` | Gold-tinted borders for premium elements |
| `--overlay-black` | `rgba(10,10,10,0.7)` | Image overlays, hero darkening |

#### Light Theme (class `.light`)

Applied via `.light` class on `<html>`. All tokens auto-remap. See `globals.css` lines 159-205.

#### Section Background Assignment

| Section | Background |
|---|---|
| Hero | `--bg-black` with image + overlay |
| Certifications | `--bg-charcoal` |
| Manifesto | `--bg-warm-dark` |
| Scale/Metrics | `--bg-black` with facility image |
| Products Gallery | `--bg-charcoal` |
| Process Walkthrough | `--bg-warm-dark` |
| Visual Break | Full-bleed image, no bg token |
| Differentiators | `--bg-charcoal` |
| Partnership | `--bg-warm-dark` |
| Global Reach | `--bg-black` |
| Trust Quote | `--bg-charcoal` |
| Closing CTA | `--bg-black` with gold particle accents |

### 2.2 Typography

#### Font Stack (already configured in globals.css)

| Role | Family | Weight | CSS Variable |
|---|---|---|---|
| Display/Headings | Plus Jakarta Sans | 800 (display), 700 (headings) | `--font-display`, `--font-heading` |
| Body | Inter | 400, 500, 600 | `--font-sans` |
| Mono/Specs | DM Mono | 400 | `--font-mono` |

#### Type Scale (already in globals.css as custom properties)

| Class | CSS Var | Size | Weight | Line-Height | Letter-Spacing | Transform |
|---|---|---|---|---|---|---|
| `.display-hero` | `--display-hero` | `clamp(5rem, 10vw, 9rem)` | 800 | 0.95 | -0.03em | uppercase |
| `.display-section` | `--display-section` | `clamp(3.5rem, 7vw, 7rem)` | 800 | 1.0 | -0.03em | uppercase |
| `.heading-1` | `--heading-1` | `clamp(2.5rem, 4vw, 4rem)` | 700 | 1.1 | -0.02em | none |
| `.heading-2` | `--heading-2` | `clamp(1.75rem, 3vw, 2.5rem)` | 700 | 1.15 | -0.01em | none |
| `.body-large` | `--body-large` | `1.25rem` | 400 | 1.6 | 0 | none |
| `.body` | `--body` | `1rem` | 400 | 1.6 | 0 | none |
| `.caption` | `--caption` | `0.875rem` | 400 | 1.5 | 0 | none |
| `.label-text` | `--label` | `0.75rem` | 500 | 1.4 | 0.15em | uppercase |

### 2.3 Spacing System (8px Grid)

Already defined in globals.css. Named tokens:

| Token | Value | Common Use |
|---|---|---|
| `--space-1` | `0.25rem` (4px) | Micro gaps |
| `--space-2` | `0.5rem` (8px) | Icon gaps, tight padding |
| `--space-3` | `0.75rem` (12px) | Label-to-heading gap |
| `--space-4` | `1rem` (16px) | Standard component padding |
| `--space-6` | `1.5rem` (24px) | Card padding, section subgaps |
| `--space-8` | `2rem` (32px) | Between content blocks |
| `--space-12` | `3rem` (48px) | Section inner padding |
| `--space-16` | `4rem` (64px) | Between major sections on mobile |
| `--space-24` | `6rem` (96px) | Section vertical padding desktop |
| `--space-32` | `8rem` (128px) | Hero vertical padding |
| `--space-48` | `12rem` (192px) | Dramatic spacing between sections |

#### Layout Tokens (already in globals.css)

| Token | Value |
|---|---|
| `--container-max` | `1400px` |
| `--content-narrow` | `800px` |
| `--gutter` | `clamp(1.5rem, 4vw, 4rem)` |

### 2.4 Motion Tokens

Define these in globals.css or as JS constants for GSAP:

```css
:root {
  --duration-fast: 200ms;
  --duration-normal: 400ms;
  --duration-slow: 800ms;
  --duration-cinematic: 1200ms;
  --ease-reveal: cubic-bezier(0.33, 1, 0.68, 1); /* power3.out equivalent */
}
```

```typescript
// src/lib/motion.ts — GSAP motion tokens
export const MOTION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    cinematic: 1.2,
  },
  ease: {
    reveal: "power3.out",
    smooth: "power2.inOut",
    scrub: "none",
  },
  stagger: {
    fast: 0.08,
    normal: 0.12,
    slow: 0.15,
  },
  scroll: {
    start: "top 85%",     // default trigger start
    pinStart: "top top",   // pinned section start
  },
} as const;
```

### 2.5 Border & Radius

| Context | Radius |
|---|---|
| Editorial buttons (primary CTA) | `0` — sharp rectangular |
| Cards | `--radius` (0.75rem / 12px) |
| Input fields | `--radius-sm` |
| Pill badges (certifications) | `9999px` (full round) |
| Glass panels | `--radius-lg` |

### 2.6 Utility Classes (already in globals.css)

| Class | Effect |
|---|---|
| `.glass` | Dark glassmorphism — `rgba(20,20,20,0.6)` + blur(20px) |
| `.glass-light` | Subtle glass — `rgba(255,255,255,0.05)` + blur(16px) |
| `.gradient-text` | Gold gradient on text |
| `.gradient-text-teal` | Teal gradient on text |
| `.glow-teal` | Teal box-shadow glow |
| `.glow-gold` | Gold box-shadow glow |

---

## 3. COMPONENT INVENTORY

### 3.1 HeroSection

**Purpose:** Full-viewport opening statement with cinematic image background.

**Props:**
```typescript
interface HeroSectionProps {
  label: string;           // micro-label above heading, e.g. "ADMETUS LIFESCIENCES"
  heading: string;         // main display text, display-hero class
  subheading: string;      // 1-2 lines body-large, text-cream
  ctaText: string;         // button label
  ctaHref: string;         // button link
  backgroundImage: string; // path to hero image
  overlayOpacity?: number; // default 0.7
}
```

**Layout:**
- Full viewport height (`100vh`), `position: relative`
- Background image with `object-fit: cover` + Ken Burns animation (6% scale over 20s)
- Dark overlay (`--overlay-black`)
- Content centered vertically, left-aligned at `--gutter` from left edge
- Max content width: `--content-narrow`
- Scroll indicator (animated chevron) at bottom center

**Typography:**
- Label: `.label-text`, color `--gold`
- Heading: `.display-hero`, color `--text-white`
- Subheading: `body-large`, color `--text-cream`
- CTA: Uppercase, font-weight 700, letter-spacing 0.1em, padding `--space-4` vertical / `--space-8` horizontal, border `2px solid var(--gold)`, color `--gold`, background transparent. Hover: bg `--gold`, color `--bg-black`.

**Animation (GSAP):**
- On load (not scroll-triggered):
  1. Label fades up from 30px below, opacity 0 to 1, duration 0.8s, delay 0.3s
  2. Heading fades up, stagger per line/word 0.12s, delay 0.5s
  3. Subheading fades up, delay 0.9s
  4. CTA fades up, delay 1.1s
  5. Scroll indicator fades in at delay 2s

---

### 3.2 StickyNav

**Purpose:** Fixed navigation that transitions from transparent to solid on scroll.

**Props:**
```typescript
interface StickyNavProps {
  logo: React.ReactNode;
  links: { label: string; href: string }[];
  ctaText: string;
  ctaHref: string;
}
```

**Layout:**
- Fixed top, full width, z-index 50
- Horizontal flex: logo left, nav links center, CTA + theme toggle right
- Height: `72px`
- Padding: `0 var(--gutter)`

**States:**
- **Transparent** (scroll < 100px): `background: transparent`, no border
- **Solid** (scroll >= 100px): `background: rgba(10,10,10,0.9)`, `backdrop-filter: blur(20px)`, `border-bottom: 1px solid var(--border-subtle)`
- **Hidden** (scrolling down rapidly): translateY(-100%) — reappears on scroll up

**Mobile (< 768px):**
- Hamburger icon replaces nav links
- Full-screen overlay menu: `.glass` background, nav links stacked vertically, stagger animate in

**Animation:**
- Background transition: `transition: all 0.4s ease`
- Hide/show: `transition: transform 0.3s ease`

---

### 3.3 SplitSection

**Purpose:** Two-column layout with image on one side, content on the other.

**Props:**
```typescript
interface SplitSectionProps {
  label: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  ctaText?: string;
  ctaHref?: string;
  background: string;  // CSS var reference
  bullets?: string[];
}
```

**Layout:**
- CSS Grid: `grid-template-columns: 1fr 1fr`, gap `--space-8`
- Image side: full height of section, `object-fit: cover`, slight rounded corners (`--radius`)
- Content side: vertically centered, max-width `540px`, padding `--space-12`
- Mobile: stack to single column, image on top

**Typography:**
- Label: `.label-text`, color `--gold`
- Heading: `.display-section`, color `--text-white`
- Body: `body-large`, color `--text-cream`
- Bullets: `body`, color `--text-cream`, gold dot markers

**Animation:**
- Image: parallax translateY on scroll (GSAP ScrollTrigger, scrub: true, -50px to 50px)
- Content: fade + slide from opposite side (e.g. image left = content slides from right), trigger at `top 85%`
- Stagger: label, heading, body, bullets, CTA each 0.12s apart

---

### 3.4 ManifestoReveal

**Purpose:** Pinned section where text reveals word-by-word or line-by-line as user scrolls.

**Props:**
```typescript
interface ManifestoRevealProps {
  label: string;
  lines: string[];  // each line reveals sequentially
  background: string;
}
```

**Layout:**
- Full viewport height, centered content
- Background: `--bg-warm-dark`
- Text centered, max-width `900px`
- Each line is a `<span>` element that starts at `opacity: 0.15` and reveals to `opacity: 1`

**Typography:**
- Label: `.label-text`, color `--gold`, centered above text
- Lines: `.heading-1`, color `--text-white`, centered, line-height 1.3

**Animation (GSAP ScrollTrigger):**
- Pin the section for `lines.length * 100vh` scroll distance
- `scrub: true` — text opacity maps directly to scroll position
- Each line transitions from `opacity: 0.15` to `1` sequentially
- Optional: slight translateY(20px) to translateY(0) per line
- Gold decorative line draws across bottom after all lines reveal

---

### 3.5 HorizontalScrollGallery

**Purpose:** Pinned section with cards scrolling horizontally as user scrolls vertically.

**Props:**
```typescript
interface HorizontalScrollGalleryProps {
  label: string;
  heading: string;
  cards: {
    image: string;
    title: string;
    subtitle: string;
    tag: string;
    href: string;
  }[];
}
```

**Layout:**
- Outer: `100vh` height, pinned
- Inner track: flex row, total width = cards.length * card-width + gaps
- Card: `400px` wide, `500px` tall (desktop) / `300px` x `400px` (mobile)
- Section heading floats above the gallery, left-aligned

**Typography:**
- Section label: `.label-text`, color `--gold`
- Section heading: `.display-section`, color `--text-white`
- Card tag: `.label-text`, color `--teal`
- Card title: `.heading-2`, color `--text-white`
- Card subtitle: `.body`, color `--text-cream`

**Animation:**
- GSAP ScrollTrigger: pin section, scrub horizontal x-translation
- `x: () => -(track.scrollWidth - window.innerWidth)` over the pinned scroll distance
- Cards have subtle scale(0.95) to scale(1) as they enter viewport center
- Fallback mobile: standard vertical scroll with snap

---

### 3.6 PinnedStepWalkthrough

**Purpose:** Manufacturing process steps that crossfade as user scrolls through pinned section.

**Props:**
```typescript
interface PinnedStepWalkthroughProps {
  label: string;
  heading: string;
  steps: {
    number: string;       // "01", "02", etc.
    title: string;
    description: string;
    image: string;
  }[];
}
```

**Layout:**
- Full viewport, pinned
- Left side (40%): step number, title, description — crossfade between steps
- Right side (60%): step image — crossfade with slight scale transition
- Progress indicator: vertical line with dot markers, gold fill progresses as steps advance
- Mobile: stack vertically, step text above image

**Typography:**
- Step number: `--display-section` size, color `--gold`, opacity 0.3
- Step title: `.heading-1`, color `--text-white`
- Step description: `body-large`, color `--text-cream`
- Progress labels: `.label-text`, color `--text-muted`

**Animation:**
- Pin for `steps.length * 100vh`
- `scrub: true`
- Active step: opacity 1, translateY(0)
- Inactive step: opacity 0, translateY(20px) or translateY(-20px)
- Image: crossfade with `scale(1.05)` to `scale(1)` on entry
- Progress bar: gold fill height animates from 0 to 100%

---

### 3.7 MetricCounter

**Purpose:** Animated number that counts up when scrolled into view.

**Props:**
```typescript
interface MetricCounterProps {
  value: number;
  suffix?: string;    // "+", "%", "M", etc.
  prefix?: string;    // "$", etc.
  label: string;
  duration?: number;  // count animation duration, default 2s
}
```

**Layout:**
- Vertical stack: number on top (large), label below (small)
- Inline within a flex row of 3-4 metrics

**Typography:**
- Number: `.display-section`, color `--text-white`, `font-variant-numeric: tabular-nums`
- Suffix: same size, color `--gold`
- Label: `.label-text`, color `--text-muted`

**Animation:**
- GSAP ScrollTrigger at `top 85%`
- Count from 0 to value over `duration` using GSAP's snap rounding
- Slight fade-up on entry

---

### 3.8 CertificationStrip

**Purpose:** Horizontal row of certification badges.

**Props:**
```typescript
interface CertificationStripProps {
  certifications: {
    name: string;       // "FSSAI", "GMP", "HACCP", "Halal", "WHO-GMP"
    icon: React.ReactNode;
    description: string;
  }[];
}
```

**Layout:**
- Horizontal flex, centered, gap `--space-8`
- Each badge: vertical stack — icon (48px), name (label-text), description (caption)
- Optional: glass-light background pill per badge
- Mobile: 2x3 grid or horizontal scroll

**Typography:**
- Name: `.label-text`, color `--gold`
- Description: `.caption`, color `--text-muted`

**Animation:**
- Stagger fade-up, 0.1s between each badge
- Gold border draws around each badge on reveal

---

### 3.9 EditorialCard

**Purpose:** Image background card with overlay and text.

**Props:**
```typescript
interface EditorialCardProps {
  image: string;
  title: string;
  body: string;
  icon?: React.ReactNode;
  href?: string;
}
```

**Layout:**
- Aspect ratio `3/4` or `4/3` depending on grid position
- Image fills card with gradient overlay (bottom-heavy, `transparent` to `rgba(10,10,10,0.85)`)
- Content at bottom of card, padding `--space-6`
- Border: `1px solid var(--border-subtle)`
- Border-radius: `--radius`

**Typography:**
- Title: `.heading-2`, color `--text-white`
- Body: `.body`, color `--text-cream`
- Icon: 32px, color `--gold`

**Animation:**
- Hover: image scales to 1.05, overlay darkens, content shifts up 8px
- Scroll reveal: fade + slide up

---

### 3.10 ProductCard

**Purpose:** Product showcase card for the product index page and homepage gallery.

**Props:**
```typescript
interface ProductCardProps {
  product: Product;  // from src/data/products.ts
  variant: "gallery" | "grid";
}
```

**Layout (gallery variant):**
- `400px` x `500px`, vertical layout
- Top 60%: product image on subtle gradient bg using product's `color` at low opacity
- Bottom 40%: category tag, name, tagline, CTA arrow
- Border: `1px solid var(--border-subtle)`

**Layout (grid variant):**
- Square aspect ratio, smaller
- Image centered, name and category below

**Typography:**
- Category: `.label-text`, color `--teal`
- Name: `.heading-2`, color `--text-white`
- Tagline: `.body`, color `--text-cream`
- CTA: `.label-text`, color `--gold`, with arrow icon

**Animation:**
- Hover: translateY(-8px), border color transitions to product's `color`
- Image: subtle float animation on hover

---

### 3.11 ProcessTimeline

**Purpose:** Vertical timeline for manufacturing steps (used on /manufacturing page).

**Props:**
```typescript
interface ProcessTimelineProps {
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
}
```

**Layout:**
- Vertical line (1px, `--border-gold`) centered
- Steps alternate left and right of the line
- Each step: dot on line (8px gold circle), card offset to side
- Mobile: all steps on one side

**Animation:**
- Line draws from top to bottom on scroll (scrub)
- Steps fade in as the line reaches their dot

---

### 3.12 CTABanner

**Purpose:** Full-width closing call-to-action section.

**Props:**
```typescript
interface CTABannerProps {
  label: string;
  heading: string;
  body: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}
```

**Layout:**
- Full viewport height, content centered both axes
- Background: `--bg-black` with subtle floating gold particle dots (CSS animation)
- Max content width: `800px`, text-align center

**Typography:**
- Label: `.label-text`, color `--gold`
- Heading: `.display-section`, color `--text-white`
- Body: `body-large`, color `--text-cream`
- Primary CTA: gold border button (same as hero CTA style)
- Secondary CTA: text link, color `--text-muted`, underline on hover

**Animation:**
- Content staggers in: label, heading, body, CTAs
- Gold particle dots float continuously (CSS `@keyframes float-dot`)
- Gold line draws horizontally above heading

---

### 3.13 EnquiryForm

**Purpose:** Contact/quote request form with glassmorphism styling.

**Props:**
```typescript
interface EnquiryFormProps {
  variant: "contact" | "quote";
  heading: string;
}
```

**Fields (contact):** Name, Email, Phone, Company, Message
**Fields (quote):** Name, Email, Phone, Company, Product Interest (select from 7 products), Quantity, Message

**Layout:**
- `.glass` background panel
- Max-width `600px`
- 2-column grid for short fields, full-width for textarea
- Submit button: gold bg, dark text, full width

**Typography:**
- Labels: `.label-text`, color `--text-muted`
- Inputs: `body`, color `--text-white`, background `rgba(255,255,255,0.05)`, border `--border-subtle`
- Focus: border color `--gold`

---

### 3.14 PremiumFooter

**Purpose:** Editorial minimal footer.

**Layout:**
- Background: `--bg-charcoal`
- Top: 4-column grid — Company info, Products, Services, Contact
- Bottom: horizontal divider (`--border-subtle`), copyright left, social icons right
- Padding: `--space-24` vertical

**Typography:**
- Column headings: `.label-text`, color `--gold`
- Links: `.body`, color `--text-cream`, hover color `--text-white`
- Copyright: `.caption`, color `--text-muted`

---

### 3.15 ParallaxImage

**Purpose:** Full-bleed image with scroll-driven vertical movement.

**Props:**
```typescript
interface ParallaxImageProps {
  src: string;
  alt: string;
  height?: string;  // default "70vh"
  speed?: number;   // parallax multiplier, default 0.3
}
```

**Layout:**
- `overflow: hidden` container at specified height
- Image inside is taller than container (120-130% height), moves with scroll

**Animation:**
- GSAP ScrollTrigger, scrub: true
- Image translateY from `-speed * 100px` to `speed * 100px` over scroll distance

---

### 3.16 ScrollReveal

**Purpose:** Generic wrapper that animates children on scroll entry.

**Props:**
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";  // default "up"
  delay?: number;
  duration?: number;
  distance?: number;  // pixels, default 40
}
```

**Animation:**
- GSAP ScrollTrigger at `top 85%`
- Fade from 0 to 1 + translate from `distance` to 0 in specified direction
- Duration: `MOTION.duration.slow` default
- Ease: `power3.out`

---

### 3.17 WhatsAppFloat

**Purpose:** Floating WhatsApp contact button.

**Layout:**
- Fixed bottom-right, `z-index: 40`
- 56px circle, green (#25D366) background
- WhatsApp icon (white, 28px)
- Positioned `--space-6` from bottom and right edges

**Animation:**
- Pulse animation on idle (subtle scale)
- Appears after 3s delay on page load

---

### 3.18 ThemeToggle

**Purpose:** Light/dark/system theme switcher.

**Layout:**
- Inline in StickyNav, right side before CTA
- Three-option segmented control: sun icon (light), moon icon (dark), monitor icon (system)
- Active indicator: gold pill background slides to active option
- Size: 32px tall, compact

**Behavior:**
- Toggles `.light` class on `<html>`
- Persists to `localStorage` key `"theme"`
- Respects `prefers-color-scheme` when set to "system"

---

## 4. HOMEPAGE WIREFRAME — Section by Section

### Section 1: HERO

**Purpose:** Bold authority statement establishing Admetus as a premium manufacturer.

**Layout:**
```
+--------------------------------------------------+
| [StickyNav - transparent]                        |
|                                                  |
|                                                  |
|  [label]  ADMETUS LIFESCIENCES                   |
|                                                  |
|  [display-hero]                                  |
|  PRECISION                                       |
|  ENCAPSULATED                                    |
|                                                  |
|  [body-large]                                    |
|  India's advanced softgel manufacturing          |
|  facility. Science-driven. Globally certified.   |
|                                                  |
|  [ EXPLORE OUR FACILITY ]  (gold border btn)     |
|                                                  |
|                                                  |
|            [scroll indicator \/]                  |
+--------------------------------------------------+
```

**Background:** Full-bleed pharmaceutical facility image (softgel capsules in production) with `--overlay-black` at 0.65 opacity. Ken Burns slow zoom.

**Typography:**
- Label: `.label-text`, `--gold`
- Heading: `.display-hero`, `--text-white` — "PRECISION" on line 1, "ENCAPSULATED" on line 2
- Subheading: `body-large`, `--text-cream`
- CTA: gold border button

**Animation:**
- Stagger reveal: label (0.3s), heading word-by-word (0.5s + 0.12s stagger), subheading (0.9s), CTA (1.1s)
- Background: Ken Burns `@keyframes ken-burns` from globals.css

**Unsplash search terms:** `pharmaceutical manufacturing`, `softgel capsule production line`, `pharmaceutical cleanroom`

---

### Section 2: CREDIBILITY STRIP

**Purpose:** Immediate trust signal — certification badges in a horizontal row.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-charcoal                                |
|                                                  |
|   [label]  GLOBALLY CERTIFIED                    |
|                                                  |
|   [FSSAI]  [GMP]  [HACCP]  [Halal]  [WHO-GMP]  |
|                                                  |
|   [caption] 5 international certifications       |
|   ensuring pharmaceutical-grade quality          |
+--------------------------------------------------+
```

**Background:** `--bg-charcoal` — shorter section, ~50vh

**Typography:**
- Label: `.label-text`, `--gold`, centered
- Badge names: `.label-text`, `--text-white`
- Badge descriptions: `.caption`, `--text-muted`
- Bottom line: `.body`, `--text-cream`, centered

**Animation:**
- CertificationStrip component: stagger fade-up 0.1s per badge
- Gold underline draws beneath label

**Unsplash search terms:** N/A — use certification badge graphics/icons

---

### Section 3: MANIFESTO REVEAL

**Purpose:** Pinned text reveal building brand philosophy.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-warm-dark                               |
|                                                  |
|        [label]  OUR PHILOSOPHY                   |
|                                                  |
|        We don't just manufacture                 |  <- opacity 0.15 -> 1
|        softgel capsules.                         |  <- reveals on scroll
|                                                  |
|        We engineer precision                     |
|        at molecular scale.                       |
|                                                  |
|        Every capsule carries                     |
|        a commitment to human health.             |
|                                                  |
|        ─────── (gold line draws) ───────         |
+--------------------------------------------------+
```

**Background:** `--bg-warm-dark`, pinned for ~400vh scroll distance (4 text blocks)

**Typography:**
- Label: `.label-text`, `--gold`, centered
- Lines: `.heading-1`, `--text-white`, centered
- Each sentence is a reveal unit

**Animation (GSAP ScrollTrigger):**
- `pin: true`, `scrub: true`
- 4 text groups: each starts at `opacity: 0.15`, transitions to `opacity: 1`
- Sequenced: line 1 fully revealed before line 2 begins
- Gold horizontal line draws (`scaleX: 0` to `scaleX: 1`) after final line

**Unsplash search terms:** N/A — text-only section

---

### Section 4: SCALE & METRICS

**Purpose:** Facility scale with animated statistics.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-black + facility image (parallax)       |
|                                                  |
|  [label]  OUR FACILITY                           |
|                                                  |
|  [display-section]                               |
|  BUILT FOR                                       |
|  SCALE                                           |
|                                                  |
|  +--------+ +--------+ +--------+ +--------+    |
|  | 50M+   | | 7      | | 5      | | 100%   |    |
|  | Capsules| | Product | | Certs  | | Quality |    |
|  | /Year  | | Lines  | |        | | Control|    |
|  +--------+ +--------+ +--------+ +--------+    |
|                                                  |
|  [body-large]                                    |
|  State-of-the-art ARBES SGX-806P encapsulation   |
|  line. Elmach EPI 2000 blister packaging.        |
|  WHO-GMP certified facility in Haryana, India.   |
+--------------------------------------------------+
```

**Background:** `--bg-black` with a facility/factory image at low opacity (0.15) with parallax movement

**Typography:**
- Label: `.label-text`, `--gold`
- Heading: `.display-section`, `--text-white`
- Metrics: MetricCounter components — numbers in `.display-section` size, labels in `.label-text`
- Body: `body-large`, `--text-cream`

**Metrics Data:**
| Value | Suffix | Label |
|---|---|---|
| 50 | M+ | Capsules Per Year |
| 7 | | Product Lines |
| 5 | | Certifications |
| 100 | % | Quality Control |

**Animation:**
- Heading: fade + slide up
- Metrics: count-up animation triggered at `top 85%`, stagger 0.15s
- Background image: parallax (ParallaxImage, speed 0.2)

**Unsplash search terms:** `pharmaceutical factory aerial`, `modern manufacturing plant interior`, `pharmaceutical equipment`

---

### Section 5: PRODUCTS — Horizontal Scroll Gallery

**Purpose:** Showcase all 7 products in a premium horizontal-scrolling gallery.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-charcoal                                |
|                                                  |
|  [label]  OUR PRODUCTS                           |
|  [display-section]  FORMULATED                   |
|                     FOR LIFE                     |
|                                                  |
| [=== horizontal scrolling card track ===]        |
| | ADLIFE  | ADLIFE  | ADLIFE | ADLIFE  |  ...   |
| | 12G     | Q10     | CT     | IRON    |        |
| | Multi-  | CoQ10   | Bone   | Iron    |        |
| | vitamin | Antiox  | Supp.  | Supp.   |        |
| |_________|_________|________|_________|         |
|                                                  |
|  [ VIEW ALL PRODUCTS -> ]                        |
+--------------------------------------------------+
```

**Background:** `--bg-charcoal`, pinned for horizontal scroll

**Typography:**
- Label: `.label-text`, `--gold`
- Heading: `.display-section`, `--text-white`
- Cards: ProductCard component (gallery variant)
- View all link: `.label-text`, `--gold`, with arrow

**Animation:**
- HorizontalScrollGallery: pin + scrub horizontal translation
- Each card scales from 0.95 to 1.0 when entering center viewport
- Section heading remains fixed while cards scroll beneath

**Card Data:** Map from `products` array in `src/data/products.ts`

**Unsplash search terms:** `softgel capsules colorful`, `supplement capsules gold`, `pharmaceutical softgel` (for product placeholder images)

---

### Section 6: PROCESS — Pinned Step Walkthrough

**Purpose:** 7-step manufacturing process shown as crossfading pinned walkthrough.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-warm-dark                               |
|                                                  |
| LEFT 40%              | RIGHT 60%                |
| [label] MANUFACTURING | [step image - crossfade] |
| [display-section]     |                          |
| THE PROCESS           |                          |
|                       |                          |
| [progress line]       |                          |
| o Step 01             |                          |
| | MATERIAL SOURCING   |                          |
| o Step 02             | [image for active step]  |
| | QUALITY TESTING     |                          |
| o Step 03             |                          |
| ...                   |                          |
+--------------------------------------------------+
```

**Background:** `--bg-warm-dark`, pinned for 7 * 100vh

**Steps Data:**
| # | Title | Description |
|---|---|---|
| 01 | Raw Material Sourcing | Pharmaceutical-grade ingredients sourced from certified global suppliers. |
| 02 | Quality Testing | Every batch undergoes rigorous incoming material analysis. |
| 03 | Gelatin Preparation | Precision gelatin formulation for optimal capsule integrity. |
| 04 | Encapsulation | ARBES SGX-806P rotary die process at controlled temperature. |
| 05 | Drying & Tumbling | Controlled-environment drying for consistent moisture content. |
| 06 | Inspection & Sorting | Visual and automated defect detection, 100% inspection. |
| 07 | Blister Packaging | Elmach EPI 2000 blister sealing with tamper-evident packaging. |

**Animation:**
- PinnedStepWalkthrough component
- Pin + scrub, each step triggers on scroll
- Active step text and image crossfade
- Progress line fills gold from top to bottom

**Unsplash search terms per step:**
1. `raw pharmaceutical ingredients`, `chemical compounds laboratory`
2. `laboratory quality testing`, `pharmaceutical lab analysis`
3. `gelatin production`, `pharmaceutical mixing`
4. `softgel encapsulation machine`, `rotary die capsule manufacturing`
5. `pharmaceutical drying chamber`, `capsule tumbler machine`
6. `pharmaceutical inspection quality control`, `capsule sorting machine`
7. `blister packaging pharmaceutical`, `medicine packaging line`

---

### Section 7: VISUAL BREAK — Full-Bleed Facility Photo

**Purpose:** Breathing room with immersive facility imagery.

**Layout:**
```
+--------------------------------------------------+
|                                                  |
|   [Full-bleed parallax image, 70vh height]       |
|   Facility exterior or interior wide shot        |
|                                                  |
|   Optional: centered gold caption overlay         |
|   "VILLAGE ANTA, HARYANA — EST. 2024"            |
|                                                  |
+--------------------------------------------------+
```

**Background:** Full-bleed image, no solid background color

**Typography (overlay, optional):**
- Caption: `.label-text`, `--text-white`, centered, text-shadow for legibility

**Animation:**
- ParallaxImage component, speed 0.3
- Caption fades in when section reaches viewport center

**Unsplash search terms:** `modern pharmaceutical factory exterior`, `industrial building architectural`, `manufacturing facility wide shot`

---

### Section 8: DIFFERENTIATORS — Editorial Cards Grid

**Purpose:** Highlight key competitive advantages in an editorial card layout.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-charcoal                                |
|                                                  |
|  [label]  WHY ADMETUS                            |
|  [display-section]  THE ADMETUS                  |
|                     DIFFERENCE                   |
|                                                  |
|  +----------------+  +----------------+          |
|  | [Editorial     |  | [Editorial     |          |
|  |  Card]         |  |  Card]         |          |
|  | Advanced       |  | End-to-End     |          |
|  | Equipment      |  | Quality        |          |
|  +----------------+  +----------------+          |
|  +----------------+  +----------------+          |
|  | [Editorial     |  | [Editorial     |          |
|  |  Card]         |  |  Card]         |          |
|  | Certified      |  | Custom         |          |
|  | Facility       |  | Formulations   |          |
|  +----------------+  +----------------+          |
+--------------------------------------------------+
```

**Background:** `--bg-charcoal`

**Cards Data:**

| Title | Body | Icon concept |
|---|---|---|
| Advanced Equipment | ARBES SGX-806P encapsulation and Elmach EPI 2000 blister packaging — precision-engineered for consistency. | Cog/machine icon |
| End-to-End Quality | From raw material testing to final product release — 100% inspection at every stage. | Shield/check icon |
| Globally Certified | FSSAI, GMP, HACCP, Halal, and WHO-GMP certified. Meeting the world's strictest standards. | Badge/certificate icon |
| Custom Formulations | Private label and contract manufacturing with flexible MOQs and custom formulation capabilities. | Flask/beaker icon |

**Typography:** Per EditorialCard component spec

**Animation:**
- 2x2 grid, stagger reveal 0.15s per card
- Cards fade up from 40px below

**Unsplash search terms:** `pharmaceutical machinery closeup`, `quality control laboratory`, `pharmaceutical certifications`, `chemical formulation lab`

---

### Section 9: PARTNERSHIP — Contract Manufacturing Split Section

**Purpose:** B2B partnership pitch for private label and contract manufacturing.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-warm-dark                               |
|                                                  |
| [Image: handshake /    | [label] PARTNER WITH US |
|  factory partnership]  |                          |
|                        | [display-section]         |
|                        | YOUR BRAND.              |
|                        | OUR SCIENCE.             |
|                        |                          |
|                        | [body-large]              |
|                        | From concept to shelf —   |
|                        | turnkey private label     |
|                        | softgel manufacturing.    |
|                        |                          |
|                        | * Custom formulations     |
|                        | * Flexible MOQs           |
|                        | * Regulatory support      |
|                        | * Export documentation     |
|                        |                          |
|                        | [ START A PROJECT ]       |
+--------------------------------------------------+
```

**Background:** `--bg-warm-dark`

**Component:** SplitSection, imagePosition: "left"

**Typography:**
- Label: `.label-text`, `--gold`
- Heading: `.display-section`, `--text-white`
- Body: `body-large`, `--text-cream`
- Bullets: `.body`, `--text-cream` with gold dots
- CTA: gold border button

**Animation:**
- Image: parallax translateY
- Content: slide in from right, stagger 0.12s

**Unsplash search terms:** `business partnership pharmaceutical`, `contract manufacturing handshake`, `pharmaceutical business meeting`

---

### Section 10: GLOBAL REACH

**Purpose:** Position Admetus as an export-ready international supplier.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-black                                   |
|                                                  |
|  [label] GLOBAL PRESENCE                         |
|                                                  |
|  [display-section]                               |
|  BEYOND                                          |
|  BORDERS                                         |
|                                                  |
|  [body-large, centered, max-width 700px]         |
|  Regulatory-compliant export capabilities         |
|  serving pharmaceutical markets worldwide.        |
|  Documentation, logistics, and quality            |
|  assurance for seamless international supply.     |
|                                                  |
|  +----------+ +----------+ +----------+          |
|  | Export    | | Regulatory| | Logistics|         |
|  | Markets  | | Compliance| | Support  |         |
|  +----------+ +----------+ +----------+          |
|                                                  |
|  [ EXPLORE EXPORT CAPABILITIES ]                 |
+--------------------------------------------------+
```

**Background:** `--bg-black`

**Typography:**
- Label: `.label-text`, `--gold`, centered
- Heading: `.display-section`, `--text-white`, centered
- Body: `body-large`, `--text-cream`, centered
- Feature boxes: `.heading-2` title + `.caption` description, `--text-white` / `--text-muted`

**Animation:**
- Heading: fade + slide up
- Body: fade in after heading
- Feature boxes: stagger fade-up 0.12s
- Optional: subtle world map outline in background at very low opacity

**Unsplash search terms:** `global shipping containers`, `world map connections`, `international trade logistics`

---

### Section 11: TRUST QUOTE

**Purpose:** Social proof through a powerful testimonial or brand statement.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-charcoal                                |
|                                                  |
|           [large gold quotation mark]            |
|                                                  |
|  [heading-1, centered, max-width 800px]          |
|  "Quality is not a department.                   |
|   It is an agreement between the manufacturer    |
|   and the consumer — a promise kept in every     |
|   capsule we produce."                           |
|                                                  |
|  [label-text]                                    |
|  — ADMETUS LIFESCIENCES                          |
|                                                  |
|  ─────── (gold line) ───────                     |
+--------------------------------------------------+
```

**Background:** `--bg-charcoal`, ~60vh height

**Typography:**
- Quote mark: 120px, color `--gold`, opacity 0.3
- Quote text: `.heading-1`, `--text-white`, centered, italic optional
- Attribution: `.label-text`, `--gold`

**Animation:**
- Quote fades in from opacity 0
- Gold decorative line draws beneath
- Subtle parallax on quote text (very slow, -10px to 10px)

**Unsplash search terms:** N/A — text-only section

---

### Section 12: CLOSING CTA

**Purpose:** Final conversion point.

**Layout:**
```
+--------------------------------------------------+
| bg: --bg-black + floating gold particle dots     |
|                                                  |
|                                                  |
|        [label]  LET'S BUILD TOGETHER             |
|                                                  |
|        [display-section]                         |
|        READY TO                                  |
|        MANUFACTURE?                              |
|                                                  |
|        [body-large]                              |
|        Whether you need contract manufacturing,  |
|        private labeling, or custom formulations  |
|        — we are ready.                           |
|                                                  |
|        [ REQUEST A QUOTE ]   [ CONTACT US ]      |
|         (gold border btn)    (text link)         |
|                                                  |
|  admetuslifesciences@gmail.com                   |
|  Village Anta, Tehsil Safidon, Distt. Jind,     |
|  Haryana - 126112, India                         |
+--------------------------------------------------+
```

**Background:** `--bg-black` with CSS-animated gold particle dots (`@keyframes float-dot` from globals.css)

**Component:** CTABanner

**Typography:**
- Label: `.label-text`, `--gold`, centered
- Heading: `.display-section`, `--text-white`, centered
- Body: `body-large`, `--text-cream`, centered
- Primary CTA: gold border button
- Secondary CTA: `.label-text`, `--text-muted`, underline on hover
- Contact info: `.caption`, `--text-muted`

**Animation:**
- Content staggers in: label, heading, body, CTAs (0.12s stagger)
- Gold particles float continuously
- Gold horizontal line draws above label

**Unsplash search terms:** N/A — decorative particles only

---

## 5. IMAGE STRATEGY SUMMARY

### Priority Images Needed

| Section | Image | Unsplash Terms | Notes |
|---|---|---|---|
| Hero | Pharmaceutical production line | `pharmaceutical manufacturing softgel`, `capsule production line` | Wide shot, dramatic lighting |
| Scale | Facility wide shot | `modern pharmaceutical factory`, `manufacturing plant interior` | Shows scale |
| Products | 7 product images | `softgel capsule [color]`, `supplement capsule closeup` | One per product, match product `color` |
| Process (x7) | Manufacturing steps | See Section 6 terms | Each step needs distinct image |
| Visual Break | Facility exterior | `pharmaceutical factory exterior modern` | Landscape, architectural |
| Differentiators (x4) | Feature illustrations | See Section 8 terms | Moody, editorial feel |
| Partnership | Business/collaboration | `business partnership pharmaceutical` | Professional, warm |
| Global Reach | International/logistics | `global trade shipping` | Expansive, world-scale feel |

### Image Treatment Guidelines
- All hero/background images: darken with `--overlay-black` at 0.6-0.7 opacity
- Product images: transparent PNG on subtle gradient background using product `color`
- Editorial cards: bottom-heavy gradient overlay for text legibility
- Parallax images: 130% height of container for scroll movement room
- All images: `loading="lazy"` except hero (eager)
- Formats: WebP with JPEG fallback, served via Next.js Image component

---

## 6. RESPONSIVE BREAKPOINTS

| Name | Width | Behavior |
|---|---|---|
| Mobile | 0-767px | Single column, stacked layouts, hamburger nav, touch-optimized |
| Tablet | 768-1023px | Two-column grids where applicable, full nav may collapse |
| Desktop | 1024-1279px | Full layout, all animations, horizontal scroll galleries |
| Large | 1280px+ | Max container width `--container-max` (1400px), centered |

### Mobile-Specific Adjustments
- HorizontalScrollGallery: becomes vertical card stack with scroll-snap
- PinnedStepWalkthrough: becomes vertical scroll, no pinning
- ManifestoReveal: reduced pin distance, faster reveals
- SplitSection: image stacks above content
- Display text: clamp values already handle scaling
- Reduce GSAP pin durations by 40% on touch devices

---

## 7. ACCESSIBILITY REQUIREMENTS

- All images: meaningful `alt` text
- Color contrast: WCAG 2.1 AA minimum (4.5:1 body text, 3:1 large text)
- Gold on dark (`#C8A951` on `#0A0A0A`): contrast ratio ~8.2:1 (passes AAA)
- Cream on dark (`#E8E0D0` on `#0A0A0A`): contrast ratio ~13:1 (passes AAA)
- Muted on dark (`#8A8274` on `#0A0A0A`): contrast ratio ~4.5:1 (passes AA)
- Focus indicators: 2px gold outline on all interactive elements
- Skip-to-content link: hidden until focused
- `prefers-reduced-motion`: already handled in globals.css — disables all animations
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ARIA landmarks on all major sections
- Form labels associated with inputs, error messages announced via `aria-live`

---

## 8. Z-INDEX SCALE

| Layer | Z-Index | Elements |
|---|---|---|
| Base | 0 | Page content, sections |
| Parallax behind | -1 | Parallax background images |
| Cards hover | 10 | Elevated card states |
| Sticky nav | 50 | StickyNav component |
| Mobile menu overlay | 60 | Full-screen mobile navigation |
| WhatsApp float | 40 | WhatsAppFloat button |
| Modal overlay | 70 | Dialog/modal backgrounds |
| Modal content | 80 | Dialog/modal panels |
| Toast notifications | 90 | Toast/notification popups |

---

## 9. PERFORMANCE BUDGET

| Metric | Target |
|---|---|
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total page weight (initial) | < 1.5MB |
| Hero image | < 200KB (WebP, 1920px wide) |
| GSAP bundle | ~40KB gzipped |
| Font files | < 150KB total (subset WOFF2) |

### Implementation Notes
- Inline critical CSS for above-fold content
- Lazy-load all images below fold via Next.js Image
- Load GSAP ScrollTrigger only on client side (`dynamic import`)
- Preload hero image and display fonts
- Use `will-change: transform` on parallax and pinned elements only when active
