<template>
  <component
    :is="tag"
    class="wui-btn"
    :to="link"
    :class="rootClasses"
    v-bind="customProps"
  >
    <div
      v-if="loading"
      class="animate-spin icon-ph-spinner"
      :class="{ 'mr-2': $slots.default && !(loadingTakeover && loading) }"
    />
    <span v-else-if="$slots.iconPrefix" class="wui-btn-icon-wrapper">
      <slot name="iconPrefix" class="h-full" />
    </span>

    <span
      v-if="$slots.default && !(loadingTakeover && loading)"
      class="wui-btn-text"
    >
      <slot />
    </span>
    <span v-else-if="$slots.iconSuffix" class="wui-btn-icon-wrapper">
      <slot name="iconSuffix" class="h-full" />
    </span>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { Colors, Sizes } from '../../models/enums'

export default defineComponent({
  name: 'WuiButton',
  props: {
    type: {
      type: String,
      default: null,
      validator: (value: Colors) => Object.values(Colors).includes(value),
    },
    size: {
      type: String,
      default: null,
      validator: (value: Sizes) => Object.values(Sizes).includes(value),
    },
    disabled: { type: Boolean },
    outline: { type: Boolean },
    circle: { type: Boolean },
    round: { type: Boolean },
    pulse: { type: Boolean },
    loading: { type: Boolean },
    loadingTakeover: { type: Boolean },
    wide: { type: Boolean },
    glass: { type: Boolean },
    block: { type: Boolean },
    text: { type: Boolean },
    active: { type: Boolean },
    link: { type: Object, default: null },
  },
  setup(props, { slots }) {
    const tag = computed(() => (props.link ? 'router-link' : 'button'))
    const rootClasses = computed(() => [
      {
        pulse: props.pulse,
        'wui-btn-empty': !slots.default && !slots.icon,
        'wui-btn-outline': props.outline,
        'wui-btn-circle': props.circle,
        'wui-btn-round': props.round,
        'wui-btn-wide': props.wide,
        'wui-btn-block': props.block,
        'wui-btn-active': props.active,
        'wui-btn-text': props.text,
        glass: props.glass,
        'wui-btn-loading': props.loading,
        [`wui-btn-${props.size}`]: props.size,
        ...(props.type
          ? { [`wui-btn-${props.type}`]: true }
          : { 'wui-btn--neutral': true }),
      },
    ])

    const customProps = computed(() => {
      const values = {}
      if (props.disabled && tag.value === 'button') {
        Object.assign(values, { disabled: true })
      }
      return values
    })

    return {
      tag,
      rootClasses,
      customProps,
    }
  },
})
</script>

<style lang="css" scoped>
@import url('button.css');
</style>
