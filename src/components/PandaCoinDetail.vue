<template>
  <div class="panda-coin-detail" v-bind:class="type">
    <div class="panda-coin-detail-title">
        <i v-if="icon"
            class="panda-coin-detail-icon"
            v-bind:style="{ backgroundImage: 'url(' + icon + ')' }">
        </i>
        <span>{{ title }}</span>
    </div>
    <div v-if="type !== 'icon-title'" class="panda-coin-detail-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'PandaCoinDetail',
  components: {
  },
  props: {
    type: {
      type: String,
      default: 'coin-detail', // icon-detail | icon-title | coin-detail
    },
    icon: String,
    title: String,
    value: String,
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .panda-coin-detail {
        width: fit-content;
        white-space: nowrap;

        &:not(:first-child) {
            margin-left: 40px;
        }

        &.icon-detail,
        &.icon-title {
            color: $color-font-light;
            text-transform: uppercase;
            font-weight: 500;
        }

        &.icon-detail {
            .panda-coin-detail-title {
                margin-top: -3px;
            }

            .panda-coin-detail-value {
                margin-top: 2px;
            }
        }

        &.icon-title {
            .panda-coin-detail-title {
                flex-direction: column;

                span {
                    margin-top: 8px;
                    display: block;
                }
            }

            .panda-coin-detail-icon {
                width: 20px;
                height: 20px;
                margin-right: 8px;
            }
        }

        &.coin-detail {
            .panda-coin-detail-title{
                font-size: 12px;
                opacity: .4;
                text-transform: none;
            }

            .panda-coin-detail-value {
                margin-top: 2px;
            }
        }

        .panda-coin-detail-title {
            display: flex;
            align-items: center;
        }

        .panda-coin-detail-icon {
            display: inline-block;
            width: 18px;
            height: 18px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            margin-right: 8px;
        }

        .panda-coin-detail-value {
            color: $color-font-secondary;
            font-weight: 500;
            line-height: 17px;
        }
    }
</style>
