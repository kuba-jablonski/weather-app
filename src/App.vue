<template>
  <my-header/>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    myHeader: Header
  }
}
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Lato", sans-serif;
  // color: $font-color;
  font-weight: 400;
  line-height: 1.5;
  box-sizing: border-box;
}
</style>
