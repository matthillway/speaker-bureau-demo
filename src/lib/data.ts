export type Speaker = {
  id: string;
  name: string;
  category: string;
  bio: string;
  fee: number;
  feeMax: number;
  avatar: string;
  available: boolean;
  contractCount: number;
  tcVersion: string;
  tcText: string;
};

export type Contract = {
  id: string;
  eventName: string;
  eventDate: string;
  venue: string;
  location: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  speakerId: string;
  speakerName: string;
  fee: number;
  status: "draft" | "generated" | "sent" | "signed" | "completed";
  createdAt: string;
  updatedAt: string;
  paymentTerms: string;
  notes: string;
};

export type Activity = {
  id: string;
  action: string;
  contractId: string;
  timestamp: string;
  user: string;
};

export const speakers: Speaker[] = [
  {
    id: "spk-001",
    name: "Dr. Sarah Mitchell",
    category: "Motivational",
    bio: "Former Olympic athlete turned leadership coach. Sarah has inspired over 500,000 people across 30 countries with her message of resilience and peak performance.",
    fee: 8000,
    feeMax: 12000,
    avatar: "SM",
    available: true,
    contractCount: 47,
    tcVersion: "v3.2",
    tcText: "Standard motivational speaker terms. 50% deposit required upon booking confirmation. Balance due 14 days before event. Cancellation within 30 days incurs 50% fee. Travel and accommodation to be arranged and paid by client. Speaker requires business class travel for flights over 3 hours. Green room with refreshments required. Recording rights subject to separate negotiation.",
  },
  {
    id: "spk-002",
    name: "James Chen",
    category: "Technology",
    bio: "AI researcher and former CTO of a FTSE 100 company. James demystifies emerging technology for boardrooms and conferences worldwide.",
    fee: 10000,
    feeMax: 15000,
    avatar: "JC",
    available: true,
    contractCount: 32,
    tcVersion: "v2.8",
    tcText: "Technology speaker engagement terms. 50% non-refundable deposit on booking. Full payment 21 days before event. Cancellation policy: 60+ days = full refund minus deposit; 30-60 days = 50% total fee; under 30 days = 100% total fee. Technical requirements: presentation clicker, HDMI connection, confidence monitor. Speaker retains all IP rights to presentation content.",
  },
  {
    id: "spk-003",
    name: "Amanda Forbes",
    category: "Business Strategy",
    bio: "McKinsey alumna and bestselling author of 'The Strategy Paradox'. Amanda helps organisations navigate uncertainty with practical frameworks.",
    fee: 12000,
    feeMax: 18000,
    avatar: "AF",
    available: true,
    contractCount: 28,
    tcVersion: "v4.0",
    tcText: "Business strategy speaker terms. Non-refundable booking fee of 25% on confirmation. Remaining 75% due 30 days before event. Speaker available for 30-minute Q&A post-presentation at no additional charge. Extended workshops available at day rate. All travel business class, 4-star hotel minimum. Speaker requires pre-event briefing call with client.",
  },
  {
    id: "spk-004",
    name: "Dr. Michael Osei",
    category: "Wellness & Mental Health",
    bio: "Clinical psychologist and BBC contributor specialising in workplace wellbeing. Dr. Osei brings evidence-based insights to corporate wellness programmes.",
    fee: 6000,
    feeMax: 9000,
    avatar: "MO",
    available: true,
    contractCount: 53,
    tcVersion: "v3.0",
    tcText: "Wellness speaker terms. 50% deposit on booking, balance 14 days before event. Cancellation: full refund if 45+ days notice; 50% fee if 15-44 days; full fee under 15 days. Speaker provides post-event resource pack for attendees. Content customisation available with 4 weeks notice. Standard set duration: 45-60 minutes plus 20-minute Q&A.",
  },
  {
    id: "spk-005",
    name: "Rachel Thornton",
    category: "Leadership",
    bio: "Former CEO of three successful startups and angel investor. Rachel speaks on authentic leadership, scaling culture, and founder resilience.",
    fee: 9000,
    feeMax: 14000,
    avatar: "RT",
    available: false,
    contractCount: 41,
    tcVersion: "v3.5",
    tcText: "Leadership speaker engagement terms. Booking deposit of 50% non-refundable. Balance due 21 days before event. Speaker offers complimentary 15-minute pre-event video call with organisers. Cancellation by speaker: full refund plus reasonable alternative speaker sourcing. Recording permitted for internal use only, not for public distribution without written consent.",
  },
  {
    id: "spk-006",
    name: "Professor David Kim",
    category: "Innovation",
    bio: "Stanford visiting professor and innovation consultant to Fortune 500 companies. David's talks blend academic rigour with actionable business insights.",
    fee: 15000,
    feeMax: 22000,
    avatar: "DK",
    available: true,
    contractCount: 19,
    tcVersion: "v2.5",
    tcText: "Innovation speaker terms. 60% deposit required on booking confirmation. Remaining 40% due 14 days before event. First-class travel required for international engagements. Speaker requires AV tech rehearsal 2 hours before event. Content is proprietary and may not be recorded or distributed. Workshops available at 1.5x keynote rate.",
  },
  {
    id: "spk-007",
    name: "Lisa Brennan",
    category: "Diversity & Inclusion",
    bio: "Award-winning D&I strategist and author. Lisa has helped transform workplace culture at over 200 organisations across Europe and North America.",
    fee: 7000,
    feeMax: 10000,
    avatar: "LB",
    available: true,
    contractCount: 62,
    tcVersion: "v4.1",
    tcText: "D&I speaker terms. 50% deposit on booking. Balance due 21 days before event. Speaker provides pre-event questionnaire to customise content. Post-event 30-minute debrief included. Cancellation: 60+ days full refund; 30-60 days 50%; under 30 days full fee applies. Speaker donates 5% of fee to inclusion charities.",
  },
  {
    id: "spk-008",
    name: "Tom Hartley",
    category: "Sales & Marketing",
    bio: "Former VP Sales at Salesforce EMEA. Tom delivers high-energy talks on modern selling, customer experience, and revenue growth strategies.",
    fee: 8500,
    feeMax: 13000,
    avatar: "TH",
    available: true,
    contractCount: 38,
    tcVersion: "v3.1",
    tcText: "Sales & marketing speaker terms. 50% non-refundable deposit on confirmation. Balance due 14 days before event. Speaker provides customised slide deck 7 days before event. Interactive elements require audience polling technology (speaker can provide at additional cost). Follow-up webinar available within 30 days at 40% of keynote fee.",
  },
  {
    id: "spk-009",
    name: "Dr. Priya Sharma",
    category: "Technology",
    bio: "Cybersecurity expert and former GCHQ advisor. Priya makes complex security topics accessible and actionable for non-technical audiences.",
    fee: 11000,
    feeMax: 16000,
    avatar: "PS",
    available: true,
    contractCount: 24,
    tcVersion: "v2.9",
    tcText: "Cybersecurity speaker terms. Full payment required 30 days before event (no deposit/balance split due to content sensitivity). Cancellation: 45+ days full refund; 20-44 days 60% refund; under 20 days no refund. Speaker requires NDA from client if discussing specific threat landscapes. Content cannot be recorded under any circumstances.",
  },
  {
    id: "spk-010",
    name: "Marcus Webb",
    category: "Motivational",
    bio: "Paralympic gold medallist and adventurer. Marcus delivers unforgettable talks on overcoming adversity, teamwork, and the power of mindset.",
    fee: 7500,
    feeMax: 11000,
    avatar: "MW",
    available: true,
    contractCount: 71,
    tcVersion: "v3.3",
    tcText: "Motivational speaker terms. 50% deposit on booking, balance 14 days before event. Accessibility requirements: step-free stage access, adjustable lectern. Speaker brings own presentation equipment. Cancellation: 30+ days full refund of deposit; under 30 days 50% total fee. Meet-and-greet sessions available at 20% of keynote fee. Book signing can be arranged.",
  },
];

