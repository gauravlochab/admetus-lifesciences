# Admetus Life Sciences — Lead Generation Pipeline

## Goal
Generate 50-60 qualified leads of decision-makers at small-to-mid pharma/nutraceutical companies in South Bangalore, Mumbai, and South India who can place contract manufacturing orders.

## Pipeline Files

| File | What It Contains |
|---|---|
| `lead-tracker.csv` | Master spreadsheet — add every lead here. Import into Google Sheets for team access. |
| `lead-sourcing-playbook.md` | Step-by-step guide for finding leads from 8 different sources (IndiaMART, PharmaHopers, CDSCO, JustDial, IDMA, Google Maps, LinkedIn, Apollo.io) |
| `cold-email-sequences.md` | 3 complete email sequences (4 emails each) — for founders, procurement heads, and IndiaMART leads |
| `linkedin-outreach.md` | Connection request templates, follow-up messages, content strategy, profile optimization |
| `whatsapp-phone-scripts.md` | Phone call scripts (cold/warm/inbound), WhatsApp message templates, objection handling |
| `indiamart-listing-copy.md` | Optimized listings for IndiaMART seller profile (5 product listings + company profile) |

## Installed Claude Code Agents

These agents are installed in `.claude/agents/` and can be invoked for specific tasks:

| Agent | Use For |
|---|---|
| `sales-automator` | Generate new email variations, A/B test subject lines, refine outreach scripts |
| `content-marketer` | Create LinkedIn posts, SEO content, blog articles for inbound lead generation |
| `market-researcher` | Analyze specific market segments, research competitors, size opportunities |
| `seo-specialist` | Optimize admetuslifesciences.com for pharma contract manufacturing keywords |
| `competitive-analyst` | Research what competing CDMOs are doing in South India |

## Bright Data MCP (Web Scraping)

Installed in `.mcp.json`. Requires a Bright Data API token to activate. Once configured, it can:
- Scrape IndiaMART search results at scale
- Extract company data from PharmaHopers and other directories
- Pull Google Maps business listings
- Automate data collection from CDSCO/ONDLS portals

To activate: Replace `YOUR_BRIGHTDATA_API_TOKEN` in `.mcp.json` with your actual token from brightdata.com.

## Quick Start (Week 1)

1. Open `lead-sourcing-playbook.md` and start with IndiaMART (Source 1) — fastest results
2. For each lead found, add a row to `lead-tracker.csv`
3. After collecting 15-20 leads, start outreach using `cold-email-sequences.md` (Sequence A for founders)
4. In parallel, set up your LinkedIn profile using `linkedin-outreach.md` and start sending connection requests
5. Set up IndiaMART seller profile using `indiamart-listing-copy.md` for inbound leads

## Expected Timeline

| Week | Activity | Expected Leads |
|---|---|---|
| Week 1-2 | Source leads from all 8 channels | 60-80 raw leads |
| Week 2-3 | Qualify and enrich (Apollo.io for contacts) | 50-60 qualified leads |
| Week 3-4 | Begin outreach (email + LinkedIn + WhatsApp) | First meetings booked |
| Week 5-8 | Scale outreach, follow-up sequences | 8-12 meetings total |
| Week 9-12 | Proposals, facility visits, pilot batches | 3-5 active clients |
