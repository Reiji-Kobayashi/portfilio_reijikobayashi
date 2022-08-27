import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import History from '@/components/History.vue'
import Research from '@/components/Research.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router