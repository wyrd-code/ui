import { createApp } from 'vue'
import {
  createRouter as createVueRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

import { WyrdUI } from '@/plugin'

import App from './App.vue'
import DemoHome from './DemoHome.vue'

// eslint-disable-next-line import/no-unresolved
// import '@unocss/reset/tailwind.css'
// import '@/ui.css'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'

const history =
  import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

const router = createVueRouter({
  history,
  routes: [
    {
      path: '/',
      component: DemoHome,
    },
  ],
})

const app = createApp(App)

app.use(WyrdUI)
app.use(router)
app.mount('#app')
