// import { defineNuxtConfig } from "nuxt";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // nitro.presetをfirebaseに指定
  nitro: { preset: "firebase" },
  postcss: {
    plugins: { tailwindcss: {} },
  },
  css: ["~/assets/css/tailwind.css"],
});
