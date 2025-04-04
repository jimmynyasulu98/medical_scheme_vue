<script setup>

    import { useRoute } from 'vue-router'
    import { usePermissionsStore } from '~~/stores/permissions';
    import { useRolesStore } from '~~/stores/roles';
    import { useEmployeeStore } from '~~/stores/employees';

    definePageMeta({
        middleware: ['auth'],
    })
   
    const permissions = usePermissionsStore();
    permissions.fetchPermissions(`/permissions`)

    const roles = useRolesStore();
    roles.fetchRoles(`/roles`)
    const route = useRoute()
   

    const employee = useEmployeeStore();
    employee.fetchEmployees(`employees/${route.params.id}`)

    const assignRole = (link, payload) => {
        employee.assignRoles(link, payload) 
    }

    const unassignRole = (link, payload) => {
        employee.unassignRoles(link, payload) 
    }

    const assignPermission = (link, payload) => {
        employee.assignPermissions(link, payload) 
    }

    const unassignPermission = (link, payload) => {
        employee.unassignPermissions(link, payload) 
    }



</script>
<template>
    <div>
        <!-- breadcrumb -->
        <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
            <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500">
                <a href="#" class="text-gray-700">Home</a>
                <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Assignment</a>
            </li>
            </ol>
        </nav>
        <div class="relative flex flex-col my-6 bg-gray-100 shadow-sm border border-slate-200 rounded-lg w-auto">
            <div class="pl-5 flex align-middle mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                <p>Assign Roles and Permision to ........</p>
                <span class="text-sm text-black font-medium mx-4">
                    {{ employee.employees?.data?.first_name }} {{ employee.employees?.data?.last_name }}
                </span>
            </div>
            
            <div class="p-4">
                
                <div class="flex flex-col sm:flex-row sm:mt-1">
                    <div class="flex flex-col sm:w-1/2">
                
                        <!-- Roles -->
                        <div class="py-1 sm:order-none">
                            <div class=" sm:text-center mt-1 text-start ">
                                
                                <div class="w-full px-3">
                                    <label for="gender" class="block text-md font-medium text-[#000000] py-2">
                                        Roles
                                    </label>
                                    <div class=" sm:text-center mt-1 text-start ">
                                        <table class="text-sm text-left rtl:text-right h-10 ">
                                            <thead class="text-xs text-white uppercase bg-gray-10 dark:bg-gray-700 dark:text-white">
                                                <tr>
                                                
                                                    <th scope="col" class="px-3 py-1">
                                                        No.
                                                    </th>
                                                    <th scope="col" class="px-3 py-1">
                                                        Name
                                                    </th>
                                                
                                                    <th scope="col" class="px-2 py-1">
                                                        Status
                                                    </th>
                                                    <th scope="col" class="px-2 py-1 col-span-3">
                                                        Action 
                                                    </th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody> 
                                                <tr class="hover:bg-gray-200 border-1  border-gray-600 "  v-for="(role, index) in roles.roles.data"  v-bind:key="index">
                                                    <td  class="px-2 py-1">
                                                        {{ index+1 }}
                                                    </td>
                                                    <td  class="px-2 py-1">
                                                        {{ role.name }}
                                                    </td>
                                                    
                                                    <td  class="px-2 py-1 ">
                                                        <IconCheck  v-if="employee.roles.includes(role.name)" class="rounded-sm text-blue-600"/>
                                                        <IconTimes  v-else class="rounded-sm text-red-500"/>
                                                        
                                                    </td>
                                                    <td class=" py-1  flex">
                                                        <button  v-if="employee.roles.includes(role.name)" @click="unassignRole(`/employees/${employee.employees?.data?.id}/unassign-role`,{'name':role.name})" class="px-3 dark:outline-blue-500  dark:border-blue-500 text-white-600 dark:text-blue-600 hover:cursor-pointer hover:text-red-600"  >
                                                            Unasign Role
                                                        </button>
                                                        <button  v-else @click="assignRole(`/employees/${employee.employees?.data?.id}/assign-role`,{'name':role.name})" class="px-3 dark:outline-blue-500  dark:border-blue-500 dark:text-black-600 hover:cursor-pointer hover:text-blue-600"  >
                                                            Assign Role
                                                        </button>
                                                        
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>   
                                     
                                </div>
                            
                            </div>
                        </div>

                    </div>

                    <div class="flex flex-col ">

                        <div class=" sm:text-center mt-1 text-start ">
                            
                                <div class="w-full">
                                    <label for="gender" class="block text-md font-medium text-[#000000] py-2">
                                        permissions
                                    </label>

                                    <div class=" sm:text-center mt-1 text-start ">
                                        <table class="text-sm text-left rtl:text-right h-10 ">
                                            <thead class="text-xs text-white uppercase bg-gray-10 dark:bg-gray-700 dark:text-white">
                                                <tr>
                                                
                                                    <th scope="col" class="px-3 py-1">
                                                        No.
                                                    </th>
                                                    <th scope="col" class="px-3 py-1">
                                                        Name
                                                    </th>
                                                
                                                    <th scope="col" class="px-2 py-1">
                                                        Status
                                                    </th>
                                                    <th scope="col" class="px-2 py-1 col-span-3">
                                                        Action 
                                                    </th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody> 
                                                <tr class="hover:bg-gray-200 border-1  border-gray-600 "  v-for="(permission, index) in permissions.permissions.data"  v-bind:key="index">
                                                    <td  class="px-2 py-1">
                                                        {{ index+1 }}
                                                    </td>
                                                    <td  class="px-2 py-1">
                                                        {{ permission.name }}
                                                    </td>
                                                    
                                                    <td  class="px-2 py-1 ">
                                                        <IconCheck  v-if="employee.permissions.includes(permission.name)" class="rounded-sm text-blue-600"/>
                                                        <IconTimes  v-else class="rounded-sm text-red-500"/>
                                                        
                                                    </td>
                                                    <td class=" py-1  flex">
                                                        <button  v-if="employee.permissions.includes(permission.name)"  @click="unassignPermission(`/employees/${employee.employees?.data?.id}/unassign-permission`,{'name':permission.name})" class="px-3 dark:outline-blue-500  dark:border-blue-500 text-white-600 dark:text-blue-600 hover:cursor-pointer hover:text-red-600"  >
                                                            Unasign permission
                                                        </button>
                                                        <button  v-else @click="assignPermission(`/employees/${employee.employees?.data?.id}/assign-permission`,{'name':permission.name})" class="px-3 dark:outline-blue-500  dark:border-blue-500 dark:text-black-600 hover:cursor-pointer hover:text-blue-600"  >
                                                            Assign permission
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>    
                                </div>
                                
                            
                        </div>
                    </div>
                    
                </div>  
            </div>
        </div>
    </div>
</template>