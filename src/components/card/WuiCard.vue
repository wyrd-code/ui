<template>
  <div class="wui-card" :class="classnames">
    <div v-if="$slots.top" class="wui-card-top">
      <slot name="top" />
    </div>
    <div class="wui-card-wrapper">
      <div v-if="$slots.preview" class="wui-card-preview">
        <slot name="preview" />
      </div>
      <div class="wui-card-body">
        <header v-if="$slots.header" class="wui-card-header">
          <slot name="header" />
        </header>
        <div v-if="$slots.default" class="wui-card-content">
          <slot />
        </div>
        <div v-if="$slots.actions" class="wui-card-actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'

import { WUI_CARD_PROPS } from '@/components/card/card'

const props = defineProps(WUI_CARD_PROPS)
const slots = useSlots()

const classnames = computed(() => ({
  ['wui-card--with-top']: slots.top,
  ['wui-card--condensed']: props.condensed,
  ['wui-card--unpadded']: props.unpadded,
  ['wui-card--divided']: props.divided,
  ['wui-card--disabled']: props.disabled,
  ['wui-card--inverse']: props.inverse,
  ['wui-card--horizontal']: props.horizontal,
}))
</script>

<style lang="css">
@import url('card.css');
</style>
