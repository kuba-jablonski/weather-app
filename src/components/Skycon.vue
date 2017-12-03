<template>
  <canvas :style="style" ref="canvas" class="icon"></canvas>
</template>

<script>
const Skycons = require('skycons')(window)

export default {
  props: ['color', 'width', 'autoplay', 'icon'],
  computed: {
    style () {
      return `width: ${this.width}px;`
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

</style>
