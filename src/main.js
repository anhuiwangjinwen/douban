import Vue from 'vue'
import App from './App.vue'
import api from './api/index'
import './assets/css/base.css'
import './assets/js/font.js'


Vue.prototype.$api = api;

Vue.config.productionTip = false

//配置服务端地址
import server from "./config/server.js"
Vue.prototype.baseURL = server.baseURL

import axios from './plugins/axios.js'

import router from './plugins/router'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
