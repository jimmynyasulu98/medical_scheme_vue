
<script setup>

    import { onMounted } from 'vue'
    import { useFlowbite } from '~/composables/useFlowbite';

    import { usePermissionsStore } from '~~/stores/permissions';
    import { useRolesStore } from '~~/stores/roles';



    // initialize components based on data attribute selectors
    onMounted(() => {
        useFlowbite(() => {
            initFlowbite();
        })
    })

    const form = ref({
        name: "",
        permissions: [],
    
    })

    const permissions = usePermissionsStore();
    permissions.fetchPermissions(`/permissions`)

    const roles = useRolesStore();
    const addRole = (form) => {
        roles.add_role('/roles', form)   
    }

</script>

<template>
   <div class="">
       <!-- Modal toggle -->
    
<!-- Main modal -->
<div id="new-role-modal" tabindex="-1" aria-hidden="true" class="modal hidden overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
    <div class="relative p-4  max-w-l max-h-full">
        <!-- Modal content -->
        <div class="relative bg-gray-400 rounded-lg shadow-sm dark:bg-white  text-black dark:text-black">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 class="text-xl font-semi bold leading-relaxed text-black dark:text-black">
                    New Role
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-red-500 hover:text-red-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-red-500 dark:hover:text-white" data-modal-hide="new-role-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    
                </button>
            </div>
            <!-- Modal body -->

            <form class="p-4 md:p-5 space-y-4"  @submit.prevent="addRole(form)">
     
                <div class="w-full px-3">
                    <label class="block text-xs font-medium text-[#07074D] mb-2" for="username">
                        Role
                    </label>
                    <input   v-model="form.name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" id="service_provider" type="text" placeholder="Role">
                   
                </div>
               
                <div class="w-full px-3">
                    <label for="gender" class="block text-xs font-medium text-[#07074D] py-2">
                        permissions
                    </label>

                    <div class="inline-flex  items-center px-2 mb-2" v-for="(permission, index) in permissions.permissions.data"  v-bind:key="index">  
                       
                        <input id="default-checkbox"  v-model="form.permissions" :value="permission.name" type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ permission.name }}</label>

                    </div>   
                </div>
                    
                <!-- Modal footer -->
                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button type="submit" data-modal-hide="default-modal" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Add</button>
                    <button data-modal-hide="new-role-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium  focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-red-700">Close</button>
                </div>
            </form>
            
        </div>
    </div>
</div>
    </div>
</template>

<style>
    .modal{
        max-width: 480px!important;
        position:fixed;
        top: 0;
        left: 25%;
        right: 75%;
    }
    .selections:hover{
        background: rgb(21, 93, 252,1);
        border-radius: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        color: white;
        padding-left: 4px;
    }

    .selections-container{
        max-height: 100px;
        overflow-y: scroll;
        border-color: rgb(206, 205, 205);
        border-radius: 4px;
      
    }
</style>
  
