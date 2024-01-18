import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // state 
  state: () => ({
    count: 5
  }),
  // getters 
  getters: {
    getCount: state => state.count
  },
  // actions 
  actions: {
    increment() {
      console.log("pinia increment action")
      this.count++
    }
  }
  , persist: true,

})


