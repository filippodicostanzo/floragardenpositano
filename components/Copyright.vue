<template>
  <section class="copyright text-center pb-3 pt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <span class="cursor-pointer" @click="show('privacy')">Privacy Policy</span> -
          <span class="cursor-pointer" @click="show('cookie')">Cookie Policy</span>
        </div>
        <div class="col-md-4">
          <p>Made with
            <font-awesome-icon :icon="['fas', 'heart']"/>
            <a target="blank_" href="https://www.localidautore.it">by Locali D'Autore</a></p>
        </div>

        <div class="col-md-4">
          <p>P. IVA {{$config.siteVatID}} </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import ModalPrivacy from "./ModalPrivacy";

    export default {
        name: "Copyright",
        methods: {
            show(source) {
                this.$modal.show(ModalPrivacy, {source: source}, {scrollable: true, height: "auto", width: "90%"});
            }

        }
    }
</script>

<style scoped>

</style>
