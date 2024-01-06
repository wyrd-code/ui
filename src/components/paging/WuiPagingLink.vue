<template>
  <WuiButton
    class="wui-paging__link"
    :icon="!!icon"
    :disabled="disabled || !isNumber"
  >
    <template v-if="icon">
      <span class="sr-only">{{ label }}</span>
      <span
        class="wui-paging__icon"
        :class="icon"
      />
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
