import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('views/home/Home.vue')
  },
  {
    name: 'novel',
    path: '/novel',
    component: () => import('views/novel/Novel.vue')
  },
  {
    name: 'novelEth',
    path: '/novelEth/:id',
    component: () => import('views/novel/NovelEth.vue')
  }
]
const router = createRouter({
  routes,
  // history: createWebHistory()
  history: createWebHashHistory()
})
export default router
