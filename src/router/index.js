import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listbike/:brandBike',
      name: 'ListBikeView',
      component: () => import('../views/ListBikeView.vue')
    },
    {
      path: '/bikedetail/:brandBike/:pathName',
      name: 'BikeDetail',
      component: () => import('../views/BikeDetail.vue')
    },
    {
      path: '/allbike',
      name: 'Allbike',
      component: () => import('../components/AllBike.vue')
    }
  ]
})

export default router