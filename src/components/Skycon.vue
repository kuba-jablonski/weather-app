<template>
  <canvas ref="canvas" class="icon"></canvas>
</template>

<script>
const Skycons = require('skycons')(window)

export default {
  mounted () {
    // console.log(this.$refs.canvas.tagName)
    var skycons = new Skycons({'color': 'pink'})

    skycons.add(this.$refs.canvas, Skycons.PARTLY_CLOUDY_DAY)
    skycons.play()
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 100px;
  height: 5%;
  // height: 12rem;
  // height: 50%;
}
</style>
