export default {
  namespaced: true,

  state: {
    bucket: []
  },

  getters: {
    bucket: (state) => state.bucket
  },

  mutations: {
    addToBucket (state, payload) {
      state.bucket.push(payload)
    },

    removeFromBucket (state, index) {
      state.bucket.splice(index, 1)
    }
  },

  actions: {
    async addToBucket ({ commit, state }, payload) {
      if (!state.bucket.includes(payload)) {
        commit('addToBucket', payload)
      } else {
        console.log('added yet')
      }
    },

    async removeFromBucket ({ commit, state }, payload) {
      const index = state.bucket.indexOf(payload)
      commit('removeFromBucket', index)
    }
  }
}
