<template>
  <section class="header" id="top">
    <div class="container-fluid">
      <div class="navbar">
        <div class="logo">
          <nuxt-link to="/">

           <img :src="require('static/images/logo-text.svg')" width="300">
          </nuxt-link>
        </div>

        <MainMenu />

        <div class="lang-box">
          <LangBox />
        </div>

        <div class="mobile-menu-button">
          <button @click="$nuxt.$emit('open-sidemenu')">
            <font-awesome-icon :icon="['fas', 'bars']"/>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import menu from '~/static/data/menu.json'
export default {
  name: "Header.vue",


}
</script>

<style scoped>

</style>
