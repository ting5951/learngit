import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

import App from './App'
import router from './router'
import store from './data/store'
import {initlExtensions} from './extensions/extensions.js'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.config.productionTip = false
initlExtensions()

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
