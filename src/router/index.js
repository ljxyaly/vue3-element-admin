// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import EmptyLayout from '@/layout/EmptyLayout.vue'

export const routes = [
  { 
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: '首页', icon: 'icon-dash-board' },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home.vue'),
        meta: { title: '首页1', icon: 'icon-dash-board' }
      }
    ]
  },
  { 
    path: '/comp',
    redirect: '/comp/index1',
    component: Layout,
    meta: { title: '组件', icon: 'icon-evaluationTem-menu' },
    children: [
      {
        path: '/comp/index1',
        component: () => import('@/views/comp/index1.vue'),
        meta: { title: '组件1', icon: 'icon-dash-board' }
      },
      {
        path: '/comp/index2',
        component: () => import('@/views/comp/index2.vue'),
        meta: { title: '组件2', icon: 'icon-dash-board' }
      },
      {
        path: '/comp/index3',
        redirect: '/comp/index3/index1',
        component: EmptyLayout,
        meta: { title: '组件3', icon: 'icon-dash-board' },
        children: [
          {
            path: '/comp/index3/index1',
            component: () => import('@/views/comp/index3.vue'),
            meta: { title: '组件3', icon: 'icon-dash-board' }
          },
          {
            path: '/comp/index3/index2',
            component: () => import('@/views/comp/index4.vue'),
            meta: { title: '组件4', icon: 'icon-dash-board' }
          }
        ]
      },
      {
        path: '/comp/index5',
        component: EmptyLayout,
        meta: { title: '组件5', icon: 'icon-dash-board' },
        children: [
          {
            path: '/comp/index5',
            component: () => import('@/views/comp/index5.vue'),
            meta: { title: '组件5', icon: 'icon-dash-board' }
          }
        ]
      }
    ]
  },
  { 
    path: '/setting',
    redirect: '/setting/index1',
    component: Layout,
    meta: { title: '设置', icon: 'icon-setting-filling' },
    children: [
      {
        path: '/setting/index1',
        component: () => import('@/views/setting/index1.vue'),
        meta: { title: '设置1', icon: 'icon-dash-board' }
      },
      {
        path: '/setting/index2',
        component: () => import('@/views/setting/index2.vue'),
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