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
