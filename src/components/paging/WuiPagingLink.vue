<template>
  <WuiButton
    class="wui-paging__link"
    :icon="!!icon"
    :disabled="disabled || !isNumber"
  >
    <template v-if="icon">
      <span class="sr-only">{{ label }}</span>
      <span class="wui-paging__icon" :class="icon" />
    </template>
    <slot v-else>
      {{ label }}
    </slot>
  </WuiButton>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: [String, Number], default: null },
  value: { type: [String, Number], default: 1 },
  icon: { type: String, default: null },
  disabled: { type: Boolean, default: false },
})

const isNumber = computed(() => Number.isInteger(props.value))
</script>

<style scoped>
.wui-paging__link {
  /* @apply relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none; */
  /* relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 */
}
</style>
