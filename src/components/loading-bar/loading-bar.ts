import { createApp, ComponentPublicInstance } from 'vue'

import WuiLoadingBar from './WuiLoadingBar.vue'

export const WUI_LOADING_BAR_SYMBOL = Symbol()

export interface LoadingBarOptions {
  started?: boolean
  progress?: number
  height?: number
  onClose?: () => void
}

declare type LoadingBarComponentInstance = ComponentPublicInstance<
  {},
  { setProgress: (value: number) => void }
>

let instance = null as unknown as LoadingBarComponentInstance

if (typeof window !== 'undefined') {
  const tempDiv = window.document.createElement('div')
  instance = createApp(WuiLoadingBar).mount(
    tempDiv
  ) as LoadingBarComponentInstance
  document.body.appendChild(instance.$el)
}

export interface LoadingBarInstance extends Function {
  start(): void
  update(value: number): void
  finish(onClose?: () => void): void
}

export const LoadingBar = (
  options: LoadingBarOptions = {}
): ComponentPublicInstance => {
  const onClose = options.onClose
  options.onClose = () => {
    LoadingBar.finish({ onClose })
  }

  instance?.setProgress(10)

  return instance
}

LoadingBar.start = (options: LoadingBarOptions = {}): void => {
  instance?.setProgress(10)
}

LoadingBar.update = (value: number): void => {
  instance?.setProgress(value)
}

interface LoadingBarFinishOpts {
  onClose?: () => void
  id?: number
}

LoadingBar.finish = (opts: LoadingBarFinishOpts = {}): void => {
  instance?.setProgress(100)

  if (opts.onClose) {
    opts.onClose()
  }
}
