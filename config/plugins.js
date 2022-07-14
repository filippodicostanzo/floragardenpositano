export default {
  plugins: [
    {
      src: '@/plugins/aos.js',
      mode: 'client',
    },

    {
      src: '@/plugins/jarallax.js',
      mode: 'client'
    },

    {
      src: '@/plugins/lightgallery.js',
      mode: 'client'
    },
    {
      src: "~/plugins/simple-validator.js",
      ssr: true
    },
    {
      src: "~/plugins/vue-datepicker.js",
      ssr: false
    },
    {
      src: '@/plugins/vue-slick-carousel.js',
      ssr: true
    }


  ]
}
