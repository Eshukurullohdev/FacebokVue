<template>
  <div class="w-full relative">
    <Navigation>
      <StoryNavigation />
    </Navigation>
    <Sidebar>
      <div class="w-[360px] h-dvh overflow-hidden shadow-lg bg-white fixed top-0 left-0 z-20">
        <div class="w-full flex justify-start items-center gap-2 py-3 px-3">
          <router-link
            to="/"
            class="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full text-gray-100 text-2xl"
          >
            <i class="fa-solid fa-xmark"></i>
          </router-link>
          <img src="/logo.ico" alt="" class="w-10" />
        </div>
        <hr />
        <div class="flex justify-between items-center px-3 py-2">
          <span class="font-bold text-2xl">Your story</span>
          <span
            class="flex justify-center items-center w-[37px] h-[37px] bg-gray-200 rounded-full text-black text-xl cursor-pointer hover:bg-gray-300"
            @click="showSettingModal = !showSettingModal"
          >
            <i class="fa-solid fa-cog"></i>
          </span>
        </div>
        <div class="flex justify-start items-center gap-3 px-3 py-2 pb-6">
          <span class="w-16 h-16 flex justify-center items-center rounded-full bg-gray-200">
            <img src="/user.png" alt="" class="w-14 h-14" />
          </span>
          <span>Salimov Karim</span>
        </div>
        <hr />
        <div :class="{ '!block': sharecreates }" class="px-4 w-full h-auto hidden">
          <textarea
            rows="6"
            class="w-full z-20 mt-4 outline-non focus:outline-blue-500 rounded-lg border-[1px] border-gray-300 p-4 placeholder:text-gray-500 placeholder:text-[16px]"
            placeholder="Start typing"
            v-model="storyTextInput"
          ></textarea>
          <div class="w-full flex items-center justify-center relative">
            <select
              name=""
              id=""
              class="w-full p-4 pl-8 rounded-md mt-2 outline-none border-[1px] border-gray-300 bg-white"
              v-model="textStyle"
            >
              <option value="clean">Clean</option>
              <option value="casual">Casual</option>
              <option value="Roboto">Roboto</option>
              <option value="Oswald">Oswald</option>
            </select>
            <span class="absolute left-3 top-6 text-gray-700 text-[14px]">Aa</span>
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 absolute right-[1.8px] top-[25px] xep6ejk"
              style="
                background-image: url('https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/xZSXykthXYE.png');
                background-position: 0px -656px;
                background-size: auto;
                width: 16px;
                height: 16px;
                background-repeat: no-repeat;
                display: inline-block;
              "
            ></i>
          </div>
          <div class="w-full h-auto border-[1px] border-gray-300 mt-4 rounded-md p-3 pl-4 mb-2">
            <span class="text-[15px] text-[#65686c]">Backgrounds</span>
            <div class="flex justify-center gap-2 mt-3 items-center flex-wrap">
              <div class="w-[30px] h-[30px] rounded-full cursor-pointer" v-for="image in backgroundImages" :key="image.id" @click="changeBackground(image.id)">
                <img :src="image.img" alt="" class="w-full h-full rounded-full">
              </div>
            </div>
          </div>

          <div
            class="w-[360px] h-[72px] bg-white shadow-2xl shadow-black left-0 gap-2 flex justify-center items-center fixed bottom-0"
          >
            <button
              class="px-[41px] py-[7px] rounded-lg text-[15px] font-[550] hover:bg-gray-300 bg-gray-200"
              @click="showDiscardModal = true"
            >
              Discard
            </button>
            <button
              class="px-[41px] py-[7px] rounded-lg text-[15px] font-[550] text-white hover:bg-[#0850ff] bg-[#0866ff]"
            >
              Share to story
            </button>
          </div>
        </div>
      </div>
    </Sidebar>
    <div
      :class="{ '!block': sharecreates }"
      class="hidden min-w-[82%] z-10 h-[850px] top-[40px] absolute bg-gray-100 mx-auto mt-2 right-0"
    >
      <div
        class="w-[972px] h-[831px] bg-white shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] m-auto rounded-lg px-4 pb-4 pt-5"
      >
        <span class="text-[15px] font-[550] pb-1">Preview</span>
        <div class="w-full mt-4 rounded-lg h-[755px] p-5 bg-black">
          <div class="h-full mx-auto bg-blue-600 rounded-lg flex justify-center items-center text-white p-3 text-center bg-cover bg-center text_type" :style="{ width: dynamicTextWrapper, 'backgroundImage': 'url(' + currentImage + ')' }">
            <h1 class="text_type w-[300px] break-words text-[22px] uppercase font-bold" style="white-space: pre-wrap;" v-if="storyTextInput" :style="{ fontFamily: textStyle + ' ,serif' }">{{ storyTextInput }}</h1>
            <h1 class="w-[300px] break-words text-2xl uppercase opacity-50 font-bold" v-else style="letter-spacing: -1px;" :style="{ fontFamily: textStyle + ' ,serif' }">start typing</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="min-w-[90%] h-dvh absolute flex justify-center items-center right-0">
      <div :class="{ '!hidden': sharecreates }" class="flex justify-center items-center gap-6">
        <input type="file" id="file_story" accept="image/*" class="hidden" />
        <label
          for="file_story"
          class="w-[220px] h-[330px] bg-gradient-to-b from-blue-400 to-purple-500 rounded-xl flex flex-col items-center justify-center text-white shadow-lg cursor-pointer transition transform hover:scale-105"
        >
          <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 xep6ejk"
              style="
                background-image: url('https://static.xx.fbcdn.net/rsrc.php/v4/yH/r/-YC_BS-S2Av.png');
                background-position: 0px -130px;
                background-size: auto;
                width: 20px;
                height: 20px;
                background-repeat: no-repeat;
                display: inline-block;
              "
            ></i>
          </div>
          <p class="text-sm font-semibold">Create a photo story</p>
        </label>
        <div
          @click="sharecreates = !sharecreates"
          class="w-[220px] h-[330px] bg-gradient-to-b from-pink-500 to-purple-500 rounded-xl flex flex-col items-center justify-center text-white shadow-lg cursor-pointer transition transform hover:scale-105"
        >
          <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 xep6ejk"
              style="
                background-image: url('https://static.xx.fbcdn.net/rsrc.php/v4/yY/r/EBvutOuy0EA.png');
                background-position: 0px -83px;
                background-size: auto;
                width: 20px;
                height: 20px;
                background-repeat: no-repeat;
                display: inline-block;
              "
            ></i>
          </div>
          <p class="text-sm font-semibold">Create a text story</p>
        </div>
      </div>
    </div>

    <div
      class="modal_setting w-full h-dvh absolute top-0 left-0 bg-gray-100/75 z-50 flex justify-center items-center"
      v-if="showSettingModal"
    >
      <div class="w-[548px] h-[530px] shadow-xl bg-white rounded-md">
        <div class="flex justify-between items-center px-5 pt-5 pb-4">
          <span></span>
          <span class="text-[18px] font-bold">Story privacy</span>
          <span
            class="w-9 h-9 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer"
            @click="showSettingModal = false"
          >
            <i class="fa-solid fa-xmark text-[20px] text-gray-500"></i>
          </span>
        </div>
        <hr />
        <div class="p-4">
          <h1 class="font-bold">Who can see your story?</h1>
          <span class="text-gray-400"
            >Your story will be visible for 24 hours on Facebook and Messenger.</span
          >
          <div class="w-full flex justify-between mt-3 items-center">
            <div class="gap-2 flex items-center justify-center">
              <div
                class="w-[65px] h-[65px] bg-gray-200 rounded-full flex justify-center items-center"
              >
                <i class="fa-solid fa-earth-americas text-[30px]"></i>
              </div>
              <div>
                <h2 class="font-bold">Public</h2>
                <span>Anyone on Facebook or Messenger</span>
              </div>
            </div>
            <input class="" type="radio" />
          </div>
          <div class="w-full flex justify-between mt-3 items-center">
            <div class="gap-2 flex items-center justify-center">
              <div
                class="w-[65px] h-[65px] bg-gray-200 rounded-full flex justify-center items-center"
              >
                <i class="fa-solid fa-earth-americas text-[30px]"></i>
              </div>
              <div>
                <h2 class="font-bold">Public</h2>
                <span>Anyone on Facebook or Messenger</span>
              </div>
            </div>
            <input class="" type="radio" />
          </div>
          <div class="w-full flex justify-between mt-3 items-center">
            <div class="gap-2 flex items-center justify-center">
              <div
                class="w-[65px] h-[65px] bg-gray-200 rounded-full flex justify-center items-center"
              >
                <i class="fa-solid fa-earth-americas text-[30px]"></i>
              </div>
              <div>
                <h2 class="font-bold">Public</h2>
                <span>Anyone on Facebook or Messenger</span>
              </div>
            </div>
            <input class="" type="radio" />
          </div>
        </div>
        <hr />
        <div class="px-5 pb-3">
          <div class="w-full flex justify-between mt-3 items-center">
            <div class="gap-2 flex items-center justify-center">
              <div
                class="w-[65px] h-[65px] bg-gray-200 rounded-full flex justify-center items-center"
              >
                <i class="fa-solid fa-earth-americas text-[30px]"></i>
              </div>
              <div>
                <h2 class="font-bold">Public</h2>
                <span>Anyone on Facebook or Messenger</span>
              </div>
            </div>
            <i class="fa-solid fa-chevron-right text-gray-400"></i>
          </div>
        </div>
        <hr />
        <div class="flex justify-between items-center px-5 mt-2">
          <span></span>
          <div class="flex justify-center items-center gap-4">
            <a class="text-[#0064d1]" href="#">Cancel</a>
            <a class="bg-[#0866ff] text-[#fff] rounded-md font-bold py-2 px-[40px]" href="#"
              >Save</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <discard-story :showDiscardModal="showDiscardModal" @boladanOtaga="exitAllModals" @faqatDiscardniYoqotish="showDiscardModal = false"></discard-story>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import Navigation from '@/components/Navigation.vue'
