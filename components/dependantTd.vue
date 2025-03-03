<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios';
defineProps({
        dependant: {
            type: Object,
            required: true
        }
    })

    const route = useRoute()
    async function delete_dependant($id,index) {
        await axios.delete(`dependants/${$id}`)  
      
    }
  
</script>
<template>

    <td>{{dependant.first_name}}</td>
    <td>{{dependant.last_name}}</td>
    <td>Sibling</td>
    <td>
        <NuxtLink class="hover:cursor-pointer focus:outline-none " 
            @click="delete_dependant(dependant.id, index)">
            <iconTrash />
        </NuxtLink>
    </td>  
   
           
</template>