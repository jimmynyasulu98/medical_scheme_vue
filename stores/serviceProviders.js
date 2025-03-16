import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
import axios from 'axios';

export const useServiceProvidersStore = defineStore('service-provider-store', {

  state: () => ({
      invoices: [],
      search: []
    }),

  getters: {
 
    
    getClaims(state){
      return state.invoices?.data?.claims
    }

  },

  actions: {
    
    async searchItem(url , query){
      try {
        const data = await axios.get(url,{
          params: {
            query: query
          }
      })
        this.search = data.data
        }

      catch (error) {
          alert(error)
          console.log(error)
      }
    },
    
    async fetchInvoices(url) {
      try {


        const data = await axios.get(url)
          this.invoices = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },

    deletePost(id){
      this.users.data.dependants = this.users.data?.dependants?.filter(p => p.id !== id)
    },
 

  },


})


