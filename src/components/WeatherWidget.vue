<template>
  <div class="weather-widget">
    <my-weather-heading/>
    <my-current-weather/>
  </div>
</template>

<script>
import WeatherHeading from './WeatherHeading'
import CurrentWeather from './CurrentWeather'

export default {
  components: {
    myWeatherHeading: WeatherHeading,
    myCurrentWeather: CurrentWeather
  }
}
</script>

<style lang="scss" scoped>
.weather-widget {
  background-color: $color-grey-light;
  padding: 2rem;
  border: 3px solid $color-primary;
}
</style>
