<template functional>
  <div class="weather-heading">
    <h1 class="weather-heading__main-heading">{{ props.location.city }}</h1>
    <p class="weather-heading__sub-heading">{{ props.location.district }}</p>
  </div>
</template>

<style lang="scss" scoped>
.weather-heading {
  text-align: center;

  &__main-heading {
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 400;
  }

  &__sub-heading {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 400;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid $color-grey-light;
  }
}
</style>
