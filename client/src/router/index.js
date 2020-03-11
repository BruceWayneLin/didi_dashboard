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
  },
  {
    path: '/DidInventory',
    name: 'DidInventory',
    component: loadView('DidInventory')
  },
  {
    path: '/PaymentCheck',
    name: 'PaymentCheck',
    component: loadView('PaymentCheck')
  },
  {
    path: '/RecomInfo',
    name: 'RecomInfo',
    component: loadView('RecomInfo')
  },
  {
    path: '/SaleSetting',
    name: 'SaleSetting',
    component: loadView('SaleSetting')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
