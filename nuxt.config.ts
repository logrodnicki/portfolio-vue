// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],

  devtools: { enabled: true },

  css: ['~/assets/style/main.scss'],
  compatibilityDate: '2025-07-15',

  // buildModules: [
  //   '@nuxtjs/style-resources',
  // ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/style/_colors.scss" as *;',
        },
      },
    },
  },

  typescript: {
    typeCheck: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
});
