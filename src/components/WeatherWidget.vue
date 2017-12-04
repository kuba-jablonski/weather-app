<template>
  <div class="weather-widget">
    <my-weather-heading/>
    <my-current-weather/>
    <my-future-weather/> 
  </div>
</template>

<script>
import WeatherHeading from './WeatherHeading'
import CurrentWeather from './CurrentWeather'
import FutureWeather from './FutureWeather'

export default {
  components: {
    myWeatherHeading: WeatherHeading,
    myCurrentWeather: CurrentWeather,
    myFutureWeather: FutureWeather
  },
  props: ['location', 'forecast']
}
</script>

<style lang="scss" scoped>
.weather-widget {
  background-color: $color-grey-light;
  padding: 2rem;
  border: 3px solid $color-primary;
}
</style>
