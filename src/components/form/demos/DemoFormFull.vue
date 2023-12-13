<template>
  <WuiForm
    v-model="data"
    :on-submit="onSubmit"
  >
    <WuiFormText
      name="text"
      label="Text"
      prefix="prefix"
      autocomplete="text"
    />
    <WuiFormPassword
      name="password"
      label="Password"
      autocomplete="password"
    />
    <WuiFormNumber
      name="number"
      label="Number"
      autocomplete="number"
    />
    <WuiFormCheckbox
      name="checkbox"
      label="Checkbox"
    />
    <WuiFormRadio
      name="radio"
      label="Radio"
      :items="radioItems"
    />
    <WuiFormTextarea
      name="textarea"
      label="Textarea"
    />

    <template #actions>
      <WuiButtonGroup>
        <WuiFormSubmit variant="primary" label="Send" />
        <WuiFormReset variant="danger" label="Reset" />
      </WuiButtonGroup>
    </template>
  </WuiForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref({
  text: null,
  password: null,
  checkbox: false,
  radio: false,
  textarea: '',
})

const radioItems = [
  {
    label: 'Apples',
    value: 'apples',
  },
  {
    label: 'Bananas',
    value: 'bananas',
  },
]

const onSubmit = (formData: any) => {
  alert(JSON.stringify(formData))
}
</script>
