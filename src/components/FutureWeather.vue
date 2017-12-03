<template>
  <div class="future-weather">
    <div class="future-weather__box">
      <h2 class="future-weather__day">Monday</h2>
      <my-skycon width="75" :autoplay="true" icon="fog" color="#A9DD9B"/>
      <p class="future-weather__temp">37/39&deg;F</p>
    </div>
    <div class="future-weather__box">
      <h2 class="future-weather__day">Monday</h2>
      <my-skycon width="75" :autoplay="true" icon="fog" color="#A9DD9B"/>
      <p class="future-weather__temp">37/39&deg;F</p>
    </div>
    <div class="future-weather__box">
      <h2 class="future-weather__day">Monday</h2>
      <my-skycon width="75" :autoplay="true" icon="fog" color="#A9DD9B"/>
      <p class="future-weather__temp">37/39&deg;F</p>
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

<style lang="scss" scoped>
.future-weather {
  display: flex;

  &__box {
    text-align: center;
  }
}
</style>
