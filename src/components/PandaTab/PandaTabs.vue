<template>
  <div class="panda-tabs-container">
    <ul class='panda-tabs-header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        v-bind:class="tab.isActive ? 'active' : ''"
        >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PandaTab',
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
  },
  methods: {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i);
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .panda-tabs-container {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        margin-top: $component-spacing;

        .panda-tabs-header {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                display: block;
                min-width: 99px;
                text-align: center;
                background-color: $color-background-secondary;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                font-weight: 600;
                line-height: 2.4rem;
                cursor: pointer;
                transition: opacity .2s ease-in-out;;

                &:not(:first-child) {
                    margin-left: 2px;
                }

                &:not(.active) {
                    opacity: 0.5;
                }
            }
        }
    }
</style>
