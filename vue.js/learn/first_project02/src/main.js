import Vue from 'vue'
import App from './App.vue'
// import VueRouter from "vue-router"
import ElementUI from "element-ui"
// import One from "./view/One"
import "element-ui/lib/theme-chalk/index.css"
import router from "./router"
import store from "./store"

import axios from 'axios'
import VueAxios from 'vue-axios'

import '@/permission' // permission control

Vue.use(VueAxios, axios)

Vue.use(ElementUI)
// Vue.use(One)

Vue.config.productionTip = false


var store1 = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
// Vue.use(VueRouter)
// var sourceOfTruth = {name:"godness", age:19 };
new Vue({
  render: h => h(App),
  router,
  store: store,
  data:store1
}).$mount('#app')
