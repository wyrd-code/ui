<template>
  <div
    v-if="isLoading"
    class="absolute top-0 left-0 h-full w-full"
    :class="overlayRounding"
  >
    <div
      class="flex h-full items-center justify-center z-50 bg-black dark:bg-white opacity-50"
    >
      <WuiSpinner
        v-bind="$attrs"
        class="w-12 h-12 z-50 text-white dark:text-black fill-current"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WuiSpinner from './WuiSpinner.vue'

export default defineComponent({
  name: 'WuiSpinnerOverlay',
  components: {
    WuiSpinner,
  },
  inheritAttrs: false,
  props: {
    overlayRounding: {
      type: String,
      default: 'rounded',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
