<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from "vue-router";


const emit = defineEmits(["sendBikeIntroduce"]);
const queryBike = ref([])
onMounted(async () => {
    try {
        const result = await fetch(`http://localhost:5000/Brands`)
        if (result.status === 200) {
            const response = await result.json()
            queryBike.value = response
            // console.log(queryBike.value);
            getRandomNumber()
        }
    }
    catch (err) {
        console.log(err);
    }
})

const randomId = ref("")

function getRandomNumber() {
    return randomId.value = Math.floor(Math.random() * (17 - 1) + 1)
}

</script>
 
<template>
    <div class="w-full h-72 ">
        <div class="flex flex-wrap">
            <div v-for="brand in queryBike" :key="brand.brandId" class="w-1/5 p-2">
                <div class="flex w-60 object-cover mt-1 ml-9" v-for="bike of brand.bike" :key="bike.id">

                    <RouterLink v-if="bike.brand === 'kawasaki'" v-show="bike.id === randomId"
                        :to="{ name: 'ListBikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                        @click="$emit('sendBikeIntroduce', bike)">

                        <img class="h-48 object-contain" :src="bike.images_Preview" alt="introduce bike">
                        <p class="flex justify-center items-center">{{ bike.model }}</p>

                    </RouterLink>



                    <RouterLink v-if="bike.brand === 'honda'" v-show="bike.id === randomId"
                        :to="{ name: 'ListBikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                        @click="$emit('sendBikeIntroduce', bike)">

                        <img class="h-48 object-contain" :src="bike.images_Preview" alt="introduce bike">
                        <p class="flex justify-center items-center">{{ bike.model }}</p>

                    </RouterLink>



                    <RouterLink v-if="bike.brand === 'yamaha'" v-show="bike.id === randomId"
                        :to="{ name: 'ListBikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                        @click="$emit('sendBikeIntroduce', bike)">

                        <img class="h-48 object-contain" :src="bike.images_Preview" alt="introduce bike">
                        <p class="flex justify-center items-center">{{ bike.model }}</p>

                    </RouterLink>



                    <RouterLink v-if="bike.brand === 'suzuki'" v-show="bike.id === randomId"
                        :to="{ name: 'ListBikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                        @click="$emit('sendBikeIntroduce', bike)">

                        <img class="h-48 object-contain" :src="bike.images_Preview" alt="introduce bike">
                        <p class="flex justify-center items-center">{{ bike.model }}</p>

                    </RouterLink>



                    <RouterLink v-if="bike.brand === 'bmw'" v-show="bike.id === randomId"
                        :to="{ name: 'ListBikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                        @click="$emit('sendBikeIntroduce', bike)">

                        <img class="h-48 object-contain" :src="bike.images_Preview" alt="introduce bike">
                        <p class="flex justify-center items-center">{{ bike.model }}</p>

                    </RouterLink>



                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>