import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
import axios from 'axios';
import permissions from "./permissions";

export const useEmployeeStore = defineStore('employee-store', {

  state: () => ({
      employees: [],
      roles: [],
      permissions: []
    }),

  getters: {
    permissionsArray(){
      var permissions = this.employees.data.permissions.map(function(element) {
        return element.name.replace(/\s+/g, '');
      });
      return permissions
    },

     roleArray(){
      var roles = this.employees.data.roles.map(function(element) {
        return element.name.replace(/\s+/g, '');
      });
      return roles
    },
    

  },

  actions: {
    
    async fetchEmployees(url) {
      try {
        const data = await axios.get(url)
          this.employees = data.data
          this.roles = this.roleArray
          this.permissions = this.permissionsArray
        }
        catch (error) {
         
          console.log(error)
      }
    },

    async assignRoles(url,payload) {

      try {
        await axios.post(url,payload)
        this.roles.push(payload.name.replace(/\s+/g, '')) 
      }

      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    async unassignRoles(url,payload) {

      try {
        await axios.post(url,payload);
        this.roles.splice(this.roles.indexOf(payload.name.replace(/\s+/g, '')),1)
      }

      catch (error) {
        alert(error)
        console.log(error)
      }
    },


    async assignPermissions(url,payload) {

      try {
        await axios.post(url,payload)
        this.permissions.push(payload.name.replace(/\s+/g, '')) 
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    async unassignPermissions(url,payload) {

      try {
        await axios.post(url,payload);
        this.permissions.splice(this.permissions.indexOf(payload.name.replace(/\s+/g, '')),1)
      }

      catch (error) {
        alert(error)
        console.log(error)
      }
    },

  },
})


