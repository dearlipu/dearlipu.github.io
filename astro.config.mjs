// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  export default {
  site: 'https://dearlipu.github.io',
  integrations: [sitemap()],
};
  vite: {
    plugins: [tailwindcss()],
  },
});
