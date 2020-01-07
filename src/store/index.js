import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      user: 'haha@mail.com',
      password: 'haha',
      authenticated: false
    }
  },
  mutations: {
    userIsAuthenticated (state) {
      state.authenticated = true
    },
    userIsNotAuthenticated (state) {
      state.authenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
