import { Report, ReportStatus, ReportType } from "@/lib/types/reports";

export const mockReports: Report[] = [
  {
    id: "1",
    datingApp: "tinder",
    reason: "Sophisticated investment scam attempt",
    description: "The profile presents itself as a cryptocurrency expert and venture capitalist, targeting users with promises of high returns. Reports indicate aggressive persuasion tactics, urging victims to invest in a 'once-in-a-lifetime crypto deal.' Professional stock photos and inconsistencies in personal details point to identity theft, likely from LinkedIn. The supposed entrepreneur claims to operate in multiple major cities but provides conflicting addresses, raising red flags.",
    createdAt: new Date("2024-03-14T10:30:00"),
    status: "verified",
    type: "suspicious",
    location: "New York, USA",
    verificationCount: 12,
    severity: "high",
    tags: ["financial-scam", "identity-theft", "pressure-tactics"]
  },
  {
    id: "2",
    datingApp: "bumble",
    reason: "Advanced AI-generated profile detected",
    description: "The profile exhibits subtle signs of AI manipulation—ears appear asymmetrical, background elements blend unnaturally, and lighting patterns are inconsistent. The bio's phrasing suggests algorithm-generated text, featuring repetitive and oddly structured sentences. Users reported suspicious behavior, including evasion of video calls with repeated excuses about 'technical difficulties.'",
    createdAt: new Date("2024-03-13T15:45:00"),
    status: "pending",
    type: "suspicious",
    location: "London, UK",
    verificationCount: 5,
    severity: "medium",
    tags: ["ai-generated", "fake-photos", "verification-refusal"]
  },
  {
    id: "3",
    datingApp: "hinge",
    reason: "Coordinated harassment campaign",
    description: "This user is reportedly engaging in targeted harassment of individuals who decline their advances. Reports suggest a disturbing pattern: creating multiple accounts to circumvent blocks, sending emotionally manipulative messages, and escalating to threats when ignored. Affected users describe receiving unwanted messages across platforms, with some even experiencing real-world intimidation attempts.",
    createdAt: new Date("2024-03-12T09:15:00"),
    status: "resolved",
    type: "bad_experience",
    location: "Toronto, Canada",
    verificationCount: 18,
    severity: "high",
    tags: ["harassment", "multiple-accounts", "threats"]
  },
  {
    id: "4",
    datingApp: "okcupid",
    reason: "Celebrity impersonation scam",
    description: "The profile masquerades as a famous tech entrepreneur, complete with edited photos and a fabricated life story. Claiming to use dating apps discreetly, the scammer manipulates victims into moving conversations off-platform, often to WhatsApp. The end goal appears to involve social engineering tactics, leveraging the fake identity for monetary or personal gain.",
    createdAt: new Date("2024-03-11T14:20:00"),
    status: "verified",
    type: "suspicious",
    location: "Sydney, Australia",
    verificationCount: 8,
    severity: "high",
    tags: ["impersonation", "social-engineering", "platform-switching"]
  },
  {
    id: "5",
    datingApp: "match",
    reason: "Elaborate romance scam operation",
    description: "An intricate scheme aimed at professionals, this profile weaves a compelling narrative of being a globe-trotting architect. The scammer invests time in building emotional connections before fabricating crises that demand financial assistance. High-quality photos sourced from various platforms lend credibility, but their story crumbles under scrutiny.",
    createdAt: new Date("2024-03-10T11:00:00"),
    status: "verified",
    type: "suspicious",
    location: "Singapore",
    verificationCount: 15,
    severity: "high",
    tags: ["romance-scam", "financial-exploitation", "emotional-manipulation"]
  },
  {
    id: "6",
    datingApp: "coffee-meets-bagel",
    reason: "Suspicious modeling scout scheme",
    description: "Claiming to represent major modeling agencies, this user targets younger individuals with promises of lucrative contracts. Victims are asked to submit inappropriate photos under the guise of 'portfolio reviews,' with some reports suggesting attempts to arrange private photoshoots in secluded locations. This scam preys on the ambition and vulnerability of aspiring models.",
    createdAt: new Date("2024-03-09T16:30:00"),
    status: "pending",
    type: "suspicious",
    location: "Berlin, Germany",
    verificationCount: 7,
    severity: "high",
    tags: ["exploitation", "inappropriate-requests", "targeting-young-users"]
  },
  {
    id: "7",
    datingApp: "tinder",
    reason: "Coordinated catfishing ring",
    description: "This case involves a network of coordinated fake profiles operating in major cities worldwide. Each profile follows a similar modus operandi: professionally crafted stories, edited photos, and well-rehearsed scam attempts. Victims report eerily identical interactions across different accounts, suggesting an organized effort.",
    createdAt: new Date("2024-03-08T13:45:00"),
    status: "resolved",
    type: "suspicious",
    location: "Paris, France",
    verificationCount: 22,
    severity: "high",
    tags: ["organized-scam", "network-activity", "coordinated-effort"]
  },
  {
    id: "8",
    datingApp: "bumble",
    reason: "Personal information harvesting",
    description: "The profile employs subtle tactics to collect sensitive personal information, posing as a friendly conversationalist. Users report a concerning pattern of probing questions about workplaces, addresses, and daily routines. Subsequent identity theft attempts highlight the serious risk posed by this behavior.",
    createdAt: new Date("2024-03-07T10:15:00"),
    status: "verified",
    type: "suspicious",
    location: "Amsterdam, Netherlands",
    verificationCount: 9,
    severity: "high",
    tags: ["data-collection", "privacy-violation", "identity-theft"]
  }
];

export const mockStats = {
  activeReports: 247,
  contributors: 1243,
  avgResponseTime: 2.4, // hours
  resolutionRate: 94, // percentage
  recentTrends: {
    suspicious: 64,
    badExperience: 36,
    verified: 45,
    resolved: 38,
    pending: 17
  },
  topLocations: [
    { name: "New York", count: 42 },
    { name: "London", count: 38 },
    { name: "Toronto", count: 31 },
    { name: "Sydney", count: 27 },
    { name: "Singapore", count: 25 }
  ],
  severityDistribution: {
    high: 45,
    medium: 35,
    low: 20
  }
};