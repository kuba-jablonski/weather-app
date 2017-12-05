<template>
  <div class="current-weather">
    <div class="current-weather__display">
      <div class="current-weather__icon">
        <my-skycon :autoplay="true" :icon="forecast.icon" color="#A9DD9B"/>
      </div>
      <span class="current-weather__temp">{{ forecast.temperature | round }}&deg;F</span>
    </div>
    <p class="current-weather__summary">Conditions: foggy</p>
  </div>
</template>

<script>
import Skycon from './Skycon'

export default {
  components: {
    mySkycon: Skycon
  },
  props: ['forecast']
}
</script>

<style lang="scss" scoped>
.current-weather {
  margin-bottom: 2rem;

  &__display {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  &__icon {
    width: 150px;
  }

  &__temp {
    font-size: 7.5rem;
    line-height: 1;
  }

  &__summary {
    font-size: 1.4rem;
    text-align: center;
  }
}
</style>
