'use strict'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import { ConfirmPlugin, AlertPlugin, ToastPlugin, XButton } from 'vux'
import LoadScript from 'vue-load-script'
import store from './vuex/store'
import App from './App'
import router from './router'
import Http from './http'
import Tool from './tool'

// 全局注册的组件
import Vicon from './components/_unit/v-icon'

Vue.use(Vuex)
Vue.use(Http)
Vue.use(LoadScript)
Vue.use(Tool)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(XButton)

Vue.component('v-icon', Vicon)
Vue.config.productionTip = false

/* eslint-disable no-new */
if (process.browser) {
  const FastClick = require('fastclick')
  FastClick.attach(document.body)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
export { App, router, store }
