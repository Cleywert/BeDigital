import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Loja',
    component: () => import(/* webpackChunkName: "loja" */ '../views/loja.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "user" */ '../views/users/login.vue')
  },
  {
    path: '/user/edit',
    name: 'EditDados',
    component: () => import(/* webpackChunkName: "user" */ '../views/users/editDados.vue')
  },
  {
    path: '/user/new',
    name: 'CreateUser',
    component: () => import(/* webpackChunkName: "user" */ '../views/users/criarConta.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
