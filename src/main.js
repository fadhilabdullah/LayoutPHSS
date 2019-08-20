import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

import Dashboard from './components/layout/Dashboard'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(BootstrapVue)
Vue.use(VueMaterial)
Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(Dashboard),
})

