<script setup>
import { ref, watch, onMounted } from 'vue';
import { RouterLink } from "vue-router";

const props = defineProps({
    bike: {
        type: Array,
        default: []
    }
})

const inputAllBIke = ref([])
watch(() => props.bike, () => {
    inputAllBIke.value = props.bike;
    console.log(inputAllBIke.value);
})
// const inputAllBIke = ref([])
// onMounted(async () => {
//     try {
//         const result = await fetch(`http://localhost:5000/Brands`)
//         if (result.status === 200) {
//             const response = await result.json()
//             inputAllBIke.value = response

//             // console.log(response);
//             // console.log(inputAllBIke.value);
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// })


</script>
 
<template>
    <div class="w-full ">
        <h1 class="text-4xl font-bold pl-36 mt-5 mb-7 w-full">Bike</h1>
        <div class="grid-container">
            <span v-for="bike of inputAllBIke" :key="bike.id">
                <div class="ml-1">
                    <RouterLink class="" :to="{ name: 'BikeDetail', params: { id: bike.id } }">
                        <div
                            class="h-48 width flex bg-black border rounded-3xl overflow-hidden shadow-md hover:shadow hover:cursor-pointer ">
                            <img class="w-3/6 mt-7 rounded-2xl border shadow-lg shadow-gray-600 h-32 object-cover ml-5"
                                :src="bike.imagesPreview" alt="pic bike">
                            <div class="absolute text-white ml-4 mt-5">
                                <h1 class="text-xl font-semibold mt-5 ml-64">{{ bike.name }}</h1>
                                <hr class="text-gray-500 ml-64">
                                <p class="text-xs text-gray-200 mt-2 w-44 ml-64">{{ bike.infoPreview }} <span
                                        class="text-red-600"> &nbsp Click to read
                                        more</span>
                                </p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </span>
        </div>
    </div>
</template>
 
<style scoped>
.width {
    width: 480px;
    border: 2px solid red;
}

.width:hover {
    border: 2px solid greenyellow;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1rem;
}

span {
    font-size: 10px;
}
</style>