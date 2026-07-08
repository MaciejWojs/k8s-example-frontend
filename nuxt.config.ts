// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: {
    preset: "bun",
  },
  runtimeConfig: {
    public: {
      baseUrl: "http://localhost:3000",
    },
  },
  modules: ["@nuxt/eslint", "@vueuse/nuxt"],
});
