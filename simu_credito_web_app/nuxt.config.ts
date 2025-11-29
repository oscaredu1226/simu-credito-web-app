// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'https://simu-credito-platform-6n2e.onrender.com/api'
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
