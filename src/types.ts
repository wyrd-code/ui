import type { Component, Ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

/**
 * @internal
 */
export type TEmit = (event: string, ...args: any[]) => void

/**
 * @internal
 */
export type TProps = { [key: string]: any }

/**
 * @internal
 */
export type Timeout = ReturnType<typeof setTimeout>

/**
 * @internal
 */
export interface WyrdNavItemMeta {
  [x: string]: unknown
}

/**
 * @public
 */
export interface WyrdNavItem {
  as?: string
  to?: RouteLocationRaw
  label: string
  sort?: number
  children?: WyrdNavItem[]
  nav?: string
  meta?: WyrdNavItemMeta
  icon?: string
}

/**
 * @public
 */
export interface WyrdNavItemDefinition extends WyrdNavItem {
  nav: string
}

/**
 * @public
 */
export interface WyrdPageDefinition {
  slug: string
  name?: string // when slug is empty, set route name
  title: string
  component: any
  icon?: string
  redirect?: any
  meta?: Record<string, any>
  children?: WyrdPageDefinition[]
}

/**
 * @internal
 */
export type ComponentMap = Record<string, Component>

/**
 * @public
 */
export interface PagingMeta {
  take: number
  totalCount: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: string
  endCursor?: string
}

// Form

export type FormFieldType =
  | 'blank'
  | 'checkbox'
  | 'radio'
  | 'editor'
  | 'file'
  | 'group'
  | 'text'
  | 'password'
  | 'select'
  | 'date-time'
  | 'textarea'
  | 'toggle'
  | 'dateTime'

/**
 * @public
 */
export interface FieldPublicMeta {
  type: FormFieldType
  key: string
  label: string
  path?: string
  linkTo?: (row: any) => RouteLocationRaw
  // TODO: use prisma enums without loading @prisma/client from client code
}

/**
 * @public
 */
export interface FormFieldBase {
  type: string
  name: string
  label?: string
  ariaLabel?: string
  ariaLabelledBy?: string
  customClass?: string
  customStyle?: string
  disabled?: boolean
  help?: string
  placeholder?: string
  style?: string
  validation?: string
  validationName?: string
  autocomplete?: string
  readonly?: boolean
  validationTrigger?: 'blur' | 'change'
}

/**
 * @public
 */
export interface FormFieldCheckbox extends FormFieldBase {
  type: 'checkbox'
}

/**
 * @public
 */
export interface FormFieldEditor extends FormFieldBase {
  type: 'editor'
  placeholder?: string
}

/**
 * @public
 */
export interface FormFieldFile extends FormFieldBase {
  type: 'file'
}

/**
 * @public
 */
export interface FormFieldGroup extends FormFieldBase {
  type: 'group'
  repeatable?: boolean
  addLabel?: string
}

/**
 * @public
 */
export interface FormFieldText extends FormFieldBase {
  type: 'text'
  placeholder?: string
}

/**
 * @public
 */
export interface FormFieldPassword extends FormFieldBase {
  type: 'password'
}

/**
 * @public
 */
export interface FormSelectOption {
  value: string | number | null | boolean
  label: string
}

/**
 * @public
 */
export interface FormFieldSelect extends FormFieldBase {
  type: 'select'
  options: FormSelectOption[]
  disableNoSelection?: boolean
}

/**
 * @public
 */
export interface FormRadioOption extends FormSelectOption {
  type?: string
  subLabel?: string
  pulse?: boolean
  disabled?: boolean
  lineThrough?: boolean
}

/**
 * @public
 */
export interface FormFieldRadio extends FormFieldBase {
  type: 'radio'
  options: FormRadioOption[]
  disableNoSelection?: boolean
}

/**
 * @public
 */
export interface FormFieldTextarea extends FormFieldBase {
  type: 'textarea'
  placeholder?: string
}

/**
 * @public
 */
export interface FormFieldToggle extends FormFieldBase {
  type: 'toggle'
}

/**
 * @public
 */
export interface FormFieldComponent extends FormFieldBase {
  type: string
  src?: string
  component?: string
  [x: string]: any
}

type FormFieldsNoChildren =
  | FormFieldCheckbox
  | FormFieldEditor
  | FormFieldFile
  | FormFieldGroup
  | FormFieldText
  | FormFieldPassword
  | FormFieldSelect
  | FormFieldTextarea
  | FormFieldToggle
  | FormFieldComponent

/**
 * @public
 */
export type FormField = FormFieldsNoChildren & {
  type?: string
  children?: FormSchema
}

/**
 * @public
 */
export type FormSchema = FormField[]

/**
 * @public
 */
export type FormData<T = Record<string, any>> = T

/**
 * @public
 */
export type FormStatus = string | boolean | undefined

/**
 * @public
 */
export interface FormMessage<
  T = 'warning' | 'error' | 'info' | 'success' | undefined
> {
  type: T
  message: string
  status?: string
  // superstruct validation Failure props
  field?: string
  validator?: string
  path?: string
  [x: string]: any
}

/**
 * @public
 */
export interface FormSubmitResponse {
  status: FormStatus
  messages?: FormMessage[]
  message?: string
  error?: any
  [x: string]: any
}

/**
 * @public
 */
export type FormSubmitHandler<T = any, R = any> = (
  formData: FormData<T>,
  context: FormSubmitContext
) => R

/**
 * @public
 */
export interface FormDefinition {
  schema: FormSchema
  defaultData: FormData | Ref<FormData>
  messages?: FormMessage[] | Ref<FormMessage[]>
  onSubmit: FormSubmitHandler
  onSuccess?: FormSubmitHandler
}

/**
 * @public
 */
export interface FormSubmitContext {
  setFormData: (data: Record<string, any>) => void
  setMessages: (messages: FormMessage[]) => Promise<any> | any
  resetForm: () => Promise<any> | any
  setStatus: (val: FormStatus) => void
}

/**
 * @public
 */
export interface FormController extends FormSubmitContext {
  schema: FormSchema
  formData: Ref<Record<string, any>>
  messages: Ref<FormMessage[]>
  isLoading: Ref<boolean>
  status: Ref<FormStatus>
  onSubmit: () => Promise<any> | any
  onFieldValueChange: (
    e: Event | any,
    fieldSchema: FormFieldBase
  ) => Promise<any> | any
  errors: Ref<FormMessage<'error'>[]>
  warnings: Ref<FormMessage<'warn'>[]>
  infos: Ref<FormMessage<'info'>[]>
  isValid: Ref<boolean>
}

// End Form

/**
 * @public
 */
export type AlertType = 'info' | 'warn' | 'error' | 'success'
