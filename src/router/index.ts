import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView/index.vue'),
      meta: {
        title: '大屏'
      },
      children: [
        {
          path: '/',
          name: 'homePage',
          component: () => import('@/views/HomeView/HomePage/index.vue'),
          meta: {
            title: '首页',
            ignoreAuth: true
          }
        }
      ]
    }
  ]
})

export default router
