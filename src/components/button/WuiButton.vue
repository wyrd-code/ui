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

import { WUI_BUTTON_PROPS } from './button'

const props = defineProps({
  ...routerLinkProps,
  ...WUI_BUTTON_PROPS,
  // override default tag value
  tag: { type: String, default: 'button' },
  label: { type: String, default: null },
  type: {
    type: String,
    default: 'submit',
    // note: may have unusual values when used with radix-vue asChild
    // so we don't validate here, but only assigning it to the button when below
  },
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
  'wui-btn--ghost': props.ghost,
  'wui-btn--outlined': props.outlined,
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
    Object.assign(attrs, { tabindex: '0' })
  }
  if (['submit', 'reset'].includes(props.type)) {
    Object.assign(attrs, { type: props.type })
  }
  return attrs
})
</script>

<style lang="css">
@import url('button.css');
</style>
