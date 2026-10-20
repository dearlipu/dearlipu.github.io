// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sauravpanda.is-a.dev",

  vite: {
    plugins: [tailwindcss()],
  },
});
