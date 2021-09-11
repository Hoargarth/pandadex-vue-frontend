import Vue from 'vue';
import VueRouter from 'vue-router';
import ChartView from '../views/ChartView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ChartView',
    component: ChartView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
