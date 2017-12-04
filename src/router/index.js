import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import distributionCenter from './distribution-center'
import Home from '@/components/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    home,
    distributionCenter
  ]
})
