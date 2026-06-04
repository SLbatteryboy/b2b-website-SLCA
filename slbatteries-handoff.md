# Project Handoff — Sustainable Lithium Cells Australia Info Site

## Overview

This document is a handoff for an ongoing web project. The client is **Sustainable Lithium Cells Australia PTY LTD (S.L.C.A PTY LTD)**, trading as **Second Life Battery Sales / 2L Batteries**, a Brisbane-based lithium battery recycling and second-life company.

**The project:** A standalone informational website about battery recycling, separate from their existing Shopify store. No products, no e-commerce — purely educational and lead-generation content.

**Shopify store (do not modify):** https://slbatteries.com.au  
**New info site (live preview):** https://unique-paletas-4c350c.netlify.app

---

## Business Context

- **Legal name:** Sustainable Lithium Cells Australia PTY LTD (S.L.C.A PTY LTD)
- **ABN:** 67 661 094 159
- **Phone:** 0493 644 092
- **Email:** econtact@slbatteries.com.au
- **Location:** Brisbane, Queensland (national reach for collections)
- **Key contact form:** https://docs.google.com/forms/d/e/1FAIpQLSdWTLog8kTtQSKH1MrJSWtGsdhq-G-4cA0wVDmYWj1qzvMCKA/viewform

### Socials
- Facebook: https://www.facebook.com/profile.php?id=100083340639181
- Instagram: https://www.instagram.com/slbatteries_brisbane/
- LinkedIn: https://www.linkedin.com/company/second-life-battery-sales/
- Product Review: https://www.productreview.com.au/listings/second-life-battery-sales/write-review

---

## Hosting & Deployment

- **Host:** Netlify (free tier), deployed via drag-and-drop
- **Domain registrar:** GoDaddy (separate domain from Shopify store — not yet connected as of last session)
- **How to redeploy:** Go to the Netlify project dashboard → drag the updated `slbatteries-site` folder into the "Production deploys" drop zone
- **To connect the custom domain:** Netlify → Domain management → Add custom domain → copy nameservers → GoDaddy → Domains → Nameservers → Change → Custom → paste Netlify nameservers

---

## Site Architecture

The site is **pure static HTML** — no framework, no build process, no Node.js. It consists of:

| File | Purpose |
|------|---------|
| `style.css` | All styles for the entire site |
| `shared.js` | Injects the nav and footer into every page via JS |
| `index.html` | Home page |
| `disposal.html` | Battery disposal & re-use |
| `businesses.html` | How we help businesses & the environment |
| `repurpose-vs-recycle.html` | Repurposing vs. recycling guide |
| `changing-recycling.html` | How we will change lithium recycling in Australia |
| `economics.html` | Economics of global and Australian lithium battery recycling |
| `repairs.html` | Lithium battery repairs and custom builds |
| `workshops.html` | Workshops, consultations and custom builds |
| `safety.html` | Lithium battery safety resources |
| `safety-manual.html` | Members-only manual placeholder (links to Shopify account) |
| `mission.html` | Our mission |
| `faqs.html` | FAQs — Australia-specific recycling information |
| `contact.html` | Contact page with form (not wired to backend) |

### Nav structure (defined in `shared.js`)
```
Home
Recycling & Disposal (dropdown)
  → Battery disposal & re-use
  → How we help businesses
  → Repurposing vs. recycling guide
  → Changing recycling in Australia
  → Economics of battery recycling
Repairs & Builds (dropdown)
  → Repairs & custom builds
  → Workshops & consultations
  → Safety resources
  → Safety manual (members)
Our mission
FAQs
Contact
```

---

## Design System

