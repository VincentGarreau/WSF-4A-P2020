import Vue from 'vue'
import Vuex from 'vuex'

import billing from './billing'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    billing
  }
})
