<script setup>
import SlideShow from '../components/SlideShow.vue'
import BikeIntroduce from '../components/BikeIntroduce.vue'

</script>

<template>
  <main>
    <SlideShow />
    <div class="flex mt-8 ml-20">
      <hr class="hr1 mt-6  ">
      <h1 class="text-4xl font-bold 6 ml-16">Bike</h1>
      <hr class="hr2 mt-6 ml-16">
    </div>
    <BikeIntroduce class="-mt-3" />
  </main>
</template>
<style scoped>
.hr1 {
  border: 1px solid black;
  width: 200px;
}

.hr2 {
  border: 1px solid black;
  width: 950px;
}
</style>