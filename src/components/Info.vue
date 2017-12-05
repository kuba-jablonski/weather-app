<template>
  <div class="info">
    <button @click="switchDegrees" class="info__btn">Switch to Celcius</button>
    <p class="info__author">Created by bob durting the 100 Days of Code challenge.</p>
  </div>
</template>

<script>
import { EventBus } from '../main'

export default {
  data () {
    return {
      celcius: false
    }
  },
  methods: {
    switchDegrees () {
      this.celcius = !this.celcius
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
