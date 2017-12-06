<template>
  <div class="future-weather">
    <weather-widget-future-item
      v-for="(day, i) in days" :key="i"
      :forecast="forecast[i]"
      :day="day"
      :celsius="celsius"
    />
  </div>
</template>

<script>
import { EventBus } from '../main'
import WeatherWidgetFutureItem from './WeatherWidgetFutureItem'

export default {
  components: {
    WeatherWidgetFutureItem
  },
  props: ['forecast'],
  data () {
    return {
      celsius: false
    }
  },
  computed: {
    days () {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

      return days.splice(new Date().getDay() + 1, 3)
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
.future-weather {
  display: flex;
  justify-content: center;
}
</style>
