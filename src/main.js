import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import '/element-variables.scss'
import { createPinia } from 'pinia'
import './index.css'

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app')
