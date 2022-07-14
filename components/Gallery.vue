<template>
<section id="gallery" class="gallery">
   <div class="container pt-10 pb-10">
        <div class="row">
            <div class="col-12">
        <h2 class="title-section text-center">
          {{$t('title.gallery')}}
        </h2>
            </div>
        </div>
  <div class="row mb-5" id="lightgallery">

    <div v-for="image in items" class="col-md-4 p-3" :data-src="image.src" :key="image.src">
      <a :href="image.src">
        <div class="lg-thumbnails"
             :style="{'background-image': 'url(' + image.src+')'}">
          <div class="rollover">
            <div class="zoomBtn">
              <span><font-awesome-icon :icon="['fas', 'search-plus']"/></span></div>
          </div>
        </div>
      </a>
    </div>

</div>
  </div>
  </section>
</template>

<script>
export default {
  name: "Gallery.vue",
  props: ['gallery'],
  data() {
    return {
      lgOptions: {
        mode: 'lg-fade',
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        selector: '.col-md-4'
      },
      items: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.createGallery();
    }, 1)
  },
  methods: {
    createGallery() {
      var cache = {};
      var images = [];
      if (this.gallery === 'weddings') {
        images = require.context('../static/images/gallery/weddings/', false, /\.webp$/);
      }

      let imagesArray = Array.from(images.keys());
      let constructed = [];
      this.items = this.constructItems(imagesArray, constructed);
      const el = document.getElementById('lightgallery', this.lgOptions);
      setTimeout(() => {
        window.lightGallery(el)
      }, 100);
    },
    constructItems(fileNames, constructed) {
      fileNames.forEach(fileName => {
        constructed.push({
          'src': '/images/gallery/' + this.gallery + fileName.substr(1)
        })
      });
      return constructed;
    }
  }
}
</script>

<style scoped>
</style>