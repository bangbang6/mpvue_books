import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false
App.mpType = 'app' // 必须要
Vue.prototype.$store = store
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
