# Proposal: Speaker Bureau Contract Automation

**Prepared for:** [Client Name]
**Prepared by:** Hillway.ai | Matt Fitzgerald MRICS
**Date:** 10 February 2026
**Ref:** HIL/PROP/2026/001

---

## Executive Summary

Managing contracts across a busy speaker bureau shouldn't mean hours of manual copying, pasting, and filing. You told us that your current process -- entering event details, pulling in the right speaker terms, creating contracts, saving them in the right place, and getting them into DocuSign -- is slow and error-prone. We've listened carefully, and we have a solution that eliminates the admin while keeping the personal touch your clients value.

We're proposing **SpeakerFlow**, a contract automation system purpose-built for your bureau. Rather than just describing what we'd build, we've gone a step further: **we've already built a working demo** so you can see exactly how the finished product would look and feel. We believe the best way to win your confidence is to show, not tell.

This proposal outlines two options -- a Microsoft-native automation that delivers precisely what you've asked for, and a recommended upgrade that adds a professional web portal with a dashboard, analytics, and a significantly better user experience. Both options are fixed-price, delivered in weeks rather than months, and designed to slot seamlessly into your existing Teams and DocuSign workflow.

---

## Understanding Your Requirements

Based on our conversation, here's what we understand you need:

- **A single intake form** where your team enters event details, client information, and selects the speaker
- **Automatic contract generation** in Word/PDF format, pulling in the correct speaker's terms and conditions
- **Intelligent file management** -- contracts automatically saved to the correct folder structure in Teams/SharePoint
- **DocuSign integration** -- a draft envelope created and ready for your team to add signature fields
- **Human-in-the-loop sending** -- you personally send the final DocuSign email to maintain the relationship
- **No change to your communication style** -- all the back-office admin is automated, but client-facing interactions stay personal

### Additional Considerations

Through our experience building automation systems, we'd also recommend thinking about:

- **Template versioning** -- when speaker T&Cs change, you need a clean way to update templates without breaking existing contracts
- **Audit trail** -- knowing who created which contract, when, and its current status
- **Contract status tracking** -- at a glance, seeing which contracts are drafted, sent, signed, or outstanding
- **Error handling** -- what happens if DocuSign is temporarily unavailable, or a required field is missing
- **Scalability** -- as your bureau grows, the system should handle increased volume without modification

---

## Proposed Solution

### Option A: SpeakerFlow Standard

*The Microsoft-native approach -- exactly what you asked for.*

This option uses Power Automate, SharePoint, and the DocuSign connector to automate your contract workflow entirely within the Microsoft ecosystem.

**What's Included:**

- Custom SharePoint form for event and client data entry
- Power Automate flow for end-to-end contract generation
- Word document templates with dynamic field mapping
- Automatic PDF conversion
- SharePoint folder structure with automatic filing (organised by speaker, client, or date -- your choice)
- DocuSign connector integration for draft envelope creation
- Up to 3 speaker contract templates configured
- User guide and walkthrough documentation

**How It Works:**

1. Your team opens the SharePoint form and enters event details (date, venue, fee, client info) and selects the speaker
2. Power Automate triggers automatically, populating a Word template with the form data and the selected speaker's T&Cs
3. The contract is converted to PDF and saved to the correct SharePoint/Teams folder
4. A draft DocuSign envelope is created with the contract attached
5. Your team receives a notification that the draft is ready
6. You open DocuSign, review the contract, add signature fields if needed, and send it personally

**Timeline:** 2-3 weeks from project commencement
**Investment:** £4,950 + VAT

---

### Option B: SpeakerFlow Pro (Recommended)

*A custom web portal that transforms how your bureau handles contracts.*

SpeakerFlow Pro goes beyond automation -- it gives your team a professional, purpose-built interface that makes contract management genuinely enjoyable. Instead of navigating SharePoint forms and Power Automate notifications, your team gets a clean, modern dashboard where everything is visible at a glance.

**What's Included:**

Everything in Option A, plus:

- **Custom web portal** accessible from any browser (desktop, tablet, mobile)
- **Professional dashboard** showing contract pipeline at a glance -- drafted, sent, awaiting signature, signed
- **Smart form interface** with auto-complete, validation, and a far better user experience than SharePoint forms
- **Speaker management panel** -- add, edit, and manage speaker profiles and T&Cs directly
- **Contract history and search** -- find any contract instantly by speaker, client, event, or date
- **Analytics and reporting** -- contracts per month, average turnaround time, busiest periods
- **Microsoft Graph API integration** -- files still sync to Teams/SharePoint automatically
- **DocuSign API integration** -- deeper integration with status callbacks, so contract status updates in real-time
- **Up to 5 speaker contract templates** configured
- **User guide, video walkthrough, and admin documentation**

**How It Works:**

