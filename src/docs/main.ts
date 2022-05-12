import { createHead } from '@vueuse/head'
import { createApp, Component } from 'vue'
import {
  createRouter as createVueRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

import { WyrdUI } from '../index'
import { buildRouteItemFromPageDefinition } from '../ui.helpers'
import App from './App.vue'
import { pages } from './pages'

import '@unocss/reset/tailwind.css'
import '../styles/reset.css'
import '../styles/prism-tomorrow-night.css'
import '../styles/markdown.styles.css'

const history =
  import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

const router = createVueRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'ui',
      redirect: { name: 'ui.home' },
      component: (): Component => import('./UI.vue'),
      children: pages.map((p) => buildRouteItemFromPageDefinition(p, 'ui')),
    },
  ],
})

const app = createApp(App)

app.use(WyrdUI)
app.use(router)
app.use(createHead())
app.mount('#app')
