import { LoadingBarInstance } from './components/loading-bar'
import { MessageInstance } from './components/message'
import { NotificationInstance } from './components/notification'

declare module 'vue' {
  interface ComponentCustomProperties {
    $Message: MessageInstance
    $Notification: NotificationInstance
    $LoadingBar: LoadingBarInstance
  }
}
