<template>
  <div class="future-weather">
    <div class="future-weather__box">
      <h2 class="future-weather__day">{{ days[0] }}</h2>
      <div class="future-weather__icon">
        <my-skycon :autoplay="true" :icon="forecast[0].icon" color="#A9DD9B"/>
      </div>
      <p class="future-weather__temp">
        {{ forecast[0].temperatureLow | round }}/{{ forecast[0].temperatureHigh | round }}&deg;F
      </p>
    </div>
    <div class="future-weather__box">
      <h2 class="future-weather__day">{{ days[1] }}</h2>
      <div class="future-weather__icon">
        <my-skycon :autoplay="true" :icon="forecast[1].icon" color="#A9DD9B"/>
      </div>
      <p class="future-weather__temp">
        {{ forecast[1].temperatureLow | round }}/{{ forecast[1].temperatureHigh | round }}&deg;F
      </p>
    </div>
    <div class="future-weather__box">
      <h2 class="future-weather__day">{{ days[2] }}</h2>
      <div class="future-weather__icon">
        <my-skycon :autoplay="true" :icon="forecast[2].icon" color="#A9DD9B"/>
      </div>
      <p class="future-weather__temp">
        {{ forecast[2].temperatureLow | round }}/{{ forecast[2].temperatureHigh | round }}&deg;F
      </p>
    </div>
  </div>
</template>

<script>
import Skycon from './Skycon'

export default {
  components: {
    mySkycon: Skycon
  },
  props: ['forecast'],
  computed: {
    days () {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

      return days.splice(new Date().getDay() + 1, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
.future-weather {
  display: flex;

  &__box {
    text-align: center;
  }

  &__icon {
    width: 100px;
  }
}
</style>
