<template>
  <canvas ref="canvas" class="weather-icon"></canvas>
</template>

<script>
const Skycons = require('skycons')(window)

export default {
  props: ['color', 'autoplay', 'icon'],
  mounted () {
    const skycons = new Skycons({'color': this.color})

    skycons.add(this.$refs.canvas, this.icon)

    if (this.autoplay) {
      skycons.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.weather-icon {
  width: 100%;
}
</style>
