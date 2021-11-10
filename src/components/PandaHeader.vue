<template>
  <div class="panda-header" v-if="!$root.isMobile">
    <panda-button href=""
      title=""
      type="borderless"
      icon="/assets/icons/emojione_fire.svg"
    >
      {{ $t('header.burningPanda') }}
    </panda-button>
    <h1>{{ $t('header.pandaDex') }}<i>{{ $t('header.beta') }}</i></h1>
    <panda-button-wallet-connect>{{ $t('header.walletConnect') }}</panda-button-wallet-connect>
  </div>

  <div class="panda-header" v-else>
    <h1>{{ navOpen ? $t('header.menu') : $t('header.pandaDex') }}<i>{{ $t('header.beta') }}</i></h1>
    <div class="hamburger-wrapper" v-bind:class="navOpen ? 'hamburger-active' : ''">
      <div id="hamburger" class="hamburger-icon-container" @click="navToggle">
        <span class="hamburger-icon"></span>
      </div>
    </div>
    <div class="mobile-navigation" v-bind:class="navOpen ? 'nav-active' : ''">
        <div class="mobile-navigation-top">
          <panda-button-wallet-connect>
            {{ $t('header.walletConnect') }}
          </panda-button-wallet-connect>
        </div>
        <div class="mobile-navigation-separator"></div>
        <div class="mobile-navigation-bottom">
          <panda-button type="mobile" href="" title="">
            {{ $t('header.burningPanda') }}
          </panda-button>
          <panda-button type="mobile" href="" title="">
            {{ $t('header.priceBot') }}
          </panda-button>
          <panda-button type="mobile" href="" title="">
            {{ $t('header.telegram') }}
          </panda-button>
        </div>
    </div>
  </div>
</template>

<script>
import PandaButton from './PandaButton.vue';
import PandaButtonWalletConnect from './PandaButtonWalletConnect.vue';

export default {
  name: 'PandaHeader',
  components: {
    PandaButton,
    PandaButtonWalletConnect,
  },
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    navToggle() {
      this.navOpen = !this.navOpen;

      const bodyElement = document.querySelector('body');

      if (this.navOpen) {
        bodyElement.classList.add('noscroll');
      } else {
        bodyElement.classList.remove('noscroll');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.panda-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 16px;
  position: sticky;
  top: 0;
  background-color: $color-background-main;
  z-index: 1;

  @media all and (min-width: 1405px) {
    justify-content: space-between;
    position: initial;
  }

  h1 {
    position: relative;
    margin: 0;
    font-size: 1.8rem;
    z-index: 2;

    @media all and (min-width: 768px) {
      font-size: 2.4rem
    }

    i {
      display: none;
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

      @media all and (min-width: 768px) {
        display: initial;
      }
    }
  }
}

.hamburger-wrapper {
  position: absolute;
  right: 20px;
  z-index: 2;
}

.hamburger-icon-container {
  height: 17px;
  width: 17px;
  position: relative;
  cursor: pointer;
  background: transparent;
  border-radius: 1.5px;
}

.hamburger-icon,
.hamburger-icon:before,
.hamburger-icon:after {
  content: '';
  position: absolute;
  height: 1.5px;
  width: 17px;
  background: white;
  transition: all .2s ease;
}

.hamburger-icon {
  top: calc(50% - 0.75px);
  left: 0;

  &:before {
    top: -6px
  }

  &:after {
    top: 6px;
  }
}

.hamburger-active {
  .hamburger-icon-container {
    color:lime;
  }

  .hamburger-icon {
    background: transparent;
    transform: rotate(-135deg);

    &:before,
    &:after {
      top: 0
    }

    &:before {
      transform: rotate(90deg)
    }
  }
}

.mobile-navigation {
  width: 100%;
  height: 0;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  background-color: $color-background-main;
  z-index: 1;
  transition: height .4s ease-in-out;

  &.nav-active {
    height: 100vh;
  }

  .mobile-navigation-top {
    padding: 80px 24px 24px;
  }

  .mobile-navigation-separator {
    width: 100%;
    height: 1px;
    background-color: #FCFCFC;
  }

  .mobile-navigation-bottom {
    padding: 0 24px;
  }
}
</style>
