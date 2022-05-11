import type { Component, Ref } from 'vue'
import type {
  RouteRecordRaw,
  RouteComponent,
  RouteLocationRaw,
  RouteLocationNormalized,
  RouteMeta,
  _RouteRecordBase,
} from 'vue-router'

export type { RouteLocationRaw } from 'vue-router';

export type TEmit = (event: string, ...args: unknown[]) => void
export type TProps = { [key: string]: any }

export interface IWui {
  drawers: Ref[]
  modals: Ref[]
}

export type Timeout = ReturnType<typeof setTimeout>


export interface WyrdNavItemMeta {
  auth?: any
}

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

export interface WyrdNavItemDefinition extends WyrdNavItem {
  nav: string
}

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

export type ComponentMap = Record<string, Component>

export interface RoutesConfig {
  routes?: AppRoute[]
}

export interface NavigationsConfig {
  navs?: WyrdNavItemDefinition[]
}

export interface AppNavigationConfig extends NavigationsConfig {
  defaultRoute?: RouteRecordRaw
}

export interface AppRouteMeta extends RouteMeta {
  layout?: {
    name: string
    component: Component
  },
}

declare type _RouteRecordProps = boolean | Record<string, any> | ((to: RouteLocationNormalized) => Record<string, any>);

export interface AppRoute extends Omit<Partial<_RouteRecordBase>, 'children'> {
  component?: RouteComponent // AsyncComponentLoader
  icon?: string
  meta?: AppRouteMeta
  children?: AppRoute[]
  props?: _RouteRecordProps
  parentRouteName?: string
}

// API READ MANY

export interface ReadManyResult<T> {
  data: T[]
  meta: ReadManyResultMeta
}

export interface PagingMeta {
  take: number
  totalCount: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: string
  endCursor?: string
}

export interface ReadManyResultMeta {
  paging: PagingMeta
  [key: string]: any
}

// Fields

export enum FormFieldType {
  Blank = 'blank',
  Checkbox = 'checkbox',
  Radio = 'radio',
  Editor = 'editor',
  File = 'file',
  Group = 'group',
  Text = 'text',
  Password = 'password',
  Select = 'select',
  Textarea = 'textarea',
  Toggle = 'toggle',
  DateTime = 'datetime',
}

export interface FieldPublicMeta {
  type: FormFieldType
  key: string
  label: string
  path?: string
  linkTo?: (row: any) => RouteLocationRaw
  // TODO: use prisma enums without loading @prisma/client from client code
}

// Wui Form

export enum FormInputValidationTriggerTypes {
  BLUR = 'blur',
  CHANGE = 'change',
}
export interface FormInputValidationTrigger {
  type: FormInputValidationTriggerTypes;
  threshold: number;
}

interface FormFieldBase {
  type: string
  name?: string
  label?: string
  ariaLabel?: string;
  ariaLabelledBy?: string;
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
  validationTrigger?: FormInputValidationTrigger;
}

export interface FormFieldCheckbox extends FormFieldBase {
  type: FormFieldType.Editor
}

export interface FormFieldEditor extends FormFieldBase {
  type: FormFieldType.Editor
  placeholder?: string
}

export interface FormFieldFile extends FormFieldBase {
  type: FormFieldType.File
}

export interface FormFieldGroup extends FormFieldBase {
  type: FormFieldType.Group
  repeatable?: boolean
  addLabel?: string
}

export interface FormFieldText extends FormFieldBase {
  type: FormFieldType.Text
  placeholder?: string
}

export interface FormFieldPassword extends FormFieldBase {
  type: FormFieldType.Password
}

export interface FormSelectOption {
  value: string
  label: string
}

export interface FormFieldSelect extends FormFieldBase {
  type: FormFieldType.Select
  options: FormSelectOption[]
  disableNoSelection?: boolean
}

export interface FormRadioOption extends FormSelectOption {
  type?: string
  subLabel?: string
  pulse?: boolean
  disabled?: boolean
  lineThrough?: boolean
}

export interface FormFieldRadio extends FormFieldBase {
  type: FormFieldType.Radio
  options: FormRadioOption[]
  disableNoSelection?: boolean
}

export interface FormFieldTextarea extends FormFieldBase {
  type: FormFieldType.Textarea
  placeholder?: string
}

export interface FormFieldToggle extends FormFieldBase {
  type: FormFieldType.Toggle
}

export interface FormFieldComponent extends FormFieldBase {
  type: string
  src?: string
  component?: string
  [x: string]: any
}

type FormFieldsNoChildren =
  FormFieldCheckbox
  | FormFieldEditor
  | FormFieldFile
  | FormFieldGroup
  | FormFieldText
  | FormFieldPassword
  | FormFieldSelect
  | FormFieldTextarea
  | FormFieldToggle
  | FormFieldComponent

export type FormField = FormFieldsNoChildren & {
  type?: string
  children?: WuiFormFieldSchema
}

export type WuiFormFieldSchema = FormField[]

export type FormData<T = Record<string, any>> = T

export type FormStatus = string | boolean | undefined

export interface FormSubmitContext {
  setFormData: (data: Record<string, any>) => void
  setMessages: (messages: FormMessage[]) => Promise<any> | any
  resetForm: () => Promise<any> | any,
  setStatus: (val: FormStatus) => void
}

export interface FormSubmitResponse {
  status: FormStatus
  messages?: FormMessage[]
  message?: string
  error?: any
  [x: string]: any
}

export type FormSubmitHandler<T = any, R = any> =
  (formData: FormData<T>, context: FormSubmitContext) => R

export interface WuiFormFactory {
  schema: WuiFormFieldSchema,
  defaultData: FormData | Ref<FormData>,
  messages?: FormMessage[] | Ref<FormMessage[]>,
  onSubmitForm: FormSubmitHandler,
}

export interface FormMessage<T = 'warning' | 'error' | 'info' | 'success' | undefined> {
  type: T,
  message: string,
  status?: string,
  // superstruct validation Failure props
  field?: string,
  validator?: string,
  path?: string,
  [x: string]: any
}

export interface WuiForm extends FormSubmitContext {
  schema: WuiFormFieldSchema,
  formData: Ref<Record<string, any>>,
  messages: Ref<FormMessage[]>,
  isLoading: Ref<boolean>,
  status: Ref<FormStatus>,
  onSubmit: () => Promise<any> | any,
  onFieldValueChange: (e: Event | any, fieldSchema: FormFieldBase) => Promise<any> | any,
  errors: Ref<FormMessage<'error'>[]>,
  warnings: Ref<FormMessage<'warn'>[]>,
  infos: Ref<FormMessage<'info'>[]>,
  isValid: Ref<boolean>,
}

export type FormInputValidator = (value: any, opts?: any) => Promise<FormMessage | undefined> | FormMessage | undefined

// End WuiForm

export type AlertType =
  | 'info'
  | 'warn'
  | 'error'
  | 'success'
