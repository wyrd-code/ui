import { createHead } from '@vueuse/head'
import { createApp, Component } from 'vue'
import {
  createRouter as createVueRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

import WyrdUI from '../index'
import routes from '../ui.routes'
import App from './App.vue'

import '../styles/prism-tomorrow-night.css'
import '../styles/ui-styles'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'

const history = import.meta.env.SSR === false
  ? createWebHistory()
  : createMemoryHistory()

const router = createVueRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'ui',
      redirect: { name: 'ui.docs' },
      component: (): Component => import('./UI.vue'),
      children: routes,
    }
  ],
})

const app = createApp(App)

app.use(WyrdUI)
app.use(router)
app.use(createHead())
app.mount('#app')
