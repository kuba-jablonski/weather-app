<template>
  <div class="app">
    <my-weather-widget v-if="forecast.currently && forecast.next" />
  </div>
</template>

<script>
import axios from 'axios'
import WeatherWidget from './components/WeatherWidget'

// DARK SKY
// 3f74814c693ce35c3c3f355cdc86db36

// MAPS
// AIzaSyDU_hrXt-Of6GuhWKFzSFbeXQ0wc5ga1bw

export default {
  components: {
    myWeatherWidget: WeatherWidget
  },
  data () {
    return {
      location: {
        city: null,
        district: null
      },
      forecast: {
        currently: null,
        next: null
      }
    }
  },
  created () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords

        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDU_hrXt-Of6GuhWKFzSFbeXQ0wc5ga1bw`)
          .then(({ data }) => {
            data.results[0].address_components.forEach(component => {
              if (component.types.includes('locality')) {
                this.location.city = component.short_name
              }
              if (component.types.includes('administrative_area_level_1')) {
                this.location.district = component.short_name
              }
            })
          })
          .catch(e => {
            console.log(e)
          })

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d459dbf7e251f54f0119998983062aa8/${latitude},${longitude}`)
          .then(({ data }) => {
            console.log(data)
            this.forecast.currently = data.currently
            this.forecast.next = data.daily.data.splice(0, 3)
          })
      })
    } else {
      alert('Your browser doesn\'t support geolocation!')
    }
  }
}
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Lato", sans-serif;
  // color: $font-color;
  font-weight: 400;
  line-height: 1.5;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: $color-background;
}
</style>
