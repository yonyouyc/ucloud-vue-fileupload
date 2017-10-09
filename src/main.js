// 开发态的入口文件
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
