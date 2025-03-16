<script setup>
    import { useRoute } from 'vue-router'
    import { useInvoicesStore } from '~~/stores/invoices';

    definePageMeta({
        middleware: ['auth'],
    })

    const route = useRoute()
    const store = useInvoicesStore();
    store.fetchInvoices(`invoices/${route.params.id}`)

   
</script>
<template>

<div class="bg-gray-100 p-4">

 <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <a href="#" class="text-gray-700">Home</a>
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li class="flex items-center">
            <a href="#" class="text-gray-600">Invoice</a>
          </li>
        </ol>
    </nav>

    <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">
   
    <!-- top content -->
    <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full">
        
        <div class=" w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p class="font-poppins font-bold text-heading sm:text-sm text-sm capitalize underline">
                Service Provider 
            </p>
            <p class="text-heading">{{ store.invoices?.data?.service_provider?.short_name}}</p>
        </div>
        <div class=" w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p class="font-poppins font-bold text-heading sm:text-sm text-sm capitalize underline">
                Invoice Number
            </p>
            <p class="text-heading">{{store.invoices?.data?.number }}</p>
        </div>
        <div class=" w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p class="font-poppins font-bold text-heading sm:text-sm text-sm capitalize underline">
                Date
            </p>
            <p class="text-heading">{{store.invoices?.data?.date }}</p>
        </div>
        <div class=" w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p class="font-poppins font-bold text-heading sm:text-sm text-sm capitalize underline">
                Total 
            </p>
            <p class="text-heading">{{store.invoices?.data?.total}}</p>
        </div>
    </div>

    <!-- main content -->
    <div class="p-5">

        <div class="flex flex-col sm:flex-row sm:mt-3">

            <div class="flex flex-col sm:w-2/3">
                <!-- My contact -->
                <div class="py-1 sm:order-none">
                    <div class="flex justify-center align-middle">
                        <h2 class="font-poppins font-bold text-heading sm:text-sm text-sm capitalize ">Claims</h2>
                    </div>
                   
                    
                    <div class=" sm:text-center pl-5 mt-1 text-start ">
                        <table class="w-full text-sm text-left rtl:text-right h-10 ">
                            <thead class="text-xs text-white uppercase bg-gray-10 dark:bg-gray-700 dark:text-white">
                                <tr>
                                
                                    <th scope="col" class="px-3 py-1">
                                        No.
                                    </th>
                                    <th scope="col" class="px-3 py-1">
                                        Claim #
                                    </th>
                                    <th scope="col" class="px-2 py-1">
                                        Member
                                    </th>
                                    <th scope="col" class="px-2 py-1">
                                        Sub total
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
                                <tr class="hover:bg-gray-200 border-1  border-gray-600 "  v-for="(claim, index) in store.invoices?.data?.claims"  v-bind:key="index">
                                    <td  class="px-2 py-1">
                                        {{ index+1 }}
                                    </td>
                                    <td  class="px-2 py-1">
                                        {{ claim.number }}
                                    </td>
                                    <td  class="px-2 py-1">
                                        {{ claim.member.membership_number }}
                                    </td>
                                    
                                    <td class="px-2 py-1">
                                        {{ claim.sub_total }}
                                    </td>
                                    <td  class="px-2 py-1 ">
                                        <span v-if="claim.approved" class="approved rounded-sm">Approved</span>
                                        <span v-else-if="claim.approved == false" class="rejected rounded-sm">Rejected</span>
                                    </td>
                                    <td class=" py-1  flex">
                                        <NuxtLink  @click="store.claim(claim.id)" class=" text-blue-600 dark:text-blue-600 hover:cursor-pointer hover:text-l focus:outline-none"  >
                                            <IconEye />
                                        </NuxtLink>
                                        |                                      
                                        <div v-if="claim.approved == null" class="flex">
                                            <NuxtLink  @click="store.approveClaim(`claims/approve/${claim.id}`,claim.id)" class=" text-blue-600 dark:text-blue-600 hover:text-l hover:cursor-pointer focus:outline-none"  >
                                                Approve
                                            </NuxtLink>
                                            |
                                            <NuxtLink @click="store.rejectClaim(`claims/reject/${claim.id}`,claim.id)" class=" text-red-600 dark:text-red-500 hover:cursor-pointer focus:outline-none"  >
                                                Reject
                                            </NuxtLink>
                                        </div>
                                        <div v-else>
                                            <NuxtLink @click="store.restoreStatus(`claims/restore_status/${claim.id}`,claim.id)" class="mx-1 text-yellow-600  hover:cursor-pointer focus:outline-none"  >
                                                Reverse action
                                            </NuxtLink>
                                        </div>
                                     
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                </li>
                                <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    

                </div>
        
            </div>

            <div class="flex flex-col sm:w-1/3 sm:order-none sm:mt-6">
                <!-- Professional Experience -->
                <div class="py-4">
                    <div class="flex justify-center align-middle">
                        <h2 class="text-sm font-poppins font-bold text-top-color">Claim Details</h2>
                    </div>
                   
        
                    <div class="flex flex-col border-amber-100">
                        <table class="table-auto text-xs border-amber-50">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Treatment</th>
                                    <th>Description</th>
                                    <th>Charge</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-gray-300 border-1  border-gray-100 "  v-for="(treatment, index) in store.claims.claim_treatments"  v-bind:key="index">
                                    <td  class="px-2 py-1">
                                        {{ index+1 }}
                                    </td>
                                    <td  class="px-2 py-1">
                                        {{ treatment.treatment_type}}
                                    </td>
                                    
                                    <td class="px-2 py-1">
                                        {{ treatment.description  }}
                                    </td>
                                    <td  class="px-2 py-1 ">
                                        {{ treatment.charge }}
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
<style>
    td{
        font-size: 11px;
        height: 5px;
    }

    .rejected ,.approved {
        color: white;
        padding-left : 5px ;
        padding-right: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-radius: 8px ;
    }
    .approved{

        background-color: rgb(21, 93, 252);
    }
    .rejected{
        background-color: rgb(231, 0, 11);
    }
</style>