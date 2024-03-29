import { pick, isObject } from '@s-libs/micro-dash'
import { Component, computed, inject, reactive } from 'vue'

import { get, camelizeObjectKeys, isString } from '@/utilities'

import type {
  FormFieldDefinition,
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
  const definition = form?.definitions[type]
  const component = computed<Component | string>(
    () => definition?.component || type || 'div'
  )

  const attributes = filterAttributes(attrs, [
    ...alwaysAllowedAttributes,
    ...(definition?.allowedAttributes || []),
  ])

  const field = {
    properties: {},
    attributes,
    component,
    definition,
  }

  if (!isObject(form)) {
    console.warn('Missing form for', options)
  }

  if (definition) {
    Object.assign(
      field,
      getValidationPropsFromDefinition<T>(form, definition, name)
    )
    Object.assign(field, getValuePropsFromDefinition(form, definition, name))
  }

  return field
}

const filterAttributes = (
  attrs: Record<string, unknown> = {},
  attributeList: string[] = []
) => (isObject(attrs) ? pick(camelizeObjectKeys(attrs), ...attributeList) : {})

const getValuePropsFromDefinition = (
  form: FormInstance,
  definition: FormFieldDefinition = {},
  fieldPath?: string
) => {
  const properties = {}
  const { getListeners, isValued } = definition

  if (isValued && fieldPath) {
    Object.assign(properties, {
      'onUpdate:modelValue': (value: any) => {
        return form.tryUpdateFieldValue(fieldPath, value)
      },
    })
  }

  if (getListeners) {
    Object.assign(properties, getListeners(form))
  }
}

const getValidationPropsFromDefinition = <T>(
  form: FormInstance,
  definition: FormFieldDefinition = {},
  fieldPath?: string
) => {
  const properties = {}
  const { isValidated, isValued } = definition

  if (isValidated) {
    const validation = reactive({
      ...defaultValidaton,
    })
    Object.assign(properties, { validation })
  }

  if (isValued) {
    const modelValue = computed<T>(() => {
      if (!isString(fieldPath)) {
        // console.warn('Missing fieldPath for ', options)
        return
      }
      if (!isObject(form?.data)) {
        console.warn('Missing form data for form', form)
        return
      }
      return get(form?.data || {}, fieldPath)
    })
    Object.assign(properties, { modelValue })
  }

  return properties
}
