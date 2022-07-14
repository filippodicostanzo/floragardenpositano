<template>
  <div class="container-fluid">
    <div class="row mt-5 mb-5 position-relative align-items-center instagram">

      <a href="https://www.instagram.com/giuseppesting_florist/" target="_blank" class="instagram-username fade-up">
        <h3>@giuseppesting_florist</h3>
      </a>

      <div class="col-md-2 col-6" v-for="item in items" :key="item.link">
        <a :href="item.link" target="_blank">
          <img class="instagram-image" :src="item.image" alt="Instagram Image">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstagramFeed",
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.getInstagramFeed();
  },
  methods: {
    async getInstagramFeed() {
      const res = await fetch('https://php.localidautore.it/rapidinsta/index.php?account=1967690633&count=6');
      this.items = await res.json();
      console.log(this.items);
    },
  }
}
</script>

<style scoped>
</style>
