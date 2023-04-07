import type { App } from 'vue'

import {
  LoadingBar,
  LoadingBarOptions,
  WUI_LOADING_BAR_SYMBOL,
} from './loading-bar'

export const LoadingBarPlugin = {
  install(app: App, options?: LoadingBarOptions) {
    app.provide(WUI_LOADING_BAR_SYMBOL, LoadingBar)
    app.config.globalProperties.$wuiLoadingBar = LoadingBar
  },
}
