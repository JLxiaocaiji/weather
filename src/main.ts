import './assets/main.css'

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerGlobComp } from '@/utils/registerGlobComp'
import { setupStore } from '@/store'
import DataVVue3 from '@kjgl77/datav-vue3'
import 'virtual:svg-icons-register'
import installSvgIcon from '@/components/SvgIcon'

const mount = async () => {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  // 配置存储
  setupStore(app)
  app.use(DataVVue3)
  // svg
  app.use(installSvgIcon)
  registerGlobComp(app)
  app.mount('#app')
}

mount()
