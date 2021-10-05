import Vue from 'vue'
import App from './App.vue'

import './assets/css/bs.min.css'
import './assets/fa/css/all.min.css'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
