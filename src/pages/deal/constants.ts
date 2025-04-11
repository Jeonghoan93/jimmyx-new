type FundUsage = {
  category: string
  percentage: number
  description: string
}

type RoadmapFocus = {
  phase: string
  description: string
  focusAreas: {
    area: string
    effort: string
  }[]
}

type MarketInsight = {
  icon: string
  title: string
  problem: string
  solution: string
}

export const marketInsights: MarketInsight[] = [
  {
    icon: 'mdi-account-star',
    title: 'Event Organizers as Brands',
    problem:
      'DJs and organizers are artists and brands in their own right, not just service providers. Current platforms treat them as venues or ticket sellers, missing the influencer-like relationship they have with their audience.',
    solution:
      "We're building influencer-style profiles for organizers where people can follow them directly and receive updates about upcoming events, building lasting connections beyond single events."
  },
  {
    icon: 'mdi-spotlight',
    title: 'Visibility for Smaller Organizers',
    problem:
      'Smaller organizers with incredible events get overshadowed by big commercial events with larger marketing budgets, despite offering more authentic experiences.',
    solution:
      'Our discovery algorithm prioritizes quality and fit over size, helping users find the perfect event for their tastes rather than just the biggest or most promoted ones.'
  },
  {
    icon: 'mdi-filter-variant',
    title: 'Inadequate Event Filtering',
    problem:
      'Current platforms offer basic filtering by date, location, and general category, but miss critical factors like age demographics, music subgenres, atmosphere, and crowd vibe.',
    solution:
      "We've developed nuanced filtering with crowd demographics, atmosphere ratings, and vibe indicators to match attendees with their perfect party experience."
  },
  {
    icon: 'mdi-camera',
    title: 'Limited Event Atmosphere Visibility',
    problem:
      "Static descriptions and promotional photos don't capture the real atmosphere, leading to mismatched expectations and disappointment.",
    solution:
      'Our platform enables live atmosphere sharing with user-generated content, live clips, and real-time updates to give authentic previews of what events are actually like.'
  },
  {
    icon: 'mdi-ticket-account',
    title: 'Beyond Just Ticket Sales',
    problem:
      "Many events aren't just about selling tickets - they require invitation requests, guest list approval, or other custom access methods that current platforms don't support.",
    solution:
      'We offer flexible access options including invitation requests, VIP lists, and custom approval flows, recognizing that exclusivity varies widely among event types.'
  },
  {
    icon: 'mdi-tools',
    title: 'Comprehensive Management Tools',
    problem:
      'Event organizers struggle with fragmented tools for different aspects of event management (staff, venues, timelines, guest lists).',
    solution:
      'Our event management platform includes staff coordination, venue timelines, and dynamic planning tools tailored to specific event types (festivals, club nights, pub crawls, etc.).'
  },
  {
    icon: 'mdi-palette-swatch',
    title: 'Event-Type Adaptive UX',
    problem:
      'Different event types (festivals, pub crawls, club nights, private parties) have radically different management needs, but current platforms offer one-size-fits-all interfaces.',
    solution:
      "We've developed adaptive UX that changes based on event type, showing only relevant features and tailoring the experience to make organizers more productive and successful."
  }
]

export const roadmapFocus: RoadmapFocus[] = [
  {
    phase: 'Months 1-3: Foundation & Launch',
    description:
      'Intense focus on core tech refinement, initial strategic hires, and Berlin market launch.',
    focusAreas: [
      // Example: Proportional focus
      { area: 'Product Dev/Tech', effort: 'High (~60%)' }, // Added approx %
      { area: 'Team Building', effort: 'Medium (~30%)' },
      { area: 'Go-to-Market (Berlin)', effort: 'Low (~5%)' },
      { area: 'Strategy/Funding Prep', effort: 'Low (~5%)' }
    ]
  },
  {
    phase: 'Months 4-6: Traction & Scaling',
    description:
      'Emphasis shifts to user acquisition, community building, and scaling infrastructure based on initial feedback.',
    focusAreas: [
      { area: 'Go-to-Market/Growth', effort: 'High (~40%)' },
      { area: 'Product Dev/Tech', effort: 'Medium (~30%)' },
      { area: 'Team Building', effort: 'Medium (~20%)' },
      { area: 'Strategy/Funding Prep', effort: 'Low (~10%)' }
    ]
  },
  {
    phase: 'Months 7-9: Revenue & Expansion Prep',
    description:
      'Focus on enabling revenue streams, refining product based on deeper analytics, and preparing for wider expansion.',
    focusAreas: [
      { area: 'Revenue/Product', effort: 'High (~40%)' },
      { area: 'GTM/Growth', effort: 'Medium (~30%)' },
      { area: 'Strategy/Funding Prep', effort: 'Medium (~20%)' },
      { area: 'Team Building', effort: 'Low (~10%)' }
    ]
  },
  {
    phase: 'Months 10-12: Series A Readiness',
    description:
      'Consolidate metrics, demonstrate scalable model, finalize data room, and actively engage potential Series A investors.',
    focusAreas: [
      { area: 'Strategy/Funding Prep', effort: 'High (~40%)' },
      { area: 'Revenue/Growth', effort: 'Medium (~30%)' },
      { area: 'Product/Tech', effort: 'Low (~20%)' },
      { area: 'Team Building', effort: 'Low (~10%)' }
    ]
  }
]

export const focusIcons: {
  [key: string]: string
} = {
  'Product Dev/Tech': 'mdi-cogs',
  'Team Building': 'mdi-account-group-outline',
  'Go-to-Market (Berlin)': 'mdi-target-account',
  'Go-to-Market/Growth': 'mdi-trending-up',
  'Strategy/Funding Prep': 'mdi-chart-line',
  'Revenue/Product': 'mdi-currency-usd'
}

export const fundUsage: FundUsage[] = [
  {
    category: 'Team & Founder Focus', // Updated Category
    percentage: 45, // Updated Percentage
    description:
      'Secure key engineering talent (critical Backend/Infrastructure) & enable full-time founder dedication to drive product vision, strategy, and investor relations through the crucial first year.' // Updated Description
  },
  {
    category: 'Product Dev & Infrastructure', // Updated Category
    percentage: 20, // Updated Percentage
    description:
      'Fund cloud services (GCP stack: Cloud Run, Firebase, Kafka etc.), essential development tools, monitoring, and infrastructure scaling needed for reliability and rapid feature iteration.' // Updated Description
  },
  {
    category: 'Go-to-Market & Operations', // Updated Category
    percentage: 20, // Updated Percentage
    description:
      'Execute targeted Berlin launch strategy (community partnerships, micro-influencer seeding), establish lean operational base including flexible workspace, and fund initial user acquisition experiments.' // Updated Description
  },
  {
    category: 'Legal & Compliance', // Updated Category
    percentage: 10, // Updated Percentage
    description:
      'Cover company formation, robust Terms of Service/Privacy Policy creation, early partnership agreements, and ensure compliance with GDPR and local regulations.' // Updated Description
  },
  {
    category: 'Contingency', // Updated Category
    percentage: 5, // Updated Percentage
    description:
      'Operational buffer for unforeseen challenges, strategic opportunities, or slight overruns in other categories.' // Updated Description
  }
]
