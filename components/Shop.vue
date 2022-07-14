<template>
  <section class="shop" id="shop">
    <div class="container pt-10 pb-10">
      <div class="row d-flex align-items-center  flex-row-reverse">
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
          <h2 class="title-section text-white">
            {{ $t('title.shop') }}
          </h2>
          <p class="text-white" v-if="this.$i18n.locale==='it'">Entrare nel punto vendita della Flora Garden è
            un’intensa gioia agli occhi, ma anche
            all’olfatto. Presso il nostro fioraio a Positano fanno bella mostra di sé piante rare e affascinanti, fiori
            sempre freschi provenienti da ogni dove, ma soprattutto composizioni artistiche partorite dall’estro e dalla
            spiccata fantasia dei nostri fioristi. </p>
          <p class="text-white" v-if="this.$i18n.locale==='it'">T’innamorerai passeggiando in mezzo alla nostra
            esposizione di fiori, che somiglia
            piuttosto a una mostra d’arte, e non avrai difficoltà a trovare l’articolo che fa per te o per la persona a
            te cara. Presso il punto vendita di via Marconi troverai un’assistenza costante da parte del nostro staff,
            sarai sapientemente guidato nella scelta dei fiori e ammaliato con storie e racconti sul significato di
            ognuno.</p>


          <p class="text-white" v-if="this.$i18n.locale==='en'">Get into the Flora Garden’s store gives an intense
            joy to the eyes, but also to the smell. In our florist in Positano they are proudly displayed rare and
            fascinating plants, always fresh flowers from everywhere, but especially artistic compositions born out by
            the inspiration and strong imagination of our florists. </p>
          <p class="text-white" v-if="this.$i18n.locale==='en'">You’ll fall in love walking through our flowers
            exposure, resembling rather an art exhibition, and you will not have trouble finding the article for
            yourself or for someone dear to you. In the shop of Marconi’s street you’ll find constant assistance from
            our staff, you will be expertly guided in the choice of flowers and charmed with stories and tales about the
            meaning of each.</p>

        </div>
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="image-container position-relative">
            <nuxt-img src="/images/box-shop-01.webp" format="webp" loading="lazy"></nuxt-img>
          </div>
        </div>
      </div>


    </div>

  </section>
</template>
<script>
export default {
  name: 'Shop',
}
</script>
