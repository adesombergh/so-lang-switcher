export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      home: 'Home',
      about: 'About'
    },
    fr: {
      welcome: 'Bienvenue',
      home: 'D’accuei',
      about: 'À Propos'
    }
  }
}))
