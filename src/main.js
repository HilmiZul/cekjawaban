import Vue from 'vue'
import App from './App.vue'

import './assets/css/bs.min.css'
import './assets/fa/css/all.min.css'
import AOS from 'aos'
import "aos/dist/aos.css"

import router from './router'

AOS.init()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
