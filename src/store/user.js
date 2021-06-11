// store/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    counter: 0,
    name: 'Eduardo',
  }),
  getters: {
    doubleCount() {
      return this.counter * 2
    },
  },
  actions: {
    reset() {
      this.counter = 0
    }
  }
})