import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: require('./components/about')}
]


export default new VueRouter({
  routes,
  mode: 'history'
})
