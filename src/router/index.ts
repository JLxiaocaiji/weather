import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Login/index.vue'),
      meta: {
        title: '项目'
      },
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login/index.vue'),
          meta: {
            title: '登录',
            ignoreAuth: true
          }
        },
        {
          path: '/homePage',
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
