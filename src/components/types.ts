import { LoadingBarInstance } from './feedback/loading-bar/loading-bar'
import { MessageInstance } from './feedback/message/message'
import { NotificationInstance } from './feedback/notification/notification'

// Shim vue global instance properties

declare module 'vue' {
  interface ComponentCustomProperties {
    $Message: MessageInstance
    $Notification: NotificationInstance
    $LoadingBar: LoadingBarInstance
  }
}
