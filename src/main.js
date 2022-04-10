import Vue from 'vue';
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import './assets/css/reset.css';

Vue.config.productionTip = false;
Vue.use(VCharts);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