export const contracts: Contract[] = [
  {
    id: "CTR-2026-001",
    eventName: "Annual Leadership Summit 2026",
    eventDate: "2026-03-15",
    venue: "The ICC",
    location: "Birmingham",
    clientName: "Sophie Williams",
    clientCompany: "Barclays UK",
    clientEmail: "s.williams@barclays.co.uk",
    speakerId: "spk-003",
    speakerName: "Amanda Forbes",
    fee: 15000,
    status: "completed",
    createdAt: "2026-01-10",
    updatedAt: "2026-02-08",
    paymentTerms: "50% deposit, balance 30 days before event",
    notes: "Client requested focus on financial services strategy. Post-event workshop confirmed.",
  },
  {
    id: "CTR-2026-002",
    eventName: "Tech Innovation Conference",
    eventDate: "2026-04-22",
    venue: "ExCeL London",
    location: "London",
    clientName: "David Park",
    clientCompany: "Deloitte Digital",
    clientEmail: "dpark@deloitte.co.uk",
    speakerId: "spk-002",
    speakerName: "James Chen",
    fee: 12000,
    status: "signed",
    createdAt: "2026-01-18",
    updatedAt: "2026-02-05",
    paymentTerms: "50% deposit, balance 21 days before event",
    notes: "Keynote on AI in professional services. 45-minute slot plus panel discussion.",
  },
  {
    id: "CTR-2026-003",
    eventName: "Women in Business Awards",
    eventDate: "2026-05-08",
    venue: "The Savoy",
    location: "London",
    clientName: "Claire Robertson",
    clientCompany: "CBI",
    clientEmail: "c.robertson@cbi.org.uk",
    speakerId: "spk-005",
    speakerName: "Rachel Thornton",
    fee: 11000,
    status: "sent",
    createdAt: "2026-01-25",
    updatedAt: "2026-02-03",
    paymentTerms: "50% deposit, balance 21 days before event",
    notes: "After-dinner keynote. 30 minutes. Dress code: black tie.",
  },
  {
    id: "CTR-2026-004",
    eventName: "National Sales Conference",
    eventDate: "2026-04-10",
    venue: "Manchester Central",
    location: "Manchester",
    clientName: "Ian Fletcher",
    clientCompany: "Vodafone Business",
    clientEmail: "ian.fletcher@vodafone.com",
    speakerId: "spk-008",
    speakerName: "Tom Hartley",
    fee: 10000,
    status: "signed",
    createdAt: "2026-01-20",
    updatedAt: "2026-02-01",
    paymentTerms: "50% deposit, balance 14 days before event",
    notes: "Morning keynote on modern B2B sales. Interactive polling session included.",
  },
  {
    id: "CTR-2026-005",
    eventName: "Wellbeing at Work Summit",
    eventDate: "2026-06-12",
    venue: "QEII Centre",
    location: "London",
    clientName: "Hannah Price",
    clientCompany: "Mind Charity",
    clientEmail: "hannah.price@mind.org.uk",
    speakerId: "spk-004",
    speakerName: "Dr. Michael Osei",
    fee: 7500,
    status: "generated",
    createdAt: "2026-02-01",
    updatedAt: "2026-02-07",
    paymentTerms: "50% deposit, balance 14 days before event",
    notes: "Opening keynote on workplace mental health. Resource pack for 500 attendees.",
  },
  {
    id: "CTR-2026-006",
    eventName: "Global Cybersecurity Forum",
    eventDate: "2026-07-03",
    venue: "Edinburgh International Conference Centre",
    location: "Edinburgh",
    clientName: "Robert MacLeod",
    clientCompany: "NatWest Group",
    clientEmail: "r.macleod@natwest.com",
    speakerId: "spk-009",
    speakerName: "Dr. Priya Sharma",
    fee: 14000,
    status: "draft",
    createdAt: "2026-02-05",
    updatedAt: "2026-02-05",
    paymentTerms: "Full payment 30 days before event",
    notes: "NDA required. Focus on financial sector threats. No recording permitted.",
  },
  {
    id: "CTR-2026-007",
    eventName: "Startup Founders Retreat",
    eventDate: "2026-05-20",
    venue: "Soho Farmhouse",
    location: "Oxfordshire",
    clientName: "Alex Turner",
    clientCompany: "Seedcamp",
    clientEmail: "alex@seedcamp.com",
    speakerId: "spk-005",
    speakerName: "Rachel Thornton",
    fee: 12000,
    status: "sent",
    createdAt: "2026-01-28",
    updatedAt: "2026-02-04",
    paymentTerms: "50% deposit, balance 21 days before event",
    notes: "Half-day workshop on scaling culture. Intimate group of 40 founders.",
  },
  {
    id: "CTR-2026-008",
    eventName: "Diversity & Inclusion Awards Ceremony",
    eventDate: "2026-06-25",
    venue: "The Roundhouse",
    location: "London",
    clientName: "Fatima Al-Hassan",
    clientCompany: "PwC UK",
    clientEmail: "fatima.al-hassan@pwc.com",
    speakerId: "spk-007",
    speakerName: "Lisa Brennan",
    fee: 9000,
    status: "generated",
    createdAt: "2026-02-03",
    updatedAt: "2026-02-08",
    paymentTerms: "50% deposit, balance 21 days before event",
    notes: "Closing keynote. Client wants focus on neurodiversity in professional services.",
  },
  {
    id: "CTR-2026-009",
    eventName: "Paralympic Legacy Gala",
    eventDate: "2026-09-15",
    venue: "The Dorchester",
    location: "London",
    clientName: "James Morrison",
    clientCompany: "British Paralympic Association",
    clientEmail: "j.morrison@paralympics.org.uk",
    speakerId: "spk-010",
    speakerName: "Marcus Webb",
    fee: 9000,
    status: "draft",
    createdAt: "2026-02-07",
    updatedAt: "2026-02-07",
    paymentTerms: "50% deposit, balance 14 days before event",
    notes: "Gala dinner keynote. Meet-and-greet and book signing after. Accessibility requirements noted.",
  },
  {
    id: "CTR-2026-010",
    eventName: "Innovation Week 2026",
    eventDate: "2026-08-05",
    venue: "Barbican Centre",
    location: "London",
    clientName: "Emily Zhang",
    clientCompany: "Google UK",
    clientEmail: "emilyzhang@google.com",
    speakerId: "spk-006",
    speakerName: "Professor David Kim",
    fee: 18000,
    status: "draft",
    createdAt: "2026-02-09",
    updatedAt: "2026-02-09",
    paymentTerms: "60% deposit, balance 14 days before event",
    notes: "Full-day innovation programme. Keynote plus 2 breakout workshops.",
  },
  {
    id: "CTR-2026-011",
    eventName: "Northern Powerhouse Business Conference",
    eventDate: "2026-04-28",
    venue: "Royal Armouries",
    location: "Leeds",
    clientName: "Mark Thompson",
    clientCompany: "Leeds City Council",
    clientEmail: "mark.thompson@leeds.gov.uk",
    speakerId: "spk-001",
    speakerName: "Dr. Sarah Mitchell",
    fee: 9000,
    status: "completed",
    createdAt: "2025-12-15",
    updatedAt: "2026-02-06",
    paymentTerms: "50% deposit, balance 14 days before event",
    notes: "Closing keynote on resilience and regional growth. Great feedback received.",
  },
  {
    id: "CTR-2026-012",
    eventName: "AI Ethics Symposium",
    eventDate: "2026-05-30",
    venue: "The Royal Institution",
    location: "London",
    clientName: "Dr. Sarah Chen",
    clientCompany: "Alan Turing Institute",
    clientEmail: "s.chen@turing.ac.uk",
    speakerId: "spk-002",
    speakerName: "James Chen",
    fee: 13000,
    status: "sent",
    createdAt: "2026-01-30",
    updatedAt: "2026-02-06",
    paymentTerms: "50% deposit, balance 21 days before event",
    notes: "Panel chair plus keynote. Topic: responsible AI deployment in public sector.",
  },
  {
    id: "CTR-2026-013",
    eventName: "Employee Engagement Forum",
    eventDate: "2026-07-18",
    venue: "The Lowry",
    location: "Manchester",
    clientName: "Karen O'Brien",
    clientCompany: "Unilever UK",
    clientEmail: "karen.obrien@unilever.com",
    speakerId: "spk-004",
    speakerName: "Dr. Michael Osei",
    fee: 8000,
    status: "draft",
    createdAt: "2026-02-08",
    updatedAt: "2026-02-08",
    paymentTerms: "50% deposit, balance 14 days before event",
    notes: "Internal event for 300 managers. Focus on burnout prevention and psychological safety.",
  },
];

