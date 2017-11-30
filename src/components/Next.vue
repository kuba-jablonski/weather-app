<template>
  <div class="future-weather">
    <h2 class="future-weather__heading">
      Tomorrow
    </h2>
    <div class="future-weather__details">
      <my-skycon/>
      <div class="future-weather__temperature">
        <span class="future-weather__maxtemp">45&deg;</span>
        <span class="future-weather__mintemp">10&deg;</span>
      </div>
    </div>
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
