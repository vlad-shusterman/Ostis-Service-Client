import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/pages/StartPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'Search',
      component: Start
    }
  ]
})
