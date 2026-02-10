# Speaker Bureau Demo - SpeakerFlow

## Status: DEMO COMPLETE - Awaiting Client Decision

## Overview
Bespoke contract automation demo for a potential speaker bureau client. Built as a pitch demo to show what Hillway can build — NOT a SaaS product.

## Live Demo
- **URL**: https://speaker-bureau-demo.vercel.app
- **GitHub**: https://github.com/matthillway/speaker-bureau-demo (public)
- **Branded as**: SpeakerFlow

## Tech Stack
- Next.js 15.5.12, React 19, TypeScript
- Tailwind CSS 4, Shadcn/ui (Radix UI)
- Deployed on Vercel (auto-deploys from master)
- Build: `NODE_ENV=production pnpm build` (critical — fails without NODE_ENV=production)

## Pages (6)
1. `/` — Dashboard (stats, recent contracts, activity feed)
2. `/contracts` — Contract list with search + status filters
3. `/contracts/new` — 4-step wizard (Event → Speaker → Contract → Review)
4. `/contracts/[id]` — Contract detail with workflow timeline
5. `/speakers` — Speaker roster (grid/list views, T&Cs expandable)
6. `/settings` — Integrations (Teams, DocuSign, SharePoint), templates, folder config

## Mock Data
- 10 speakers across 8 categories
- 13 contracts (CTR-2026-001 through CTR-2026-013)
- All in `/src/lib/data.ts`

## Key Files
- `src/components/sidebar.tsx` — Responsive sidebar with mobile hamburger drawer
- `src/app/layout.tsx` — Root layout with mobile-first padding
- `src/lib/data.ts` — All mock data and types

## Mobile Responsive
Fully responsive as of 10 Feb 2026. Hamburger menu, card-based mobile layouts, stacked grids.

## Proposal
- Location: `/proposal/PROPOSAL.md`
- Two options: Standard vs Pro (Recommended)
- **PRICING NEEDS DECISION**: Proposal says £4,950/£7,950, Commercial Analyst recommends £5,950/£9,950
- Payment: 40/30/30 milestone split

## Architecture Decision
Custom Web Portal (43/50) chosen over Microsoft-native Power Automate approach (23/50).
- 90% Claude Code leverage vs 15% for Power Automate
- Stack for real build: Next.js + Supabase + MS Graph API + DocuSign eSign API + docx-templater

## Pre-Requisites Before Quoting
1. Confirm client's M365 licence tier + DocuSign API access
2. How many unique speaker T&C templates they maintain?

## Devil's Advocate Risks
- M365 Premium connector costs (DocuSign)
- Scope creep on T&C variations
- Support liability — cap SLA
- Brand dilution risk (Hillway = property, not software house)
