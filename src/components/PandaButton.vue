<template>
  <a class="panda-button"
    v-bind:href="href"
    v-bind:title="title"
    v-bind:class="[
      type,
      disabled ? 'disabled' : '',
    ]"
    v-on:click="checkDisabled">

    <i v-if="icon"
      class="panda-button-icon"
      v-bind:style="{ backgroundImage: 'url(' + icon + ')' }">
    </i>
    <slot />
  </a>
</template>

<script>
export default {
  name: 'PandaButton',
  props: {
    href: String,
    title: String,
    type: {
      type: String,
      default: 'primary', // primary | secondary | borderless
    },
    disabled: Boolean,
    icon: String,
  },
  methods: {
    checkDisabled(event) {
      if (this.disabled) {
        event.preventDefault();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .panda-button {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: all .2s ease-in-out;
    width: fit-content;

    &,
    &:visited {
      color: $color-font-primary;
      text-decoration: none;
    }

    &.primary {
      background-color: $color-button-primary-background;
      color: $color-button-primary-font;
      border-color: $color-button-primary-border;
      height: 48px;
      min-width: 175px;
      border-radius: 8px;
      padding: 8px 24px;

      &:not(.disabled) {
        &:hover,
        &:focus,
        &:active {
          background-color: $color-button-primary-background-hover;
          color: $color-button-primary-font-hover;
          border-color: $color-button-primary-border-hover;
        }
      }
    }

    &.secondary {
      background-color: $color-button-secondary-background;
      color: $color-button-secondary-font;
      border-color: $color-button-secondary-border;
      height: 36px;
      border-radius: 4px;
      padding: 8px 14px;

      &:not(.disabled) {
        &:hover,
        &:focus,
        &:active {
          background-color: $color-button-secondary-background-hover;
          color: $color-button-secondary-font-hover;
          border-color: $color-button-secondary-border-hover;
        }
      }
    }

    &.disabled {
      opacity: .5;
      cursor: not-allowed;
    }
  }

  .panda-button-icon {
    height: 30px;
    width: 30px;
    margin-right: 11px;
  }
</style>
