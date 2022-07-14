export default {
  i18n: {
    lazy: true,
    locales: [
      {
        name: 'Italiano',
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },


    ],
    langDir: 'lang/',
    defaultLocale: 'it',
    parsePages: false,   // Disable babel parsing
    pages: {
    },
    vueI18nLoader: true,
    loadLanguagesAsync: true,
    seo: true
  },
}
