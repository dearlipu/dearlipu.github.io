import type { PricingPlan } from "../types/site";

export const plans: PricingPlan[] = [
  {
    name: "Quick Start",
    audience: "For one clear task or a small content need.",
    badge: null,
    discount: "10% OFF",
    icon: "sparkles",
    projectPrice: "₹1,999+",
    monthlyPrice: "₹9,999/mo",
  },
  {
    name: "Growth",
    audience: "For brands that need regular content and campaign support.",
    badge: "Most Popular",
    discount: "15% OFF",
    icon: "heart",
    projectPrice: "₹5,999+",
    monthlyPrice: "₹19,999/mo",
  },
  {
    name: "Professional",
    audience: "For growing teams that need a reliable creative partner.",
    badge: null,
    discount: "20% OFF",
    icon: "shield",
    projectPrice: "₹17,999+",
    monthlyPrice: "₹39,999/mo",
  },
];

export const featureData = {
  project: [
    [
      "One design or video deliverable",
      "Two concept options",
      "Two revision rounds included",
      "Final files ready to publish",
    ],
    [
      "A launch campaign or content set",
      "Multiple design and video assets",
      "Two revision rounds per asset",
      "Source files included",
    ],
    [
      "A full campaign or content system",
      "Design, video, and motion support",
      "Priority project timeline",
      "Planning and source files included",
    ],
  ],
  monthly: [
    [
      "Up to 4 deliverables each month",
      "One active request at a time",
      "Design and short-form video",
      "Pause or resume anytime",
    ],
    [
      "Up to 8 deliverables each month",
      "Two active requests",
      "More formats and priority delivery",
      "Weekly progress updates",
    ],
    [
      "Up to 16 deliverables each month",
      "Two active requests at a time",
      "Design, video, and motion support",
      "Monthly planning and priority support",
    ],
  ],
};

