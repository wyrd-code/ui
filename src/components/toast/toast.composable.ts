import { injectStrict } from '@/helpers'

import { WUI_TOAST_SYMBOL } from './toast'
import type { ToastHandler } from './toast.handler'

export const useToast = () => {
  const toast = injectStrict<ToastHandler>(WUI_TOAST_SYMBOL)

  return {
    toast,
    show: toast.show,
    neutral: toast.neutral.bind(toast),
    success: toast.success.bind(toast),
    info: toast.info.bind(toast),
    warning: toast.warning.bind(toast),
    danger: toast.danger.bind(toast),
  }
}
