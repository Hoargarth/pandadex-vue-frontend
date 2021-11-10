<template>
  <div class="panda-transactions-container">
      <div class="panda-transactions-header">
          <span class="tx-price">{{ $t('transactions.price') }}</span>
          <span class="tx-amount">{{ $t('transactions.amount') }}</span>
          <span class="tx-value">{{ $t('transactions.value') }}</span>
          <span class="tx-time">{{ $t('transactions.time') }}</span>
          <span class="tx-spacer"></span>
          <span class="tx-transaction">{{ $t('transactions.transaction') }}</span>
      </div>
      <div class="panda-transactions-ticker">
          <div v-for="transaction in transactions" :key="transaction.key"
            class="panda-transaction"
            v-bind:class="transaction.type">
            <div class="tx-price">
                <span class="tx-upper">{{ formatDollar(transaction.price) }}</span>
                <span class="tx-lower">{{ transaction.pool }}</span>
            </div>
            <div class="tx-amount">
                <span class="tx-upper">{{ formatNumber(transaction.amount) }}</span>
                <span class="tx-lower">{{ transaction.amountCoin }}</span>
            </div>
            <div class="tx-value">
                <span class="tx-upper">{{ formatDollar(transaction.valueDollar) }}</span>
                <span class="tx-lower">{{ formatNumber(transaction.valueBnb) }} BNB</span>
            </div>
            <div class="tx-time">
                <span class="tx-upper">{{ formatTimestamp(transaction.timestamp) }}</span>
            </div>
            <div class="tx-spacer"></div>
            <div class="tx-transaction">
                <span class="tx-upper">{{ transaction.transaction.slice(0,6) }}</span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'PandaTransactions',
  components: {
  },
  props: {
    transactions: Array,
  },
  methods: {
    formatDollar(dollar) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 9 }).format(dollar);
    },

    formatNumber(number) {
      return new Intl.NumberFormat('en-US').format(number);
    },
    formatTimestamp(timestamp) {
      return new Date(timestamp).toTimeString().slice(0, 9);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .panda-transactions-container {
        border-radius: $border-radius-primary;
        background-color: $color-background-secondary;
        margin-top: $component-spacing;
        padding-bottom: 32px;
    }

    .panda-transactions-header {
        display: flex;
        width: 100%;
        font-size: 1.2rem;
        line-height: 2.4rem;
        padding: 12px 14px 8px;
        color: rgba(255,255,255,.4);
        border-bottom: 2px solid $color-background-line;
        margin-bottom: 16px;

        @media all and (min-width: 768px) {
            font-size: 1.6rem;
            padding: 12px 0 8px;
        }
    }

    .panda-transactions-ticker {
        &,
        .panda-transaction {
            width: 100;
        }

        .panda-transaction {
            display: flex;
            margin-bottom: 24px;
            padding: 0 14px;

            @media all and (min-width: 768px) {
                padding: 0;
            }

            &:last-child {
                margin-bottom: 0;
            }

            &.buy {
                color: $color-font-buy;
            }

            &.sell {
                color: $color-font-sell;
            }
        }
    }

    .tx-price,
    .tx-amount,
    .tx-value,
    .tx-time,
    .tx-transaction {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-weight: 600;
        font-size: 1rem;

        @media all and (min-width: 768px) {
            font-size: 1.4rem;
        }

        .tx-lower {
            font-size: 1rem;
            font-weight: 500;

            @media all and (min-width: 768px) {
                font-size: 1.2rem;
            }
        }
    }

    .tx-price,
    .tx-amount,
    .tx-value,
    .tx-time {
        text-align: right;
    }

    .tx-price {
        width: 24.34%;

        @media all and (min-width: 768px) {
            width: 15.35%;
        }
    }

    .tx-amount {
        width: 31.67%;

        @media all and (min-width: 768px) {
            width: 27.84%;
        }
    }

    .tx-value {
        width: 23.17%;

        @media all and (min-width: 768px) {
            width: 20.50%;
        }
    }

    .tx-time {
        width: 20.82%;

        @media all and (min-width: 768px) {
            width: 18.21%;
        }
    }

    .tx-spacer {
        flex-grow: 1;

        @media all and (max-width: 767px) {
            display: none;
        }
    }

    .tx-transaction {
        width: 8.67%;

        @media all and (max-width: 767px) {
            display: none;
        }
    }
</style>
