import { LoadingBar } from './components/loading-bar/loading-bar'
import { ToastHandler } from './components/toast/toast.handler'

declare module 'vue' {
  interface ComponentCustomProperties {
    $wuiToast: ToastHandler
    $wuiLoadingBar: LoadingBar
  }
}
