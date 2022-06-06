import { defineAsyncComponent, Component } from 'vue'

import { buildRouteItemFromPageDefinition } from '../helpers'
import { pages } from './ui.docs.pages'

const children = pages.map((p) => buildRouteItemFromPageDefinition(p, 'ui'))

export const docsRoutes = [
  {
    path: '/',
    name: 'ui',
    redirect: { name: 'ui.home' },
    meta: {
      layout: {
        name: 'UiLayout',
      },
    },
    component: (): Component => import('./UiLayout.vue'),
    children,
  },
]

export const docsEmbedRoutes = [
  {
    path: '/ui',
    name: 'ui',
    redirect: { name: 'ui.home' },
    meta: {
      layout: {
        name: 'UiLayout',
        component: defineAsyncComponent(() => import('./UiLayout.vue')),
      },
    },
    component: (): Component =>
      import('../components/routing/WuiRouteWrapper.vue'),
    children,
  },
]
