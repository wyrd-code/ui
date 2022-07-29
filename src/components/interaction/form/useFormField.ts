import { pick, isObject, isString } from '@s-libs/micro-dash'
import { Component, computed, inject, reactive } from 'vue'

import { get, camelizeObjectKeys } from '@/core'

import type {
  FormFieldInstance,
  FormFieldOptions,
  FormInstance,
  FormMessage,
} from './form.types'

const defaultValidaton = {
  isRequired: true,
  isValid: true,
  messages: [] as FormMessage[],
}

const alwaysAllowedAttributes = ['class']

export const useFormField = <T>(
  options: FormFieldOptions
): FormFieldInstance<T> => {
  const { name, type, attrs } = options
  const form = inject<FormInstance>('formInstance', {} as FormInstance)
  const path = name
  const definition = form?.definitions[type]
  const component = computed<Component | string>(
    () => definition?.component || type || 'div'
  )

  const field = {
    properties: {},
    attributes: {},
    component,
    definition,
  }

  const attributeList = [
    ...alwaysAllowedAttributes,
    ...(definition?.allowedAttributes || []),
  ]

  if (isObject(attrs)) {
    Object.assign(
      field.attributes,
      pick(camelizeObjectKeys(attrs), ...attributeList)
    )
  }

  if (!isObject(form)) {
    console.warn('Missing form for', options)
  }

  if (!definition) {
    // html elements (& unknown components) used to structure the form
    return field
  }

  if (definition.isValidated) {
    const validation = reactive({
      ...defaultValidaton,
    })
    Object.assign(field.properties, { validation })
  }

  if (definition.isValued) {
    const modelValue = computed<T>(() => {
      if (!isString(path)) {
        console.warn('Missing path for ', options)
        return
      }
      if (!isObject(form?.data)) {
        console.warn('Missing form data for form', form)
        return
      }

      return get(form?.data || {}, path)
    })

    Object.assign(field.properties, { modelValue })

    if (path) {
      Object.assign(field.properties, {
        'onUpdate:modelValue': (value: any) => {
          return form.tryUpdateFieldValue(path, value)
        },
      })
    }
  }

  if (definition.getListeners) {
    Object.assign(field.properties, definition.getListeners(form))
  }

  return field
}
