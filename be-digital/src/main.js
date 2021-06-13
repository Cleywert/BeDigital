import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

// utilizando lib de mascaras em todo o sistema
Vue.use(VueTheMask)

// Utilizando bootstrap-vue em todo o projeto
Vue.use(BootstrapVue)
// Utilizando plugin de icones do bootstrap-vue
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
