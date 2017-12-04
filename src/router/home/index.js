import index from '@/page/home/Home.vue'
import Home from '@/components/home/index.vue'
import UserSet from '@/page/home/UserSet.vue'
import LoginLog from '@/page/home/LoginLog.vue'
import SystemMessage from '@/page/home/SystemMessage.vue'

export default {
  path: '/home',
  component: Home,
  children: [
    {
      path: '',
      component: index
    },
    {
      path: 'home',
      component: index
    },
    {
      path: 'home/userSet',
      component: UserSet
    },
    {
      path: 'home/loginLog',
      component: LoginLog
    },
    {
      path: 'home/systemMessage',
      component: SystemMessage
    }
  ]
}
