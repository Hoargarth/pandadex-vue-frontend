<template>
    <div class="panda-watchlist-container">
        <div class="panda-watchlist-add">
            <button @click="addToList">{{ $t('watchlist.add') }}</button>
            </div>
        <div class="panda-watchlist-list">
            <div v-for="(watched, index) in watchlist" :key="index"
                class="panda-watchlist-row"
                @mouseenter="addHover($event)"
                @mouseleave="removeHover($event)">
                <span class="watchlist-name">{{ watched.name }}</span>
                <span class="watchlist-price" :class="watched.direction">${{ watched.price }}</span>
                <span class="watchlist-remove" @click="removeFromWatchlist(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PandaWatchlist',
  data() {
    return {
      watchlist: [],
    };
  },
  methods: {
    addToList() {
      const rndCoin = this.getRandomCoin();
      this.watchlist.push(rndCoin);
    },
    getRandomCoin() {
      const coins = [
        { name: 'SPANDA', price: 0.000012312, direction: 'up' },
        { name: 'MIST', price: 0.00312, direction: 'up' },
        { name: 'PYE', price: 0.000000011312, direction: 'up' },
        { name: 'WINDY', price: 19.42312, direction: 'up' },
        { name: 'SAFEMOON', price: 0.000012312, direction: 'down' },
        { name: 'BNB', price: 657.53, direction: 'up' },
        { name: 'USDT', price: 0.9963, direction: 'up' },
        { name: 'ELONGF', price: 0.0552312, direction: 'up' },
        { name: 'FAIR', price: 0.0072312, direction: 'down' },
      ];

      return coins[Math.floor(Math.random() * coins.length)];
    },
    addHover(event) {
      event.target.classList.add('hover');
    },
    removeHover(event) {
      event.target.classList.remove('hover');
    },
    removeFromWatchlist(key) {
      this.watchlist.splice(key, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .panda-watchlist-container {
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

        .panda-watchlist-add {
            margin-bottom: 10px;
            margin-top: 5px;
            padding-right: 24px;

            button {
                margin-left: auto;
                display: flex;
                align-items: center;
                background: transparent;
                border: none;
                color: $color-font-primary;
                font-weight: 600;
                font-size: 1.3rem;
                line-height: 24px;
                cursor: pointer;

                &:before {
                    position: relative;
                    content: '';
                    display: block;
                    width: 16px;
                    height: 16px;
                    background-image:  url("/assets/icons/akar-icons_plus.svg");
                    margin-right: 6px;
                    top: -1px;
                }
            }
        }

        .panda-watchlist-row {
            display: flex;
            flex-wrap: nowrap;
            border-bottom: 2px solid $color-background-line;
            padding: 8px 27px 8px 16px;
            position: relative;
        }

        .watchlist-name {
            flex-grow: 1;
            color: $color-font-light;
        }

        .watchlist-price {
            color: $color-font-buy;

            &.down {
                color: $color-font-sell;
            }
        }

        .watchlist-remove {
            position: absolute;
            width: 0;
            height: 0;
            background-image: url("/assets/icons/entypo_circle-with-cross.svg");
            background-size: cover;
            right: 5px;
            opacity: 0;
            transition: opacity .4s ease-in-out 0s,
                width 0s ease-in-out .4s,
                height 0s ease-in-out .4s;
        }

        .panda-watchlist-row {
            &.hover {
                .watchlist-remove {
                    width: 15px;
                    height: 15px;
                    opacity: 1;
                    cursor: pointer;
                    transition: opacity .4s ease-in-out 0s,
                        width 0s ease-in-out 0s,
                        height 0s ease-in-out 0s;
                }
            }
        }
    }
</style>
