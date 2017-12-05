<template>
  <div class="app">
    <my-weather-widget
      v-if="forecast.currently && forecast.next"
      :location="location"
      :forecast="forecast"  
    />
    <my-info />
  </div>
</template>

<script>
import axios from 'axios'
import { GEO_KEY, WEATHER_KEY } from './config'
import WeatherWidget from './components/WeatherWidget'
import Info from './components/Info'

export default {
  components: {
    myWeatherWidget: WeatherWidget,
    myInfo: Info
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
        this.getLocationFromCoordinates(latitude, longitude)
        this.getWeatherData(latitude, longitude)
      })
    } else {
      alert('Your browser doesn\'t support geolocation!')
    }
  },
  methods: {
    getLocationFromCoordinates (lat, lon) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GEO_KEY}`)
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
    },
    getWeatherData (lat, lon) {
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${WEATHER_KEY}/${lat},${lon}`)
        .then(({ data }) => {
          this.forecast.currently = data.currently
          this.forecast.next = data.daily.data.splice(0, 3)
        })
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
  color: $color-grey-dark;
  font-weight: 400;
  line-height: 1.5;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: $color-background;
}
</style>
