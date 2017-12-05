import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.filter('round', value => {
  return Math.round(value)
})

Vue.filter('maybeCelsius', (value, isCelsius) => {
  return isCelsius
    ? (value - 32) * 5 / 9
    : value
})

export const EventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
