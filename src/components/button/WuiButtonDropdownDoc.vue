<template>
  <div class="space-y-4">
    <h1>Button Dropdown</h1>

    <WuiCodeDemo>
      <WuiButtonDropdown
        v-model="value"
        :options="options"
        placeholder="Pick an option"
      />
    </WuiCodeDemo>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { Sizes } from '../../models/enums'
import WuiButtonDropdown from './WuiButtonDropdown.vue'

const value = ref('')

const options = [
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
  },
]
</script>
