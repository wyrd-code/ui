<template>
  <div class="space-y-4">
    <h1>Tooltip</h1>
    <WuiCodeDemo>
      <WuiTooltip :placement="tooltipPlacement" :content="tooltipText">
        <WuiButton> Hover me </WuiButton>
      </WuiTooltip>

      <template #props>
        <WuiSelect
          v-model="tooltipPlacement"
          placeholder="Placement"
          label-top="Placement"
          :options="tooltipPlacements"
        />
        <WuiInput v-model="tooltipText" label-top="Text" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Themed colors">
      <div class="space-x-4">
        <WuiTooltip :placement="tooltipPlacement" :content="tooltipText">
          <WuiButton> Hover me </WuiButton>
        </WuiTooltip>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Position">
      <template #description>
        <p class="mx-6">
          There are 12 positions available for tooltip, most used are shown in
          the example
        </p>
      </template>
      <div class="flex flex-col items-center">
        <WuiButtonGroup vertical>
          <WuiTooltip content="Top" placement="top">
            <WuiButton wide>Top</WuiButton>
          </WuiTooltip>
          <WuiTooltip content="Right" placement="right">
            <WuiButton wide>Right</WuiButton>
          </WuiTooltip>
          <WuiTooltip content="Left" placement="left">
            <WuiButton wide>Left</WuiButton>
          </WuiTooltip>
          <WuiTooltip content="Bottom" placement="bottom">
            <WuiButton wide>Bottom</WuiButton>
          </WuiTooltip>
        </WuiButtonGroup>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Content Slot">
      <div class="flex flex-col items-center">
        <WuiTooltip placement="top">
          <template #content>
            <span>
              <WuiTag type="primary">Wow</WuiTag>&nbsp; I came from slot
            </span>
          </template>
          <WuiButton>Slot content</WuiButton>
        </WuiTooltip>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Autoposition">
      <div class="flex flex-col items-center">
        <WuiTooltip placement="bottom">
          <template #content>
            <span>Autopos</span>
          </template>
          <WuiButton>Autoposition</WuiButton>
        </WuiTooltip>
      </div>
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="Tooltip"
      :slot-sheet="slotSheet"
      :data-sheet="dataSheet"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tooltipText = ref('Hello there')

const tooltipPlacement = ref('top')
const tooltipPlacements = ['top', 'right', 'bottom', 'left'].map((value) => ({
  value,
  label: value,
}))

const dataSheet = [
  {
    property: 'content',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Content of the tooltip',
  },
  {
    property: 'placement',
    type: ['String'],
    default: 'top',
    values: [
      'top',
      'bottom',
      'right',
      'left',
      'bottom-left',
      'bottom-right',
      'left-top',
      'left-bottom',
      'right-top',
      'right-bottom',
      'top-left',
      'top-right',
    ],
    description: 'Position of the popover',
  },
  {
    property: 'disabled',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes tooltip disabled',
  },
  {
    property: 'hoverable',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes tooltip hoverable',
  },
  {
    property: 'autoposition',
    type: ['Boolean'],
    default: 'true',
    values: [],
    description:
      "Tooltip will choose position to always fit in screen taking into account the chosen position in 'placement' property",
  },
]

const slotSheet = [
  {
    name: 'default',
    description: 'Hoverable element for tooltip',
  },
  {
    name: 'content',
    description: 'Content of the tooltip',
  },
]
</script>
