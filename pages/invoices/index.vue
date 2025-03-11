<script setup>
  
    import { useInvoicesStore } from '~~/stores/invoices';

    definePageMeta({

        middleware: ['auth'],
    });
    const store = useInvoicesStore();
    store.fetchInvoices(`invoices`)

</script>
<template>
    <div id="home">

      <!-- breadcrumb -->
      <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <a href="#" class="text-gray-700">Home</a>
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li class="flex items-center">
            <a href="#" class="text-gray-600">Dashboard</a>
          </li>
        </ol>
      </nav>

      <!-- breadcrumb end -->

    <div class="lg:flex justify-between items-center mb-2">
        <p class="text-m font-semibold mb-2 lg:mb-0"></p>
        <NuxtLink class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-1
            text-white font-semibold shadow" :to="`staff/new`">New</NuxtLink>
    </div>
    <div class="lg:flex justify-start items-center mb-2">
        
        <div class="relative text-gray-600 px-3">
            <input type="search" name="serch" placeholder="Search here..." class="bg-white h-6 w-full xl:w-40 px-3 rounded-lg border text-sm focus:outline-none">
            <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
            </svg>
            </button>
        </div>
       
        <div class="relative  text-gray-600 px-3">
            <select class="xl:w-40 px-3 rounded-lg border text-sm focus:outline-none bg-white" >
                <option disabled selected>Select University</option>
                <option >UNIMA</option>
                <option >MUBAS</option>
                <option >LUANAR NRC</option>
                <option >LUANAR BUNDA</option>
            </select>
        </div>
        <div class="relative  text-gray-600 px-3">
            <select class="xl:w-40 px-3 rounded-lg border text-sm focus:outline-none bg-white">
                <option disabled selected>Select Cover</option>
                <option >COMPREHENSIVE</option>
                <option >STANDARD</option>
                <option >STUDENT</option>
                <option >LUANAR BUND</option>
            </select>
        </div>
    </div>
    <hr class=" mb-2 bg-gray">
    <div class="flex-mx-3 mb-20 justify-center">
        
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="w-full text-sm text-left rtl:text-right">
                <thead class="text-xs text-white uppercase bg-gray-10 dark:bg-gray-700 dark:text-white">
                    <tr>
                    
                        <th scope="col" class="px-3 py-3">
                            #
                        </th>
                        <th scope="col" class="px-2 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-2 py-3">
                            Total
                        </th>
                        <th scope="col" class="px-2 py-3">
                            Date 
                        </th>
                        <th scope="col" class="px-2 py-3">
                            Action 
                        </th>
                        
                    </tr>
                </thead>
                <tbody> 
                    <tr class="hover:bg-gray-300 border-1 border-gray-100 "  v-for="(invoice, index) in store.invoices.data"  v-bind:key="index">
                        <th  class="px-3 py-1 font-medium">
                            {{ index+1 }}
                        </th>
                        <th  class="px-3 py-1 font-medium">
                            {{ invoice.service_provider.short_name }}
                        </th>
                
                        <td class="px-2 py-1">
                            {{ invoice.total }}
                        </td>
                        
                        <td class="px-2 py-1">
                            01/02/2011
                        </td>
                        <td class="px-2 py-1">
                            <NuxtLink :to="`/invoices/${invoice.id}`" class=" text-blue-600 dark:text-blue-500 hover:cursor-pointer focus:outline-none"  >
                                <IconEye />
                            </NuxtLink>
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
</template>

