// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'

export const routes = [
  { 
    path: '/',
    redirect: '/home',
    component: layout,
    meta: { title: '首页', icon: 'icon-dash-board' },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'icon-dash-board' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router