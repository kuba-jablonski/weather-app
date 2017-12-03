<template>
  <div class="current-weather">
    <div class="current-weather__display">
      <my-skycon width="75" :autoplay="true" icon="fog" color="#A9DD9B"/>
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
