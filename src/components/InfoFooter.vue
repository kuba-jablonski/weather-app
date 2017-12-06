<template>
  <div class="info">
    <button @click="switchDegrees" class="info__btn">{{ btnText }}</button>
    <p class="info__author">Created by bob durting the 100 Days of Code challenge.</p>
  </div>
</template>

<script>
import { EventBus } from '../main'

export default {
  data () {
    return {
      celsius: false
    }
  },
  computed: {
    btnText () {
      return this.celsius
        ? 'Switch to Farenheit'
        : 'Switch to Celsius'
    }
  },
  methods: {
    switchDegrees () {
      this.celsius = !this.celsius
      EventBus.$emit('DEGREES_SWITCHED')
    }
  }
}
</script>


<style lang="scss" scoped>
.info {
  text-align: center;
  margin-top: 2rem;
}
</style>
