import cookies from "./config/cookies";
import fontawesome from "./config/fontawesome";
import i18n from './config/i18n';
import plugins from "./config/plugins";


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'floragardenpositano',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Italiana&family=Cantata+One&family=Barlow:wght@100;300;400;700;900&display=swap'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  ...plugins,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/fontawesome',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'nuxt-cookie-control',
    ['nuxt-gmaps', {key: process.env.GOOGLE_MAPS_API_KEY}],
    ['vue-scrollto/nuxt', {duration: 1000}],
    ['@nuxtjs/recaptcha', {
      hideBadge: true,
      siteKey: process.env.RECAPTCHA_SITE_KEY,
      version: 3,  // Site key for requests
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  ...i18n,
  ...fontawesome,
  ...cookies,


  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: process.env.RECAPTCHA_SITE_KEY // for example
    },
    siteDomain: process.env.SITE_DOMANIN || '',
    siteProperty: process.env.SITE_PROPERTY || '',
    siteAddress: process.env.SITE_ADDRESS || '',
    siteEmail: process.env.SITE_EMAIL || '',
    sitePhone1: process.env.SITE_PHONE_1 || '',
    sitePhone2: process.env.SITE_PHONE_2 || '',
    siteVatID: process.env.SITE_VATID || '',
    linkFacebook: process.env.LINK_FACEBOOK || '',
    linkInstagram: process.env.LINK_INSTAGRAM || '',
    linkYoutube: process.env.LINK_YOUTUBE || '',
    linkTwitter: process.env.LINK_TWITTER || '',
    linkTripAdvisor: process.env.LINK_TRIPADVISOR || '',
    linkCondeNast: process.env.LINK_CONDENAST || '',
    linkBooking: process.env.LINK_BOOKING || '',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null
  }
}
