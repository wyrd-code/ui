import { set, isMatch } from '@s-libs/micro-dash'
import { computed, reactive, inject, provide } from 'vue'

import { resetReactiveObject, removeUndefinedObjectProperties } from '@/core'

import { WuiFormConfigSymbol } from './form.constants'
import type { FormOptions, FormInstance, FormConfiguration } from './form.types'

export const useForm = (options: FormOptions): FormInstance => {
  const wuiForm = inject<FormConfiguration>(
    WuiFormConfigSymbol
  ) as FormConfiguration
  const data = reactive({
    ...(options.data as any),
  })
  const initialData = {
    ...data,
  }
  let isLoading = false

  const isDirty = computed(
    () =>
      !isMatch(
        removeUndefinedObjectProperties(initialData),
        removeUndefinedObjectProperties(data)
      )
  )

  // const isValid = computed(
  //   () =>
  //     !isMatch(
  //       removeUndefinedObjectProperties(initialData),
  //       removeUndefinedObjectProperties(data)
  //     )
  // )

  const definitions = {
    ...wuiForm?.definitions,
    ...options?.definitions,
  }

  const getFieldDefinition = (type: string) => definitions[type]

  const tryUpdateFieldValue = (name: string, value: unknown) => {
    set(data, [name], value)
  }

  const reset = () => {
    console.log('Resetting form')
    isLoading = true
    resetReactiveObject(data, initialData)
    isLoading = false
  }

  const submit = () => {
    console.log('Submitting form')
    isLoading = true
    if (options.onSubmit) {
      options.onSubmit(data, form)
    }
    isLoading = false
  }

  const form = {
    data,
    definitions,
    getFieldDefinition,
    tryUpdateFieldValue,
    isLoading: computed(() => isLoading),
    isDirty,
    submit,
    reset,
  }

  provide('formInstance', form)

  return form
}
