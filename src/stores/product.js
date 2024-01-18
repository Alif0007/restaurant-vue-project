import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    // state 
    state: () => ({
        category: []
    }),
    // getters 
    getters: {
        getCategory: state => state.category
    },
    // actions 
    actions: {
        addcategory(payload) {
            this.category.push(payload)
        }
    }, persist: true,

})


