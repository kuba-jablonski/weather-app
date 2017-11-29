<template>
  <canvas ref="canvas" id="icon1" ></canvas>
</template>

<script>
const Skycons = require('skycons')(window)

export default {
  mounted () {
    // console.log(this.$refs.canvas.tagName)
    var skycons = new Skycons({'color': 'pink'})

    skycons.add('icon1', Skycons.PARTLY_CLOUDY_DAY)
    skycons.play()
  }
}
</script>

<style lang="scss" scoped>
#icon1 {
  width: 50%;
  // height: 50%;
}
</style>
