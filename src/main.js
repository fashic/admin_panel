import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import router from "./router"
import {store} from './store'

Vue.use(VueRouter)

const about = require('./components/about');


const routes = [
  {path: '/', components: about},

]
const router = new VueRouter({ routes, mode: 'history' });
  

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
