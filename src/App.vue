<template>
  <my-header/>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'

// 3f74814c693ce35c3c3f355cdc86db36

export default {
  components: {
    myHeader: Header
  },
  created () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude, position.coords.longitude)
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d459dbf7e251f54f0119998983062aa8/${position.coords.latitude},${position.coords.longitude}`)
          .then(res => {
            console.log(res)
          })
      })
    } else {
      alert('Poop')
    }
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
