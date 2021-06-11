import { defineStore } from 'pinia'

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    sidebar: {
      // 折叠状态
      collapse: false
    }
  }),
  getters: {
    doubleCount() {
      return this.counter * 2
    },
  },
  actions: {
    switchSidebarCollapse() {
      this.sidebar.collapse = !this.sidebar.collapse
    }
  }
})