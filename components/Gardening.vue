<template>
  <section class="gardening" id="gardening">
    <div class="container pt-10 pb-10">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <h2 class="title-section">
            {{ $t('title.gardening') }}
          </h2>
          <p class="text-dark" v-if="this.$i18n.locale==='it'">Flora Garden, fioraio a Positano, si occupa di tutto ciò
            che riguarda la cura del verde. Effettuiamo
            tutti i tipi di lavori, da quelli più semplici ai più complessi: si va dalle routinarie operazioni di
            manutenzione di giardini privati e di aree di verde pubblico alle stagionali potature, dall’installazione di
            impianti di irrigazione alla più creativa progettazione e realizzazione di giardini e terrazzi. </p>
          <p class="text-dark" v-if="this.$i18n.locale==='it'">Lavoriamo sia presso privati che presso enti pubblici e
            grandi aziende: ad esempio, scelgono la nostra
            professionalità e bravura molte rinomate strutture alberghiere della Costiera Amalfitana.
            Il più bel regalo che tu possa fare e possa farti è un fiore.</p>


          <p class="text-dark" v-if="this.$i18n.locale==='en'">The last of our services, but not least, is the
            gardening: Floragardenaldo, florist in Positano, deals with everything related to the green’s care. We carry
            out all kinds of works, from the simplest to the most complex, ranging from routine maintenance of private
            gardens and public green areas to seasonal pruning, from the irrigation systems installation to more
            creative design and implementation of gardens and terraces. </p>
          <p class="text-dark" v-if="this.$i18n.locale==='en'">We work both in private and in public bodies and large
            companies. For example, many well-known hotels in the Amalfi Coast choose our professionalism and skills.
            The best gift that you can do and can get you is a flower.
            Among Floragardenaldo in Positano you will have no trouble finding your….</p>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
          <div class="image-container position-relative">
            <nuxt-img src="/images/box-gardening-01.webp" format="webp" loading="lazy"></nuxt-img>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Gardening',
}
</script>
