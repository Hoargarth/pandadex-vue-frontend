<template>
  <div id="app">
    <!-- <div id="nav">
      In case you have multiple views and need to navigate to them
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  /* 1rem = 10px */
  font-size: 62.5%;
}

body {
  margin: 0 0 69px 0;
  padding: 0 $padding-body-mobile;
  background-color: $color-background-main;
  font-family: $font-family-primary;
  font-size: $font-size-primary;
  color: $color-font-primary;
  line-height: $font-line-height-primary;

  @include media-breakpoint-up(md) {
      padding: 0 $padding-body-desktop;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  color: $color-font-headline;
}

h1 {
  text-transform: uppercase;
  font-size: $font-size-h1;
  font-weight: $font-weight-h1;
  line-height: $line-height-h1;
  letter-spacing: $letter-spacing-h1;
}
</style>
