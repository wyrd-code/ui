import { isMatch } from '@s-libs/micro-dash'
import { set } from '@vueuse/shared'
import {
  computed,
  inject,
  provide,
  ref,
  unref,
} from 'vue'

import {
  removeUndefinedObjectProperties,
} from '@/utilities'

import {
  WuiFormConfigSymbol,
  WuiFormInstaceSymbol,
} from './form.constants'
import type {
  FormOptions,
  FormInstance,
  FormConfiguration,
  FormData,
} from './form.types'

export const useForm = (options: FormOptions, emit: (event: any, ...args: any[]) => void): FormInstance => {
  const pluginConfig = inject<FormConfiguration>(WuiFormConfigSymbol)
  const initialData = unref(options.modelValue || {})
  const data = ref<FormData>({ ...initialData })
  let loading = false

  const isDirty = computed(
    () =>
      !isMatch(
        removeUndefinedObjectProperties(initialData),
        removeUndefinedObjectProperties(data)
      )
  )

  const definitions = [
    ...pluginConfig?.definitions || [],
    ...options?.definitions || [],
  ]

  const getFieldDefinition = (type: string) => definitions[type]

  const getFieldValue = (name: string) => computed({
    get: () => data.value[name],
    set: (value) => setFieldValue(name, value)
  })

  const setFieldValue = (name: string, value: unknown) => {
    set(data.value, name, value)
    emit('update:modelValue', data.value)
  }

  const reset = () => {
    loading = true
    data.value = { ...initialData }
    emit('update:modelValue', data.value)

    if (options.onReset) {
      options.onReset(data.value, form)
    }
    loading = false
  }

  const submit = () => {
    loading = true
    if (options.onSubmit) {
      options.onSubmit(data.value, form)
    }
    loading = false
  }

  const form = {
    data,
    definitions,
    getFieldDefinition,
    getFieldValue,
    setFieldValue,
    isLoading: computed(() => loading),
    isDirty,
    submit,
    reset,
  }

  provide(WuiFormInstaceSymbol, form)

  return form
}
