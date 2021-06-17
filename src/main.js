import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { routes } from '@/router' 
import ElementPlus from 'element-plus'
import '/element-variables.scss'
import { createPinia } from 'pinia'
import { useLayoutStore } from '@/store/layout.js'
import './index.css'

const pinia = createPinia()
const arr = createApp(App)
arr.use(router).use(pinia).use(ElementPlus).mount('#app')


router.beforeEach((to, from, next) => {  
  const layoutStore = useLayoutStore(pinia)
  let routeChildren = []
  routes.map((item) => {
    if (item.path === to.path || item.redirect === to.path) {
      routeChildren = item.children
      return
    }
    if (item.children && Array.isArray(item.children)) {
      item.children.map(item1 => {
        if (item1.path === to.path || item1.redirect === to.path) {
          routeChildren = item.children
          return
        }
        if (item1.children && Array.isArray(item1.children)) {
          item1.children.map(item2 => {
            if (item2.path === to.path || item2.redirect === to.path) {
              routeChildren = item.children
              return
            }
          })
        }
      })
    }
  })
  layoutStore.updateAsideMenu(routeChildren)
  layoutStore.updateRouteCurrentPath(to.path)
  next()
})