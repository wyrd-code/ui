<template>
  <Transition :name="transitionName">
    <div
      v-show="isActive"
      ref="Toast"
      class="wui-toast"
      :class="classNames"
      role="alert"
      @mouseover="toggleTimer(false)"
      @focusin="toggleTimer(false)"
      @mouseleave="toggleTimer(true)"
      @focusout="toggleTimer(true)"
    >
      <div
        v-if="computedIcon || $slots.icon"
        class="wui-toast-icon"
      >
        <slot name="icon">
          <span :class="computedIcon" />
        </slot>
      </div>
      <div class="wui-toast-content">
        <span class="wui-toast-label">
          <slot name="label">
            {{ label }}
          </slot>
        </span>
        <span class="wui-toast-description">
          <slot name="description">
            {{ description }}
          </slot>
        </span>
        <span
          v-if="$slots.actions"
          class="wui-toast-actions"
        >
          <slot
            name="actions"
            :close="close"
          />
        </span>
      </div>

      <div
        v-if="$slots.aside"
        class="wui-toast-aside"
      >
        <slot
          name="aside"
          :close="close"
        />
      </div>

      <div
        v-else-if="closable"
        class="wui-toast-close"
        @click="close"
        @keyup.esc="close"
      >
        <span class="wui-toast-close-icon icon-ph-x" />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'

import { portalQueue } from '@/helpers'

import {
  ToastPlacement,
  ToastVariant,
  WUI_TOAST_ICONS,
  WUI_TOAST_MAX_VISIBLE_DEFAUT,
  WUI_TOAST_PLACEMENTS,
  WUI_TOAST_PLACEMENT_DEFAULT,
  WUI_TOAST_DURATION_DEFAUT,
  WUI_TOAST_CLOSABLE_DEFAUT,
  WUI_TOAST_VARIANTS,
  WUI_TOAST_VARIANT_DEFAULT,
} from './toast'

const props = defineProps({
  placement: {
    type: String as PropType<ToastPlacement>,
    default: WUI_TOAST_PLACEMENT_DEFAULT,
    validator: (value: ToastPlacement) =>
      Object.values(WUI_TOAST_PLACEMENTS).includes(value),
  },
  variant: {
    type: String as PropType<ToastVariant>,
    default: WUI_TOAST_VARIANT_DEFAULT,
    validator: (value: ToastVariant) =>
      Object.values(WUI_TOAST_VARIANTS).includes(value),
  },
  maxVisible: { type: Number, default: WUI_TOAST_MAX_VISIBLE_DEFAUT },
  closable: { type: Boolean, default: WUI_TOAST_CLOSABLE_DEFAUT },
  duration: { type: Number, default: WUI_TOAST_DURATION_DEFAUT },
  pauseOnHover: { type: Boolean, default: true },
  icon: { type: [String, Boolean], default: null },
  label: { type: String, default: null },
  description: { type: String, default: null },
})

const Toast = ref<HTMLDivElement>()

const emit = defineEmits(['close', 'click'])

const computedIcon = computed(
  () => props.icon !== false && WUI_TOAST_ICONS[props.variant]
)

const placementY = computed(() =>
  props.placement.startsWith('top') ? 'top' : 'bottom'
)

const placementX = computed(() => {
  if (props.placement.includes('start')) return 'left'
  if (props.placement.includes('end')) return 'right'
  return 'center'
})

const transitionName = computed(() => {
  if (placementX.value !== 'center') {
    return placementX.value === 'right'
      ? 'wui-toast-slide-right'
      : 'wui-toast-slide-left'
  }
  return placementY.value === 'top'
    ? 'wui-toast-slide-top'
    : 'wui-toast-slide-bottom'
})

const classNames = computed(() => ({
  [`wui-toast--variant-${props.variant}`]: props.variant,
}))

const containerClassName = `wui-toast-container --${placementY.value} --${placementX.value}`

const { isActive, toggleTimer, close } = portalQueue({
  ref: Toast,
  emit,
  containerClassName,
  duration: props.duration,
  pauseOnHover: props.pauseOnHover,
  maxVisible: props.maxVisible,
})
</script>

<style lang="css">
@import url('toast.css');
</style>
