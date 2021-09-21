<template>
    <div class="panda-promoted-container">
        <div class="panda-promoted-header">{{ $t('promoted.header') }}</div>
        <div v-for="promotion in promotions" :key="promotion.key"
        class="panda-promoted-row" >
            <div class="promoted-flag" v-bind:style="{backgroundColor: promotion.color}"></div>
            <span class="promotion-name">{{ promotion.name }}</span>
            <span class="promotion-link">{{ promotion.link }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PandaPromoted',
  props: {
    promotions: Array,
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .panda-promoted-container {
        background-color: $color-background-secondary;
        border-radius: $border-radius-primary;
        width: 100%;
        min-height: 251px;
        display: flex;
        flex-direction: column;
        margin-top: $component-spacing;

        > div {
            width: 100%;
        }

        .panda-promoted-header {
            font-size: 13px;
            line-height: 24px;
            font-weight: 600;
            padding: 8px 0 7px 24px;
        }

        .panda-promoted-row {
            display: flex;
            flex-wrap: nowrap;
            border-bottom: 2px solid $color-background-line;
            padding: 8px 14px 8px 0;
        }

        .promoted-flag {
            mask-image: url("/assets/icons/promotion.svg");
            width: 17px;
            height: 14px;
            margin-right: 6px;
        }

        .promotion-name {
            flex-grow: 1;
            color: $color-font-light;
        }

        .promotion-link {
            color: $color-font-dark;
        }
    }
</style>
