<template>
  <WuiButtonGroup
    v-model="radioValue"
    :options="textOptions"
    variant="primary"
    size="lg"
    condensed
  />
  <WuiButtonGroup
    v-model="radioValue"
    :options="iconOptions"
    variant="primary"
    size="lg"
    condensed
  />
  <WuiButtonGroup
    v-model="radioValue"
    variant="secondary"
    :options="iconOptions"
    condensed
    shape="round"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const textOptions = [
  {
    label: 'A',
    value: 'a',
  },
  {
    label: 'B',
    value: 'b',
  },
  {
    label: 'C',
    value: 'c',
    variant: 'danger',
  },
]

const iconOptions = [
  {
    label: 'A',
    value: 'a',
    icon: 'icon-ph-copy',
  },
  {
    label: 'B',
    value: 'b',
    icon: 'icon-ph-activity',
  },
  {
    label: 'C',
    value: 'c',
    icon: 'icon-ph-anchor',
  },
]

const radioValue = ref('a')
</script>
