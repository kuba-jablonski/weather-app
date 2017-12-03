<template>
  <div class="weather-widget">
    <my-weather-heading/>
  </div>
</template>

<script>
import WeatherHeading from './WeatherHeading'

export default {
  components: {
    myWeatherHeading: WeatherHeading
  }
}
</script>
