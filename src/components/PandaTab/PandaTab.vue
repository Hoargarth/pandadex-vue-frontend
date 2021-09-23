<template>
  <div class='panda-tab' v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PandaTab',
  data() {
    return {
      isActive: true,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .panda-tab {
        flex-grow: 1;
        background-color: $color-background-secondary;
        border-top-right-radius: $border-radius-primary;
        border-bottom-left-radius: $border-radius-primary;
        border-bottom-right-radius: $border-radius-primary;
    }
</style>
