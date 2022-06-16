import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import {
  createRouter as createVueRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

import {
  WuiAlert,
  WuiTag,
  WuiButton,
  WuiScrollUp,
  WuiSelect,
  WuiInput,
  WuiCheckbox,
  WuiAvatar,
  WuiAvatarGroup,
  WuiArticle,
  WuiBadge,
  WuiDivider,
  WuiDrawer,
  WuiDropdown,
  WuiCollapse,
  WuiCollapseItem,
  WuiModal,
  WuiButtonDropdown,
  WuiTooltip,
  WuiButtonGroup,
  WuiPopover,
  WuiProgressBar,
  WuiPagination,
  WuiSwitch,
  WuiSpinnerOverlay,
  WuiTabNav,
  WuiTable,
  WuiTableCell,
  WuiCard,
  WuiComment,
  WuiQuickDialog,
  WuiHierarchy,
  WuiTextarea,
  WuiTransition,
  WuiTransitionPage,
  WuiRouteWrapper,
  WuiRadio,
  WuiLink,
  WuiNav,
  WuiSpinner,
  WuiDropArea,
  WuiNumberInput,
  WuiLoadMore,
} from '~/components'
import { WuiCodeDemo } from '~/components/code-demo'
import { WuiCodeExample } from '~/components/code-example'
import { WuiPropsTable } from '~/components/props-table'
import { WyrdUI } from '~/ui.plugin'

import App from './App.vue'
import { docsRoutes as routes } from './ui.docs.routes'

import '@unocss/reset/tailwind.css'
import '~/styles/utilities/glass.css'
import '~/styles/utilities/animations.css'
import '~/styles/base.css'
import '~/styles/prism-tomorrow-night.css'
import '~/styles/markdown.styles.css'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'

const history =
  import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

const router = createVueRouter({
  history,
  routes,
})

const app = createApp(App)

app.component('WuiPropsTable', WuiPropsTable)
app.component('WuiCodeExample', WuiCodeExample)
app.component('WuiCodeDemo', WuiCodeDemo)

app.component('WuiButtonDropdown', WuiButtonDropdown)
app.component('WuiButtonGroup', WuiButtonGroup)
app.component('WuiTooltip', WuiTooltip)

app.component('WuiPopover', WuiPopover)
app.component('WuiProgressBar', WuiProgressBar)
app.component('WuiPagination', WuiPagination)
app.component('WuiSwitch', WuiSwitch)
app.component('WuiSpinnerOverlay', WuiSpinnerOverlay)
app.component('WuiTabNav', WuiTabNav)
app.component('WuiTable', WuiTable)
app.component('WuiTableCell', WuiTableCell)
app.component('WuiCard', WuiCard)
app.component('WuiComment', WuiComment)
app.component('WuiQuickDialog', WuiQuickDialog)
app.component('WuiHierarchy', WuiHierarchy)
app.component('WuiTextarea', WuiTextarea)
app.component('WuiTransition', WuiTransition)
app.component('WuiTransitionPage', WuiTransitionPage)
app.component('WuiRouteWrapper', WuiRouteWrapper)
app.component('WuiRadio', WuiRadio)
app.component('WuiLink', WuiLink)
app.component('WuiNav', WuiNav)
app.component('WuiSpinner', WuiSpinner)
app.component('WuiDropArea', WuiDropArea)
app.component('WuiNumberInput', WuiNumberInput)
app.component('WuiLoadMore', WuiLoadMore)

app.component('WuiModal', WuiModal)
app.component('WuiAlert', WuiAlert)
app.component('WuiTag', WuiTag)
app.component('WuiButton', WuiButton)
app.component('WuiScrollUp', WuiScrollUp)
app.component('WuiSelect', WuiSelect)
app.component('WuiInput', WuiInput)
app.component('WuiCheckbox', WuiCheckbox)
app.component('WuiAvatar', WuiAvatar)
app.component('WuiAvatarGroup', WuiAvatarGroup)
app.component('WuiArticle', WuiArticle)
app.component('WuiBadge', WuiBadge)
app.component('WuiDivider', WuiDivider)
app.component('WuiDrawer', WuiDrawer)
app.component('WuiDropdown', WuiDropdown)
app.component('WuiCollapse', WuiCollapse)
app.component('WuiCollapseItem', WuiCollapseItem)

app.use(WyrdUI)
app.use(router)
app.use(createHead())
app.mount('#app')
