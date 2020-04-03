import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/pages',
    redirect: '/pages/about',
    props: true,
    component: () => import('../views/Pages/PagesTemplate.vue'),
    children: [
      {
        name: 'AboutPage',
        path: 'about',
        props: true,
        meta: {
          currentPage: {
            name: 'about',
            title: 'About Me'
          }
        },
        component: () => import('../views/Pages/About.vue')
      },
      {
        name: 'ProjectsPage',
        path: 'projects',
        props: true,
        meta: {
          currentPage: {
            name: 'projects',
            title: 'Projects'
          }
        },
        component: () => import('../views/Pages/Projects.vue')
      },
      {
        name: 'SayHiPage',
        path: 'sayhi',
        props: true,
        meta: {
          currentPage: {
            name: 'sayhi',
            title: 'Say Hi'
          }
        },
        component: () => import('../views/Pages/SayHi.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
