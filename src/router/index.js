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
      path: '/listbike',
      name: 'ListBike',
      component: () => import('../views/ListBikeView.vue')
    },
    {
      path: '/bikedetail/:brand_bike/:pathName',
      name: 'BikeDetail',
      component: () => import('../views/BikeDetail.vue')
    }
  ]
})

export default router
