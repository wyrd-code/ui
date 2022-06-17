<template>
  <div
    class="wui-button-group"
    :class="[
      vertical ? 'wui-button-group--vertical' : 'wui-button-group--horizontal',
    ]"
  >
    <slot :value="modelValue" @update="onUpdate" />

    <WuiButton
      v-for="option in options"
      :key="option.value"
      :type="modelValue === option.value ? activeType : type"
      @click="() => onUpdate(option.value)"
    >
      <template v-if="option?.icon" #icon>
        <div :class="option?.icon" class="h-4 w-4" />
      </template>
      <span>
        {{ option?.label }}
      </span>
    </WuiButton>
  </div>
</template>

<script lang="ts" setup name="WuiButtonGroup">
import { PropType } from 'vue'

import { Colors } from '../../models/enums'
import WuiButton from '../button/WuiButton.vue'
import type { TSelectOption } from '../select/types'

defineProps({
  vertical: {
    type: Boolean,
  },
  type: {
    type: String,
    default: null,
    validator: (value: Colors) => Object.values(Colors).includes(value),
  },
  activeType: {
    type: String,
    default: Colors.BLACK,
    validator: (value: Colors) => Object.values(Colors).includes(value),
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  options: {
    type: Array as PropType<TSelectOption[]>,
    default: () => [],
  },
})

const emit = defineEmits(['update:model-value'])

const onUpdate = (newValue: any) => {
  emit('update:model-value', newValue)
}
</script>

<style lang="css" scoped>
@import url('button-group.css');
</style>
