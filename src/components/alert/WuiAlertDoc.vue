<template>
  <div class="space-y-4">
    <h1>Alert</h1>

    <WuiCodeDemo>
      <WuiAlert
        v-show="alertVisible"
        :type="alertType"
        :show-icon="alertShowIcon"
        :closable="alertClosable"
        :title="alertTitle"
        :body="alertBody"
        @on-close="alertVisible = false"
      />
      <template #props>
        <WuiSelect
          v-model="alertType"
          placeholder="Select type"
          label-top="Alert type"
          :options="alertTypes"
        />
        <WuiInput v-model="alertTitle" label-top="Alert title" />
        <WuiInput v-model="alertBody" label-top="Alert Body" />
        <WuiCheckbox v-model="alertShowIcon" label="Icon" />
        <WuiCheckbox v-model="alertClosable" label="Closable" />
        <WuiCheckbox v-model="alertVisible" label="Visible" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Title only">
      <div class="flex flex-col flex-1">
        <WuiAlert title="Alert with Title only" />
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Type">
      <div class="flex flex-col flex-1 space-y-2">
        <WuiAlert
          v-for="type in alertTypes"
          :key="type"
          :type="type"
          :title="type.toUpperCase()"
          :body="alertBody"
        />
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Content slot">
      <div class="flex flex-col flex-1">
        <WuiAlert title="Alert with content slot" type="info">
          You can put whatever you want here, I'd put a
          <WuiTag type="info"> Tag </WuiTag>
        </WuiAlert>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Icon slot">
      <div class="flex flex-col flex-1">
        <WuiAlert title="Alert with icon slot" type="info">
          You can put whatever icon in here, just use class
          <strong>wui-alert-icon</strong> on it.
          <template #icon>
            <div class="wui-alert-icon icon-ph-heart" />
          </template>
        </WuiAlert>
      </div>
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="WuiAlert"
      :slot-sheet="slotSheet"
      :event-sheet="eventSheet"
      :data-sheet="dataSheet"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import WuiCheckbox from '../checkbox/WuiCheckbox.vue'
import WuiInput from '../input/WuiInput.vue'
import WuiSelect from '../select/WuiSelect.vue'
import { ALLOWED_TYPES } from './constants'

const alertVisible = ref(true)
const alertTitle = ref('Alert title')
const alertBody = ref('We think we know you')
const alertShowIcon = ref(true)
const alertClosable = ref(false)
const alertType = ref('info')
const alertTypes = Object.values(ALLOWED_TYPES)
const dataSheet = [
  {
    property: 'type',
    type: ['String'],
    default: 'primary',
    values: ['primary', 'success', 'danger', 'warning', 'black'],
    description: 'Type of the alert',
  },
  {
    property: 'title',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Title of the alert',
  },
  {
    property: 'body',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Body of the alert',
  },
  {
    property: 'show-icon',
    type: ['Boolean'],
    default: 'true',
    values: [],
    description: 'Show icon',
  },
  {
    property: 'iconbox',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Show icon in the box',
  },
  {
    property: 'closable',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes alert closable',
  },
  {
    property: 'visible',
    type: ['Boolean'],
    default: 'true',
    values: [],
    description: 'Visibility of the alert',
  },
]
const eventSheet = [
  {
    event: '@on-close',
    description: 'The event function triggered when user clicks on close icon',
    arguments: 'function(e: Event)',
  },
]
const slotSheet = [
  {
    name: 'default',
    description: 'Alert body',
  },
]
</script>
