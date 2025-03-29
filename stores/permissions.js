import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
import axios from 'axios';

export const usePermissionsStore = defineStore('permission-store', {

  state: () => ({
      permissions: []
    }),

  getters: {
    
    getClaims(state){
      return state.invoices?.data?.claims
    }

  },

  actions: {
    
    async fetchPermissions(url) {
      try {
        const data = await axios.get(url)
          this.permissions = data.data
        }
        catch (error) {
         
          console.log(error)
      }
    },

   

  },
})


