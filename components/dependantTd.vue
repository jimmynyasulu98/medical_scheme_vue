<script setup>
    import axios from 'axios';

    import { useTestsStore } from '~~/stores/tests';
    defineProps({
        dependant: {
            type: Object,
            required: true
        }
    })

    definePageMeta({
        middleware: ['auth'],
    })
    const store = useTestsStore();
 

    async function delete_dependant($id) {
        await axios.delete(`dependants/${$id}`) 
        store.deletePost($id) 
    }
      
  
</script>
<template>

    <td>{{dependant.first_name}}</td>
    <td>{{dependant.last_name}}</td>
    <td>Sibling</td>
    <td>
        <NuxtLink class="hover:cursor-pointer focus:outline-none " 
            @click="delete_dependant(dependant.id)">
            <iconTrash />
        </NuxtLink>
    </td>  
   
           
</template>