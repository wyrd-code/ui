import type {
  FormDefinitions,
} from '@/components/form/form.types'
import WuiFormCheckbox from '@/components/form/WuiFormCheckbox.vue'
import WuiFormSubmit from '@/components/form/WuiFormSubmit.vue'
import WuiFormReset from '@/components/form/WuiFormReset.vue'
import WuiFormText from '@/components/form/WuiFormText.vue'
import WuiFormTextarea from '@/components/form/WuiFormTextarea.vue'
import WuiFormNumber from '@/components/form/WuiFormNumber.vue'
import WuiFormPassword from '@/components/form/WuiFormPassword.vue'
import WuiFormSchema from '@/components/form/WuiFormSchema'
import WuiFormRadio from '@/components/form/WuiFormRadio.vue'
import WuiButton from '@/components/button/WuiButton.vue'
import WuiButtonGroup from '@/components/button-group/WuiButtonGroup.vue'

export const defaultFormFieldDefinitions: FormDefinitions = [
  {
    name: 'WuiButton',
    component: WuiButton,
  },
  {
    name: 'WuiButtonGroup',
    component: WuiButtonGroup,
  },
  {
    name: 'WuiFormCheckbox',
    component: WuiFormCheckbox,
  },
  {
    name: 'WuiFormText',
    component: WuiFormText,
  },
  {
    name: 'WuiFormTextarea',
    component: WuiFormTextarea,
  },
  {
    name: 'WuiFormNumber',
    component: WuiFormNumber,
  },
  {
    name: 'WuiFormPassword',
    component: WuiFormPassword,
  },
  {
    name: 'WuiFormRadio',
    component: WuiFormRadio,
  },
  {
    name: 'WuiFormSchema',
    component: WuiFormSchema,
  },
  {
    name: 'WuiFormSubmit',
    component: WuiFormSubmit,
  },
  {
    name: 'WuiFormReset',
    component: WuiFormReset,
  },
]
