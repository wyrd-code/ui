<template>
  <component
    :is="as"
    class="wui-badge"
  >
    <slot />
    <span
      v-if="isVisible"
      class="wui-badge-body"
      :class="bodyClasses"
    >
      {{ contentValue }}
    </span>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { WUI_BADGE_PROPS } from './badge'

export default defineComponent({
  name: 'WuiBadge',
  props: WUI_BADGE_PROPS,
  setup(props, { slots }) {
    const contentValue = computed(() => {
      if (props.dot) return
      if (props.max == null) return props.value

      return Number(props.value) > props.max ? `${props.max}+` : props.value
    })

    const isZero = computed(() => Number(props.value) === 0)
    const hasValue = computed(() => props.value && !isZero.value)

    const isVisible = computed(
      () => props.visible && (props.dot || hasValue.value || props.showZero)
    )

    const bodyClasses = computed(() => ({
      ...(slots.default
        ? { [`wui-badge-body--placement-${props.placement}`]: true }
        : null),
      'wui-badge-body--square': props.square,
      'wui-badge-body--dot': props.dot,
      [`wui-badge-body-variant--${props.variant}`]: true,
    }))

    return {
      contentValue,
      bodyClasses,
      isVisible,
    }
  },
})
</script>

<style lang="css">
@import url('badge.css');
</style>
