<template>
  <div class="home">
    <panda-button href=""
      title=""
      type="borderless"
      icon="/assets/icons/emojione_fire.svg"
    >Burning Panda</panda-button>
    <panda-button href="" title="">Burning Panda</panda-button>
    <panda-button href="" title="" type="secondary">GO</panda-button>
    <panda-button href="" title="" disabled>Connect Wallet</panda-button>
  </div>
</template>

<script>
import PandaButton from '../components/PandaButton.vue';

export default {
  name: 'Home',
  components: {
    PandaButton,
  },
};
</script>
