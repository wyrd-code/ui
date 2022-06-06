import { ref, unref, computed, Ref } from 'vue'

import { compileInputValidatorsFromString } from '../../composables/input-validators'
import {
  FormController,
  FormMessage,
  WuiFormFactoryOptions,
  FormField,
  FormFieldSchema,
  FormStatus,
} from '../../ui.types'
import { initDefaultDataForSchema } from '../../utilities'

const validateField = async (
  field: FormField,
  data: Ref<Record<string, any>>
): Promise<FormMessage[]> => {
  const { children, validation } = field
  const fieldMessages: FormMessage[] = []
  if (validation) {
    const validators = compileInputValidatorsFromString(validation)

    const newMessages = await Object.keys(validators).reduce(
      async (prev, key: string) => {
        const validator = validators[key]
        const acc = await prev
        const validatorMessages: any[] = []
        const value = getCurrentFieldValue(field, data)
        const result = await validator(value, field)

        if (!result) {
          return acc
        }

        fieldMessages.push({
          ...result,
          validator: key,
        })

        return [...acc, ...validatorMessages]
      },
      Promise.resolve([] as any[])
    )
    fieldMessages.push(...newMessages)
  }

  if (!Array.isArray(children) || !children.length) {
    return fieldMessages
  }

  const childMessages = await validateFields(children, data)

  return [...fieldMessages, ...childMessages]
}

const getCurrentFieldValue = (
  field: FormField,
  data: Ref<Record<string, any>>
): any => {
  return data.value[field.name as string]
}

const validateFields = async (
  fields: FormFieldSchema,
  data: Ref<Record<string, any>>
): Promise<FormMessage[]> => {
  const result = await fields.reduce(async (prev, field) => {
    const acc = await prev
    const fieldMessages = await validateField(field, data)

    return [...acc, ...fieldMessages]
  }, Promise.resolve([] as FormMessage[]))

  return result
}

export const formFactory = (opts: WuiFormFactoryOptions): FormController => {
  const { schema } = opts
  const isLoading = ref(false)

  const getDefaultData = () =>
    typeof opts.defaultData === 'function'
      ? opts.defaultData()
      : unref(opts.defaultData) || {}

  const getCleanDefaultData = () =>
    initDefaultDataForSchema(schema, getDefaultData())

  const formData = ref<Record<string, any>>(getCleanDefaultData())
  const resetFormData = () => (formData.value = getCleanDefaultData())

  const getDefaultMessages = () => unref(opts.messages) || []
  const messages = ref<FormMessage[]>(getDefaultMessages())
  const resetMessages = () => (messages.value = [])
  const setMessages = (msgs: FormMessage[]) => (messages.value = msgs)

  const filterMessagesByType = <T>(type: string) =>
    messages.value.filter((m) => m.type === type) as unknown as FormMessage<T>[]
  const warnings = computed(() => filterMessagesByType<'warn'>('warn'))
  const infos = computed(() => filterMessagesByType<'info'>('info'))
  const errors = computed(() => filterMessagesByType<'error'>('error'))
  const isValid = computed(() => errors.value.length === 0)

  const status = ref<string | boolean | undefined>()
  const setStatus = (value?: FormStatus) => (status.value = value)

  const resetForm = () => {
    resetFormData()
    resetMessages()
  }

  const setCurrentFieldValue = (field: FormField, value: unknown): any => {
    return (formData.value[field.name as string] = value)
  }

  const setFormData = (value: Record<string, any>): any => {
    return (formData.value = value)
  }

  const onFieldValueChange = async (e: Event | any, field: FormField) => {
    // Be flexible about kinds of inputs allowed
    const isEventAnObject = typeof e === 'object'
    const value = isEventAnObject ? (e.target || ({} as any)).value : e

    setCurrentFieldValue(field, value)
  }

  const validateForm = async (): Promise<void> => {
    messages.value = []
    messages.value = await validateFields(schema, formData)
  }

  const onSubmit = async () => {
    isLoading.value = true
    resetMessages()

    await validateForm()
    if (!isValid.value) {
      isLoading.value = false
      return
    }

    if (opts.onSubmitForm) {
      const response = await opts.onSubmitForm(
        { ...formData.value }, // unwrap from vue proxy
        // Context helpers
        {
          setMessages,
          setStatus,
          setFormData,
          resetForm,
        }
      )
      const { error } = response || {}
      if (error) {
        let messages = [
          {
            type: 'error',
            status: error.status,
            message: error.message,
          },
        ] as FormMessage[]

        if (Array.isArray(error.data)) {
          messages = messages.concat(error.data)
        }

        setMessages(messages)
      }
    }

    isLoading.value = false
  }

  return {
    schema,
    formData,
    messages,
    setMessages,
    setStatus,
    resetForm,
    isLoading: computed(() => isLoading.value),
    status: computed(() => status.value),
    onSubmit,
    onFieldValueChange,
    setFormData,
    errors,
    warnings,
    infos,
    isValid,
  }
}
