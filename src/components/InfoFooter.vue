<template>
  <div class="info">
    <p class="info__degrees">Weather displaying in {{ celsius ? 'Celsius' : 'Farenheit'}}.
      <a class="info__link" @click="switchDegrees">Switch to {{ celsius ? 'Farenheit' : 'Celsius'}}.</a>
    </p>
    <p class="info__author">
      Created by
      <a class="info__link" href="https://github.com/kuba-jablonski" target="_blank">
        Jakub Jabłoński
      </a>
      during the 100 Days of Code challenge.
    </p>
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
  font-size: 1.3rem;

  &__link {
    color: $color-primary-light;
    font-weight: 600;
    transition: all 0.5s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: $color-primary;
    }
  }
}
</style>
