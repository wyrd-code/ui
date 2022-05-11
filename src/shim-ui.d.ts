import type { LoadingBarInstance } from './components/loading-bar'
import type { MessageInstance } from './components/message'
import type { NotificationInstance } from './components/notification'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $Message: MessageInstance
    $Notification: NotificationInstance
    $LoadingBar: LoadingBarInstance
  }
}