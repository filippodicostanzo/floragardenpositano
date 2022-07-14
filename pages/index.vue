<template>
  <div>
    <Slider :slides="slides"/>
      <About/>
      <Weddings/>
     <Parallax image="/images/parallax-01.webp" :slogan="slogan[0]"/>
      <Gardening/>
      <Shop/>
      <Parallax image="/images/parallax-02.webp" :slogan="slogan[1]"/>
      <Gallery gallery="weddings"/>
      <Parallax image="/images/parallax-03.webp" :slogan="slogan[2]"/>
      <BookingForm/>
      <Contacts/>
      <InstagramFeed/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      slides: [
        {
          title: {
            it: 'Per un matrimonio memorabile in<br> Costiera Amalfitana',
            en: 'For your memorable wedding<br> on the Amalfi Coast'
          },
          image: require(`~/static/images/slider-01.webp`)
        },

        /*  { title: {it: 'Per un matrimonio memorabile in Costiera Amalfitana', en:'Per un matrimonio memorabile in Costiera Amalfitana'},
         image: require(`~/static/images/slider-02.jpg`)} */
      ],
      slogan: [
        {
          it: 'Un allestimento floreale che esprima <br> l’anima e i sentimenti del matrimonio',
          en: 'A floral arrangement expressing <br> the soul and feelings of marriage'
        },
        {
          it: 'Raccontare le proprie emozioni <br>attraverso i fiori',
          en: 'Tell your emotions <br> through the flowers'
        },
        {
          it: 'T’innamorerai passeggiando in mezzo <br>alla nostra esposizione di fiori',
          en: 'You will fall in love <br>walking through our flower display'
        },
      ]
    }
  },
}
</script>
