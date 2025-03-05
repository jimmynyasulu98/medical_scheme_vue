import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
import axios from 'axios';

    


export const useTestsStore = defineStore('test-store', {

  state: () => ({
      users: [],
    }),

  getters: {
    getMember(state){
      return state.users?.data
    },
    getUsers(state){
      return state.users?.data
    },
    
    getDependants(state){
      return state.users?.data?.dependants
    }
  },

  actions: {
    
    async fetchUsers(url) {
      try {
        const data = await axios.get(url)
          this.users = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },

    deletePost(id){
      this.users.data.dependants = this.users.data?.dependants?.filter(p => p.id !== id)
    }

  },
})


