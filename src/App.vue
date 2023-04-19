<script setup>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'
import { RouterView, RouterLink } from "vue-router";
import FooterContent from './components/FooterContent.vue';
import BikeIntroduce from './components/BikeIntroduce.vue';

const sendAllBike = ref("");
const getAllBike = (i) => {
  sendAllBike.value = i;
  // console.log(sendAllBike.value);
};

const sendBike = ref();
const getBike = (i) => {
  sendBike.value = i;
  console.log(sendBike.value);
};
// console.log(sendBike.value);

</script>
 
<template>
  <div class="">
    <div class="mb-28 ">
      <Navbar @sendAllbrandBike="getAllBike" @sendBike="getBike" @sendBikeIntroduce="getBike" />
    </div>
    <RouterView :bike="sendAllBike" :bikeInputDetail="sendBike" />
    <FooterContent />
  </div>
</template>
 
<style scoped>
.h {
  height: 3000px;
}
</style>