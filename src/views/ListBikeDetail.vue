<script setup>

import BikeIntroduce from '../components/BikeIntroduce.vue'
import BikeDetail from '../components/BikeDetail.vue';
import { onMounted, watch, ref } from 'vue';


const props = defineProps({
    bikeInputDetail: {
        required: true
    }
})

const bikeInfo = ref({})
watch(() => props.bikeInputDetail, () => {
    bikeInfo.value = props.bikeInputDetail;
    // console.log(bikeInfo.value);
})
onMounted(() => props.bikeInputDetail, () => {
    bikeInfo.value = props.bikeInputDetail;
    // console.log(bikeInfo.value);
})


</script>
 
<template>
    <div>
        <BikeDetail :bikeInput="bikeInfo" />
        <BikeIntroduce />
    </div>
</template>
 
<style scoped></style>