import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      currentUser: 'haha@mail.com',
      password: 'haha'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
