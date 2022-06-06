import { Component } from 'vue'

import {
  FormField,
  FormFieldType,
  FormController,
  FormFieldBase,
} from '../../ui.types'
import WuiCheckbox from '../checkbox/WuiCheckbox.vue'
import WuiFormEditorField from '../editor/WuiFormEditorField.vue'
import WuiFormBlank from '../input/WuiFormBlank.vue'
import WuiFormText from '../input/WuiFormText.vue'
import WuiFormRadio from '../radio/WuiFormRadio.vue'
import WuiFormSelect from '../select/WuiFormSelect.vue'
import WuiFormTextarea from '../textarea/WuiFormTextarea.vue'
import WuiFormToggle from '../toggle/WuiFormToggle.vue'
import WuiFormPassword from './WuiFormPassword.vue'

declare type EmitFn = (payload: Event, args: any) => void

declare type EmitFnAlt = (
  event: 'focus' | 'blur' | 'change' | 'validate',
  ...args: any[]
) => void

const getListeners = (
  fieldSchema: FormField,
  emit: EmitFn | EmitFnAlt,
  form: FormController
) => {
  return {
    onBlur: (e: InputEvent) => {},
    onChange: (e: InputEvent) => {
      form.onFieldValueChange(e, fieldSchema)
    },
    onFocus: (e: InputEvent) => {},
  }
}

export const getFieldProps = (
  schema: FormFieldBase,
  emit: EmitFn | EmitFnAlt,
  form: FormController
) => {
  const messages = form.messages.value.filter((m) => m.field === schema.name)
  const value =
    form.formData.value && schema.name
      ? form.formData.value[schema.name]
      : undefined

  return {
    schema,
    value,
    messages,
    isDisabled: form.isLoading.value,
    isRequired: schema.validation?.includes('required'),
    isValid: !messages.some((m) => m.type === 'error'),
    ...getListeners(schema, emit, form),
  }
}

export const formFieldMapper: Record<string, Component> = {
  [FormFieldType.Blank]: WuiFormBlank,
  [FormFieldType.Text]: WuiFormText,
  [FormFieldType.Textarea]: WuiFormTextarea,
  [FormFieldType.Editor]: WuiFormEditorField,
  [FormFieldType.Checkbox]: WuiCheckbox,
  [FormFieldType.Select]: WuiFormSelect,
  [FormFieldType.Radio]: WuiFormRadio,
  [FormFieldType.Toggle]: WuiFormToggle,
  [FormFieldType.Password]: WuiFormPassword,
}
