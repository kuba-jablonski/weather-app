import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.filter('round', value => {
  return Math.round(value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
