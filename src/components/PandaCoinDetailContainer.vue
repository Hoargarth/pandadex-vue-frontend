<template>
  <div class="panda-coin-detail-container">
      <panda-coin-detail v-for="data in coinData" :key="data.key"
        v-bind:type="data.type"
        v-bind:icon="data.icon"
        v-bind:title="data.title"
        v-bind:value="data.value"/>
  </div>
</template>

<script>
import PandaCoinDetail from './PandaCoinDetail.vue';

export default {
  name: 'PandaCoinDetailContainer',
  components: {
    PandaCoinDetail,
  },
  props: {
    coinData: Array,
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .panda-coin-detail-container {
    display: flex;
    align-items: center;
    background-color: $color-background-secondary;
    overflow-x: auto;
    min-width: 150px;
    border-radius: $border-radius-primary;
    padding: 6px 16px;
      -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
