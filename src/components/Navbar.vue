<script setup>
import { computed } from '@vue/reactivity';
import { ref, onMounted, defineEmits, defineExpose, toRef } from 'vue'
import { RouterLink } from "vue-router";
import LaSearch from './icons/LaSearch.vue'
import SimpleLineIconsClose from './icons/SimpleLineIconsClose.vue'

const emit = defineEmits(["sendAllbrandBike", "sendBike"]);
const queryBike = ref([])
const queryAllBikeBrands = ref([])
onMounted(async () => {
    try {
        const result = await fetch(`http://localhost:5000/Brands`)
        if (result.status === 200) {
            const response = await result.json()
            queryBike.value = response
            queryAllBikeBrands.value = queryBike.value.bike
            // console.log(response);
            // console.log(queryBike.value);
        }
    }
    catch (err) {
        console.log(err);
    }
})

// open list bike when click
const navBarOpen = ref(false)
const dropdownOpen = () => {
    navBarOpen.value = !navBarOpen.value
    // console.log(navBarOpen.value);
}


// color text when click
const changeColor = ref("")
const changeTextColor = (color) => {
    // if (changeColor.value !== color) {
    //     changeColor.value = ""
    // }
    if (changeColor.value === color) {
        changeColor.value = ""
    }
    // 
    else {
        changeColor.value = color
    }
    // console.log(changeColor.value);
    return changeColor
}

const filterBrand = (input) => {
    const filterBike = queryBike.value.filter((x) => x.brand_Bike === input);
    console.log(filterBike)
    return filterBike;
};

//search box
const searchBox = ref(false)
const searchLittle = ref("")
const showSearchBox = () => {
    searchBox.value = !searchBox.value
    searchLittle.value = ""
}

const searchBoxFilter = computed(() => {
    // const bikeInputName = queryBike.value.filter((x) => x.bike.name.toLowerCase().includes(searchLittle.value.toLowerCase()));
    // console.log(bikeInputName)
    // return bikeInputName;
});

const clearLitle = () => {
    searchLittle.value = ""
    searchBox.value = !searchBox.value
}
</script>
 
