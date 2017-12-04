<template>
  <div class="app">
    <my-weather-widget/>
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
      forecast: {
        currently: null,
        next: null
      }
    }
  },
  created () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude, position.coords.longitude)
        const { latitude, longitude } = position.coords;
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDU_hrXt-Of6GuhWKFzSFbeXQ0wc5ga1bw`)
          .then(res => {
            console.log(res)
          })
          .catch(e => {
            console.log(e)
          })

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d459dbf7e251f54f0119998983062aa8/${position.coords.latitude},${position.coords.longitude}`)
          .then(({ data }) => {
            console.log(data)
            this.forecast.currently = data.currently
            this.forecast.next = data.daily.data.splice(0, 3)
          })
      })
    } else {
      alert('Poop')
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
