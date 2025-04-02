<script setup>

    import { onMounted } from 'vue'
    import { useFlowbite } from '~/composables/useFlowbite';
    import { usePermissionsStore } from '~~/stores/permissions';
    import { useRolesStore } from '~~/stores/roles';
   
    const role = defineProps({role: Object})
    // initialize components based on data attribute selectors
    onMounted(() => {
        useFlowbite(() => {
            initFlowbite();
        })
    })

    const permissions = usePermissionsStore();
    permissions.fetchPermissions(`/permissions`)

   
    

    const form = ref({
        roles: [],
        permissions: []
    
    })

   

    const roles = useRolesStore();
    roles.fetchRoles(`/roles`)

    const updateRole = (form) => {
        roles.update_role(`roles/${role.role.id}`, form)   
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
                <p>Assign Roles and Permision to .........</p>
                <span class="text-sm text-black font-medium mx-4">
                    JI
                </span>
            </div>
            
            <div class="p-4">
                
                <div class="flex flex-col sm:flex-row sm:mt-1">

                    <div class="flex flex-col sm:w-1/2">
                
                        <!-- Roles -->
                        <div class="py-1 sm:order-none">
                            <div class=" sm:text-center mt-1 text-start ">
                                <form class="p-4 md:p-5 space-y-4" @submit.prevent="updateRole(form)"> 
                                    <div class="w-full px-3">
                                        <label for="gender" class="block text-md font-medium text-[#000000] py-2">
                                            Roles
                                        </label>

                                        <div class="inline-flex  items-center px-2 mb-2" v-for="(role, index) in roles.roles.data"  v-bind:key="index">  
                                            
                                            <input  v-model="form.roles"    type="checkbox" 
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label  class="ms-2 text-sm font-medium">{{ role.name }}</label>

                                        </div>   
                                    </div>
                                    
                                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button type="submit"  class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Update</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>

                    <div class="flex flex-col sm:w-1/2">

                        <div class=" sm:text-center pl-5 mt-1 text-start ">
                            <form class="p-4 md:p-5 space-y-4" @submit.prevent="updateRole(form)"> 
                                <div class="w-full px-3">
                                    <label for="gender" class="block text-md font-medium text-[#000000] py-2">
                                        permissions
                                    </label>

                                    <div class="inline-flex  items-center px-2 mb-2" v-for="(permission, index) in permissions.permissions.data"  v-bind:key="index">  
                                        
                                        <input  v-model="form.permissions"    type="checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label  class="ms-2 text-sm font-medium">{{ permission.name }}</label>

                                    </div>   
                                </div>
                                
                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>