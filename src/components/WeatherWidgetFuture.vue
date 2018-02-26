<template>
  <div class="future-weather">
    <WeatherWidgetFutureItem
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
  props: {
    forecast: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      celsius: false
    }
  },
  computed: {
    days () {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']

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
