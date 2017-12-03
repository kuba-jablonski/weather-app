<template>
  <div class="weather-heading">
    <h1 class="weather-heading__main-heading">Zielona Góra</h1>
    <p class="weather-heading__sub-heading">lubuskie</p>
  </div>
</template>

<style lang="scss" scoped>
.weather-heading {
  text-align: center;
  margin-bottom: 2rem;

  &__main-heading {
    font-size: 2.2rem;
    line-height: 1.2;
  }

  &__icon {
    flex: 0 0 100px;
  }

  &__sub-heading {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
}
</style>
