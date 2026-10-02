import { siteMeta } from "./data/site";
import { services } from "./data/services";
import type { SiteConfig } from "./types/site";

export const siteConfig: SiteConfig = {
  ...siteMeta,
  services,
};
