<template>
  <div class="weather-box">
    <h2 class="weather-box__day">{{ days }}</h2>
    <div class="weather-box__icon">
      <my-skycon :autoplay="true" :icon="forecast.icon" color="#A9DD9B"/>
    </div>
    <p class="weather-box__temp">
      {{ forecast.temperatureLow | maybeCelsius(celsius) | round }}
      /
      {{ forecast.temperatureHigh | maybeCelsius(celsius) | round }}
      &deg;
    </p>
  </div>
</template>

<script>
import Skycon from './Skycon'

export default {
  components: {
    mySkycon: Skycon
  },
  props: ['day', 'forecast', 'celsius']
}
</script>

<style lang="scss" scoped>
.weather-box {
  text-align: center;

  &__icon {
    width: 100px;
  }
}
</style>
