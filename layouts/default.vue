<template>
  <div>
    <Header/>
    <Nuxt/>
    <Footer/>
    <Copyright/>
    <BackToTop/>
    <Sidenav/>
    <CookieControl :locale="this.$i18n.locale"/>
  </div>
</template>

<script>
import ogImage from '../static/images/slider-01.webp';

export default {
  name: "default.vue",
  head() {
    const i18nSeo = this.$nuxtI18nHead({addSeoAttributes: true});
    return {
      title: this.$t('title.website'),

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description')
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('seo.keywords')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage
        },
        ...i18nSeo.meta]
    }
  },

  watch: {

    $route() {


    }
  }
}
</script>

<style scoped>

</style>
