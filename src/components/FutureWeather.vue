<template>
  <div class="future-weather">
    <div class="future-weather__box">
      <h2 class="future-weather__day">{{ days[0] }}</h2>
      <div class="future-weather__icon">
        <my-skycon :autoplay="true" icon="fog" color="#A9DD9B"/>
      </div>
      <p class="future-weather__temp">37/39&deg;F</p>
    </div>
    <div class="future-weather__box">
      <h2 class="future-weather__day">{{ days[1] }}</h2>
      <div class="future-weather__icon">
        <my-skycon :autoplay="true" icon="fog" color="#A9DD9B"/>
      </div>
      <p class="future-weather__temp">37/39&deg;F</p>
    </div>
    <div class="future-weather__box">
      <h2 class="future-weather__day">{{ days[2] }}</h2>
      <div class="future-weather__icon">
        <my-skycon :autoplay="true" icon="fog" color="#A9DD9B"/>
      </div>
      <p class="future-weather__temp">37/39&deg;F</p>
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
