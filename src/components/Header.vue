<template>
  <header class="header">
    <span class="header__name">weather app</span>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-background;
  height: 3rem;
  border-bottom: 1px solid $color-grey-light;

  &__name {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>
