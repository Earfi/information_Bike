<script setup>
import { ref, onMounted, defineProps, watchEffect, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import AllBike from '../components/AllBike.vue'
import BikeIntroduce from '../components/BikeIntroduce.vue'

const props = defineProps({
  bike: {
    type: String,
    requied: true
  },
});



// console.log(props.bike);
const itemAllInput = ref('')
// inputProps.value = props.bike
// console.log(inputProps.value);

onMounted(() => {
  itemAllInput.value = props.bike;
  console.log(itemAllInput.value);
})
watch(() => props.bike, () => {
  itemAllInput.value = props.bike;
  console.log(itemAllInput.value);
})

</script>

<template>
  <div>
    <hr class="mt-5" />
    <AllBike :listBikeAll="itemAllInput" />
    <BikeIntroduce />
  </div>
</template>

<style scoped></style>