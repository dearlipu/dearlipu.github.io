// Backwards-compatible site data used by supporting legal pages and the sitemap.
// Homepage content is intentionally split into `config/site.ts` and `config/content.ts`.
import { site } from "./config/site";

export const siteConfig = {
  siteUrl: site.siteUrl,
  name: site.name,
  title: "Visual stories, systems, and digital work.",
  description: site.description,
  accentColor: "#7657ff",
  social: {
    email: site.email,
    whatsapp: site.whatsapp,
    instagram: site.social[0].href,
    twitter: site.social[1].href,
    youtube: site.social[2].href,
  },
};
