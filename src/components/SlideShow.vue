<script setup>
import { ref, onMounted } from 'vue'

const slideValue = ref([])
onMounted(async () => {
    try {
        const result = await fetch(`http://localhost:5000/Promotions`)
        if (result.status === 200) {
            const response = await result.json()
            slideValue.value = response
            console.log(response.value);
        }
    } catch (error) {
        console.log(error);
    }
})

const changeIndex = (input) => {
    if (input === -1) {

    }
    return 0
}
</script>
 
<template>
    <div class="main flex">

        <div class="sizeSleep rounded-3xl relative ml-44 border overflow-hidden">
            <div v-for="img of slideValue" :key="img.id" v-show="img.style === 'sleep'">
                <div v-show="img.id === 5">
                    <img class="imgSleep h-full m-auto" :src="img.images" alt="">
                </div>
            </div>
            <h1 class="prev absolute text-4xl top-2/4 w-auto pl-5 cursor-pointer "><a :on-click="changeIndex(-1)">❮</a></h1>
            <h1 class="next absolute text-4xl top-2/4 w-auto right-0 pr-5 cursor-pointer "><a
                    :on-click="changeIndex(-1)">❯</a>
            </h1>
        </div>
        <div class="sizeStand rounded-3xl relative border overflow-hidden ml-10">
            <div v-for="img of slideValue" :key="img.id" v-show="img.style === 'stand'">
                <div v-show="img.id === 8">
                    <img class="imgStand object-cover h-full w-full  m-auto" :src="img.images" alt="">
                </div>
            </div>
            <h1 class="prev absolute text-4xl top-2/4 w-auto pl-3 cursor-pointer "><a :on-click="changeIndex(-1)">❮</a></h1>
            <h1 class="next absolute text-4xl top-2/4 w-auto right-0 pr-3 cursor-pointer "><a
                    :on-click="changeIndex(-1)">❯</a>
            </h1>
        </div>
    </div>
</template>
 
<style scoped>
.main {
    margin: auto;
}

.sizeSleep {
    width: 800px;
    height: 350px;
}

.sizeStand {
    width: 350px;
    height: 350px;
}

.imgSleep {
    width: 600px;
}

.imgStand {
    width: 250px;
}

.prev:hover,
.next:hover {
    color: red;
    text-shadow: 1px 1px 1px black
}
</style>

<!-- <div v-for="i of slideValue" :key="i.id" class="flex justify-center items-center mt-2 flex-col "> -->
    <!-- <h1>{{ i.brand }}</h1> -->
    <!-- <img class="w-80 object-cover rounded-2xl" :src="i.images" alt=""> -->
    <!-- <div class="carousel-wrapper h-96 relative block my-12 mx-auto border-2 border-black"> -->
    <!-- <span id="item-1 "></span> -->
    <!-- <span id="item-2"></span> -->
    <!-- <span id="item-3"></span> -->

    <!-- <div class="carousel-item item-1 absolute top-0 bottom-0 left-0 right-0 py-6 px-12 opacity-0"> -->
    <!-- <img class="w-80 object-cover rounded-2xl" :src="i.images" alt="" :id="i = 1"> -->
    <!-- <a href="#item-3" class="arrow-prev arrow border-black inline-block p-3 left-7 absolute top-2/4"></a> -->
    <!-- <a href="#item-2" class="arrow-next arrow border-black inline-block p-3 right-7 absolute top-2/4 "></a> -->
    <!-- </div> -->

    <!-- <div class="carousel-item item-2 absolute top-0 bottom-0 left-0 right-0 py-6 px-12 opacity-0"> -->
    <!-- <a href="#item-1" class="arrow-prev arrow border-black inline-block p-3 left-7 absolute top-2/4"></a> -->
    <!-- <a href="#item-3" class="arrow-next arrow border-black inline-block p-3 right-7 absolute top-2/4"></a> -->
    <!-- </div> -->

    <!-- <div class="carousel-item item-3  absolute top-0 bottom-0 left-0 right-0 py-6 px-12 opacity-0"> -->
    <!-- <a href="#item-2" class="arrow-prev arrow border-black inline-block p-3 left-7 absolute top-2/4"></a> -->
    <!-- <a href="#item-1" class="arrow-next arrow border-black inline-block p-3 right-7 absolute top-2/4"></a> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->

    /* .carousel-wrapper {
    width: 800px;
}

.carousel-item {
    transition: all 0.5s ease-in-out;
}

.arrow-prev {
    transform: translateY(-50%) rotate(135deg);
}

.arrow-next {
    transform: translateY(-50%) rotate(-45deg);
}

[id^="item"] {
    display: none;
}

.item-1 {
    z-index: 2;
    opacity: 1;
    background: url('https://images.unsplash.com/photo-1611241443333-bdcff35bc8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    background-size: cover;
}

.item-2 {
    background: url('https://images.unsplash.com/photo-1589122350591-964f4987a296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    background-size: cover;
}

.item-3 {
    background: url('https://images.unsplash.com/photo-1579617636550-1e3a98459a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80');
    background-size: cover;
}

*:target~.item-1 {
    opacity: 0;
}

#item-1:target~.item-1 {
    opacity: 1;

}

#item-2:target~.item-2,
#item-3:target~.item-3 {
    z-index: 3;
    opacity: 1;
} */