import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
import axios from 'axios';

export const useRolesStore = defineStore('role-store', {

  state: () => ({
      roles: [],
      permissions: []
    }),

  getters: {
 
    
    getClaims(state){
      return state.invoices?.data?.claims
    }

  },

  actions: {
    
    async fetchRoles(url) {
      try {
        const data = await axios.get(url)
          this.roles = data.data
        }
        catch (error) {
         
          console.log(error)
      }
    },

    async add_role(url, payload) {
      try {
        await axios.post(url,payload)
        this.roles = this.fetchRoles('/roles')
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


