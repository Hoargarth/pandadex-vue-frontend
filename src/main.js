import VueI18n from 'vue-i18n';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { languages, defaultLocale } from './locales/index';

Vue.use(VueI18n);
Vue.config.productionTip = false;

const messages = Object.assign(languages);

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
