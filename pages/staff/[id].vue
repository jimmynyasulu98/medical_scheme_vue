<script setup>
    import { useRoute } from 'vue-router'
    import axios from 'axios';
    import { useTestsStore } from '~~/stores/tests';
    definePageMeta({
        middleware: ['auth'],
    })
    /*   const stored = localStorage.storedData
    const $id = '2' */
    //var resp = await axios.get(`users/${route.params.id}`)
    const store = useTestsStore();
    const route = useRoute()
 
    store.fetchUsers(`users/${route.params.id}`)

    async function delete_dependant($id, index) {
        await axios.delete(`dependants/${$id}`)  
    }
      
</script>
<template>
    <div class="bg-gray-100 p-4">

        <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">

            <!-- top content -->
            <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full">
                <div class="h-20 w-20 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
                    <img src="https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo"/>
                </div>

                <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
                    <p class="font-poppins font-bold text-heading sm:text-2xl text-2xl capitalize underline">
                        {{store.getMember?.first_name}}  {{store.getMember?.last_name}}
                    </p>
                    <p class="text-heading">{{"Cover" }}</p>
                </div>

            </div>

            <!-- main content -->
            <div class="p-5">

                <div class="flex flex-col sm:flex-row sm:mt-10">

                    <div class="flex flex-col sm:w-1/2">
                        <!-- My contact -->
                        <div class="py-1 sm:order-none order-3">
                            <h2 class="text-m font-poppins font-bold text-top-color">Member Details</h2>
                            <div class="border-2 w-20 border-top-color my-1"></div>

                            <div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Membership Number -
                                    </p>
                                    <div class="ml-2 truncate text-black-700">{{store.getMember?.membership_number}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        First Name -
                                    </p>
                                    <div class="ml-2 truncate">{{store.getMember?.first_name}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Middle Names -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Surname -
                                    </p>
                                    <div class="ml-2 truncate">{{store.getMember?.last_name}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Date Of Birth -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Gender -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Marital Status -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        University/Location -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Payroll Number -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Date Of Application -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Date Joined -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                <div class="flex items-center my-1">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Nationality -
                                    </p>
                                    <div class="ml-2 truncate">{{}}</div>
                                </div>
                                

                            </div>
                        </div>
                        
                        <!-- Education Background -->
                        <div class=" sm:order-none order-1">
                            <h2 class="text-lg font-poppins font-bold text-top-color">Contact</h2>
                            <div class="border-2 w-20 border-top-color my-1"></div>
                            <div class="flex flex-col space-y-1">

                                <div class="flex items-center">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Phone Number(s) -
                                    </p>
                                    <div class="ml-2 truncate">{{}} / {{}}</div>
                                </div>
                                <div class="flex items-center my-1">
                                    <p class=" font-bold text-sm text-gray-700">
                                        Email -
                                    </p>
                                    <div class="ml-2 truncate text-sm">{{store.getMember?.email}}</div>
                                </div>

                                <div class="flex flex-col">
                                    <p class="font-bold text-sm text-gray-700">Address</p>
                                    
                                    <p class="font-bold text-xs text-gray-700 mb-2 ">P.O BOX 280 Zomba</p>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div class="flex flex-col sm:w-1/2 order-first sm:order-none sm:-mt-10">
                        <!-- Professional Experience -->
                        <div class="py-4">
                            <h2 class="text-sm font-poppins font-bold text-top-color">Dependants</h2>
                            <div class="border-2 w-20 border-top-color my-3"></div>

                            <div class="flex flex-col">
                                <table class="table-auto text-xs">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Relation</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(dependant, index) in store.getDependants"  v-bind:key="index" >
                                            <td>{{dependant.first_name}}</td>
                                            <td>{{dependant.last_name}}</td>
                                            <td>Sibling</td>
                                            <td>
                                                <NuxtLink class="hover:cursor-pointer focus:outline-none " 
                                                    @click="delete_dependant(dependant.id, index)">
                                                    <iconTrash />
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

        </div>

    </div>
 
</template>