### Fonts
**IBM Plex Sans** (Google Fonts) — chosen for its professional, technical character.  
Import: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap`

### Colour palette (CSS variables in `style.css`)
```css
--green-deep:   #0a2e1a   /* nav, hero backgrounds, dark sections */
--green-mid:    #1a5c35   /* stat strip, accents */
--green-bright: #2d9e5f   /* CTAs, borders, highlights */
--green-light:  #7ecba1   /* logo accent, dark-section links */
--green-pale:   #d4f0e0   /* stat numbers, eyebrow tags */
--cream:        #f5f2eb   /* alternate section backgrounds */
--warm-white:   #fdfcf8   /* page background */
--charcoal:     #1c1c1c   /* body text headings */
--mid-gray:     #5c5c5c   /* body copy */
```

### Key CSS components (all in `style.css`)
- `.page-hero` — dark green hero used on all inner pages
- `.hero` — taller hero used only on home page
- `.card-grid` / `.card` — service feature cards with left green border
- `.dark-section` — full dark green background section
- `.cream-section` — cream background section
- `.timeline` / `.timeline-step` — vertical process steps with dot markers
- `.faq-list` / `details` / `summary` — accordion FAQ component
- `.rp-grid` / `.rp-card` — two-column green/red repurpose vs recycle layout
- `.resource-list` / `.resource-item` — safety resource link list
- `.cta-banner` — bright green full-width CTA strip
- `.stat-strip` — mid-green statistics bar (home page)
- `.nav-cards` / `.nav-card` — white link cards used on home page

---

## Content Sources

All content was scraped from the existing Shopify store pages listed below. These URLs are safe to re-fetch for updates:

- https://slbatteries.com.au/pages/collection-of-used-lithium-batteries-for-businesses
- https://slbatteries.com.au/pages/our-mission
- https://slbatteries.com.au/pages/contact
- https://slbatteries.com.au/pages/faqs
- https://slbatteries.com.au/pages/free-lithium-ion-battery-disposal-brisbane
- https://slbatteries.com.au/pages/how-we-will-change-lithium-recycling-in-austrlaia
- https://slbatteries.com.au/pages/lithium-battery-repairs-and-custom-builds
- https://slbatteries.com.au/pages/lithium-battery-safety
- https://slbatteries.com.au/pages/lithium-battery-workshops-consultations-and-custom-builds
- https://slbatteries.com.au/pages/repurposing-vs-recycling-guide
- https://slbatteries.com.au/pages/the-economics-of-global-and-australian-lithium-battery-recycling *(returned 403 — content was sourced from search results and supplemented with external research)*

**Note:** `lithium-battery-repair-building-re-use-and-safety` is a members-only page on Shopify — content is not publicly accessible. The `safety-manual.html` page redirects users to create a Shopify account.

---

## Changes Made in This Session (most recent)

1. **Font changed** from Syne + DM Sans → IBM Plex Sans (more professional/technical)
2. **Nav logo** changed from "2L Batteries" → "Sustainable Lithium Cells Australia"
3. **All page titles** updated to "— Sustainable Lithium Cells Australia"
4. **FAQs page** completely replaced — old product FAQs removed, replaced with three sections of Australia-specific recycling information:
   - The Australian landscape (scale, regulations, costs, landfill risks)
   - ESG & business outcomes (carbon reporting, product stewardship obligations, why SLCA vs brokers)
   - Second-life & circular economy (definitions, CO₂ savings, black mass)
5. **Economics page** (`economics.html`) created as a new page covering:
   - Australian market size and current recycling gap (5,000t p.a., ~15% recycled)
   - Global comparison (China recycling 90,000t p.a., $1,500–$5,300/t scrap value)
   - Metals being recovered (Li, Co, Ni, Mn, graphite)
   - The path from cost-to-dispose to a paid-for-scrap model (lead-acid analogy)
   - 2050 outlook (744,000t end-of-life batteries, USD $23–44bn material value)

---

## Known Issues / To-Do

- **Contact form is not wired up.** The form on `contact.html` currently shows a JavaScript alert directing users to email directly. To fix, sign up for [Formspree](https://formspree.io) (free tier) and replace the `onclick` with a proper form action pointing to a Formspree endpoint.
- **Custom domain not yet connected.** Client has a GoDaddy domain ready to point at Netlify. See hosting section above.
- **No favicon.** A favicon using the company logo or a battery icon would be a quick improvement.
- **No analytics.** Consider adding Plausible or a simple Netlify Analytics setup.
- **Economics page sourcing.** The `the-economics-of-global-and-australian-lithium-battery-recycling` Shopify page returned a 403 error and could not be fetched directly. Content was built from search results and supplementary research. Once access is available, the page should be cross-checked against the original.
- **Mobile nav.** The nav collapses on screens under 600px wide but the dropdown menus are not fully optimised for mobile touch. Worth revisiting if mobile traffic is significant.

---

## How to Make Changes

Because the site is plain HTML, changes can be made directly in any text editor or by asking Claude to edit the relevant file. The most common tasks:

**Add a new page:**
1. Copy any existing page file as a starting point
2. Update the `<title>` tag
3. Replace the body content between `<nav id="site-nav"></nav>` and `<footer id="site-footer"></footer>`
4. Add the new page's link to the `links` array in `shared.js`

**Edit nav or footer:**
Edit `shared.js` only — changes propagate to all pages automatically.

**Edit styles:**
Edit `style.css` only.

**Update content on an existing page:**
Edit only that page's `.html` file.

**Redeploy:**
Drag the updated `slbatteries-site` folder into the Netlify project dashboard drop zone.
