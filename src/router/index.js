import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/app',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
