import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
import axios from 'axios';

export const useEmployeeStore = defineStore('employee-store', {

  state: () => ({
      employees: [],
    }),

  getters: {

  },

  actions: {
    
    async fetchEmployees(url) {
      try {
        const data = await axios.get(url)
          this.employees = data.data
        }
        catch (error) {
         
          console.log(error)
      }
    },

  },
})


