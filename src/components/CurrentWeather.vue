<template>
  <div class="current-weather">
    <h2 class="current-weather__heading">Currently</h2>
    <div class="current-weather__display">
      <div class="current-weather__icon">
        <my-skycon :autoplay="true" :icon="forecast.icon" color="#29B6F6"/>
      </div>
      <span class="current-weather__temp">{{ forecast.temperature | maybeCelsius(celsius) | round }}&deg;</span>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../main'
import Skycon from './Skycon'

export default {
  components: {
    mySkycon: Skycon
  },
  props: ['forecast'],
  data () {
    return {
      celsius: false
    }
  },
  mounted () {
    EventBus.$on('DEGREES_SWITCHED', () => {
      this.celsius = !this.celsius
    })
  }
}
</script>

<style lang="scss" scoped>
.current-weather {
  margin-bottom: 0.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid $color-grey-light;

  &__heading {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  &__display {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    width: 150px;
  }

  &__temp {
    font-size: 7.5rem;
    line-height: 1;
    font-weight: 300;
  }
}
</style>
