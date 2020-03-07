import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadView('Home')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: loadView('Dashboard')
  },
  {
    path: '/DidiMember',
    name: 'DidiMember',
    component: loadView('DidiMember')
  },
  {
    path: '/DidiMemberEdit',
    name: 'DidiMemberEdit',
    component: loadView('DidiMemberEdit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
