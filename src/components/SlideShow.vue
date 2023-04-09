<script setup>
import { ref, onMounted } from 'vue'

const slideValue = ref([])
onMounted(async () => {
    try {
        const result = await fetch(`http://localhost:5000/Promotions`)
        if (result.status === 200) {
            const response = await result.json()
            slideValue.value = response
            console.log(response.value);
        }
    } catch (error) {
        console.log(error);
    }
})



</script>
 
<template>
    <div v-for="i of slideValue" :key="i.id" class="flex justify-center items-center mt-2 flex-col ">
        <h1>{{ i.brand }}</h1>
        <img class="w-80 object-cover rounded-2xl" :src="i.images" alt="">
    </div>
</template>
 
<style scoped></style>