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
  },
  { 
    path: '/comp',
    component: layout,
    meta: { title: '组件', icon: 'icon-dash-board' },
    children: [
      {
        path: '/index1',
        component: () => import('@/views/comp/index1.vue'),
        name: 'CompIndex1',
        meta: { title: '组件1', icon: 'icon-dash-board' }
      },
      {
        path: '/index2',
        component: () => import('@/views/comp/index2.vue'),
        name: 'CompIndex2',
        meta: { title: '组件2', icon: 'icon-dash-board' }
      }
    ]
  },
  { 
    path: '/setting',
    component: layout,
    meta: { title: '设置', icon: 'icon-dash-board' },
    children: [
      {
        path: '/index1',
        component: () => import('@/views/setting/index1.vue'),
        name: 'SettingIndex1',
        meta: { title: '设置1', icon: 'icon-dash-board' }
      },
      {
        path: '/index2',
        component: () => import('@/views/setting/index2.vue'),
        name: 'SettingIndex2',
        meta: { title: '设置2', icon: 'icon-dash-board' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router