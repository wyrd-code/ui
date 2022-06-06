<template>
  <span class="wui-badge" :class="rootClasses">
    <slot />
    <span v-if="show" class="wui-badge-body" :class="bodyClasses">
      {{ contentValue }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { Colors, Positions } from '../../models/enums'
import { ALLOWED_TYPES, ALLOWED_POSITIONS } from './constants'

export default defineComponent({
  name: 'WuiBadge',
  props: {
    type: {
      type: String,
      default: Colors.DANGER,
      validator: (value: Colors) => ALLOWED_TYPES.includes(value),
    },
    position: {
      type: String,
      default: Positions.TR,
      validator: (value: Positions) => ALLOWED_POSITIONS.includes(value),
    },
    value: { type: [String, Number], default: null },
    maxValue: { type: Number, default: null },
    show: { type: Boolean, default: true },
    point: { type: Boolean },
    square: { type: Boolean },
  },
  setup(props, { slots }) {
    const contentValue = computed(() => {
      if (props.point || !props.value) return
      return props.maxValue != null
        ? Number(props.value) > props.maxValue
          ? `${props.maxValue}+`
          : props.value
        : props.value
    })

    const rootClasses = computed(() => ({
      'wui-badge--square': props.square,
    }))

    const bodyClasses = computed(() => ({
      ...(slots.default
        ? { [`wui-badge-body--corner-${props.position}`]: true }
        : null),
      'wui-badge-body--square': props.square,
      'wui-badge-body--point': props.point,
      [`wui-badge-body--${props.type}`]: true,
    }))

    return { contentValue, rootClasses, bodyClasses }
  },
})
</script>

<style lang="css" scoped>
@import url('badge.css');
</style>
