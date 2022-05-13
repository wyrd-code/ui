import type { App } from 'vue'

import { LoadingBar } from './components/loading-bar'
import { Message } from './components/message'
import { Notification } from './components/notification'

import type { IWui } from '~/ui.types'

import './styles/ui-styles'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'

function install(app: App): void {
  app.config.globalProperties.$Message = Message
  app.provide('$Message', Message)

  app.config.globalProperties.$Notification = Notification
  app.provide('$Notification', Notification)

  app.config.globalProperties.$LoadingBar = LoadingBar
  app.provide('$LoadingBar', LoadingBar)

  app.config.globalProperties.$Equal = {
    drawers: [],
    modals: [],
  } as IWui
}

export const WyrdUI = { install }