<template >
    <div class="bg-black w-full h-24 flex fixed top-0 z-50">
        <!-- logo -->
        <div class="w-1/6 pl-40 hover:cursor-pointer">
            <RouterLink :to="{ name: 'home' }">
                <img class="w-12 mt-7" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="logo">
            </RouterLink>

        </div>

        <!-- item select brands motorcycle -->
        <div class=" text-white">
            <div class="absolute flex px-13 text-3xl font-mono mt-8 w-full">

                <!-- KAWASAKI -->
                <div class="kawasaki absolute" @click="changeTextColor('kawasaki') && dropdownOpen()">
                    <h1 :style="changeColor === 'kawasaki' ? { color: 'red' } : { color: 'white' }"
                        class="hover:cursor-pointer hover:text-red-700 fixed">
                        KAWASAKI</h1>
                    <div class="listItemKawasaki mt-16 h-full border border-black text-black p-5 ease-in duration-300"
                        v-show="navBarOpen === true && changeColor === 'kawasaki'">
                        <div class="grid grid-cols-3  z-10 ">
                            <div class="w-96">
                                <h1 class="mb-2 font-bold text-4xl">News</h1>
                                <hr />
                            </div>
                            <div class="bikeWidth -ml-44 ">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{
                                    name: 'ListBikeView', params: {
                                        brand_Bike: 'kawasaki'
                                    }
                                }" @click="$emit('sendAllbrandBike', `kawasaki`)">
                                    All Bike
                                </RouterLink>
                                <div class="pl-16">
                                    <div v-for="brand of queryBike" :key="brand.brandId" class="grid grid-cols-3">
                                        <div v-for="bike of brand.bike" :key="bike.id" v-show="bike.brand === 'kawasaki'">
                                            <RouterLink
                                                :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                                @click="$emit('sendBike', bike)">
                                                <p class="hover:text-red-600 cursor-pointer mt-5 font-semibold">{{
                                                    bike.short_Name }}</p>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new ml-32 w-96">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
                                <div class="grid justify-center " v-for="brand of queryBike" :key="brand.brandId">
                                    <div v-for="bike of brand.bike" :key="bike.id" class="mt-5"
                                        v-show="bike.brand === 'kawasaki'">
                                        <RouterLink
                                            :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                            @click="$emit('sendBike', bike)">
                                            <div v-show="bike.id < 4">
                                                <img class="w-64 rounded-2xl object-cover border cursor-pointer hover:border-red-600"
                                                    :src="bike.images_Preview" alt="image preview bike">
                                            </div>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- HONDA -->
                <div class="honda absolute" @click="changeTextColor('honda') && dropdownOpen()">
                    <h1 :style="changeColor === 'honda' ? { color: 'red' } : { color: 'white' }"
                        class="hover:cursor-pointer hover:text-red-700 fixed">
                        HONDA</h1>
                    <div class="listItemHonda mt-16 h-full border border-black text-black p-5 ease-in duration-300"
                        v-show="navBarOpen === true && changeColor === 'honda'">
                        <div class="grid grid-cols-3  z-10 ">
                            <div class="w-96">
                                <h1 class="mb-2 font-bold text-4xl">News</h1>
                                <hr />
                            </div>
                            <div class="bikeWidth -ml-44 ">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{
                                    name: 'ListBikeView', params: {
                                        brand_Bike: 'honda'
                                    }
                                }" @click="$emit('sendAllbrandBike', `honda`)">
                                    All Bike
                                </RouterLink>
                                <div class="pl-16">
                                    <div v-for="brand of queryBike" :key="brand.brandId" class="grid grid-cols-3">
                                        <div v-for="bike of brand.bike" :key="bike.id" v-show="bike.brand === 'honda'">
                                            <RouterLink
                                                :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                                @click="$emit('sendBike', bike)">
                                                <p class="hover:text-red-600 cursor-pointer mt-5 font-semibold">{{
                                                    bike.short_Name }}</p>
                                                <!-- <img :src="b.images_Preview" alt=""> -->
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new ml-32 w-96">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
                                <div class="grid justify-center " v-for="brand of queryBike" :key="brand.brandId">
                                    <div v-for="bike of brand.bike" :key="bike.id" class="mt-5"
                                        v-show="bike.brand === 'honda'">
                                        <RouterLink
                                            :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                            @click="$emit('sendBike', bike)">
                                            <div v-show="bike.id < 4">
                                                <img class="w-64 rounded-2xl object-cover border cursor-pointer hover:border-red-600"
                                                    :src="bike.images_Preview" alt="image preview bike">
                                            </div>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- YAMAHA -->
                <div class="yamaha absolute" @click="changeTextColor('yamaha') && dropdownOpen()">
                    <h1 :style="changeColor === 'yamaha' ? { color: 'red' } : { color: 'white' }"
                        class="hover:cursor-pointer hover:text-red-700 fixed">
                        YAMAHA</h1>
                    <div class="listItemYamaha mt-16 h-full border border-black text-black p-5 ease-in duration-300"
                        v-show="navBarOpen === true && changeColor === 'yamaha'">
                        <div class="grid grid-cols-3  z-10 ">
                            <div class="w-96">
                                <h1 class="mb-2 font-bold text-4xl">News</h1>
                                <hr />
                            </div>
                            <div class="bikeWidth -ml-44 ">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{
                                    name: 'ListBikeView', params: {
                                        brand_Bike: 'yamaha'
                                    }
                                }" @click="$emit('sendAllbrandBike', `yamaha`)">
                                    All Bike
                                </RouterLink>
                                <div class="pl-16">
                                    <div v-for="brand of queryBike" :key="brand.brandId" class="grid grid-cols-3">
                                        <div v-for="bike of brand.bike" :key="bike.id" v-show="bike.brand === 'yamaha'">
                                            <RouterLink
                                                :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                                @click="$emit('sendBike', bike)">
                                                <p class="hover:text-red-600 cursor-pointer mt-5 font-semibold">{{
                                                    bike.short_Name }}</p>
                                                <!-- <img :src="b.images_Preview" alt=""> -->
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new ml-32 w-96">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
                                <div class="grid justify-center " v-for="brand of queryBike" :key="brand.brandId">
                                    <div v-for="bike of brand.bike" :key="bike.id" class="mt-5"
                                        v-show="bike.brand === 'yamaha'">
                                        <RouterLink
                                            :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                            @click="$emit('sendBike', bike)">
                                            <div v-show="bike.id < 4">
                                                <img class="w-64 rounded-2xl object-cover border cursor-pointer hover:border-red-600"
                                                    :src="bike.images_Preview" alt="image preview bike">
                                            </div>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SUZUKI -->
                <div class="suzuki absolute" @click="changeTextColor('suzuki') && dropdownOpen()">
                    <h1 :style="changeColor === 'suzuki' ? { color: 'red' } : { color: 'white' }"
                        class="hover:cursor-pointer hover:text-red-700 fixed">
                        SUZUKI</h1>
                    <div class="listItemSuzuki mt-16 h-full border border-black text-black p-5 ease-in duration-300"
                        v-show="navBarOpen === true && changeColor === 'suzuki'">
                        <div class="grid grid-cols-3  z-10 ">
                            <div class="w-96">
                                <h1 class="mb-2 font-bold text-4xl">News</h1>
                                <hr />
                            </div>
                            <div class="bikeWidth -ml-44 ">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{
                                    name: 'ListBikeView', params: {
                                        brand_Bike: 'suzuki'
                                    }
                                }" @click="$emit('sendAllbrandBike', `suzuki`)">
                                    All Bike
                                </RouterLink>
                                <div class="pl-16">
                                    <div v-for="brand of queryBike" :key="brand.brandId" class="grid grid-cols-3">
                                        <div v-for="bike of brand.bike" :key="bike.id" v-show="bike.brand === 'suzuki'">
                                            <RouterLink
                                                :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                                @click="$emit('sendBike', bike)">
                                                <p class="hover:text-red-600 cursor-pointer mt-5 font-semibold">{{
                                                    bike.short_Name }}</p>
                                                <!-- <img :src="b.images_Preview" alt=""> -->
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new ml-32 w-96">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
                                <div class="grid justify-center " v-for="brand of queryBike" :key="brand.brandId">
                                    <div v-for="bike of brand.bike" :key="bike.id" class="mt-5"
                                        v-show="bike.brand === 'suzuki'">
                                        <RouterLink
                                            :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                            @click="$emit('sendBike', bike)">
                                            <div v-show="bike.id < 4">
                                                <img class="w-64 rounded-2xl object-cover border cursor-pointer hover:border-red-600"
                                                    :src="bike.images_Preview" alt="image preview bike">
                                            </div>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- BMW -->
                <div class="bmw absolute" @click="changeTextColor('bmw') && dropdownOpen()">
                    <h1 :style="changeColor === 'bmw' ? { color: 'red' } : { color: 'white' }"
                        class="hover:cursor-pointer hover:text-red-700 fixed">
                        BMW</h1>
                    <div class="listItemBmw mt-16 h-full border border-black text-black p-5 ease-in duration-300"
                        v-show="navBarOpen === true && changeColor === 'bmw'">
                        <div class="grid grid-cols-3  z-10 ">
                            <div class="w-96">
                                <h1 class="mb-2 font-bold text-4xl">News</h1>
                                <hr />
                            </div>
                            <div class="bikeWidth -ml-44 ">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{
                                    name: 'ListBikeView', params: {
                                        brand_Bike: 'bmw'
                                    }
                                }" @click="$emit('sendAllbrandBike', `bmw`)">
                                    All Bike
                                </RouterLink>
                                <div class="pl-16">
                                    <div v-for="brand of queryBike" :key="brand.brandId" class="grid grid-cols-3">
                                        <div v-for="bike of brand.bike" :key="bike.id" v-show="bike.brand === 'bmw'">
                                            <RouterLink
                                                :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                                @click="$emit('sendBike', bike)">
                                                <p class="hover:text-red-600 cursor-pointer mt-5 font-semibold">{{
                                                    bike.short_Name }}</p>
                                                <!-- <img :src="b.images_Preview" alt=""> -->
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new ml-32 w-96">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
                                <div class="grid justify-center " v-for="brand of queryBike" :key="brand.brandId">
                                    <div v-for="bike of brand.bike" :key="bike.id" class="mt-5"
                                        v-show="bike.brand === 'bmw'">
                                        <RouterLink
                                            :to="{ name: 'BikeDetail', params: { brand_Bike: brand.brand_Bike, path_Name: bike.path_Name } }"
                                            @click="$emit('sendBike', bike)">
                                            <div v-show="bike.id < 4">
                                                <img class="w-64 rounded-2xl object-cover border cursor-pointer hover:border-red-600"
                                                    :src="bike.images_Preview" alt="image preview bike">
                                            </div>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- search box -->
        <div class="searchBox w-1/6 pl-28 mt-9 relative cursor-pointer">
            <input class="rounded-xl h-7 w-64 pl-5" type="text" placeholder="Search some bike ..."
                v-model.trim="searchLittle" @click="showSearchBox">
            <LaSearch class="relative -top-5 left-56 " v-show="!searchBox" @click="showSearchBox" />
            <SimpleLineIconsClose class="relative -top-5 left-56" v-show="searchBox" @click="clearLitle" />
        </div>


        <!-- profile -->
        <div class="w-1/6 pl-36 mt-6">
            <img class="w-14 rounded-3xl border"
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                alt="profile">
        </div>

        <!-- search box -->
        <div class="searchBoxShow w-full bg-white relative h-screen" v-show="searchBox">
            <h1>{{ searchLittle }}</h1>
            <div v-show="index <= 6" v-for="(bike, index) in searchBoxFilter" :key="bike.id" -->
                :class="index % 2 === 0 ? 'bg-gray-200' : 'bg-white'">
                <RouterLink :to="{ name: BikeDetail, params: { id: bike.id } }" @click="clearLitle">
                    <div class="h-24 flex items-center text-xl font-bold hover:text-red-600">
                        <img class="w-24 object-cover ml-52 rounded-xl border" :src="bike.images_Preview" alt="bike image">
                        <h1 class="">{{ bike.model }}</h1>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
div div div h1 {
    padding-left: 60px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1rem;
}

.searchBoxShow {
    top: 95px;
    margin-left: -1595px;
    width: 1650px;
}

.listItemKawasaki {
    margin-left: -270px;
    width: 1650px;
    background-color: rgb(255, 255, 255);
}

.listItemHonda {
    margin-left: -470px;
    width: 1650px;
    background-color: rgb(255, 255, 255);
}

.listItemYamaha {
    margin-left: -620px;
    width: 1650px;
    background-color: rgb(255, 255, 255);
}

.listItemSuzuki {
    margin-left: -790px;
    width: 1650px;
    background-color: rgb(255, 255, 255);
}

.listItemBmw {
    margin-left: -970px;
    width: 1650px;
    background-color: rgb(255, 255, 255);
}

.bikeWidth {
    width: 800px;
    border-right: 2px solid gray;
    border-left: 2px solid gray;
    z-index: 10;
}

.searchBox {
    margin-left: 800px;
}

.kawasaki {
    margin-left: 0px;
}

.honda {
    margin-left: 200px;
}

.yamaha {
    margin-left: 350px;
}

.suzuki {
    margin-left: 520px;
}

.bmw {
    margin-left: 700px;
}
</style>