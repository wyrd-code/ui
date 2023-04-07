<template>
  <div class="wui-radio-group" :data-orientation="orientation">
    <strong v-if="label || $slots.instruction" class="label">
      <slot name="label">{{ label }}</slot>
    </strong>
    <div v-if="instructions || $slots.instruction" class="instructions">
      <slot name="instructions">{{ instructions }}</slot>
    </div>
    <div class="items">
      <WuiRadio
        v-for="(item, idx) in items"
        :key="idx"
        v-bind="item"
        :model-value="modelValue"
        @update:model-value="(val) => $emit('update:model-value', val)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface WyrdRadio {
  label: string
  value: string | number
}

defineProps({
  modelValue: { type: [String, Number, Boolean, Object], default: null },
  label: { type: String, default: null },
  orientation: {
    type: String,
    default: 'vertical',
    validator: (val: string) => ['vertical', 'horizontal'].includes(val),
  },
  instructions: { type: String, default: null },
  items: { type: Array as () => Array<WyrdRadio>, default: () => [] },
})

defineEmits(['update:model-value'])
</script>

<style lang="css" scoped>
.wui-radio-group {
  @apply flex flex-col;
  @apply leading-none;
  @apply space-y-2;
}

.wui-radio-group[data-orientation='vertical'] .items {
  @apply flex flex-col;
  @apply space-y-2;
}

.wui-radio-group[data-orientation='horizontal'] .items {
  @apply flex;
  @apply space-x-2;
}
.wui-radio-group[data-orientation='horizontal'] .wui-radio {
}

.label {
}
.instructions {
  @apply text-sm;
}

:deep(.wui-radio),
.instructions,
.label {
}
</style>
