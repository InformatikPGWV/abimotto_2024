// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, //might be needed for nuxi generate --> change to true
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss", //
    "@nuxtjs/robots",
  ],
  css: [
    "@/assets/fonts/fonts.css", //
  ],
  robots: {
    configPath: "robots.config.ts",
  },
});