import StoryNavigation from '@/components/StoryNavigation.vue'
import Sidebar from '@/components/Sidebar.vue'

import DiscardStory from '@/components/DiscardStory.vue'

const showSettingModal = ref(false)
const sharecreates = ref(false)
const storyTextInput = ref("")
const currentImage = ref("")

const textStyle = ref("clean")

const showDiscardModal = ref(false)

const changeBackground = (id) => {
  currentImage.value = backgroundImages.value[id - 1].img
}

const windowSize = ref(window.innerWidth)

const backgroundImages = ref([
  {
    id: 1,
    img: '/creates-1.jpg'
  },
  {
    id: 2,
    img: '/creates-2.jpg'
  },
  {
    id: 3,
    img: '/creates-3.jpg'
  },
  {
    id: 4,
    img: '/creates-4.jpg'
  },
  {
    id: 5,
    img: '/creates-5.jpg'
  },
  {
    id: 6,
    img: '/creates-6.jpg'
  },
  {
    id: 7,
    img: '/creates-7.jpg'
  },
  {
    id: 8,
    img: '/creates-8.jpg'
  },
  {
    id: 9,
    img: '/creates-9.jpg'
  },
  {
    id: 10,
    img: '/creates-10.jpg'
  },
  {
    id: 11,
    img: '/creates-11.jpg'
  },
  {
    id: 12,
    img: '/creates-12.jpg'
  },
  {
    id: 13,
    img: '/creates-13.jpg'
  },
  {
    id: 14,
    img: '/creates-14.jpg'
  },
  {
    id: 15,
    img: '/creates-15.jpg'
  },
  {
    id: 16,
    img: '/create-17.jpg'
  },
])

// DOMContentLoaded event (onMounted) -- qachonki sayt to'liq ishga tushganda ishlaydi

const dynamicTextWrapper = computed(() => {
  if (windowSize.value <= 1472) return '300px'
  if (windowSize.value < 2144 && windowSize.value > 1472) return '330px'
  if (windowSize.value >= 2144) return '400px'
})

onMounted(() => {
  window.addEventListener("resize", () => {
    windowSize.value = window.innerWidth
    console.log(windowSize.value);
  })
})

const exitAllModals = () => {
  showDiscardModal.value = false
  sharecreates.value = false
}


</script>

<style scoped>

</style>