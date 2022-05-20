import { App } from 'vue'

import WuiCursorListing from './WuiCursorListing.vue'

WuiCursorListing.install = (Vue: App) => {
  Vue.component(WuiCursorListing.name, WuiCursorListing)
}

export { WuiCursorListing }
