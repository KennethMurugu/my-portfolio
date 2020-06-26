import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    name: 'About',
    path: '/about',
    props: true,
    component: () => import('../views/About.vue')
  },
  {
    name: 'SayHi',
    path: '/sayhi',
    props: true,
    component: () => import('../views/SayHi.vue')
  },
  {
    name: 'Projects',
    path: '/projects',
    props: true,
    component: () => import('../views/Projects.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
