<template>
  <WuiPopover
    class="wui-menu"
    :placement="placement"
  >
    <template #trigger="{ attrs }">
      <slot
        name="trigger"
        :attrs="attrs"
      />
    </template>

    <template #content="{ close, ...slotProps }">
      <FocusLoop :is-visible="slotProps.isOpen">
        <slot
          name="menu"
          v-bind="{
            ...slotProps,
            close,
            handleSelection: (value) => close() && emit('selected', value),
          }"
        />
      </FocusLoop>
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
import { FocusLoop } from '@vue-a11y/focus-loop'

defineProps({
  placement: {
    type: String,
    default: 'bottom',
  },
})

const emit = defineEmits(['close', 'selected'])
</script>
