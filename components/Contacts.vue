<template>
  <section class="contacts" id="contacts">
    <div class="container pt-10 pb-10">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <h2 class="title-section text-white">
            {{ $t('title.contacts') }}
          </h2>
          <ul class="contacts">
            <li>
              <a href="#">
                <div class="icon-container">
                  <font-awesome-icon :icon="['fas', 'map-pin']"/>
                </div>
                Via G. Marconi, 270
              </a>
            </li>
            <li>
              <a href="#">
                <div class="icon-container">
                  <font-awesome-icon :icon="['far', 'compass']"/>
                </div>
                84017 Positano (SA)
              </a>
            </li>
            <li>
              <a :href="`mailto:${$config.siteEmail}`">
                <div class="icon-container">
                  <font-awesome-icon :icon="['fas', 'envelope']"/>
                </div>
                {{ $config.siteEmail }}
              </a>
            </li>
            <li>
              <a href="tel:+39089830515">
                <div class="icon-container">
                  <font-awesome-icon :icon="['fas', 'phone']"/>
                </div>
                {{ $config.sitePhone1 }}
              </a>
            </li>

            <li>
              <a :href="$config.linkFacebook" target="_blank">
                <div class="icon-container">
                  <font-awesome-icon :icon="['fab', 'facebook']"/>
                </div>
                Facebook
              </a>
            </li>

            <li>
              <a :href="$config.linkInstagram" target="_blank">
                <div class="icon-container">
                  <font-awesome-icon :icon="['fab', 'instagram']"/>
                </div>
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
          <GMap
            ref="gMap"
            language="en"
            :cluster="{options: {styles: clusterStyle}}"
            :center="{lat: locations[0].lat, lng: locations[0].lng}"
            :options="{fullscreenControl: false, styles: mapStyle}"
            :zoom="13"
          >
            <GMapMarker
              v-for="location in locations"
              :key="location.id"
              :position="{lat: location.lat, lng: location.lng}"
              @click="currentLocation = location"
            >
              <!-- :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"-->

              <GMapInfoWindow :options="{maxWidth: 300}">
                <div class="text-center">
                   <img :src="require('static/images/logo.svg')" style="width: 100px !important;">
                  <p class="text-center mt-4">Via G. Marconi, 270 <br/> 84017 Positano (SA)</p>
                </div>

              </GMapInfoWindow>
            </GMapMarker>
            <GMapCircle :options="circleOptions"/>
          </GMap>
        </div>
      </div>


    </div>

  </section>
</template>
<script>
export default {
  name: 'Weddings',
  data() {
    return {
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 40.6310109,
          lng: 14.4814231,
        },
      ],/*
                pins: {
                    selected: "data:image/png;base64,iVBORw0KGgo...",
                    notSelected: "data:image/png;base64,iVBORw0KGgo..."
                },*/
      mapStyle: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#3e606f"
            },
            {
              weight: 2
            },
            {
              gamma: 0.84
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              weight: 0.6
            },
            {
              color: "#313536"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#44a688"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#13876c"
            }
          ]
        },
        {
          featureType: "poi.attraction",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#f5e4e4"
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.attraction",
          elementType: "labels",
          stylers: [
            {
              visibility: "on"
            },
            {
              lightness: "14"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#13876c"
            },
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#067372"
            },
            {
              lightness: "-20"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#357374"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#004757"
            }
          ]
        }
      ],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ]
    }
  },
}
</script>
