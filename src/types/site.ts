export interface SocialLinks {
  email: string;
  whatsapp: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  buymeacoffee?: string;
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  includes: string[];
}

export interface PricingPlan {
  name: string;
  audience: string;
  badge: string | null;
  discount: string;
  icon: "sparkles" | "heart" | "shield";
  projectPrice: string;
  monthlyPrice: string;
}

export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface HeroMetric {
  value: string;
  suffix: string;
  label: string;
}

export interface AvailabilityMessage {
  text: string;
  unavailable: boolean;
}

export interface AboutHighlight {
  title: string;
  points: string[];
}

export interface SiteConfig {
  siteUrl: string;
  siteName: string;
  siteTitle: string;
  googleSiteVerification: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  accentColor: string;
  social: SocialLinks;
  aboutMe: string;
  skills: string[];
  services: ServiceItem[];
}

