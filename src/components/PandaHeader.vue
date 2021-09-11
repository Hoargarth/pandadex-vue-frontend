<template>
  <div class="panda-header">
    <panda-button href=""
      title=""
      type="borderless"
      icon="/assets/icons/emojione_fire.svg"
    >
      {{ $t('header.burningPanda') }}
    </panda-button>
    <h1>{{ $t('header.pandaDex') }}<i>{{ $t('header.beta') }}</i></h1>
    <panda-button href="" title="" disabled>{{ $t('header.walletConnect') }}</panda-button>
  </div>
</template>

<script>
import PandaButton from './PandaButton.vue';

export default {
  name: 'PandaHeader',
  components: {
    PandaButton,
  },
  props: {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .panda-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 16px;

    h1 {
      position: relative;
      margin: 0;

      i {
        background-color: $beta-background-color;
        color: $beta-font-color;
        text-transform: none;
        font-size: 11px;
        font-weight: 800;
        line-height: 13px;
        letter-spacing: initial;
        border-radius: 5px;
        padding: 1px 3px 1px 3px;
        position: absolute;
        left: calc(100% - 8px);
        top: calc(100% - 9px);
      }
    }
  }
</style>
