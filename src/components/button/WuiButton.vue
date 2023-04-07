<template>
  <component
    :is="useTag"
    class="wui-btn"
    :class="classNames"
    v-bind="useAttributes"
  >
    <slot v-if="$slots.iconPrefix" name="iconPrefix" class="wui-btn-icon" />

    <span v-if="$slots.default || label || loading" class="wui-btn-text">
      <span v-if="loading" class="animate-spin icon-ph-spinner wui-btn-icon" />
      <slot v-else>{{ label }}</slot>
    </span>

    <slot v-if="$slots.iconSuffix" name="iconSuffix" class="wui-btn-icon" />
  </component>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'

import { useRouterLink, routerLinkProps } from '@/composables'

import {
  WUI_BUTTON_VARIANTS,
  WUI_BUTTON_VARIANT_DEFAULT,
  WUI_BUTTON_SIZE_DEFAULT,
  WUI_BUTTON_SIZES,
  WUI_BUTTON_SHAPE_DEFAULT,
  WUI_BUTTON_SHAPES,
} from './button'

const props = defineProps({
  ...routerLinkProps,
  // override default tag value
  tag: { type: String, default: 'button' },
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
  shape: {
    type: String,
    default: WUI_BUTTON_SHAPE_DEFAULT,
    validator: (value: string) => WUI_BUTTON_SHAPES.includes(value),
  },
  label: { type: String, default: null },
  disabled: { type: Boolean },
  icon: { type: Boolean },
  loading: { type: Boolean },
  stretch: {
    type: String,
    default: null,
    validator: (value: string) => ['full', 'wide'].includes(value),
  },
  active: { type: Boolean },
  link: { type: [Object, String], default: null },
})

const slots = useSlots()

const { tagComputed, isLinkTag, linkAttributesComputed } = useRouterLink(props)

const useTag = computed(() => {
  return isLinkTag.value ? tagComputed.value : props.tag
})

const classNames = computed(() => ({
  'wui-btn-empty': !slots.default && !slots.icon,
  'wui-btn-with-icon': props.icon || props.loading,
  'wui-btn-active': props.active,
  'wui-btn--disabled': props.disabled,
  'wui-btn-loading': props.loading,
  'wui-btn--link': tagComputed.value !== props.tag,
  [`wui-btn--size-${props.size}`]: props.size,
  [`wui-btn-stretch--${props.stretch}`]: props.stretch,
  [`wui-btn-variant--${props.variant}`]: props.variant,
  [`wui-btn--shape-${props.shape}`]: props.shape,
}))

const useAttributes = computed(() => {
  const attrs = { ...linkAttributesComputed.value }
  if (isLinkTag.value) {
    Object.assign(attrs, {
      tabindex: '0',
    })
  }
  return attrs
})
</script>

<style lang="css">
@import url('button.css');
</style>
