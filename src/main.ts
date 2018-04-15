import Vue from 'vue'
import App from './front/App.vue'
import router from './router'
import store from './front/store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
