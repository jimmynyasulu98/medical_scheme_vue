import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
import axios from 'axios';

export const useInvoicesStore = defineStore('invoice-store', {

  state: () => ({
      invoices: [],
      claims: []
    }),

  getters: {
 
    
    getClaims(state){
      return state.invoices?.data?.claims
    }

  },

  actions: {
    
    async fetchInvoices(url) {
      try {
        const data = await axios.get(url)
          this.invoices = data.data
        }
        catch (error) {
         
          console.log(error)
      }
    },

    async add_invoice(url, payload) {
      try {
        const data = await axios.post(url,payload)
        this.invoices = data.data
        useRouter().push( `invoices/`)
        
        }
        catch (error) {
          alert(error)
          console.log(error)
          useRouter().push( `invoices/`)
        }
    },
   

    claim($claim_id){
      this.claims = this.invoices.data?.claims.find(item => item.id == $claim_id)
    },

    async approveClaim(url,$claim_id){
      try {
        await axios.post(url)
     
        const claim = this.invoices.data?.claims.find(item => item.id == $claim_id)
        claim.approved = true
        
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    async rejectClaim(url,$claim_id){
      try {
        await axios.post(url)
     
        const claim = this.invoices.data?.claims.find(item => item.id == $claim_id)
        claim.approved = false
        
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    async restoreStatus(url,$claim_id){
      try {
        await axios.post(url)
     
        const claim = this.invoices.data?.claims.find(item => item.id == $claim_id)
        claim.approved = null
        
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },


    

  },
})


