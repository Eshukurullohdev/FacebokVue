<template>
    <div class="absolute w-full h-screen bg-white/70 left-0 top-0 z-40 flex justify-center items-center" v-if="showDiscardModal">
        <div class="w-[548px] bg-white rounded-xl shadow-xl">
            <div class="flex justify-between items-center w-full p-4">
                <span></span>
                <h2 class="font-bold text-xl">Discard Story?</h2>
                <span class="flex justify-center items-center w-8 h-8 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-400/50" @click="exitOnlyDiscardModal">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </span>
            </div>
            <hr>
            <span class="flex justify-start items-center w-full py-2 px-3">
                <p class="text-sm">Are you sure you want to discard this story? Your story won't be saved.</p>
            </span>
            <div class="w-full flex justify-end items-center p-3 gap-2 mt-7">
                <button class="text-blue-500 font-bold text-sm transition-all duration-200 hover:bg-gray-200/70 p-2 rounded-md" @click="exitOnlyDiscardModal">Continue editing</button>
                <button class="text-white bg-blue-600 font-bold text-sm transition-all duration-200 py-2 px-10 rounded-md" @click="discardModal">Discard</button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['showDiscardModal'])
const emits = defineEmits(['boladanOtaga', 'faqatDiscardniYoqotish'])


const discardModal = () => {
    emits("boladanOtaga")
}

const exitOnlyDiscardModal = () => {
    emits("faqatDiscardniYoqotish")
}

</script>

<!-- parent component -- ota component -->
<!-- child component -- bola component -->