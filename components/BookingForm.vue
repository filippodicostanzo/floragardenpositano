<template>
  <section id="booking" class="booking">
    <div class="wrapper position-relative">

      <div class="container pt-10 pb-10 booking-container">

        <div class="row">
          <div class="col-12">
            <h2 class="title-section text-center">
              {{ $t('title.booking') }}
            </h2>
          </div>
        </div>

        <form>


          <div class="row pt-3">
            <div class="col-lg-6">
              <div class="form-group" :class="{error: validation.hasError('form.firstname')}">
                <div class="content">
                  <input type="text" class="form-control" v-model="form.firstname" :placeholder="$t('form.firstname')"/>
                </div>
                <div class="message">
                  {{ validation.firstError('form.firstname') }}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group" :class="{error: validation.hasError('form.lastname')}">
                <div class="content">
                  <input type="text" class="form-control" v-model="form.lastname" :placeholder="$t('form.lastname')"/>
                </div>
                <div class="message">
                  {{ validation.firstError('form.lastname') }}
                </div>
              </div>
            </div>
          </div>

          <div class="row pt-3">
            <div class="col-lg-6 col-12">
              <div class="form-group" :class="{error: validation.hasError('form.email')}">
                <div class="content">
                  <input type="text" class="form-control" v-model="form.email" placeholder="Email"/>
                </div>
                <div class="message">
                  {{ validation.firstError('form.email') }}
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="form-group" :class="{error: validation.hasError('form.country')}">
                <div class="content">
                  <input type="text" class="form-control" v-model="form.country" :placeholder="$t('form.country')"/>
                </div>
                <div class="message">
                  {{ validation.firstError('form.country') }}
                </div>
              </div>
            </div>
          </div>

          <div class="row pt-3">
            <div class="col-lg-4 col-12">

              <client-only>
                <div class="form-group" :class="{error: validation.hasError('form.date')}">
                  <div class="content">
                    <date-picker format="DD-MM-YYYY" v-model="form.date" :placeholder="$t('form.date')"
                                 input-class="form-control"/>
                  </div>
                  <div class="message">
                    {{ validation.firstError('form.date') }}
                  </div>
                </div>
              </client-only>

            </div>
            <div class="col-lg-4 col-12">
              <div class="form-group" :class="{error: validation.hasError('form.location')}">
                <div class="content">
                  <input type="text" class="form-control" v-model="form.location" :placeholder="$t('form.location')"/>
                </div>
                <div class="message">
                  {{ validation.firstError('form.location') }}
                </div>
              </div>
            </div>


            <div class="col-lg-4 col-12">
              <div class="form-group" :class="{error: validation.hasError('form.guests')}">
                <div class="content">
                  <input type="text" class="form-control" v-model="form.guests" :placeholder="$t('form.guests')"/>
                </div>
                <div class="message">
                  {{ validation.firstError('form.guests') }}
                </div>
              </div>
            </div>


          </div>
          <div class="row pt-3">
            <div class="col-12">
              <textarea rows="6" class="form-control" v-model="form.message"
                        :placeholder="$t('form.message')"/>
            </div>
          </div>
          <div class="row pt-3">
            <div class="form-group text-center" :class="{error: validation.hasError('form.acceptance')}">
              <input type="checkbox" v-model="form.acceptance"/> <span> {{ $t('form.check') }}</span>
              <p class="small">
                {{ $t('form.privacy') }} {{ $config.siteProperty }} - {{ $config.siteAddress }}
              </p>
              <div class="message">{{ validation.firstError('form.acceptance') }}</div>
            </div>
          </div>
          <div class="row pt-3">
            <div class="form-group m-auto">
              <div class="actions text-center">
                <button type="submit" class="btn btn-outline-secondary" @click.prevent="send"> {{ $t('form.send') }}
                </button>
              </div>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-12">
              <div class="alert-info" v-if="loadingMessage"><p>Attendi...</p></div>
              <div class="alert-success" v-if="sentMessage"><p>Il Messaggio è stato inviato</p></div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>

