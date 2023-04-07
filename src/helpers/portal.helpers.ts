import { onMounted, Ref, nextTick } from 'vue'

interface PortalOptions {
  ref: Ref
  containerClassName: string
  emit: (event: any, ...args: any[]) => void
}

const defaultOptions: Partial<PortalOptions> = {}

export const portal = (options: PortalOptions) => {
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
    if (container) return container

    const body = document.body
    const toCreate = document.createElement('div')
    toCreate.className = opts.containerClassName
    body.append(toCreate)
    return container
  }

  const close = () => {
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
    const container = createContainerParents()

    if (opts.ref.value && container) {
      container.prepend(opts.ref.value)
    }
  })

  return {
    close,
  }
}
