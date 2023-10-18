import type {
  Component,
  ComputedRef,
  WritableComputedRef,
} from 'vue'

// Definitions

export interface FormFieldDefinition {
  name: string
  component: Component
  isValued?: boolean
  isValidated?: boolean
  allowedProps?: string[]
  allowedAttributes?: string[]
}

export type FormDefinitions = FormFieldDefinition[]

// Configuration

export interface FormConfiguration {
  definitions?: FormDefinitions
}

// Form Instance

export type FormData<T = Record<string, any>> = T

export type FormSubmitHandler<T = any, R = any> = (
  data: FormData<T>,
  form: FormInstance<T>
) => R

export interface FormOptions extends FormConfiguration {
  modelValue: unknown
  onSubmit?: FormSubmitHandler
  onReset?: FormSubmitHandler
  onSuccess?: FormSubmitHandler
}

export interface FormInstance<T = FormData | ComputedRef<FormData>> {
  data: T
  getFieldValue: <T>(name: string) => WritableComputedRef<T>
  getFieldDefinition: (type: string) => FormFieldDefinition | undefined
  setFieldValue: (name: string, value: unknown) => void
  submit: () => void
  reset: () => void
  isLoading: ComputedRef<boolean>
  isDirty: ComputedRef<boolean>
  definitions: FormDefinitions
}

// Schema

interface FormFieldSchemaBase {
  type?: string
  validates?: string
  attributes?: Record<string, unknown>
  children?: FormFieldSchema[]
}

export interface FormFieldSchemaVueComponent extends FormFieldSchemaBase {
  component: string
  props?: Record<string, unknown>
}

export interface FormFieldSchemaHtmlElement extends FormFieldSchemaBase {
  element: string
}

export type FormFieldSchema = FormFieldSchemaVueComponent | FormFieldSchemaHtmlElement

export type FormSchema = FormFieldSchema[]

// Validation

export interface FormMessage<
  T = 'warning' | 'error' | 'info' | 'success' | undefined
> {
  type: T
  message: string
  [x: string]: unknown
}

export interface FormFieldValidation {
  messages: FormMessage[]
  isRequired: boolean
  isValid: boolean
}

export interface FormFieldError {
  path: string
  message: string
}

export type FormFieldValidator = () => FormFieldError[]

export type FormFieldValidators = Record<string, FormFieldValidator>

// Form Field

export interface FormFieldOptions extends FormFieldSchemaBase {}

export interface FormFieldInstance<T> {
  component: ComputedRef<Component | string>
  attributes: Record<string, unknown>
  properties: {
    modelValue?: ComputedRef<T>
    validation?: FormFieldValidation
    [x: string]: any
  }
  definition?: FormFieldDefinition
}

export interface FormFieldSchemaInstance<T> extends FormFieldInstance<T> {
  type: string
  children?: FormFieldSchema[]
}

// Component Wrapper

export interface FormComponentWrapperProps {
  wrapper: {
    validation?: any
    label?: string
    help?: string
    [x: string]: unknown
  }
  inner: {
    name: string
    modelValue: string
    [x: string]: unknown
  }
}
