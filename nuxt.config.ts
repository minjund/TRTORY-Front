// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],
  plugins: [{ src: '@/plugins/fontawesome.js' }],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
})
