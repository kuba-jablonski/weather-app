<template>
  <canvas ref="canvas" class="weather-icon"></canvas>
</template>

<script>
const Skycons = require('skycons')(window)

export default {
  props: {
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      required: true
    }
  },
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
