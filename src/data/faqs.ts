import { BRAND } from './brand';
import { getLocationHubContent } from './locationHubContent';

export interface FAQ {
  question: string;
  answer: string;
}

export const GENERIC_FAQS: FAQ[] = [
  {
    question: "Do you charge a call-out fee?",
    answer: `No, ${BRAND.brandName} never charges a call-out fee. You only pay for the work we actually carry out, and we confirm the price before we begin.`,
  },
  {
    question: "How quickly can you reach a Stockport address in an emergency?",
    answer: `Our engineers are based locally, so we typically arrive within 60 to 90 minutes anywhere across ${BRAND.serviceAreaLabel}. Response times may vary slightly during heavy traffic on the A6 or M60, but we always prioritise genuine emergencies.`,
  },
  {
    question: "Are you available outside normal working hours?",
    answer: `Yes, we operate a genuine 24/7 emergency service covering Stockport, Cheadle, Bramhall, Hazel Grove, Marple and the surrounding Cheshire area. Call ${BRAND.phoneFormatted} any time, day or night.`,
  },
  {
    question: "How much does it cost to unblock a drain in Stockport?",
    answer: "The price depends on the severity and location of the blockage, as well as access conditions. We always provide a clear, fixed quote before starting work so there are no unexpected charges. Most straightforward domestic blockages are resolved at a competitive flat rate.",
  },
  {
    question: "What does a standard service visit include?",
    answer: "Every visit includes a thorough diagnosis of the problem, a check of access points and manholes, clearance of the blockage where possible, and practical advice on preventing future issues. If we spot a deeper structural concern, we will explain your options honestly.",
  },
  {
    question: "Do you work with landlords and businesses in the Stockport area?",
    answer: "Absolutely. We support homeowners, landlords, letting agents and commercial clients across Stockport and Cheshire, including restaurants along the A6, offices in the town centre, retail units in Merseyway, and managed residential blocks.",
  },
  {
    question: "Is your work guaranteed?",
    answer: "Yes. All drainage work carried out by our engineers is fully guaranteed. If a problem we have resolved returns within the guarantee period, we come back at no additional cost.",
  },
];

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you clear a blocked drain?",
      answer: "Most blocked drains can be cleared within 1-2 hours of our arrival. For more complex blockages, we'll provide a clear timeframe after initial assessment.",
    },
    {
      question: "What causes drains to become blocked?",
      answer: "Common causes include fat and grease buildup, hair accumulation, food waste, tree root ingress, and foreign objects. We can identify the exact cause using CCTV inspection.",
    },
    {
      question: "Will clearing a blocked drain damage my pipes?",
      answer: "No, our professional equipment and techniques are designed to clear blockages without damaging your pipes. We use appropriate methods for different pipe materials.",
    },
  ],
  "cctv-drain-surveys": [
    {
      question: "What does a CCTV drain survey show?",
      answer: "A CCTV survey shows the internal condition of your drains, identifying blockages, cracks, root ingress, collapsed sections, and other issues with detailed footage.",
    },
    {
      question: "Do I need a drain survey before buying a house?",
      answer: "We strongly recommend a pre-purchase drain survey. It can reveal hidden issues that could cost thousands to repair, giving you negotiating power or peace of mind.",
    },
    {
      question: "How long does a CCTV drain survey take?",
      answer: "A typical residential survey takes 1-2 hours. You'll receive a detailed report with footage showing the condition of your drainage system.",
    },
  ],
  "drain-jetting": [
    {
      question: "Is high-pressure drain jetting safe for old pipes?",
      answer: "Yes, when performed by professionals. We adjust the water pressure based on the pipe material and condition to ensure safe and effective cleaning.",
    },
    {
      question: "How often should drains be jetted?",
      answer: "For most residential properties, annual or bi-annual jetting helps prevent blockages. Commercial kitchens may require more frequent maintenance due to grease buildup.",
    },
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to an emergency?",
      answer: `We aim to arrive within 1-2 hours for emergency callouts across ${BRAND.serviceAreaLabel}. Call ${BRAND.phoneFormatted} for immediate assistance.`,
    },
    {
      question: "Do you charge extra for out-of-hours emergencies?",
      answer: "We offer competitive fixed pricing for all work, including emergency callouts. We'll provide a clear quote before starting any work.",
    },
  ],
};

export function getServiceFAQs(serviceSlug: string): FAQ[] {
  const serviceFaqs = SERVICE_FAQS[serviceSlug] || [];
  return [...serviceFaqs, ...GENERIC_FAQS];
}

