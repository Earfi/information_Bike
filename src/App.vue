<script setup>
import Navbar from './components/Navbar.vue'
import { ref, onMounted, defineEmits, defineExpose } from 'vue'
import { RouterView, RouterLink } from "vue-router";
import AllBike from './components/AllBike.vue'

const sendAllBike = ref([]);
const getAllBike = (i) => {
  sendAllBike.value = i;
  console.log(sendAllBike.value);
};

const sendBike = ref();
const getBike = (i) => {
  sendBike.value = i;
  // console.log(sendBike.value);
};

</script>
 
<template>
  <div class="">
    <div class="mb-28 ">
      <Navbar @sendAllBrandBike="getAllBike" @sendBike="getBike" />
    </div>
    <RouterView :listBike="sendAllBike" :bikeInput="sendBike" />
  </div>
</template>
 
<style scoped>
.h {
  height: 3000px;
}
</style>