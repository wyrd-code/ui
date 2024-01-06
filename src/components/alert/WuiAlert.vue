<template>
  <WuiTransition :name="transition">
    <div
      v-show="visible"
      :class="rootClasses"
      role="alert"
    >
      <div
        v-if="iconClass || !!$slots.icon"
        class="wui-alert-icon-wrapper"
      >
        <slot name="icon">
          <span
            :class="iconClass"
            class="wui-alert-icon"
          />
        </slot>
      </div>
      <div class="wui-alert-body">
        <strong
          v-if="!!title || !!$slots.title"
          class="wui-alert-title"
        >
          <template v-if="!$slots.title">
            {{ title }}
          </template>
          <slot
            v-else
            name="title"
          />
        </strong>
        <div v-if="$slots.default || text">
          <template v-if="!$slots.default">
            {{ text }}
          </template>
          <slot v-else />
        </div>
      </div>
      <div
        v-if="closable"
        name="clear"
        role="button"
        tabIndex="0"
        class="wui-alert-close icon-ph-x"
        @click="close"
        @keyup.esc="close"
      />
    </div>
  </WuiTransition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useCheckSlot } from '@/composables'

import {
  WUI_ALERT_EMITS,
  WUI_ALERT_PROPS,
  WUI_ALERT_VARIANT_ICONS,
} from './alert'

export default defineComponent({
  name: 'WuiAlert',
  props: WUI_ALERT_PROPS,
  emits: WUI_ALERT_EMITS,
  setup(props, { emit, slots }) {
    const defaultSlot = useCheckSlot(slots, 'default')

    const close = () => emit('close')

    const iconClass = computed(() => {
      if (props.icon === false) {
        return
      }
      if (typeof props.icon === 'string') {
        return props.icon
      }
      return WUI_ALERT_VARIANT_ICONS[props.variant]
    })

    const rootClasses = computed(() => [
      'wui-alert',
      `wui-alert-variant--${props.variant}`,
      !props.text && !defaultSlot?.value && 'wui-alert--small',
    ])

    return {
      defaultSlot,
      close,
      iconClass,
      rootClasses,
    }
  },
})
</script>

<style lang="css">
@import url('./alert.css');
</style>
