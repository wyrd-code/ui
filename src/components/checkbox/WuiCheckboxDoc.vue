<template>
  <div class="space-y-4">
    <h1>Checkbox</h1>

    <WuiCodeDemo>
      <WuiCheckbox
        v-model="checkboxValue"
        :line-through="lineCheck"
        :disabled="checkboxDisabled"
        :pulse="checkboxPulse"
        :label="checkboxLabel"
      >
        <template #sublabel>
          {{ checkboxSubLabel }}
        </template>
      </WuiCheckbox>
      <template #props>
        <WuiInput v-model="checkboxLabel" label-top="Checkbox label" />
        <WuiTextarea
          v-model="checkboxSubLabel"
          placeholder="Additional information"
          resize-on-write
          label-top="Checkbox sublabel"
        />
        <WuiCheckbox v-model="lineCheck" label="Line through" />
        <WuiInput v-model="checkboxIcon" label-top="Checkbox icon" />
        <WuiCheckbox v-model="checkboxPulse" label="Pulse" />
        <WuiCheckbox v-model="checkboxDisabled" label="Disabled" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="LineThrough">
      <div class="flex flex-col">
        <WuiCheckbox
          v-model="lineCheck0"
          type="primary"
          label="It's time"
          line-through
        />
        <br />
        <WuiCheckbox
          v-model="lineCheck1"
          type="primary"
          label="For"
          line-through
        />
        <br />
        <WuiCheckbox
          v-model="lineCheck2"
          type="primary"
          label="One more"
          line-through
        />
        <br />
        <WuiCheckbox
          v-model="lineCheck3"
          type="primary"
          label="To Do"
          line-through
        />
        <br />
        <WuiCheckbox
          v-model="lineCheck4"
          type="primary"
          label="App"
          line-through
        />
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Sublabel">
      <div class="w-3/5">
        <WuiCheckbox v-model="lineCheckSub1" type="primary">
          By signing this I agree with Terms and Conditions
        </WuiCheckbox>
        <br />
        <WuiCheckbox v-model="lineCheckSub2" type="primary">
          <template #default> Subscribe for updates </template>
          <template #sublabel> Get notified when you get updates </template>
        </WuiCheckbox>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Pulse">
      <template #description>
        <p class="mx-6">Pulse helps you to catch user's attention</p>
      </template>
      <WuiCheckbox
        v-model="pulseValue"
        type="primary"
        pulse
        label="Look at me"
      />
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="WuiCheckbox"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkboxDisabled = ref(false)
const checkboxValue = ref(false)
const checkboxPulse = ref(false)
const checkboxLabel = ref('Checkbox')
const checkboxSubLabel = ref('')
const checkboxIcon = ref('check')
const lineCheck = ref(false)
const lineCheck0 = ref(false)
const lineCheck1 = ref(false)
const lineCheck2 = ref(true)
const lineCheck3 = ref(false)
const lineCheck4 = ref(false)
const lineCheckSub1 = ref(true)
const lineCheckSub2 = ref(false)
const pulseValue = ref(false)

const dataSheet = [
  {
    property: 'type',
    type: ['String'],
    default: 'primary',
    values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
    description: 'Type of the checkbox',
  },
  {
    property: 'label',
    type: ['String'],
    default: '',
    values: [],
    description: 'Label of the checkbox',
  },
  {
    property: 'sub-label',
    type: ['String'],
    default: '',
    values: [],
    description: 'Sub label of the checkbox',
  },
  {
    property: 'icon',
    type: ['String'],
    default: 'check',
    values: ['Material Icons'],
    description: 'Icon of the checkbox',
  },
  {
    property: 'line-through',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Adds line-through on label when checked',
  },
  {
    property: 'disabled',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Makes checkbox disabled',
  },
  {
    property: 'value (v-model)',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Checkbox value',
  },
  {
    property: 'pulse',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Add pulse to the element',
  },
]

const slotSheet = [
  {
    name: 'default',
    description: 'Label text',
  },
  {
    name: 'sublabel',
    description: 'Sub label text',
  },
]
</script>
