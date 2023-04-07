<script setup>
import Navbar from './components/Navbar.vue'
import { ref, onMounted, defineEmits, defineExpose } from 'vue'
import { RouterView } from "vue-router";

const category = ref([]);
const getProduct = (itemProduct) => {
  category.value = itemProduct;
};
</script>
 
<template>
  <div class="">
    <div class="mb-28 ">
      <Navbar @brandBike="getProduct" />
      <!-- <Navbar /> -->
    </div>
    <RouterView :bike="category" />
  </div>
</template>
 
<style scoped>
.h {
  height: 3000px;
}
</style>