import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landingpage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/settings/:kidId/:kidName',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
    props: true
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: () => import(/* webpackChunkName: "about" */ '../views/PageNotFound.vue')
  },
  {
    path: '/jgjhgjh',
    name: 'NavigationView',
    component: () => import(/* webpackChunkName: "about" */ '../views/NavigationView.vue')
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
