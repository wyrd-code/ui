<template>
  <div>
    <h1>Tag</h1>

    <WuiCodeDemo>
      <WuiTag
        v-show="show"
        :filled="tagFilled"
        :closable="tagClosable"
        :type="tagType"
        @close="onClose"
      >
        <span>{{ tagText }}</span>
      </WuiTag>

      <template #props>
        <WuiSelect v-model="tagType" label-top="Type" :options="tagTypes" />
        <WuiInput v-model="tagText" label-top="Text" />
        <WuiCheckbox v-model="tagFilled" label="Filled" />
        <WuiCheckbox v-model="tagClosable" label="Closable" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Regular">
      <WuiTag v-for="type in ALLOWED_TYPES" :key="type" :type="type">
        {{ type }}
      </WuiTag>
    </WuiCodeExample>

    <WuiCodeExample title="Filled">
      <WuiTag v-for="type in ALLOWED_TYPES" :key="type" :type="type" filled>
        {{ type }}
      </WuiTag>
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="WuiTag"
      :data-sheet="dataSheet"
      :event-sheet="eventSheet"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import { Colors } from '../../models/enums'
import { ALLOWED_TYPES } from './constants'

const show = ref(true)
const tagText = ref('Tag')
const tagClosable = ref(false)
const tagFilled = ref(false)
const tagType = ref(Colors.NEUTRAL)
const tagTypes = ALLOWED_TYPES.map((value) => ({ value, label: value }))

const onClose = () => {
  show.value = false
}

// Reset visibility on form change
watch([tagType, tagText, tagClosable, tagFilled], () => {
  show.value = true
})

const eventSheet = [
  {
    event: '@close',
    description: 'The event function triggered when user clicks on close icon',
    arguments: 'function(e: Event)',
  },
]

const dataSheet = [
  {
    property: 'type',
    type: ['String'],
    default: 'neutral',
    values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
    description: 'Type of the tag',
  },
  {
    property: 'filled',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes tag filled',
  },
  {
    property: 'closable',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes tag closable',
  },
]
</script>
