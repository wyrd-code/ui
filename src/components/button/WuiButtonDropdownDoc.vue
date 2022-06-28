<template>
  <div class="space-y-4">
    <h1>Button Dropdown</h1>

    <WuiCodeDemo>
      <WuiDropdown class="wui-button-dropdown">
        <template #button="{ toggle }">
          <WuiButton :size="buttonSize" @click="toggle">
            <template v-if="showIcon && activeOption?.icon" #icon>
              <div :class="activeOption?.icon" class="h-4 w-4" />
            </template>
            <span v-if="showLabel">
              {{ activeOption?.label }}
            </span>
          </WuiButton>
        </template>
        <template #items="{ itemClass }">
          <a
            v-for="(option, idx) in options"
            :key="idx"
            class="text-xs !py-8px"
            :class="itemClass"
            @click="() => onValueChange(option.value)"
          >
            <template v-if="showOptionIcon && option?.icon">
              <div :class="option?.icon" class="h-4 text-neutral-500 w-4" />
            </template>
            <span class="ml-1">{{ option.optionLabel || option.label }}</span>
          </a>
        </template>
      </WuiDropdown>
    </WuiCodeDemo>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import { Sizes } from '../../models/enums'
import WuiDropdown from '../dropdown/WuiDropdown.vue'
import WuiButton from './WuiButton.vue'

declare type Value = string | number | boolean

interface ButtonDropdownOption {
  value: Value
  label: string
  optionLabel?: string
  default?: boolean
  icon?: string
}

export default defineComponent({
  name: 'WuiButtonDropdown',
  components: {
    WuiDropdown,
    WuiButton,
  },
  props: {
    options: {
      type: Array as () => ButtonDropdownOption[],
      default: () => [],
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    buttonSize: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value: Sizes) => Object.values(Sizes).includes(value),
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    showOptionIcon: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    const activeOptionByValue = computed(() =>
      props.options.find((o) => o.value === props.modelValue)
    )
    const activeOption = computed(
      () => activeOptionByValue.value || props.options.find((o) => o.default)
    )

    const onValueChange = (value: any) => {
      emit('update:model-value', value)
    }

    return {
      activeOption,
      onValueChange,
    }
  },
})
</script>
