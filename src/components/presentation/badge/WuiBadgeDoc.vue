<template>
  <div>
    <h1>Badge</h1>

    <WuiCodeDemo>
      <WuiBadge
        :value="badgeValue"
        :show="badgeShow"
        :type="badgeType"
        :max-value="badgeMax"
        :point="badgePoint"
        :square="badgeSquare"
        :position="badgePosition"
      >
        <WuiButton>Badged</WuiButton>
      </WuiBadge>
      <template #props>
        <WuiSelect
          v-model="badgeType"
          label-top="Type"
          :options="ALLOWED_TYPES"
        />
        <WuiSelect
          v-model="badgePosition"
          label-top="Position"
          :options="ALLOWED_POSITIONS"
        />
        <WuiCheckbox v-model="badgePoint" label="Point" />
        <WuiCheckbox v-model="badgeSquare" label="Square" />
        <WuiCheckbox v-model="badgeShow" label="Show" />
        <WuiNumberInput v-model="badgeMax" label-top="Max value" />
        <WuiNumberInput v-model="badgeValue" label-top="Badge value" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Type">
      <div class="grid grid-cols-5 gap-4">
        <WuiBadge
          v-for="type in ALLOWED_TYPES"
          :key="type"
          :type="type"
          value="12"
        >
          <WuiButton block>
            {{ type }}
          </WuiButton>
        </WuiBadge>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Point">
      <div class="grid grid-cols-5 gap-4">
        <WuiBadge v-for="type in ALLOWED_TYPES" :key="type" :type="type" point>
          <WuiButton block>
            {{ type }}
          </WuiButton>
        </WuiBadge>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Square">
      <WuiBadge type="primary" :value="12" square>
        <WuiButton>Square</WuiButton>
      </WuiBadge>
      <WuiBadge type="primary" point square>
        <WuiButton>
          <span class="h-full icon-ph-heart" />
        </WuiButton>
      </WuiBadge>
    </WuiCodeExample>

    <WuiCodeExample title="Positions">
      <WuiBadge point :value="12">
        <WuiButton>Top-right</WuiButton>
      </WuiBadge>
      <WuiBadge point position="bottom-right" :value="12">
        <WuiButton>Bottom-right</WuiButton>
      </WuiBadge>
      <WuiBadge point position="bottom-left" :value="12">
        <WuiButton>Bottom-left</WuiButton>
      </WuiBadge>
      <WuiBadge point position="top-left" :value="12">
        <WuiButton>Top-left</WuiButton>
      </WuiBadge>
    </WuiCodeExample>

    <WuiCodeExample title="Max value">
      <WuiBadge :value="110" :max-value="99">
        <WuiTag type="danger"> Maximum </WuiTag>
      </WuiBadge>

      <WuiBadge class="mr-1" type="info" :value="40" :max-value="99">
        <WuiTag type="info"> In range </WuiTag>
      </WuiBadge>
    </WuiCodeExample>

    <WuiCodeExample title="WuiTag with inline Badge">
      <WuiTag type="danger">
        <span class="mr-1"> Nice product </span>
        <WuiBadge value="new" />
      </WuiTag>

      <WuiTag type="success">
        <WuiBadge type="success" point class="mr-1" /> Systems online
      </WuiTag>
    </WuiCodeExample>

    <WuiCodeExample title="Standalone">
      <WuiBadge :value="101" />
      <WuiBadge :value="101" square />
    </WuiCodeExample>

    <WuiPropsTable :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { ALLOWED_TYPES, ALLOWED_POSITIONS } from './constants'

const badgeValue = ref(97)
const badgePoint = ref(false)
const badgeSquare = ref(false)
const badgeShow = ref(true)
const badgeMax = ref(99)
const badgeType = ref('danger')
const badgePosition = ref('top-right')

const dataSheet = [
  {
    property: 'type',
    type: ['String'],
    default: 'danger',
    values: ['primary', 'success', 'danger', 'warning'],
    description: 'Type of the badge',
  },
  {
    property: 'value',
    type: ['Number', 'String'],
    default: '',
    values: [],
    description: 'Value of the badge',
  },
  {
    property: 'max-value',
    type: ['Number'],
    default: '',
    values: [],
    description: 'Max value of the badge',
  },
  {
    property: 'position',
    type: ['String'],
    default: 'top-right',
    values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    description: 'Set position of the badge',
  },
  {
    property: 'show',
    type: ['Boolean'],
    default: 'true',
    values: [],
    description: 'Show badge',
  },
  {
    property: 'point',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Show badge as point',
  },
  {
    property: 'square',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Make badge squared',
  },
]
</script>
