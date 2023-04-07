<template>
  <div
    class="wui-btn-group"
    :class="[
      vertical ? 'wui-btn-group--vertical' : 'wui-btn-group--horizontal',
      stretch ? `wui-btn-group-stretch--${stretch}` : '',
      condensed ? 'wui-btn-group--condensed' : 'wui-btn-group--separated',
    ]"
    role="group"
  >
    <slot :value="modelValue" @update="onUpdate" />

    <WuiButton
      v-for="{ value, label, icon, ...attrs } in expandOptions(options)"
      v-bind="{ variant, size, round, ...attrs }"
      :key="value"
      :icon="!!icon"
      :active="modelValue === value"
      @click="() => onUpdate(value)"
      @keyup.enter="() => onUpdate(value)"
    >
      <span v-if="icon" :class="icon" />
      <span v-else>
        {{ label }}
      </span>
    </WuiButton>
  </div>
</template>

<script lang="ts" setup name="WuiButtonGroup">
import { PropType } from 'vue'

import {
  WUI_BUTTON_SIZES,
  WUI_BUTTON_SIZE_DEFAULT,
  WUI_BUTTON_VARIANTS,
  WUI_BUTTON_VARIANT_DEFAULT,
} from '@/components/button/button'

import type { TSelectOption } from '../select/types'

defineProps({
  vertical: {
    type: Boolean,
  },
  condensed: {
    type: Boolean,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  options: {
    type: Array as PropType<TSelectOption[]>,
    default: () => [],
  },
  stretch: {
    type: String,
    default: null,
    validator: (value: string) => ['full', 'wide'].includes(value),
  },
  // Reused button props that will be passed down to buttons
  variant: {
    type: String,
    default: WUI_BUTTON_VARIANT_DEFAULT,
    validator: (value: string) => WUI_BUTTON_VARIANTS.includes(value),
  },
  size: {
    type: String,
    default: WUI_BUTTON_SIZE_DEFAULT,
    validator: (value: string) => WUI_BUTTON_SIZES.includes(value),
  },
  round: { type: Boolean },
})

const emit = defineEmits(['update:model-value'])

const expandOptions = (opts) =>
  opts.map((value) => {
    return typeof value === 'string' ? { label: value, value } : value
  })

const onUpdate = (newValue: any) => {
  emit('update:model-value', newValue)
}
</script>

<style lang="css">
@import url('button-group.css');
</style>
