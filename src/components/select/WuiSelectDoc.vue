<template>
  <div>
    <h1>Select</h1>

    <WuiDemo>
      <WuiSelect
        v-model="selectValue"
        :placeholder="selectPlaceholder"
        :disabled="selectDisabled"
        :placement="selectPlacement"
        :label="selectLabel"
        :divided="selectDivided"
        :options="firstSelectOptions"
      />

      <template #props>
        <WuiInput v-model="selectLabel" label="Select label" />
        <WuiInput v-model="selectPlaceholder" label="Select placeholder" />
        <WuiSelect
          v-model="selectPlacement"
          placeholder="Placement"
          label="Placement"
          :options="placementOptions"
        />
        <WuiCheckbox v-model="selectDivided" label="Divided" />
        <WuiCheckbox v-model="selectDisabled" label="Disabled" />
      </template>
    </WuiDemo>

    <WuiCodeExample title="Slots">
      <div class="flex items-center justify-center">
        <div class="flex flex-col my-4 px-4 span-12 lg:span-3"></div>
      </div>
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="WuiSelect"
      :data-sheet="DATA_SHEET"
      :slot-sheet="SLOT_SHEET"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { ALLOWED_POSITION } from './select'

const selectValue = ref('')
const selectLabel = ref('Select me')
const selectPlaceholder = ref('Select me')
const selectDisabled = ref(false)
const selectDivided = ref(false)
const selectPlacement = ref(undefined)
const placementOptions = ALLOWED_POSITION
const firstSelectOptions = [
  { label: 'New York', value: 'newyork' },
  { label: 'Paris', value: 'paris' },
]

const DATA_SHEET = [
  {
    property: 'label',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Top label',
  },
  {
    property: 'options',
    type: ['Array', 'Object[]'],
    default: '-',
    values: [],
    description:
      'Array of options, or array of option object used with index prop',
  },
  {
    property: 'track-by',
    type: ['String'],
    default: 'value',
    values: [],
    description: 'Field for track',
  },
  {
    property: 'index',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Index of the object key',
  },
  {
    property: 'placeholder',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Select area placeholder',
  },
  {
    property: 'placement',
    type: ['String'],
    default: 'bottom',
    values: ALLOWED_POSITION,
    description: 'Select list position',
  },
  {
    property: 'divided',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes select options divided by line',
  },
  {
    property: 'disabled',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes select disabled',
  },
]

const SLOT_SHEET = [
  {
    property: 'label',
    description: 'Label top text',
  },
  {
    property: 'selected-option',
    description: 'Selected option',
  },
  {
    property: 'placeholder',
    description: 'Placeholder text',
  },
  {
    property: 'option',
    description: 'Option',
  },
  {
    property: 'icon',
    description: 'Icon',
  },
]
</script>
