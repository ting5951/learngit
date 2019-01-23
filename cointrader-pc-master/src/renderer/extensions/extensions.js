import bus from './bus'
import HttpPlugin from './http'
import Vue from 'vue'

export function initlExtensions () {
  Vue.use(bus)
  Vue.use(HttpPlugin)
}
