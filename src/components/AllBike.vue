<script setup>
import { ref, watch, onMounted } from 'vue';
import { RouterLink } from "vue-router";

const props = defineProps({
    listBikeAll: {
        type: String,
        required: true
    }
})

const inputAllBIke = ref("")
const inputBike = ref([])
// onMounted(() => props.listBikeAll, () => {
//     inputAllBIke.value = props.listBikeAll;
//     console.log(inputAllBIke.value);
// })
watch(() => props.listBikeAll, () => {
    inputAllBIke.value = props.listBikeAll;
    console.log(inputAllBIke.value);
})
// brand_Bike
onMounted(async () => {
    try {
        const result = await fetch(`http://localhost:5000/Brands`)
        if (result.status === 200) {
            const response = await result.json()
            inputBike.value = response
            // console.log(response);
            inputAllBIke.value = props.listBikeAll;
            console.log(inputAllBIke.value);
            console.log(inputBike.value);
        }
    }
    catch (err) {
        console.log(err);
    }
})

</script>
 
<template>
    <div class="w-full ">
        <h1 class="text-4xl font-bold pl-36 mt-5 mb-7 w-full">Bike</h1>
        <!-- <div class="grid-container"> -->
        <span class="grid-container" v-for="brand of inputBike" :key="brand.brandId"
            v-show="brand.brand_Bike === inputAllBIke">
            <span v-for="bike of brand.bike" :key="bike.id">
                <div class="ml-1">
                    <RouterLink class=""
                        :to="{ name: 'ListBikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }">
                        <div
                            class="h-48 width flex bg-black border rounded-3xl overflow-hidden shadow-md hover:shadow hover:cursor-pointer ">
                            <img class="w-3/6 mt-7 rounded-2xl border shadow-lg shadow-gray-600 h-32 object-cover ml-5"
                                :src="bike.images_Preview" alt="pic bike">
                            <div class="text-white ml-4 mt-5">
                                <span class="click text-red-600 relative"> Click to read more</span>
                                <h1 class="text-xl font-semibold -mt-4">{{ bike.model }}</h1>
                                <hr class="text-gray-500 ">
                                <p class="text-xs text-gray-200 mt-2 w-44 ">{{ bike.info_Preview }}
                                </p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </span>
        </span>
        <hr class="mt-10">
        <div class="mt-10">
            <h1 class="flex justify-center text-2xl font-bold">รถอื่นๆเพิ่มเติม</h1>
            <hr class="mt-10">
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

.click {
    left: 80px;
    top: 140px;
    font-size: 12px;
}
</style>