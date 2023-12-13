<template>
  <div class="wui-radio-group" :data-orientation="orientation">
    <span v-if="label || $slots.help" class="label">
      <slot name="label">{{ label }}</slot>
    </span>
    <div v-if="help || $slots.help" class="help">
      <slot name="help">{{ help }}</slot>
    </div>
    <div class="items">
      <WuiRadioItem
        v-for="(item, idx) in items"
        :key="idx"
        v-bind="item"
        :model-value="modelValue"
        @update:modelValue="(val) => $emit('update:modelValue', val)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WUI_RADIO_PROPS } from './radio'

defineProps(WUI_RADIO_PROPS)

defineEmits(['update:modelValue'])
</script>

<style lang="css">
@import url('radio.css');
</style>
