import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/stories/create',
      name: 'create-story',
      component: () => import('../views/StoryCreate.vue'),
    },
    {
      path: '/DiyorbekBprofile',
      name: 'DiyorbekBprofile',
      component: () => import('../views/DiyorbekBprofile.vue'),
    },
  ],
})

export default router
