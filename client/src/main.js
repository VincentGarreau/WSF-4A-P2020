import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { createApolloClient } from './apollo'

import axios from 'axios'
axios.defaults.baseURL = 'https://api.spacexdata.com/v3/'

const { apolloProvider } = createApolloClient()

new Vue({
  render: h => h(App),
  router,
  store,
  apolloProvider
}).$mount('#app')
