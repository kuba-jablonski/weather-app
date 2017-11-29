<template>
  <main class="current-weather">
    <div class="current-weather__heading">
      <h1 class="current-weather__title">Currently</h1>
      <button class="current-weather__switch">BANANA</button>
    </div>
    <div class="current-weather__details">
      <span class="current-weather__temperature">
        {{ weather.temperature }}
      </span>
    </div>
  </main>
</template>

<script>
export default {
  props: ['weather']
}
</script>
