export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],

  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'fr',
        name: 'Français'
      }
    ],
    strategy: 'prefix',
    defaultLocale: 'en',
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about',
        fr: '/a-propos',
      },
    },
  }
})