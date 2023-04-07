import { ref, onMounted, Ref, nextTick } from 'vue'

import { Timeable } from '@/utilities'

interface PortalQueueOptions {
  ref: Ref
  containerClassName: string
  emit: (event: any, ...args: any[]) => void
  maxVisible?: number
  duration?: number // seconds
  pauseOnHover?: boolean
  active?: boolean
}

const defaultOptions: Partial<PortalQueueOptions> = {
  maxVisible: 5,
  duration: 5,
  pauseOnHover: true,
}

export const portalQueue = (options: PortalQueueOptions) => {
  const isActive = ref(!!options.active)
  const timer = ref<Timeable>()
  const queueTimer = ref<ReturnType<typeof setTimeout>>()

  const opts = {
    ...defaultOptions,
    ...options,
  }

  const selectorContainerClass = `.${opts.containerClassName.replaceAll(
    ' ',
    '.'
  )}`

  const createContainerParents = () => {
    const container = document.querySelector(selectorContainerClass)
    if (container) return

    const body = document.body
    const toCreate = document.createElement('div')
    toCreate.className = opts.containerClassName
    body.append(toCreate)
  }

  const shouldQueue = () => {
    if (!opts.maxVisible) {
      return false
    }

    const container = document.querySelector(selectorContainerClass)
    if (opts.maxVisible && container) {
      return opts.maxVisible <= container.childElementCount
    }

    return container && container.childElementCount > 0
  }

  const addPortalItemm = () => {
    if (shouldQueue()) {
      queueTimer.value = setTimeout(addPortalItemm, 250)
      return
    }

    const container = document.querySelector(selectorContainerClass)

    if (opts.ref.value && container) {
      container.prepend(opts.ref.value)
    }

    isActive.value = true
    timer.value = opts.duration ? new Timeable(close, opts.duration) : undefined
  }

  const toggleTimer = (newVal: boolean) => {
    if (!timer.value || !opts.pauseOnHover) {
      return
    }
    newVal ? timer.value.resume() : timer.value.pause()
  }

  const stopTimer = () => {
    timer.value && timer.value.stop()
    if (queueTimer.value) {
      clearTimeout(queueTimer.value)
    }
  }

  const close = () => {
    stopTimer()
    isActive.value = false
    opts.emit('close')

    nextTick(() => {
      opts.ref?.value?.remove()
      const container = document.querySelector(selectorContainerClass)
      if (container && !container?.hasChildNodes()) {
        container.remove()
      }
    })
  }

  onMounted(() => {
    createContainerParents()
    addPortalItemm()
  })

  return {
    isActive,
    toggleTimer,
    close,
  }
}
