<template>
  <div class="space-y-4">
    <h1>Button group</h1>

    <WuiCodeDemo>
      <WuiButtonGroup :vertical="!isHorizontal">
        <WuiButton v-for="(label, idx) in items" :key="`horizontal-${idx}`">
          {{ label }}
        </WuiButton>
      </WuiButtonGroup>

      <template #props>
        <WuiCheckbox v-model="isHorizontal" label="Horizontal" />

        <WuiInput v-model="newItemLabel" placeholder="New item label" />
        <WuiButton @click="addNewItem"> Add new item </WuiButton>
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Radio fields">
      <WuiButtonGroup v-model="radioValue" :options="radioOptions" />
    </WuiCodeExample>

    <WuiCodeExample title="Horizontal">
      <WuiButtonGroup>
        <WuiButton v-for="(label, idx) in items" :key="`horizontal-${idx}`">
          {{ label }}
        </WuiButton>
      </WuiButtonGroup>
    </WuiCodeExample>

    <WuiCodeExample title="Vertical">
      <WuiButtonGroup vertical>
        <WuiButton v-for="(label, idx) in items" :key="`horizontal-${idx}`">
          {{ label }}
        </WuiButton>
      </WuiButtonGroup>
    </WuiCodeExample>

    <WuiPropsTable tag-name="ButtonGroup" :data-sheet="dataSheetGroup" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const items = ['An item', 'Another Item', 'One item longer than others']

const radioOptions = [
  {
    label: 'Item A',
    value: 'a',
  },
  {
    label: 'Item B',
    value: 'b',
  },
  {
    label: 'Item C',
    value: 'c',
  },
]

const isHorizontal = ref(true)
const newItemLabel = ref('')
const radioValue = ref<string>(null as unknown as string)
const addNewItem = () => items.push(newItemLabel.value)

const dataSheetGroup = [
  {
    property: 'vertical',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Make group vertical',
  },
]
</script>
