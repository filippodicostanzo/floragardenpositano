<template>
  <section class="slider">
    <client-only>
      <VueSlickCarousel v-bind="slickOptions">
        <div class="carousel" v-for="slide in slides" :key="slide.image"
             :style="{'background-image': 'url(' + slide.image + ')'}">
          <h1 class="fade-in-text" v-html="slide.title.it" v-if="$nuxt.$i18n.locale==='it'"></h1>
          <h1 class="fade-in-text" v-html="slide.title.en" v-if="$nuxt.$i18n.locale==='en'"></h1>
        </div>
      </VueSlickCarousel>
    </client-only>
  </section>
</template>

<script>
export default {
  name: "Slider.vue",
  props: ['slides'],

  data() {
    return {
      slickOptions: {
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        arrows: true,
        dots: true,
        fade: true,
      }
    }
  }
}
</script>

<style scoped>


</style>
