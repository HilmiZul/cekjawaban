import Vue from 'vue'
import VueRouter from 'vue-router'
import CekJawaban from '../components/CekJawaban.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CekJawaban',
    component: CekJawaban,
  }
]

const router = new VueRouter({
  routes
})

export default router