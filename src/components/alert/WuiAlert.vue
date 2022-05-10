<template>
  <transition name="fade">
    <div
      v-show="visible"
      :class="rootClasses"
    >
      <div
        v-if="showIcon"
        class="wui-alert-iconwrapper"
      >
        <slot name="icon">
          <div
            :class="icon"
            class="wui-alert-icon"
          />
        </slot>
      </div>
      <div class="wui-alert-body">
        <p class="wui-alert-title">
          {{ title }}
        </p>
        <p
          v-if="!defaultSlot && body"
          class="wui-alert-slot"
        >
          {{ body }}
        </p>
        <p
          v-if="defaultSlot"
          class="wui-alert-slot"
        >
          <slot />
        </p>
      </div>
      <icon-ph-x
        v-if="closable"
        name="clear"
        class="wui-alert-close"
        @click="clickCross"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

import { useCheckSlot } from '../../hooks'
import { Colors } from '../../models/enums'
import { ICON_BY_TYPE, ALLOWED_TYPES } from './constants'

export default defineComponent({
  name: 'WuiAlert',
  props: {
    type: {
      type: String as PropType<Colors>,
      default: Colors.INFO,
      validator: (value: Colors) => ALLOWED_TYPES.includes(value),
    },
    showIcon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    visible: { type: Boolean, default: true },
    title: { type: String, default: null },
    body: { type: String, default: null },
  },
  emits: ['on-close'],
  setup(props, { emit, slots }) {
    const defaultSlot = useCheckSlot(slots, 'default')

    const clickCross = () => emit('on-close')
    const icon = computed(() => ICON_BY_TYPE[props.type])
    const rootClasses = computed(() => [
      'wui-alert',
      `wui-alert--${props.type}`,
      !props.body && !defaultSlot?.value && 'wui-alert--small',
    ])

    return {
      defaultSlot,
      clickCross,
      icon,
      rootClasses,
    }
  },
})
</script>
