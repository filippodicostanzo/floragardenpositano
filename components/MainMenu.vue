<template>
<div class="main-menu">
    <nav v-if="!mobile" class="desktop-menu">
      <div class="container d-flex">
        <ul class="d-flex nav">
          <li v-for="item in menu" :key="item.slug">
            <a v-scroll-to="'#'+ item.slug" href="#" >{{$t('menu.'+item.name)}}</a>
          </li>
        </ul>
      </div>
    </nav>

    <nav v-if="mobile" class="mobile-menu">
      <client-only>
<!--        <b-nav-item>
          <nuxt-link :to="localePath('/')" tag="a"><span @click="$nuxt.$emit('close-sidemenu')" exact>Home</span>
          </nuxt-link>
        </b-nav-item>-->
        <b-nav-item v-for="item in menu" :key="item.slug">
          <a v-scroll-to="'#'+ item.slug" href="#" ><span @click="$nuxt.$emit('close-sidemenu')" exact>{{$t('menu.'+item.name)}}</span>
         </a>
        </b-nav-item>
      </client-only>
    </nav>
  </div>

</template>

<script>
    import menu from '~/static/data/menu.json'
    export default {
        name: "MainMenu",
        props: ['mobile'],
        data() {
            return {
                menu: [],            }
        },
        mounted() {
            this.menu = menu.menu;
            console.log(this.mobile);
        }
    }

</script>

<style scoped>

</style>
