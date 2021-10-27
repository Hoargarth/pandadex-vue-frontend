<template>
  <div>
    <button class="panda-button"
    v-bind:class="[
      type,
      disabled ? 'disabled' : '',
    ]"
    @click="checkDisabled">

    <i v-if="icon"
      class="panda-button-icon"
      v-bind:style="{ backgroundImage: 'url(' + icon + ')' }">
    </i>
    <slot />
  </button>

  <vue-metamask
    v-if="openMetamask"
    userMessage="msg"
    @onComplete="onComplete"
  >
  </vue-metamask>

  </div>
</template>

<script>
import VueMetamask from 'vue-metamask';

export default {
  components: {
    VueMetamask,
  },
  name: 'PandaButtonWalletConnect',
  data() {
    return {
      msg: 'This is demo net work',
      openMetamask: false,
    };
  },
  props: {
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

      this.openMetamask = true;
    },
    onComplete(data) {
      console.log('data:', data);
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
    cursor: pointer;

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
        &:hover {
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
        &:hover {
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
