<script setup>
import Rightbar from '@/components/Rightbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Navigation from '@/components/Navigation.vue'
import HomeNavigation from '@/components/HomeNavigation.vue'
import HomeSidebar from '@/components/HomeSidebar.vue'
</script>

<template>
  <Navigation>
    <HomeNavigation />
  </Navigation>
  <Sidebar>
    <HomeSidebar />
  </Sidebar>
 
  <div class="middle-container pt-20">
    <div class="w-full flex justify-center items-center flex-col">
      <!-- CONTENT CREATE -->
      <div class="w-[680px] h-auto bg-white shadow-lg rounded-lg border p-4">
        <div class="w-full flex justify-between items-center gap-3">
          <span
            class="flex justify-center items-center w-12 h-12 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"
          >
            <img src="/user.png" alt="" class="w-[80%] h-[80%]" />
          </span>
          <input
            type="text"
            placeholder="What's on your mind, Karim?"
            class="w-full bg-gray-100 py-[8px] px-4 rounded-full outline-none cursor-pointer hover:bg-gray-200"
          />
        </div>
        <hr class="mt-2" />
        <div class="flex justify-between items-center mt-2">
          <span
            class="flex justify-center items-center hover:bg-gray-100 cursor-pointer py-2 w-full rounded-lg gap-2"
          >
            <img src="/videoic.png" alt="" />
            Live Video
          </span>
          <span
            class="flex justify-center items-center hover:bg-gray-100 cursor-pointer py-2 w-full rounded-lg gap-2"
          >
            <img src="/photo.png" alt="" />
            Photo/video
          </span>
          <span
            class="flex justify-center items-center hover:bg-gray-100 cursor-pointer py-2 w-full rounded-lg gap-2"
          >
            <img src="/emoji.png" alt="" />
            Feeling/activity
          </span>
        </div>
      </div>
      <!-- CONTENT CREATE -->

      <!-- POST STORY -->
      <div
        class="w-[680px] h-auto bg-white shadow-lg rounded-lg border p-2 mt-4 flex justify-between items-center cursor-pointer"
      >
        <div
          class="flex justify-start gap-3 items-center w-full hover:bg-gray-100 p-[5px] rounded-md"
        >
          <span
            class="w-10 h-10 flex justify-center items-center rounded-full bg-blue-100/60 cursor-pointer"
          >
            <i class="fa-solid fa-plus text-blue-500"></i>
          </span>
          <router-link to="/stories/create/">
            <h1 class="font-bold text-lg tracking-tight">Create story</h1>
            <p class="text-gray-500 text-sm">Share a photo or write something.</p>
          </router-link>
        </div>
      </div>
      <!-- POST STORY -->
    </div>
  </div>
  <Rightbar />
</template>

<style scoped>
::placeholder {
  color: #333;
}
</style>
