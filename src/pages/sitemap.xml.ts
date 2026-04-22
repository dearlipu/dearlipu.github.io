import type { APIRoute } from "astro";
import { siteConfig } from "../config";

const staticRoutes = ["/", "/faq", "/privacy", "/terms", "/copyright"];
const projectRoutes = ["/project1", "/project2", "/project3"];

function toUrl(path: string) {
  return `${siteConfig.siteUrl}${path}`;
}

export const GET: APIRoute = () => {
  const urls = [...staticRoutes, ...projectRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${toUrl(path)}</loc>
  </url>`
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