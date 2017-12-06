<template>
  <div class="weather-widget">
    <weather-widget-heading :location="location"/>
    <weather-widget-current :forecast="forecast.currently"/>
    <weather-widget-future :forecast="forecast.next"/> 
  </div>
</template>

<script>
import WeatherWidgetHeading from './WeatherWidgetHeading'
import WeatherWidgetCurrent from './WeatherWidgetCurrent'
import WeatherWidgetFuture from './WeatherWidgetFuture'

export default {
  components: {
    WeatherWidgetHeading,
    WeatherWidgetCurrent,
    WeatherWidgetFuture
  },
  props: ['location', 'forecast']
}
</script>

<style lang="scss" scoped>
.weather-widget {
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
