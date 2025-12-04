// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap"; // 👈 added

// https://astro.build/config
export default defineConfig({
  site: "https://dearlipu.github.io/", // 👈 keep this, add trailing "/"
  base: "/",                            // for username.github.io root
  integrations: [
    sitemap(),                          // 👈 enable sitemap
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
