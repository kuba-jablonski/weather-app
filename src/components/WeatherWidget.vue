<template>
  <div class="weather-widget">
    <my-weather-heading :location="location"/>
    <my-current-weather :forecast="forecast.currently"/>
    <my-future-weather :forecast="forecast.next"/> 
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
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
