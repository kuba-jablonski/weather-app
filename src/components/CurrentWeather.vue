<template>
  <div class="current-weather">
    <div class="current-weather__display">
      <div class="current-weather__icon">
        <my-skycon :autoplay="true" icon="fog" color="#A9DD9B"/>
      </div>
      <span class="current-weather__temp">31&deg;</span>
    </div>
    <p class="current-weather__summary">Conditions: foggy</p>
  </div>
</template>

<script>
import Skycon from './Skycon'

export default {
  components: {
    mySkycon: Skycon
  }
}
</script>

<style lang="scss" scoped>
.current-weather {
  &__display {
    display: flex;
    align-items: center;
  }

  &__icon {
    width: 150px;
  }

  &__temp {
    font-size: 7.5rem;
  }
}
</style>
