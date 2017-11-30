<template>
  <main class="current-weather">
    <div class="current-weather__heading">
      <h1 class="current-weather__title">Currently</h1>
      <button class="current-weather__switch">BANANA</button>
    </div>
    <div class="current-weather__details">
      <my-skycon/>
      <span class="current-weather__temperature">
        {{ weather.temperature | roundTemp }}&deg;
      </span>
    </div>
    <p class="current-weather__conditions">
      <span class="current-weather__conditions-heading">Conditions:</span>
      <span class="current-weather__conditions-info">bababa</span>
    </p>
  </main>
</template>

<script>
import Skycon from './Skycon'

export default {
  components: {
    mySkycon: Skycon
  },
  props: ['weather'],
  filters: {
    roundTemp (temp) {
      return Math.round(temp)
    }
  }
}
</script>

<style lang="scss" scoped>
.current-weather {
  padding: 1rem 2rem;
  background: $color-background;
  height: 50%;

  &__heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  &__details {
    display: flex;
    align-items: center;
  }

  &__temperature {
    font-size: 8rem;
  }
}
</style>
