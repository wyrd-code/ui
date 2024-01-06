<template>
  <div
    class="wui-spinner-wrapper"
    :class="rounding"
  >
    <div class="wui-spinner-overlay" />
    <WuiSpinner
      v-bind="$attrs"
      :icon-class="iconClass"
      class="wui-spinner"
    />
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
    rounding: {
      type: String,
      default: 'rounded',
    },
    iconClass: {
      default: 'icon-ph-heart',
      type: String,
    },
  },
})
</script>

<style lang="css">
.wui-spinner-wrapper {
  @apply absolute top-0 left-0 h-full w-full;
  @apply flex items-center justify-center;
}
.wui-spinner-overlay {
  @apply flex h-full items-center justify-center z-50 bg-neutral-1 text-neutral-12 opacity-50;
}
.wui-spinner {
  @apply w-12 h-12 z-50 fill-current;
}
</style>
