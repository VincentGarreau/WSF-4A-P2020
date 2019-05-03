import Vue from 'vue'
import Router from 'vue-router'

import RocketsList from '@/views/RocketsList.vue'
import RocketInfo from '@/views/RocketInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      component: RocketsList,
      name: 'rockets-list',
      path: '/rockets'
    },
    {
      component: RocketInfo,
      name: 'rocket-info',
      path: '/rockets/:id'
    },
    {
      path: '*',
      redirect: '/rockets'
    }
  ]
})
