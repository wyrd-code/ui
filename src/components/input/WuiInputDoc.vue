<template>
  <div>
    <h1>Input</h1>

    <WuiCodeDemo>
      <WuiInput
        v-model="inputValue"
        :placeholder="inputPlaceholder"
        :label-top="inputTopLabel"
        :disabled="inputDisabled"
        :message="inputMessageText"
        :status="inputStatus"
        :mask="inputMask"
      />

      <template #props>
        <WuiInput v-model="inputPlaceholder" label-top="Input placeholder" />
        <WuiInput v-model="inputTopLabel" label-top="Top label" />
        <WuiInput
          v-model="inputMessageText"
          placeholder="Write something"
          label-top="Message text"
        />
        <WuiSelect
          v-model="inputStatus"
          placeholder="Select status"
          label-top="Status"
          :options="statuses"
        />
        <WuiCheckbox v-model="inputMask" label="Mask" />
        <WuiCheckbox v-model="inputDisabled" label="Disabled" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Status">
      <WuiInput v-model="statusValue" status="success" message="Success" />
      <WuiInput v-model="statusValue" status="danger" message="Danger" />
      <WuiInput v-model="statusValue" status="warning" message="Warning" />
    </WuiCodeExample>

    <WuiCodeExample title="With icons">
      <WuiInput v-model="inputValue">
        <template #prefixIcon>
          <div class="icon-ph-heart" />
        </template>
      </WuiInput>
      <WuiInput v-model="inputValue">
        <template #suffixIcon>
          <div class="icon-ph-heart" />
        </template>
      </WuiInput>
      <WuiInput v-model="inputValue">
        <template #prefixIcon>
          <div class="icon-ph-heart" />
        </template>
        <template #suffixIcon>
          <div class="icon-ph-heart" />
        </template>
      </WuiInput>
    </WuiCodeExample>

    <WuiCodeExample title="Prefix / suffix">
      <WuiInput v-model="inputValue" prefix="https://" />
      <WuiInput v-model="inputValue" suffix=".com" />
      <WuiInput v-model="inputValue" prefix="https://" suffix=".com" />
    </WuiCodeExample>

    <WuiCodeExample title="Masked">
      <WuiInput
        v-model="inputValue"
        label-top="Click me"
        placeholder="I feel darkness"
        mask
      />
    </WuiCodeExample>

    <WuiCodeExample title="Disabled">
      <WuiInput
        v-model="inputDisabledValue"
        message="I'm disabled"
        label-top="Disabled"
        disabled
      />
    </WuiCodeExample>

    <WuiPropsTable tag-name="WuiInput" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputPlaceholder = ref('Your placeholder')
const inputValue = ref('')
const inputTopLabel = ref('Your input')
const statusValue = ref('Hello there')
const inputDisabledValue = ref('Disabled input')
const inputMessageText = ref('')
const inputDisabled = ref(false)
const inputStatus = ref('default')
const inputMask = ref(false)
const statuses = ['default', 'success', 'danger', 'warning']

const dataSheet = [
  {
    property: 'type',
    type: ['String'],
    default: 'text',
    values: ['text', 'password'],
    description: 'Type of the input',
  },
  {
    property: 'placeholder',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Placeholder of the input',
  },
  {
    property: 'label-top',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Label of the input',
  },
  {
    property: 'message',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Message under input',
  },
  {
    property: 'prefix-icon',
    type: ['String'],
    default: '-',
    values: ['Material Icon'],
    description: 'Icon on the left side',
  },
  {
    property: 'suffix-icon',
    type: ['String'],
    default: '-',
    values: ['Material Icon'],
    description: 'Icon on the right side',
  },
  {
    property: 'prefix',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Left side prefix',
  },
  {
    property: 'suffix',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Right side suffix',
  },
  {
    property: 'mask',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Shows background mask when component is focused',
  },
  {
    property: 'value (v-model)',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Value',
  },
  {
    property: 'disabled',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Makes input disabled',
  },
]
</script>
