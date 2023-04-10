<script setup>
import { ref, watch } from "vue";
const props = defineProps({
    bikeInput: {
        required: true
    }
})

const bikeInfo = ref({})
watch(() => props.bikeInput, () => {
    bikeInfo.value = props.bikeInput;
})

</script>
 
<template>
    <div class="w-full">
        <!-- <img :src="bikeInfo?.images" alt=""> -->
        <h1 class="w-full text-5xl font-semibold flex justify-center mb-5">{{ bikeInfo.name }}</h1>
        <hr />
        <div class="flex">
            <img class="w-2/6 mt-7 ml-32 rounded-2xl border shadow-lg shadow-gray-600 object-cover"
                :src="bikeInfo.imagesPreview" alt="">
            <h1 class="width-intodruction ml-20 mt-24"><b>{{ bikeInfo.name }}</b> {{ bikeInfo.intodruction }}
            </h1>
        </div>
    </div>
</template>
 
<style scoped>
hr {
    border: 2px solid gray;
    text-shadow: 1px 1px 1px black;
}

.width-intodruction {
    width: 750px;
}
</style>