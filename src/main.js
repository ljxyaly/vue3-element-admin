import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
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
  console.log(layoutStore.sidebar.collapse)
  next()
})