1. Your team logs into the SpeakerFlow portal (secured with your existing Microsoft 365 credentials)
2. They click "New Contract" and fill in the smart form -- speaker auto-populates T&Cs, client details auto-complete if they've been used before
3. The system generates the contract, converts to PDF, and previews it on-screen for a quick review
4. One click sends it to your Teams/SharePoint folder structure and creates the DocuSign draft
5. The dashboard updates in real-time -- you can see exactly where every contract sits
6. You send the final DocuSign email personally, as you do now
7. When the client signs, the dashboard updates automatically via DocuSign webhooks

**Dashboard Features:**

- Pipeline view: see all contracts by status (Draft / Sent / Signed / Expired)
- Speaker breakdown: contracts per speaker, total fees managed
- Client directory: auto-built from contract history
- Quick actions: duplicate a previous contract, resend a DocuSign reminder
- Export: download reports as CSV or PDF for your records

**Timeline:** 3-4 weeks from project commencement
**Investment:** £7,950 + VAT

**Why We Recommend Option B:**

The Standard option automates the process. The Pro option transforms it. For an additional £3,000, you get a system your team will genuinely enjoy using -- with visibility, analytics, and a professional interface that grows with your bureau. The web portal also means you're not locked into the limitations of SharePoint forms and Power Automate, giving you far more flexibility as your needs evolve.

---

### Feature Comparison

| Feature | Standard (£4,950) | Pro (£7,950) |
|---|---|---|
| Automated contract generation | Yes | Yes |
| PDF conversion | Yes | Yes |
| Speaker T&C auto-population | Yes | Yes |
| Teams/SharePoint auto-filing | Yes | Yes |
| DocuSign draft creation | Yes | Yes |
| Human-in-the-loop sending | Yes | Yes |
| Speaker templates included | 3 | 5 |
| Custom web portal | -- | Yes |
| Professional dashboard | -- | Yes |
| Contract status tracking | Basic (email notifications) | Real-time (live dashboard) |
| Client auto-complete | -- | Yes |
| Analytics and reporting | -- | Yes |
| Contract search | SharePoint search | Instant portal search |
| Speaker management panel | Manual SharePoint editing | Dedicated admin interface |
| Mobile-friendly interface | SharePoint mobile | Fully responsive portal |
| DocuSign status webhooks | -- | Yes |
| Microsoft 365 SSO login | -- | Yes |
| User experience | Functional | Professional |

---

## Technical Approach

We keep the technology working hard behind the scenes so your team doesn't have to think about it.

**Integration Architecture:**

```
[SpeakerFlow Portal / SharePoint Form]
            |
            v
   [Contract Engine]
     - Template selection
     - Data population
     - PDF generation
            |
     +------+------+
     |             |
     v             v
[SharePoint]  [DocuSign API]
 Teams files   Draft envelope
     |             |
     v             v
 [Auto-filed]  [Ready for
  by speaker/   your team
   client]      to send]
```

**Security:**

- All data stays within your Microsoft 365 tenant and DocuSign account
- Portal authentication via Microsoft 365 SSO (Option B) -- no new passwords to manage
- HTTPS encryption for all data in transit
- No third-party data storage beyond your existing Microsoft and DocuSign subscriptions
- GDPR-compliant data handling

**Data Handling:**

- Contract templates stored securely in SharePoint
- Generated contracts saved to your existing Teams folder structure
- No data leaves your Microsoft ecosystem (except to DocuSign, which you already use)
- Full audit trail of contract creation and modifications

---

## Delivery Timeline

### Option A: SpeakerFlow Standard (2-3 Weeks)

| Week | Activity |
|---|---|
| **Week 1** | Discovery session, SharePoint form build, template configuration, Power Automate flow development |
| **Week 2** | DocuSign connector integration, folder structure setup, testing with your speaker templates |
| **Week 3** | User acceptance testing, refinements, documentation, handover and training |

### Option B: SpeakerFlow Pro (3-4 Weeks)

| Week | Activity |
|---|---|
| **Week 1** | Discovery session, portal UI/UX design, database schema, Microsoft Graph API setup |
| **Week 2** | Portal development, contract engine build, template configuration, SharePoint integration |
| **Week 3** | DocuSign API integration, dashboard and analytics, testing with your speaker templates |
| **Week 4** | User acceptance testing, refinements, documentation, deployment, handover and training |

*Timelines begin from receipt of the first milestone payment and access to your Microsoft 365 and DocuSign environments.*

---

## Investment

| | Option A: Standard | Option B: Pro (Recommended) |
|---|---|---|
| **Fixed project fee** | £4,950 + VAT | £7,950 + VAT |
| **Delivery** | 2-3 weeks | 3-4 weeks |
| **Speaker templates** | 3 included | 5 included |

### Payment Schedule

| Milestone | Percentage | Option A | Option B |
|---|---|---|---|
| Project commencement | 40% | £1,980 | £3,180 |
| Working prototype delivered | 30% | £1,485 | £2,385 |
| Final sign-off and go-live | 30% | £1,485 | £2,385 |

### What's Not Included

To keep scope clear and pricing fair, the following are outside this proposal:

