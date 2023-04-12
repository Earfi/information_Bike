<script setup>
import { ref, watch, computed } from "vue";
const props = defineProps({
    bikeInput: {
        required: true
    }
})

const bikeInfo = ref({})
watch(() => props.bikeInput, () => {
    bikeInfo.value = props.bikeInput;
    console.log(bikeInfo.value);
})

</script>
 
<template>
    <div class="w-full">
        <!-- <img :src="bikeInfo?.images" alt=""> -->
        <h1 class="w-full text-5xl font-semibold flex justify-center mb-5">{{ bikeInfo.model }}</h1>
        <hr class="firstHr" />
        <div class="flex  ">
            <img class="w-2/6 mt-7 ml-32 rounded-2xl border shadow-lg shadow-gray-600 object-cover"
                :src="bikeInfo.images_Preview" alt="image preview">
            <h1 class="width-intodruction ml-20 mt-24"><b>{{ bikeInfo.model }}</b> {{ bikeInfo.intodruction }}
            </h1>
        </div>
        <hr class="mt-10">
        <div class="flex mt-10 ml-16">
            <div class="width-intodruction">
                <h1 class=" ml-64 text-xl font-extrabold">ข้อมูลทางเทคนิค {{ bikeInfo.model }} </h1>
                <div>
                    <hr class="systemHr mt-2 h-1 text-gray-400 mb-4" />
                    <h1 class=" ml-20 mt-2"><span>เครื่องยนต์ : </span>{{ bikeInfo.power?.engine }}</h1>
                    <h1 class=" ml-20 mt-2"><span>ขนาดเครื่องยนต์ : </span>{{ bikeInfo.power?.engine_size }}</h1>
                    <h1 class=" ml-20 mt-2"><span>BORE X STROKE : </span>{{ bikeInfo.power?.bore_X_Stroke }}</h1>
                    <h1 class=" ml-20 mt-2"><span>อัตราส่วนการอัด : </span>{{ bikeInfo.power?.compression_Ratio }}</h1>
                    <h1 class=" ml-20 mt-2"><span>ระบบจ่ายเชื้อเพลิง : </span>{{ bikeInfo.power?.fuel_Supply_System }}
                    </h1>
                    <h1 class=" ml-20 mt-2"><span>กำลังเครื่องยนต์ : </span>{{ bikeInfo.power?.engine_power }}</h1>
                    <h1 class=" ml-20 mt-2"><span>ระบบเกียร์ : </span>{{ bikeInfo.power?.gear_System }}</h1>
                    <h1 class=" ml-20 mt-2"><span>ยางด้านหน้า : </span>{{ bikeInfo.power?.front_Tire }}</h1>
                    <h1 class=" ml-20 mt-2"><span>ยางด้านหลัง : </span>{{ bikeInfo.power?.rear_Tire }}</h1>
                    <h1 class=" ml-20 mt-2"><span>ความจุเชื้อเพลิง : </span>{{ bikeInfo.power?.fuel_Capacity }}</h1>
                    <h1 class=" ml-20 mt-2"><span>น้ำหนักตัวรถ : </span>{{ bikeInfo.power?.Body_Weight }}</h1>
                </div>
            </div>
            <img class="w-4/12 mt-10 ml-20 rounded-2xl border shadow-lg shadow-gray-600 object-cover"
                :src="bikeInfo.main_Images" alt="image preview">
        </div>
        <hr class="mt-10">
        <div class="flex mt-10 mb-16 ml-16">
            <div class="pl-16">
                <iframe class="mt-0 border-red-600 border-2 rounded-xl" width="550" height="310" :src="bikeInfo.video?.link"
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h1 class="titleWidth items-center justify-center flex text-lg mt-2"><b>{{
                    bikeInfo.video?.title
                }}</b>
                </h1>
            </div>
            <div class="width-intodruction -ml-10">
                <h1 class=" ml-40 text-xl font-extrabold mt-20">รายละเอียดข้อมูล {{ bikeInfo.model }} เพิ่มเติม </h1>
                <hr class="ml-20 mt-2 h-1 text-gray-400 mb-4" />
                <h1 class="ml-20 mt-2">{{ bikeInfo.intodruction_3 }}
                </h1>
            </div>
        </div>
        <hr class="mt-10">
        <div class="mt-10">
            <h1 class="flex justify-center text-2xl font-bold">รถอื่นๆเพิ่มเติม</h1>
            <hr class="mt-10">
        </div>
    </div>
</template>
 
<style scoped>
.firstHr {
    border: 2px solid gray;
    text-shadow: 1px 1px 1px black;
}

.width-intodruction {
    width: 750px;
}

.systemHr {
    width: 600px;
    margin-left: 150px;
}

span {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
}

.titleWidth {
    width: 600px;
}
</style>