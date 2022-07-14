<template>
  <section class="footer pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <img :src="require('static/images/logo.svg')" width="300">
          </div>
        </div>
        <div class="col-12 pt-5">
          <p class="text-center"> {{$config.siteAddress}} </p>
          <p class="text-center">Tel. {{$config.sitePhone1}} <!-- - Cell. {{$config.sitePhone2}} --> </p>
          <p class="text-center">{{$config.siteEmail}} - {{$config.siteDomain}}</p>
        </div>
        <div class="col-12 pt-3">
          <div class="social">
            <ul>
              <li>
                <a :href="`${$config.linkFacebook}`" target="_blank">
                  <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                </a>
              </li>
              <li>
                <a :href="`${$config.linkInstagram}`" target="_blank">
                  <font-awesome-icon :icon="['fab', 'instagram']"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Footer.vue"
  }
</script>

<style scoped>

</style>
