import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import {
  createRouter as createVueRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

import { WyrdUI } from '../ui.plugin'
import App from './App.vue'
import { docsRoutes as routes } from './ui.docs.routes'

import '@unocss/reset/tailwind.css'
import '../styles/reset.css'
import '../styles/prism-tomorrow-night.css'
import '../styles/markdown.styles.css'

const history =
  import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

const router = createVueRouter({
  history,
  routes,
})

const app = createApp(App)

app.use(WyrdUI)
app.use(router)
app.use(createHead())
app.mount('#app')
