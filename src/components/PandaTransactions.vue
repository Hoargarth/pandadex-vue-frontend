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
            <div class="tx-price">{{ formatDollar(transaction.price) }}</div>
            <div class="tx-amount">{{ formatNumber(transaction.amount) }}</div>
            <div class="tx-value">{{ formatDollar(transaction.valueDollar) }}</div>
            <div class="tx-time">{{ formatTimestamp(transaction.timestamp) }}</div>
            <div class="tx-spacer"></div>
            <div class="tx-transaction">{{ transaction.transaction.slice(0,6) }}</div>
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
        height: 577px;
        margin-top: $component-spacing;
    }

    .panda-transactions-header {
        display: flex;
        width: 100%;
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 12px 0 8px;
    }

    .panda-transactions-ticker {
        &,
        .panda-transaction {
            width: 100
        }

        .panda-transaction {
            display: flex;

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
    .tx-time {
        text-align: right;
    }

    .tx-price {
        width: 15.35%;
    }

    .tx-amount {
        width: 27.84%;
    }

    .tx-value {
        width: 20.50%;
    }

    .tx-time {
        width: 18.21%;
    }

    .tx-spacer {
        flex-grow: 1;
    }

    .tx-transaction {
        width: 8.67%;
    }
</style>
