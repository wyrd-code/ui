<template>
  <div
    class="wui-button-group"
    :class="[
      vertical ? 'wui-button-group--vertical' : 'wui-button-group--horizontal',
    ]"
  >
    <slot
      :value="modelValue"
      @update="onUpdate"
    />

    <WuiButton
      v-for="option in options"
      :key="option.value"
      :type="modelValue === option.value ? activeType : type"
      @click="() => onUpdate(option.value)"
    >
      <template
        v-if="option?.icon"
        #icon
      >
        <div
          :class="option?.icon"
          class="h-4 w-4"
        />
      </template>
      <span>
        {{ option?.label }}
      </span>
    </WuiButton> 
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Colors } from '../../models/enums'
import type { TSelectOption } from '../select/types'

export default defineComponent({
  name: 'ButtonGroup',
  props: {
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
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const onUpdate = (newValue: any) => {
      emit('update:modelValue', newValue);
    }

    return {
      onUpdate,
    }
  },
})
</script>
