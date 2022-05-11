<template>
  <div>
    <h1>Select</h1>

    <WuiCodeDemo>
      <WuiSelect
        v-model="selectValue"
        :placeholder="selectPlaceholder"
        :disabled="selectDisabled"
        :placement="selectPlacement"
        :label-top="selectLabel"
        :divided="selectDivided"
        :options="firstSelectOptions"
      />

      <template #props>
        <WuiInput v-model="selectLabel" label-top="Select label" />
        <WuiInput v-model="selectPlaceholder" label-top="Select placeholder" />
        <WuiSelect
          v-model="selectPlacement"
          placeholder="Placement"
          label-top="Placement"
          :options="placementOptions"
        />
        <WuiCheckbox v-model="selectDivided" label="Divided" />
        <WuiCheckbox v-model="selectDisabled" label="Disabled" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Slots">
      <div class="flex items-center justify-center">
        <div class="flex flex-col my-4 px-4 span-12 lg:span-3">
          <WuiSelect
            v-model="exampleValue"
            :options="exampleOptions"
            placeholder="Please select"
          >
            <template #label-top="{ props }">
              Label top slot, placement {{ props.placement }}
            </template>
            <template #placeholder="{ props }">
              <div class="items-center" :style="{ display: 'flex' }">
                <span>(custom) {{ props.placeholder }}</span>
              </div>
            </template>
            <template #selected-option="{ props }">
              You selected: {{ props.modelValue.value }}
            </template>
            <template #option="{ option }">
              <div class="items-center" :style="{ display: 'flex' }">
                <span class="h-4 mr-2 icon-ph-github-logo-fill" />
                {{ option.name }}
              </div>
            </template>
            <template #icon>
              <span class="h-4 ml-2 text-info-500 icon-ph-twitter-logo-fill" />
            </template>
          </WuiSelect>
        </div>
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

import { ALLOWED_POSITION } from './constants'
import type { TOption } from './types'

const selectValue = ref('')
const selectLabel = ref('Select me')
const selectPlaceholder = ref('Select me')
const selectDisabled = ref(false)
const selectDivided = ref(false)
const selectPlacement = ref(undefined)
const placementOptions = ALLOWED_POSITION
const firstSelectOptions = [
  'Lorem ipsum dolor sit amet consectetur',
  'Dolor',
  'Lorem ipsum',
  'Lorem ipsum dolor',
  'Lorem ipsum dolor iste nam quidem',
]

const exampleValue = ref(undefined)

const exampleOptions: TOption[] = [
  { label: 'New York', value: 'nwrk' },
  { label: 'Paris', value: 'prs' },
  { label: 'Moscow', value: 'mscw' },
]

const DATA_SHEET = [
  {
    property: 'label-top',
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
    property: 'label-top',
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
