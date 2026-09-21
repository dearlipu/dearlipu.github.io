import { siteMeta } from "./data/site";
import { services } from "./data/services";
import type { SiteConfig } from "./types/site";

export const siteConfig: SiteConfig = {
  ...siteMeta,
  services,
};

export * from "./types/site";
export { siteMeta } from "./data/site";
export { services } from "./data/services";
export { plans, featureData } from "./data/pricing";
export { testimonials, clientAvatars, satisfactionMetric } from "./data/reviews";
export { faqList } from "./data/faq";
export { heroMetrics, availabilityMessages } from "./data/hero";
export { aboutHighlights } from "./data/about";