- Changes to your existing SharePoint or Teams structure beyond what's needed for contract filing
- DocuSign account setup or subscription fees (you'll continue using your existing account)
- Microsoft 365 licensing
- Integration with systems not mentioned in this proposal (e.g., CRM, accounting)
- Ongoing content changes to speaker T&Cs (though we'll show you how to do this yourself)

Any of the above can be quoted separately if needed.

---

## Optional Enhancements

| Enhancement | Investment |
|---|---|
| **Monthly support and maintenance** -- priority bug fixes, minor adjustments, system monitoring | £250/month |
| **Annual maintenance and updates** -- everything in monthly support, plus annual review and platform updates (save £600 vs monthly) | £2,400/year |
| **Additional speaker template setup** -- new speaker T&C templates configured and tested | £150 per template |
| **Training session** -- 2-hour hands-on training for your team (remote or in-person) | £350 |

We'd recommend the annual maintenance package for peace of mind -- it ensures your system stays updated, any issues are resolved quickly, and you get a yearly review to discuss enhancements.

---

## About Hillway.ai

Hillway.ai is the technology division of Hillway Property Consultants, founded by Matt Fitzgerald MRICS. We specialise in building automation systems and bespoke software for businesses that are tired of manual processes but wary of over-engineered, overpriced solutions.

**Why we're different:**

- **We build fast.** By leveraging AI-assisted development, we deliver in weeks what traditional consultancies take months to build. That speed saving is passed directly to you in lower fees.
- **We understand business, not just code.** Matt's background as a chartered surveyor means we approach every project from a commercial perspective first. Technology is the tool, not the goal.
- **We prove before we propose.** We've already built a working demo of SpeakerFlow Pro. You don't have to imagine what it looks like -- you can use it today.
- **Fixed pricing, no surprises.** No day rates, no scope creep billing, no "that'll be extra" conversations. The price you see is the price you pay.

**Relevant experience:**

- Contract and document automation systems for property consultancies
- Microsoft 365 and SharePoint integration projects
- DocuSign API integrations
- Custom web portal development with Microsoft SSO
- Workflow automation for professional services firms

---

## Demo

We don't just write proposals -- we build prototypes.

**We've created a fully working demo of SpeakerFlow Pro** so you can see exactly what the finished product would look and feel like. The demo includes:

- The contract creation form with speaker selection
- Automatic T&C population
- PDF contract preview
- Dashboard with contract pipeline view
- Mobile-responsive interface

**Demo URL:** [To be provided separately]

We'd love to walk you through it on a short call, or you're welcome to explore it at your own pace. Either way, what you see in the demo is what you'll get in the final product.

---

## Next Steps

1. **Review this proposal** -- take your time, and come back with any questions
2. **View the live demo** -- we'll send you the link and login details
3. **Choose your preferred option** -- Standard or Pro (or let us help you decide)
4. **Discovery call** -- a 30-minute call to confirm requirements and gather access details
5. **Project kicks off within 5 working days** of receiving the commencement payment

We're ready to start as soon as you are.

---

## Terms and Conditions

**1. Scope of Work**
The scope of work is as defined in the "Proposed Solution" section of this proposal for the selected option. Any work outside this scope will be quoted separately and agreed in writing before commencement.

**2. Intellectual Property**
All intellectual property created during the project transfers to you in full upon receipt of final payment. Until final payment is received, IP remains with Hillway.ai.

**3. Change Requests**
Changes to the agreed scope are welcome but must be submitted in writing. We'll provide a quote for any additional work within 2 working days. Changes may affect the delivery timeline.

**4. Warranty**
We provide a 30-day warranty from go-live, covering defects in the delivered system at no additional cost. This does not cover issues caused by changes to your Microsoft 365 or DocuSign environments, or modifications made by third parties.

**5. Confidentiality**
All information shared during the project will be treated as confidential. We will not share your business data, processes, or contract details with any third party.

**6. Payment Terms**
Invoices are payable within 14 days of issue. Late payment may result in project pausing until the account is brought up to date.

**7. Cancellation**
Either party may cancel the project with 7 days' written notice. Payments for completed milestones are non-refundable. Work in progress at the point of cancellation will be invoiced pro-rata.

**8. Limitation of Liability**
Our total liability under this agreement shall not exceed the total project fee for the selected option. We are not liable for indirect or consequential losses, including loss of revenue or data, except where caused by our negligence.

**9. Third-Party Services**
This project relies on Microsoft 365, SharePoint, and DocuSign. We are not responsible for outages, changes, or limitations imposed by these third-party providers.

**10. Acceptance**
The project is deemed accepted upon written sign-off at the final milestone, or 7 days after delivery of the completed system if no feedback is received.

---

## Contact

**Matt Fitzgerald MRICS**
Founder, Hillway.ai | Hillway Property Consultants

Email: matt@hillwayco.uk
Web: hillway.ai
Location: Sheffield, UK

---

*This proposal is valid for 30 days from the date of issue. Prices are exclusive of VAT, which will be charged at the prevailing rate.*
