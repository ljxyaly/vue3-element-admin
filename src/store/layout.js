import { defineStore } from 'pinia'

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    layout: 'default',
    aside: {
      menu: [],
    },
    route: {
      currentPath: ''
    }
  }),
  getters: {
    doubleCount() {
      return this.counter * 2
    },
  },
  actions: {
    updateAsideMenu(data) {
      this.aside.menu = data
    },
    updateRouteCurrentPath(path) {
      this.route.currentPath = path
    }
  }
})