<template>
  <div
    class="wui-progress-bar"
    :class="classNames"
  >
    <div
      class="wui-progress-bar__track"
      :class="[infinite && 'wui-progress-bar--infinite']"
    >
      <slot name="label">
        <span class="wui-progress-bar__label">
          <slot name="text">{{ text }}</slot>
        </span>
      </slot>

      <div
        class="wui-progress-bar__fill"
        :style="progressStyle"
      >
        <slot name="label">
          <span class="wui-progress-bar__label">
            <slot name="text">{{ text }}</slot>
          </span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { WUI_PROGRESS_BAR_PROPS } from '@/components/progress-bar/progress-bar'

const props = defineProps({
  ...WUI_PROGRESS_BAR_PROPS,
})

const progressStyle = computed(() => {
  if (props.infinite) {
    return {}
  }
  return {
    width: `${props.percentage}%`,
  }
})

const text = computed(() => {
  // if (props.infinite) {
  //   return WUI_PROGRESS_BAR_PLACEHOLDER
  // }
  if (props.label === false) {
    return
  }
  return props.label ? props.label : `${props.percentage}%`
})

const classNames = computed(() => ({
  'wui-progress-bar--disabled': props.disabled,
  'wui-progress-bar--infinite': props.infinite,
  'wui-progress-bar--sliding': props.sliding,
  'wui-progress-bar--centered': props.centered,
  'wui-progress-bar--moving': props.moving,
  'wui-progress-bar--striped': props.striped,
  [`wui-progress-bar--size-${props.size}`]: props.size,
  [`wui-progress-bar--shape-${props.shape}`]: props.shape,
}))
</script>

<style lang="css">
@import url('progress-bar.css');
</style>
