import { createApp, ComponentPublicInstance } from 'vue'

import { Colors } from '../../models/enums'
import MessageVue from './WuiMessage.vue'

declare type MessageFactory = (
  options: IMessageOptions
) => ComponentPublicInstance

export interface MessageInstance extends Function {
  primary: MessageFactory
  success: MessageFactory
  warning: MessageFactory
  danger: MessageFactory
  close: (id: number, onClose?: () => void) => void
}

interface IMessageOptions {
  text?: string | number
  type?: string
  duration?: number
  icon?: string
  onClose?: () => void
}

const messageTypes = [
  Colors.PRIMARY,
  Colors.SUCCESS,
  Colors.DANGER,
  Colors.WARNING,
]

const messages: ComponentPublicInstance[] = []

let idStart = 0

export const Message = (
  options: IMessageOptions = {}
): ComponentPublicInstance => {
  const onClose = options.onClose
  const id = idStart++

  options.onClose = () => {
    Message.close(id, onClose)
  }

  const tempDiv = document.createElement('div')
  const instance = createApp(MessageVue).mount(tempDiv)

  const newData = Object.assign(options, { id })
  for (const [key, value] of Object.entries(newData)) {
    ;(instance.$data as any)[key] = value
  }

  const dataObj = instance.$data as Record<string, any>

  document.body.appendChild(instance.$el)
  dataObj.show = true

  let topDist = 0

  messages.forEach((el) => {
    topDist += (el.$el as HTMLElement).offsetHeight + 6
  })

  dataObj.top = topDist + 6

  messages.push(instance)

  return instance
}

Message.close = (id: number, onClose?: () => void): void => {
  const index = messages.findIndex((el) => (el.$data as any).id === id)
  const height = (messages[index].$el as HTMLElement).offsetHeight
  messages.splice(index, 1)
  if (onClose) {
    onClose()
  }
  messages.forEach((el) => {
    if ((el.$data as any).id > id) {
      ;(el.$data as any).top -= height + 6
    }
  })
}

messageTypes.forEach((type) => {
  ;(Message as any)[type] = (options: IMessageOptions) =>
    Message({ type, ...options })
})
