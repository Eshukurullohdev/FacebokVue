
<template>
  <div class="layout-container">
    <div class="pt-[4.5rem] w-[360px] h-[100dvh] fixed top-0">
      <div class="">
        <ul>
          <li v-for="menu in menus" :key="menu.name">
            <router-link
              to="/DiyorbekBprofile/"
              class="w-full flex items-center justify-start gap-3 hover:bg-gray-200 p-2 rounded-lg transition duration-100"
            >
              <img :src="menu.img" alt="" class="w-10 h-10 rounded-full p-1" />
              <span class="text-sm font-medium">{{ menu.name }}</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="w-full flex items-center justify-start gap-3 hover:bg-gray-200 p-2 rounded-lg transition duration-100"
            >
              <div class="w-8 h-8 rounded-full p-1 bg-gray-200 flex justify-center items-center">
                <img src="/chevron.png" alt="" class="w-5 h-5" />
              </div>
              <span class="text-sm font-medium">See more</span>
            </router-link>
          </li>
        </ul>
        <div class="absolute bottom-0 left-0 flex items-center justify-start gap-3 p-2 w-[16rem]">
          <span class="text-[12px]"
            >Privacy · Terms · Advertising · Ad Choices · Cookies · · Meta © 2025
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from 'vue'

const menus = ref([
  {
    name: 'Diyorbek Bahodirov',
    img: './user.png',
  },
  {
    name: 'Friends',
    img: './friends.png',
  },
  {
    name: 'Welcome',
    img: './logo.ico',
  },
  {
    name: 'Memories',
    img: './history.png',
  },
  {
    name: 'Saved',
    img: './favorite.png',
  },
  {
    name: 'Groups',
    img: './groups.png',
  },
  {
    name: 'Video',
    img: './video.png',
  },
  {
    name: 'Marketplace',
    img: './market.png',
  },
  {
    name: 'Events',
    img: './event.png',
  },
  {
    name: 'Ads Manager',
    img: './ads.png',
  },
])
</script>