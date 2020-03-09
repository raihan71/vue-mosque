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
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info/Info.vue')
  },
  {
    path: '/info/:id',
    name: 'ShowInfo',
    component: () => import('../views/Info/ShowInfo.vue')
  },
  {
    path: '/kajian',
    name: 'Kajian',
    component: () => import('../views/Kajian/Kajian.vue')
  },
  {
    path: '/kajian/:id',
    name: 'ShowKajian',
    component: () => import('../views/Kajian/ShowKajian.vue')
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import('../views/Donate.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/takmir',
    name: 'Takmir',
    component: () => import('../views/Takmir.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
