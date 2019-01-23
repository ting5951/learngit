import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    callback: null
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    callback (state, name) {
      state.callback = name
    }
  },
  actions: {
    decrement (context) {
      context.commit('decrement')
    },
    changeNameA (context, config = {}) {
      context.commit('increment')
    },
    callback (context, config = {}) {
      console.log('根对象：', context)
      context.commit('callback', config)
    }
  },
  modules: {
    user
  }
})
export default store
