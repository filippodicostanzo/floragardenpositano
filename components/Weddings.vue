<template>
  <section class="weddings" id="weddings">
    <div class="container pt-10 pb-10">
      <div class="row d-flex align-items-center  flex-row-reverse">
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
          <h2 class="title-section text-white">
            {{ $t('title.weddings') }}
          </h2>
          <p class="text-white" v-if="this.$i18n.locale==='it'">Nello scenario già di per sé magico e suggestivo della
            Costiera Amalfitana noi contribuiamo a creare l’atmosfera da favola che dovrebbe circonfondere
            l’indimenticabile giorno del proprio
            “sì”. A seconda della stagione, della location e del temperamento degli sposi, consigliamo i fiori più
            adatti e gli addobbi floreali che meglio valorizzano ed esaltano gli ambienti. </p>
          <p class="text-white" v-if="this.$i18n.locale==='it'">Ci occupiamo dell’allestimento floreale in chiese, ville
            e alberghi in Costa d’Amalfi e Penisola Sorrentina.
            Dal bouquet della sposa alle composizioni per il ricevimento, tutto è curato nei minimi dettagli per rendere
            ancora più speciale questo giorno importante.</p>


          <p class="text-white" v-if="this.$i18n.locale==='en'">In the magical and picturesque Amalfi Coast’s setting we
            contribute to the fairytale atmosphere that should surround the unforgettable "yes" day. Depending on the
            season, on the location and on the couple’s temperament, we recommend the most appropriate flowers and
            floral arrangements that best enhance the environments. </p>
          <p class="text-white" v-if="this.$i18n.locale==='en'">In addition to the church’s staging, to the decorations
            at the bride’s home and to the decorations in the restaurant, we provide to create an artistic bouquet,
            floreal wreaths and bracelets for both the bride and the bridesmaids.
            In short, that day will be perfect!</p>


        </div>
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="image-container position-relative">
            <nuxt-img src="/images/box-weddings-01.webp" format="webp" loading="lazy"></nuxt-img>
          </div>
        </div>
      </div>


    </div>

  </section>
</template>
<script>
export default {
  name: 'Weddings',
}
</script>
