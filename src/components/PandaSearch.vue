<template>
    <div class="panda-search-wrapper">
        <input type="text" name="token-search" v-bind:placeholder="$t('search.placeholder')" />
        <button class="search-action">{{ $t('search.searchAction') }}</button>
    </div>
</template>

<script>
export default {
  name: 'PandaSearch',
  props: {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .panda-search-wrapper {
        display: flex;
        width: 100%;
        border-radius: $border-radius-primary;
        background-color: $color-search-background;
        height: 48px;
        padding: 6px 9px 6px 16px;

        input {
            background-color: transparent;
            border: none;
            box-shadow: none;
            font-size: 13px;
            line-height: 16px;
            font-weight: 600;
            flex-grow: 1;
            color: $color-search-font;

            &::placeholder {
                font-weight: 600;
                color: $color-search-font;
            }

            &:focus {
                border: none;
                outline: none;
            }
        }

        .search-action {
            background-color: $color-search-action-background;
            box-shadow: none;
            border: 1px solid $color-search-action-border;
            border-radius: 4px;
            color: $color-search-action-font;
            padding: 8px 14px;
        }
    }
</style>
