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

    async add_permission(url, payload) {
      try {
        await axios.post(url,payload)
        this.permissions = this.fetchPermissions('/permissions')
        useRouter().push( `roles/`)
        
        }
        catch (error) {
          alert(error)
          console.log(error)
          useRouter().push( `roles/`)
        }
    },

    async delete_permission(url) {
      try {
        await axios.delete(url)
        this.permissions = this.fetchPermissions('/permissions')
        useRouter().push( `roles/`)
        
        }
        catch (error) {
          alert(error)
          console.log(error)
          useRouter().push( `roles/`)
        }
    },
   

  },
})


