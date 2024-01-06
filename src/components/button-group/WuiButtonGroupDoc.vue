<template>
  <div class="space-y-4">
    <h1>Button group</h1>

    <WuiDemo>
      <WuiButtonGroup :vertical="!isHorizontal">
        <WuiButton
          v-for="(label, idx) in items"
          :key="`horizontal-${idx}`"
        >
          {{ label }}
        </WuiButton>
      </WuiButtonGroup>

      <template #props>
        <WuiCheckbox
          v-model="isHorizontal"
          label="Horizontal"
        />

        <WuiInput
          v-model="newItemLabel"
          placeholder="New item label"
        />
        <WuiButton @click="addNewItem"> Add new item </WuiButton>
      </template>
    </WuiDemo>

    <WuiCodeExample title="Radio fields">
      <div class="flex justify-center">
        <WuiButtonGroup
          v-model="radioValue"
          :options="radioOptions"
        />
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Horizontal">
      <div class="flex justify-center">
        <WuiButtonGroup>
          <WuiButton
            v-for="(label, idx) in items"
            :key="`horizontal-${idx}`"
          >
            {{ label }}
          </WuiButton>
        </WuiButtonGroup>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Vertical">
      <div class="flex justify-center">
        <WuiButtonGroup vertical>
          <WuiButton
            v-for="(label, idx) in items"
            :key="`horizontal-${idx}`"
            block
          >
            {{ label }}
          </WuiButton>
        </WuiButtonGroup>
      </div>
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="ButtonGroup"
      :data-sheet="dataSheetGroup"
    />
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
