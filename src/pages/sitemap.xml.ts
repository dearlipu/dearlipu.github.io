import type { APIRoute } from "astro";
import { siteConfig } from "../config";

interface SitemapRoute {
  path: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

const staticRoutes: SitemapRoute[] = [
  { path: "/",            changefreq: "weekly",  priority: 1.0 },
  { path: "/faq",         changefreq: "monthly", priority: 0.8 },
  { path: "/privacy",     changefreq: "yearly",  priority: 0.4 },
  { path: "/terms",       changefreq: "yearly",  priority: 0.4 },
  { path: "/copyright",   changefreq: "yearly",  priority: 0.4 },
  { path: "/portfolio/",  changefreq: "weekly",  priority: 0.9 },
];

const lastmod = new Date().toISOString().split("T")[0];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${siteConfig.siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};