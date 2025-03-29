<script setup>
    import { useRoute } from 'vue-router'
    import { usePermissionsStore } from '~~/stores/permissions';
    import { useRolesStore } from '~~/stores/roles';

    definePageMeta({
        middleware: ['auth'],
    })
    const roles = useRolesStore();
    roles.fetchRoles(`/roles`)

    const permissions = usePermissionsStore();
    permissions.fetchPermissions(`/permissions`)

</script>
<template>
    <div id="roles">
        <!-- breadcrumb -->
        <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
            <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500">
                <a href="#" class="text-gray-700">Home</a>
                <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Roles</a>
            </li>
            </ol>
        </nav> 
        <!-- main content -->
        <div class="p-5">
            <div class="flex flex-col sm:flex-row sm:mt-3">

                <div class="flex flex-col sm:w-1/2">
                    <div class="lg:flex justify-between items-center mb-2">
                        <p class="text-m font-semibold mb-2 lg:mb-0"></p>
                    
                        <button data-modal-target="new-role-modal" data-modal-toggle="new-role-modal" class="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer focus:outline-none rounded-lg px-2 py-1
                        text-white font-semibold shadow" type="button">
                            New Role
                        </button>
                        
                    </div>
                    <NewRoleModal/>
                   
                    <!-- Roles -->
                    <div class="py-1 sm:order-none">
                        <div class="flex justify-center align-middle">
                            <h2 class="font-poppins font-bold text-heading sm:text-sm text-sm capitalize ">All Roles</h2>
                        </div>
                        <div class=" sm:text-center pl-5 mt-1 text-start ">
                            <table class="w-full text-sm text-left rtl:text-right h-10 ">
                                <thead class="text-xs text-white uppercase bg-gray-10 dark:bg-gray-700 dark:text-white">
                                    <tr>
                                        <th scope="col" class="px-3 py-1">
                                            #
                                        </th>
                                        <th scope="col" class="px-3 py-1">
                                            Name
                                        </th>
                                        <th scope="col" class="px-2 py-1">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr class="hover:bg-gray-200 border-1  border-gray-600 " v-for="(role, index) in roles.roles.data"  v-bind:key="index"  >
                                    <td  class="px-2 py-1">
                                        {{ index+1 }}
                                    </td>
                                    <td  class="px-2 py-1">
                                        {{ role.name }}
                                      
                                    </td>
                                    <td  class="flex px-2 py-1">
                                        <NuxtLink  class=" text-blue-600 dark:text-blue-600 hover:text-l hover:cursor-pointer focus:outline-none"  >
                                            <IconEye/>
                                        </NuxtLink>
                                        |
                                        <button :data-modal-target="edit-role-modal-`${role.id}`" :data-modal-toggle="edit-role-modal-`${role.id}`" class="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer focus:outline-none rounded-lg px-2 py-1
                                        text-white font-semibold shadow" type="button">
                                            <IconEdit/>
                                        </button>
                                        <editRoleModal :role="role"/>
                                    </td>   
                                </tr>
                                </tbody>
                            </table>
                            
                        </div>
                    </div>

                </div>

                <div class="flex flex-col sm:w-1/2">
                    <div class="flex justify-center align-middle">
                        <h2 class="font-poppins font-bold text-heading sm:text-sm text-sm capitalize ">All Permisions</h2>
                    </div>
                    <div class=" sm:text-center pl-5 mt-1 text-start ">
                        <table class="w-full text-sm text-left rtl:text-right h-10 ">
                            <thead class="text-xs text-white uppercase bg-gray-10 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th scope="col" class="px-3 py-1">
                                        #
                                    </th>
                                    <th scope="col" class="px-3 py-1">
                                        Name
                                    </th>
                                    <th scope="col" class="px-2 py-1">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody> 
                                <tr class="hover:bg-gray-200 border-1  border-gray-600 " v-for="(permission, index) in permissions.permissions.data"  v-bind:key="index"  >
                                    <td  class="px-2 py-1">
                                        {{ index+1 }}
                                    </td>
                                    <td  class="px-2 py-1">
                                        {{ permission.name }}
                                    </td>
                                    <td  class="px-2 py-1">
                                        <NuxtLink  class=" text-blue-600 dark:text-blue-600 hover:text-l hover:cursor-pointer focus:outline-none"  >
                                            <IconEdit/>
                                        </NuxtLink>
                                    </td>   
                                </tr>
                            </tbody>
                        </table>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>        
</template>