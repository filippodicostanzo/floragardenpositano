<template>
  <div class="lang-box">
    <ul>
      <li>
        <font-awesome-icon :icon="['fas', 'globe-europe']"/>
      </li>
      <li>
        <nuxt-link :to="switchLocalePath('it')" exact>IT</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="switchLocalePath('en')" exact>EN</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LangBox.vue"
}
</script>

<style scoped>
</style>