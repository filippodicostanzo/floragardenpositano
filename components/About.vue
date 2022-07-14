<template>
  <section class="about" id="about">
    <div class="container pt-10 pb-10">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <h2 class="title-section">
            {{ $t('title.about') }}
          </h2>
          <p class="text-dark" v-if="this.$i18n.locale==='it'">Siamo un team di giardinieri e fioristi appassionati
            nella ridente Positano.
            Tutto ciò ha origine sul finire degli anni ’80 quando Aldo decise di lasciare il suo lavoro come cameriere e
            intraprendere una nuova avventura. Le anziane signore di Positano aspettavano impazienti il suo arrivo a
            bordo della vecchia ape 50 per portare un po’ di colore per le vie della bella città e nelle proprie
            case.</p>
          <p class="text-dark" v-if="this.$i18n.locale==='it'">Nel ’91 Aldo aprì il negozio “Aldo Fiori e Piante”,
            quello che poi diventerà la
            “Floragarden Positano” con l’aiuto di moglie e figli.
            È dagli anni 2000 che ci occupiamo anche di eventi esclusivi come matrimoni e feste nelle più belle location
            della Costiera Amalfitana oltre che della cura del verde in ville private e alberghi. </p>


          <p class="text-dark" v-if="this.$i18n.locale==='en'">We are a team of passionate gardeners and florists,
            located in Positano. In the late 1980s Aldo decided to quit his job as a waiter and start a new adventure.
            The elderly ladies of Positano were waiting impatiently for him to arrive aboard the old ape 50 bringing
            some color through the streets of the beautiful city and into their houses.</p>
          <p class="text-dark" v-if="this.$i18n.locale==='en'">In 1991 Aldo opened the "Aldo Fiori e Piante" shop, later
            called "Floragarden Positano" with the help of his wife and children. Since the 2000s we have also been
            dealing with exclusive events such as weddings and parties in the most beautiful locations on the Amalfi
            Coast as well as taking care of the greenery in private villas and hotels. </p>

        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
          <div class="image-container position-relative">
            <nuxt-img src="/images/box-about-01.webp" format="webp" loading="lazy"></nuxt-img>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
}
</script>
