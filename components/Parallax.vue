<template>
  <section class="parallax">
    <div class="first jarallax">
      <nuxt-img :src="image" format="webp" loading="lazy" class="jarallax-img"></nuxt-img>
      <h1 v-if="slogan" v-html="slogan.it"></h1>
    </div>
  </section>

</template>
<script>
export default {
  name: 'Parallax',
  props: ['image', 'slogan'],
}
</script>
