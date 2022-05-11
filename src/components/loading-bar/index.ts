import { createApp, ComponentPublicInstance } from 'vue'

import WuiLoadingBar from './WuiLoadingBar.vue'

let instance: ComponentPublicInstance =
  null as unknown as ComponentPublicInstance

if (document) {
  const tempDiv = document.createElement('div')
  instance = createApp(WuiLoadingBar).mount(tempDiv)
  document.body.appendChild(instance.$el)
}

export interface LoadingBarInstance extends Function {
  start(): void
  update(value: number): void
  finish(onClose?: () => void): void
}

interface LoadingBarOptions {
  started?: boolean
  progress?: number
  height?: number
  onClose?: () => void
}

export const LoadingBar = (
  options: LoadingBarOptions = {}
): ComponentPublicInstance => {
  const onClose = options.onClose
  options.onClose = () => {
    LoadingBar.finish({ onClose })
  }

  const dataObj = instance?.$data as Record<string, any>
  Object.assign(dataObj, {
    progress: 10,
    started: true,
    ...options,
  })

  return instance
}

LoadingBar.start = (options: LoadingBarOptions = {}): void => {
  const dataObj = instance?.$data as Record<string, any>
  Object.assign(dataObj, {
    progress: 10,
    started: true,
    ...options,
  })
}

LoadingBar.update = (value: number): void => {
  if (!instance) {
    return
  }
  const dataObj = instance?.$data as Record<string, any>
  dataObj.started = false
  dataObj.progress = value
}

interface LoadingBarFinishOpts {
  onClose?: () => void
  id?: number
}

LoadingBar.finish = (opts: LoadingBarFinishOpts = {}): void => {
  const dataObj = instance?.$data as Record<string, any>
  dataObj.started = false
  dataObj.progress = 100
  dataObj.height = 0
  if (opts.onClose) {
    opts.onClose()
  }
}
