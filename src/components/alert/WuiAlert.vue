<template>
  <transition name="fade">
    <div v-show="visible" :class="rootClasses">
      <div v-if="showIcon" class="wui-alert-iconwrapper">
        <slot name="icon">
          <div :class="iconClass" class="wui-alert-icon" />
        </slot>
      </div>
      <div class="wui-alert-body">
        <p class="wui-alert-title">
          {{ title }}
        </p>
        <p v-if="!defaultSlot && body" class="wui-alert-slot">
          {{ body }}
        </p>
        <p v-else-if="defaultSlot" class="wui-alert-slot">
          <slot />
        </p>
      </div>
      <div
        v-if="closable"
        name="clear"
        class="wui-alert-close icon-ph-x"
        @click="clickCross"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useCheckSlot } from '../../hooks'
import { Colors } from '../../models/enums'
import { ALLOWED_TYPES } from './constants'

const ICON_BY_TYPE: Partial<Record<Colors, string>> = {
  [Colors.NEUTRAL]: 'icon-ph-circle-wavy',
  [Colors.PRIMARY]: 'icon-ph-circle-wavy',
  [Colors.INFO]: 'icon-ph-circle-wavy-warning',
  [Colors.SUCCESS]: 'icon-ph-circle-wavy-check',
  [Colors.WARNING]: 'icon-ph-warning',
  [Colors.DANGER]: 'icon-ph-warning',
}

export default defineComponent({
  name: 'WuiAlert',
  props: {
    type: {
      type: String,
      default: Colors.INFO,
      validator: (value: Colors) => ALLOWED_TYPES.includes(value),
    },
    showIcon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    visible: { type: Boolean, default: true },
    title: { type: String, default: null },
    icon: { type: String, default: null },
    body: { type: String, default: null },
  },
  emits: ['on-close'],
  setup(props, { emit, slots }) {
    const defaultSlot = useCheckSlot(slots, 'default')

    const clickCross = () => emit('on-close')
    const iconClass = computed(
      () => props.icon || (ICON_BY_TYPE as any)[props.type]
    )
    const rootClasses = computed(() => [
      'wui-alert',
      `wui-alert--${props.type}`,
      !props.body && !defaultSlot?.value && 'wui-alert--small',
    ])

    return {
      defaultSlot,
      clickCross,
      iconClass,
      rootClasses,
    }
  },
})
</script>

<style lang="css" scoped>
@import url('alert.css');
</style>
