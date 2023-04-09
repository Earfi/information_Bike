<script setup>
import { ref, onMounted, defineProps, watchEffect, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import AllBike from '../components/AllBike.vue'

const props = defineProps({
  listBike: {
    type: Array,
    requied: true
  },
});


const itemAllInput = ref([])

onMounted(() => {
  itemAllInput.value = props.listBike;
  console.log(itemAllInput);
})
watch(() => props.bike, () => {
  itemAllInput.value = props.listBike;
  console.log(itemAllInput);
})

</script>

<template>
  <div>
    <hr class="mt-5" />
    <AllBike :listBikeAll="itemAllInput" />
  </div>
</template>

<style scoped></style>