import {
  FormField,
  FormFieldType,
  FormFieldText,
  WuiForm,
} from "~/ui.types"

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

const getListeners = (fieldSchema: FormField, emit: EmitFn, form: WuiForm) => {
  return {
    onBlur: (e: InputEvent) => {
    },
    onChange: (e: InputEvent) => {
      form.onFieldValueChange(e, fieldSchema)
    },
    onFocus: (e: InputEvent) => {
    },
  }
}

const getFieldProps = (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
  const messages = form.messages.value.filter(m => m.field === schema.name)
  const value = form.formData.value && schema.name ? form.formData.value[schema.name] : undefined

  return {
    schema,
    value,
    messages,
    isDisabled: form.isLoading.value,
    isRequired: schema.validation?.includes('required'),
    isValid: !messages.some(m => m.type === 'error'),
    ...getListeners(schema, emit, form),
  }
}

export const formFieldMapper: Record<string, any> = {
  [FormFieldType.Blank]: {
    component: WuiFormBlank,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
  [FormFieldType.Text]: {
    component: WuiFormText,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
  [FormFieldType.Textarea]: {
    component: WuiFormTextarea,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
  [FormFieldType.Editor]: {
    component: WuiFormEditorField,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
  [FormFieldType.Checkbox]: {
    component: WuiCheckbox,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
  [FormFieldType.Select]: {
    component: WuiFormSelect,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
  [FormFieldType.Radio]: {
    component: WuiFormRadio,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
  [FormFieldType.Toggle]: {
    component: WuiFormToggle,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
  [FormFieldType.Password]: {
    component: WuiFormPassword,
    getProps: (schema: FormFieldText, emit: EmitFn, form: WuiForm) => {
      return getFieldProps(schema, emit, form)
    },
  },
}