export const activities: Activity[] = [
  {
    id: "act-001",
    action: "Contract generated for Innovation Week 2026",
    contractId: "CTR-2026-010",
    timestamp: "2026-02-09T14:32:00",
    user: "System",
  },
  {
    id: "act-002",
    action: "DocuSign envelope sent for AI Ethics Symposium",
    contractId: "CTR-2026-012",
    timestamp: "2026-02-09T11:15:00",
    user: "Sarah Johnson",
  },
  {
    id: "act-003",
    action: "Contract signed by Vodafone Business",
    contractId: "CTR-2026-004",
    timestamp: "2026-02-08T16:45:00",
    user: "Ian Fletcher",
  },
  {
    id: "act-004",
    action: "D&I Awards contract saved to Teams",
    contractId: "CTR-2026-008",
    timestamp: "2026-02-08T10:20:00",
    user: "System",
  },
  {
    id: "act-005",
    action: "New draft created for Employee Engagement Forum",
    contractId: "CTR-2026-013",
    timestamp: "2026-02-08T09:05:00",
    user: "Sarah Johnson",
  },
  {
    id: "act-006",
    action: "Payment received for Annual Leadership Summit",
    contractId: "CTR-2026-001",
    timestamp: "2026-02-07T13:30:00",
    user: "System",
  },
  {
    id: "act-007",
    action: "Paralympic Legacy Gala draft created",
    contractId: "CTR-2026-009",
    timestamp: "2026-02-07T11:00:00",
    user: "Sarah Johnson",
  },
  {
    id: "act-008",
    action: "Wellbeing at Work contract generated",
    contractId: "CTR-2026-005",
    timestamp: "2026-02-07T09:45:00",
    user: "System",
  },
];

export function getStatusColor(status: Contract["status"]): string {
  switch (status) {
    case "draft":
      return "bg-slate-100 text-slate-700 border-slate-200";
    case "generated":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "sent":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "signed":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "completed":
      return "bg-purple-100 text-purple-700 border-purple-200";
  }
}

export function getStatusLabel(status: Contract["status"]): string {
  switch (status) {
    case "draft":
      return "Draft";
    case "generated":
      return "Generated";
    case "sent":
      return "Sent for Signature";
    case "signed":
      return "Signed";
    case "completed":
      return "Completed";
  }
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Motivational: "bg-orange-100 text-orange-700 border-orange-200",
    Technology: "bg-cyan-100 text-cyan-700 border-cyan-200",
    "Business Strategy": "bg-indigo-100 text-indigo-700 border-indigo-200",
    "Wellness & Mental Health": "bg-green-100 text-green-700 border-green-200",
    Leadership: "bg-rose-100 text-rose-700 border-rose-200",
    Innovation: "bg-violet-100 text-violet-700 border-violet-200",
    "Diversity & Inclusion": "bg-teal-100 text-teal-700 border-teal-200",
    "Sales & Marketing": "bg-amber-100 text-amber-700 border-amber-200",
  };
  return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
}
