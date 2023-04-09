<script setup>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'
import { RouterView } from "vue-router";

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
      <!-- <Navbar /> -->
    </div>
    <RouterView :listBike="sendAllBike" :bikeInput="sendBike" />
  </div>
</template>
 
<style scoped>
.h {
  height: 3000px;
}
</style>