<template>
  <component
    :is="tagComputed"
    class="wui-tag"
    role="listitem"
    :class="classNames"
    :title="tooltip"
    v-bind="linkAttributesComputed"
  >
    <span
      class="wui-tag-body"
      @click="$emit('click')"
      @keyup.enter="$emit('click')"
      @focus="$emit('focus')"
    >
      <template v-if="icon">
        <span
          v-if="icon"
          :class="icon"
        />
        <span>
          <slot />
        </span>
      </template>
      <slot v-else />
    </span>
    <span
      v-if="closable"
      name="clear"
      role="button"
      tabindex="0"
      aria-label="Remove this tag"
      class="wui-tag-close icon-ph-x"
      @keydown.esc.capture="close"
      @click="close"
    />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useRouterLink, routerLinkProps } from '@/composables'

import {
  WUI_TAG_SHAPE_DEFAULT,
  WUI_TAG_VARIANTS,
  WUI_TAG_VARIANT_DEFAULT,
  WUI_TAG_SHAPES,
} from './tag'

const props = defineProps({
  ...routerLinkProps,
  variant: {
    type: String,
    default: WUI_TAG_VARIANT_DEFAULT,
    validator: (value: string) => WUI_TAG_VARIANTS.includes(value),
  },
  shape: {
    type: String,
    default: WUI_TAG_SHAPE_DEFAULT,
    validator: (value: string) => WUI_TAG_SHAPES.includes(value),
  },
  closable: { type: Boolean, default: false },
  filled: { type: Boolean, default: false },
  tooltip: { type: String, default: null },
  icon: { type: String, default: null },
})

const { tagComputed, linkAttributesComputed } = useRouterLink(props)

const classNames = computed(() => ({
  'wui-tag--filled': props.filled,
  'wui-tag--disabled': props.disabled,
  'wui-tag--closable': props.closable,
  'wui-tag--link': tagComputed.value !== props.tag,
  [`wui-tag--${props.variant}`]: true,
  [`wui-tag--${props.shape}`]: true,
}))

const emit = defineEmits(['close', 'click', 'focus'])

function close() {
  if (!props.closable) {
    return
  }
  emit('close')
}
</script>

<style lang="css">
@import url('tag.css');
</style>