<script>

import {Validator} from 'simple-vue-validator'

export default {
  name: "booking.vue",

  data() {
    return {
      checkIn: new Date(),
      checkOut: new Date(new Date().setDate(new Date().getDate() + 7)),

      form: {
        firstname: '',
        lastname: '',
        location: '',
        country: '',
        city: '',
        email: '',
        phone: '',
        message: '',
        guests: '',
        date: '',
        acceptance: []
      },
      sentMessage: false,
      loadingMessage: false,
    }
  },

  validators: {
    'form.firstname': function (value) {
      return Validator.value(value).required(this.$i18n.t('form.required'));
    },
    'form.lastname': function (value) {
      return Validator.value(value).required(this.$i18n.t('form.required'));
    },
    'form.email': function (value) {
      return Validator.value(value).required(this.$i18n.t('form.required')).email(this.$i18n.t('form.email'));
    },
    'form.country': function (value) {
      return Validator.value(value).required(this.$i18n.t('form.required'));
    },
    'form.guests': function (value) {
      return Validator.value(value).required(this.$i18n.t('form.required'));
    },
    'form.location': function (value) {
      return Validator.value(value).required(this.$i18n.t('form.required'));
    },
    'form.date': function (value) {
      return Validator.value(value).required(this.$i18n.t('form.required'));
    },
    'form.acceptance': function (value) {
      return Validator.value(value).required(this.$i18n.t('form.acceptance')).size(1);
    },

  },
  mounted() {

    const elem = document.getElementById("hdpicker-mobile");
    if (elem != null) {
      elem.addEventListener("click", () => {
        $nuxt.$emit('back-to-top');
      });
    }
    /*document.getElementById("hdpicker-mobile")
    });*/


    /*  this.checkIn = this.convertDate(this.$route.query.checkin);
      this.checkOut = this.convertDate(this.$route.query.checkout);
      this.form.guests = this.$route.query.guests;

      console.log(this.$route.query.checkin);*/
  },
  methods: {

    checkOutEvent(date) {
      console.log(date);
      if (date !== null) {
        $nuxt.$emit('go-to-div');
      }
    },

    async send() {
      this.loadingMessage = true;

      try {

        const token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token);


        this.$validate().then((success) => {
          if (success) {


            const qs = require('querystring');

            const formatdate = this.convertDate(this.form.date);
            let data = {
              sender: process.env.CONTACT_FORM_MAIL_SENDER,
              receiver: process.env.CONTACT_FORM_MAIL_RECEIVER,
              namesender: 'Contact Form ' + process.env.SITE_PROPERTY,
              name: `${this.form.firstname} ${this.form.lastname}`,
              email: this.form.email,
              subject: 'Richiesta Prenotazione',
              message: `<p>Nome: ${this.form.firstname}</p><p>Cognome: ${this.form.lastname}</p><p>Email: ${this.form.email}</p><p>Nazione: ${this.form.country}</p><p>Data Evento: ${formatdate}</p><p>Location: ${this.form.location}</p><p>Numero Ospiti: ${this.form.guests}</p><p>Message: ${this.form.message}</p>`
            };

            console.log(data);

            this.$axios.$post('https://php.localidautore.it/phpmailer/', qs.stringify(data),
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }).then((message) => {
              this.loadingMessage = false;
              this.sentMessage = true;
            }).catch((error) => {
              alert(error);
            });


          }
        })


      } catch (e) {

      }


    },

    convertDate(date) {
      return [
        this.padTo2Digits(date.getDate()),
        this.padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('/');
      //return new Date(parseInt(date.substr(6, 4)), parseInt(date.substr(3, 2)) - 1, parseInt(date.substr(0, 2)))
    },

    padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }

  },


}
</script>

<style scoped>

</style>
