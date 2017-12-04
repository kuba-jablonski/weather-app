<template functional>
  <div class="weather-heading">
    <h1 class="weather-heading__main-heading">{{ props.location.city }}</h1>
    <p class="weather-heading__sub-heading">{{ props.location.district }}</p>
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

  &__sub-heading {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
}
</style>
