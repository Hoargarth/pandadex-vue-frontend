<template>
  <div class="panda-chart-view">
    <panda-header />
    <div class="panda-chart-view-body">
      <div class="panda-chart-view-body-left">
        <div class="panda-details">
          <panda-coin-detail-container v-bind:coin-data="pandaData" />
          <panda-coin-detail-container v-bind:coin-data="coinData" />
        </div>
        <panda-chart />
        <panda-transactions v-bind:transactions="transactions" />
      </div>
      <div class="panda-chart-view-body-right">
        <panda-search />
        <div class="panda-sidebar-actions">
          <panda-button href="" title="">{{ $t('sidebarActions.bscScanButton') }}</panda-button>
          <panda-button href="" title="">{{ $t('sidebarActions.buyButton') }}</panda-button>
        </div>
        <panda-promoted v-bind:promotions="promotions" />
      </div>
    </div>
  </div>
</template>

<script>
import PandaChart from '../components/PandaChart.vue';
import PandaCoinDetailContainer from '../components/PandaCoinDetailContainer.vue';
import PandaHeader from '../components/PandaHeader.vue';
import PandaTransactions from '../components/PandaTransactions.vue';
import PandaSearch from '../components/PandaSearch.vue';
import PandaButton from '../components/PandaButton.vue';
import PandaPromoted from '../components/PandaPromoted.vue';

export default {
  name: 'ChartView',
  components: {
    PandaHeader,
    PandaCoinDetailContainer,
    PandaChart,
    PandaTransactions,
    PandaSearch,
    PandaButton,
    PandaPromoted,
  },
  data() {
    return {
      pandaData: [
        {
          type: 'icon-detail',
          icon: '/assets/icons/spanda.svg',
          title: 'SPANDA',
          value: '$0.00000106724',
        },
      ],
      coinData: [
        {
          type: 'icon-title',
          icon: '/assets/icons/spanda.svg',
          title: 'SPANDA',
        },
        {
          type: 'coin-detail',
          title: 'Price',
          value: '$0.00000106724',
        },
        {
          type: 'coin-detail',
          title: '24h change',
          value: '%25',
        },
        {
          type: 'coin-detail',
          title: 'Market Cap',
          value: '$12,793,209',
        },
        {
          type: 'coin-detail',
          title: 'Total Supply',
          value: '1,000,000,000,000',
        },
        {
          type: 'coin-detail',
          title: 'Liquidity V1',
          value: '88.62 BNB',
        },
        {
          type: 'coin-detail',
          title: 'Liquidity V2',
          value: '88.62 BNB',
        },
      ],
      transactions: [
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'sell',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'sell',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'sell',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
        {
          price: 0.000001238,
          pool: 'LP1',
          amount: 9000000000,
          amountCoin: 'SPANDA',
          valueDollar: 131.88,
          valueBnb: 0.2000,
          timestamp: 1631393594,
          transaction: '0x1c29b7abf5d7a3634895fe33ca08656ab72596173f8b6268418704012611cf4a',
          type: 'buy',
        },
      ],
      promotions: [
        {
          color: '#FF1111',
          name: 'SPANDA',
          link: 'pandadex.io',
        },
        {
          color: 'rgba(255, 17, 17, 0.6)',
          name: 'MIST',
          link: 'mist.game',
        },
        {
          color: '#D01214',
          name: 'PYE',
          link: 'creampye.com',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .panda-details {
    display: flex;

    .panda-coin-detail-container {
      &:not(:first-child) {
        margin-left: $component-spacing;
      }

      &:last-child {
        flex-grow: 1;
      }
    }
  }

  .panda-chart-view-body {
    display: flex;

    .panda-chart-view-body-left,
    .panda-chart-view-body-right {
      display: flex;
      flex-direction: column;
    }

    .panda-chart-view-body-left {
      flex-grow: 1;
    }

    .panda-chart-view-body-right {
      width: 371px;
      padding-left: $component-spacing;
    }
  }

  .panda-sidebar-actions {
    display: flex;
    justify-content: space-between;
    padding-top: $component-spacing;
  }
</style>
