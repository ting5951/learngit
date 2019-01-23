import UserService from '../../../service/userService.js'
import { ASSET } from '../mutations-types'

import Vue from 'vue'

const state = {
  name: 'jingna',
  assets: {},
  pass: ['yu', 'ning']
}
const mutations = {
  changeName (state, name) {
    state.name = name
  },
  [ASSET.GET_ASSET] (state, info) {
    Vue.set(state, 'assets', info)
  }
}

const actions = {
  getAssets ({ commit }, param) {
    return UserService.getAssets(param.url, param).then((data) => {
      commit(ASSET.GET_ASSET, data)
      return data
    })
  },
  changeNameA (context, name) {
    context.commit('changeName', name)
    const dispatch = context.dispatch
    dispatch('someAction', name)
    dispatch('callback', name, {root: true})
    console.log('子对象：', context)
  },
  someAction (context, name) {
    console.info(context.state.name)
  }
}

const getters = {
  someGetter (state, getters, rootState, rootGetters) {
    if (rootState.count > 3) {
      state.name = 'werwr'
    }
    var der = rootGetters.count
    console.info(der)
    return state.name
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