export function getLocationFAQs(locationName: string): FAQ[] {
  // Map location name to slug for content lookup
  const locationSlug = locationName.toLowerCase().replace(/\s+/g, '-');
  const hubContent = getLocationHubContent(locationSlug);

  if (hubContent && hubContent.localFAQs) {
    return hubContent.localFAQs as FAQ[];
  }

  // Fallback to generic location FAQs if location-specific content not found
  return [
    {
      question: `Do you cover ${locationName}?`,
      answer: `Yes, ${BRAND.brandName} provides comprehensive drainage services throughout ${locationName} and the surrounding locations of ${BRAND.serviceAreaLabel}.`,
    },
    {
      question: `How quickly can you get to ${locationName}?`,
      answer: `We typically arrive within 1-2 hours for emergency callouts in ${locationName}. For scheduled appointments, we offer flexible booking times.`,
    },
    {
      question: `What drainage services do you offer in ${locationName}?`,
      answer: `We offer all our services in ${locationName} including drain unblocking, CCTV surveys, drain jetting, repairs, and 24/7 emergency callouts.`,
    },
  ];
}

export const PAGE_FAQS: FAQ[] = [
  {
    question: "How quickly can you respond to an emergency in the Stockport area?",
    answer: 'Our engineers are based locally, so we typically reach addresses across <a href="/locations/stockport/" class="text-primary hover:underline">Stockport</a>, Cheadle, Bramhall and the wider Cheshire area within 60 to 90 minutes. Our <a href="/services/emergency-drain-services/" class="text-primary hover:underline">emergency drainage team</a> operates around the clock, including bank holidays.'
  },
  {
    question: "Is there a call-out charge?",
    answer: "There is no call-out fee at all. We provide a fixed, written quote before any work begins, so you know exactly what you will pay. If you decide not to proceed, you owe us nothing."
  },
  {
    question: "Which parts of Stockport and Cheshire do you serve?",
    answer: 'We cover the whole of <a href="/locations/stockport/" class="text-primary hover:underline">Stockport</a> borough plus surrounding towns within roughly 20 miles, including Cheadle, Bramhall, Hazel Grove, Marple, Reddish, Edgeley, <a href="/locations/manchester/" class="text-primary hover:underline">Manchester</a>, <a href="/locations/salford/" class="text-primary hover:underline">Salford</a>, and <a href="/locations/altrincham/" class="text-primary hover:underline">Altrincham</a>. See <a href="/locations/" class="text-primary hover:underline">all locations we cover</a>.'
  },
  {
    question: "How do I pay for the work?",
    answer: "We accept cash, debit and credit cards (including contactless), and bank transfers. Payment is collected once the job is finished and you are satisfied with the result."
  },
  {
    question: "Do you handle drainage problems for businesses in Stockport?",
    answer: 'Yes. We work with restaurants, cafes and takeaways along the A6, offices in Stockport town centre, retail units in the Merseyway centre, and industrial premises throughout Cheshire. Services include <a href="/services/blocked-drains/" class="text-primary hover:underline">blockage clearance</a>, <a href="/services/drain-repairs/" class="text-primary hover:underline">pipe repairs</a>, and scheduled <a href="/services/drain-jetting/commercial-jetting/" class="text-primary hover:underline">commercial drain jetting</a> to keep kitchens and washrooms compliant.'
  },
  {
    question: "When should I book a CCTV drain survey?",
    answer: 'A <a href="/services/cctv-drain-surveys/" class="text-primary hover:underline">CCTV drain survey</a> is recommended whenever you experience recurring blockages, are buying a property (especially older Stockport housing with Victorian clay pipes), or need evidence for an insurance claim. We also offer dedicated <a href="/services/cctv-drain-surveys/pre-purchase-survey/" class="text-primary hover:underline">pre-purchase surveys</a> tailored for homebuyers.'
  },
  {
    question: "What can I do to reduce the risk of blocked drains?",
    answer: 'Avoid putting fats, oils and grease down your kitchen sink, fit mesh strainers over plugholes, and never flush wet wipes or sanitary items. Periodic professional <a href="/services/drain-jetting/" class="text-primary hover:underline">drain jetting</a> removes buildup before it causes a blockage. Our <a href="/blog/prevent-blocked-drains-kitchen/" class="text-primary hover:underline">kitchen drain maintenance guide</a> covers this in detail.'
  },
  {
    question: "Are your engineers insured and experienced?",
    answer: 'Every engineer on our team is fully insured, trained in the latest drainage techniques, and equipped with professional-grade tools. We have extensive experience working with the varied pipework found across Stockport, from Victorian clay to modern PVC. Find out more <a href="/about/" class="text-primary hover:underline">about our team</a>.'
  }
];

/** Alias used by the homepage */
export const HOMEPAGE_FAQS = PAGE_FAQS;
