import Vue from 'vue'
import App from './App.vue'

import store from './store/index';

import './styles/global.css';
import './styles/animations.css';

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
