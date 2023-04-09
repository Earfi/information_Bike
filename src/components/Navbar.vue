<script setup>
import { computed } from '@vue/reactivity';
import { ref, onMounted, defineEmits, defineExpose } from 'vue'
import { RouterLink } from "vue-router";
import LaSearch from './icons/LaSearch.vue'
import SimpleLineIconsClose from './icons/SimpleLineIconsClose.vue'

const emit = defineEmits(["brandBike"]);
const queryBike = ref([])
onMounted(async () => {
    try {
        const result = await fetch(`http://localhost:5000/Brands`)
        if (result.status === 200) {
            const response = await result.json()
            queryBike.value = response
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
    if (changeColor.value === color) {
        changeColor.value = ""
    }
    // else if (changeColor.value !== color) {
    //     changeColor.value === ""
    // } 
    else {
        changeColor.value = color
    }
    // console.log(changeColor.value);
    return changeColor
}

const filterBrand = (input) => {
    const filterBike = queryBike.value.filter((x) => x.brand === input);
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
    const itemName = queryBike.value
    console.log(itemName.value);
    return itemName.filter((i) => i.name.toLowerCase().includes(searchLittle.value.toLowerCase()))
})

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
                    <div class="listItemKawa mt-16 h-full border border-black text-black p-5 ease-in duration-300"
                        v-show="navBarOpen === true && changeColor === 'kawasaki'">
                        <div class="grid grid-cols-3  z-10 ">
                            <div class="w-96">
                                <h1 class="mb-2 font-bold text-4xl">News</h1>
                                <hr />
                            </div>
                            <div class="bikeWidth -ml-80 ">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{ name: 'ListBike' }"
                                    @click="$emit('brandBike', filterBrand(`KAWASAKI`))">
                                    All Bike
                                </RouterLink>
                                <div class="flex flex-wrap pl-16">
                                    <div v-for="brands of queryBike" :key="brands.id">
                                        <div class="font-semibold w-60 pt-6" v-show="brands.brand === 'KAWASAKI'">
                                            <RouterLink :to="{
                                                name: 'BikeDetail', params: { id: brands.id }
                                            }">
                                                <p class="hover:text-red-600 cursor-pointer ">{{ brands.shortName }}</p>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new -ml-36">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- HONDA -->
                <div class="honda absolute " @click="changeTextColor('honda') && dropdownOpen()">
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
                            <div class="bikeWidth -ml-80">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{ name: 'ListBike' }"
                                    @click="$emit('brandBike', filterBrand(`HONDA`))">
                                    All Bike
                                </RouterLink>
                                <div class="flex flex-wrap pl-16">
                                    <div v-for="brands of queryBike" :key="brands.id">
                                        <div class="font-semibold w-60 pt-6" v-show="brands.brand === 'HONDA'">
                                            <RouterLink :to="{
                                                name: 'BikeDetail', params: { id: brands.id }
                                            }">
                                                <p class="hover:text-red-600 cursor-pointer ">{{ brands.shortName }}</p>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new -ml-36">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- YAMAHA -->
                <div class="yamaha absolut" @click="changeTextColor('yamaha') && dropdownOpen()">
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
                            <div class="bikeWidth -ml-80">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{ name: 'ListBike' }"
                                    @click="$emit('brandBike', filterBrand(`YAMAHA`))">
                                    All Bike
                                </RouterLink>
                                <div class="flex flex-wrap pl-16">
                                    <div v-for="brands of queryBike" :key="brands.id">
                                        <div class="font-semibold w-60 pt-6" v-show="brands.brand === 'YAMAHA'">
                                            <RouterLink :to="{
                                                name: 'BikeDetail', params: { id: brands.id }
                                            }">
                                                <p class="hover:text-red-600 cursor-pointer ">{{ brands.shortName }}</p>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new -ml-36">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
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
                            <div class="bikeWidth -ml-80">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{ name: 'ListBike' }"
                                    @click="$emit('brandBike', filterBrand(`SUZUKI`))">
                                    All Bike
                                </RouterLink>
                                <div class="flex flex-wrap pl-16">
                                    <div v-for="brands of queryBike" :key="brands.id">
                                        <div class="font-semibold w-60 pt-6" v-show="brands.brand === 'SUZUKI'">
                                            <RouterLink :to="{
                                                name: 'BikeDetail', params: { id: brands.id }
                                            }">
                                                <p class="hover:text-red-600 cursor-pointer ">{{ brands.shortName }}</p>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new -ml-36">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
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
                            <div class="bikeWidth -ml-80">
                                <h1 class=" mb-2 font-bold text-4xl ml-20">Bike</h1>
                                <hr class="mb-5" />
                                <RouterLink class="hover:text-red-600 pl-16 font-semibold" :to="{ name: 'ListBike' }"
                                    @click="$emit('brandBike', filterBrand(`BMW`))">
                                    All Bike
                                </RouterLink>
                                <div class="flex flex-wrap pl-16">
                                    <div v-for="brands of queryBike" :key="brands.id">
                                        <div class="font-semibold w-60 pt-6" v-show="brands.brand === 'BMW'">
                                            <RouterLink :to="{
                                                name: 'BikeDetail', params: { id: brands.id }
                                            }">
                                                <p class="hover:text-red-600 cursor-pointer ">{{ brands.shortName }}</p>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="new -ml-36">
                                <h1 class=" mb-2 font-bold text-4xl">Preview</h1>
                                <hr />
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
            <div v-show="index <= 6" v-for="(bike, index) in searchBoxFilter" :key="bike.id"
                :class="index % 2 === 0 ? 'bg-gray-200' : 'bg-white'">
                <RouterLink :to="{ name: BikeDetail, params: { id: bike.id } }" @click="clearLitle">
                    <div class="h-24 flex items-center text-xl font-bold hover:text-red-600">
                        <img class="w-24 object-cover ml-52 rounded-xl border" :src="bike.imagesPreview" alt="bike image">
                        <h1 class="">{{ bike.name }}</h1>
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
    width: 2000px;
}

.listItemKawa {
    margin-left: -270px;
    width: 2000px;
    background-color: rgb(255, 255, 255);
}

.listItemHonda {
    margin-left: -470px;
    width: 2000px;
    background-color: rgb(255, 255, 255);
}

.listItemYamaha {
    margin-left: -620px;
    width: 2000px;
    background-color: rgb(255, 255, 255);
}

.listItemSuzuki {
    margin-left: -790px;
    width: 2000px;
    background-color: rgb(255, 255, 255);
}

.listItemBmw {
    margin-left: -970px;
    width: 2000px;
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