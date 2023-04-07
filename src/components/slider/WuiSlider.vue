<template>
  <div
    class="wui-slider"
    :class="{ 'wui-slider--disabled': disabled }"
    :tabindex="disabled ? -1 : 0"
    @keydown.down.left.stop.prevent="keyEvent(Placement.Left)"
    @keydown.up.right.stop.prevent="keyEvent(Placement.Right)"
  >
    <div
      ref="sliderLineRef"
      class="wui-slider-line"
      @click="onSliderClick"
      @keyup.enter="onSliderClick"
      @touchend="onSliderClick"
    >
      <div class="wui-slider-bar" :style="{ width: `${valuePosition}%` }" />
      <div
        class="wui-slider-controller-wrapper"
        :style="{ left: `${valuePosition}%` }"
        @mousedown="onMouseOrTouchDown"
        @touchstart.prevent="onMouseOrTouchDown"
      >
        <WuiTooltip :content="String(modelValue)" placement="top">
          <div class="wui-slider-controller" />
        </WuiTooltip>
      </div>
    </div>
    <div v-if="showSteps && steps.length" class="wui-slider-wrap-points">
      <div
        v-for="(point, index) in steps"
        :key="point.left"
        class="wui-slider-point"
        :style="getStepStyles({ step: point, index })"
        :class="{ 'wui-slider-point--active': point.active }"
      />
    </div>
    <div v-if="numbers" class="wui-slider-numbers">
      <div>{{ min }}</div>
      <div style="left: 100%">
        {{ max }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ComputedRef, defineComponent, ref, watch } from 'vue'

import { Placement } from '@/domain'

import { DEFAULT_STEP_HEIGHT, DEFAULT_PROPS } from './constants'
import { getTotalPosition, getCoordsByEvent } from './helpers'
import { useSteps, useValuePosition } from './hooks'
import { TStepItem, TKeyEvents, TTotalValuePosition } from './types'

export default defineComponent({
  name: 'WuiSlider',
  props: {
    disabled: Boolean,
    showSteps: Boolean,
    numbers: Boolean,
    min: { type: Number, default: DEFAULT_PROPS.MIN },
    max: { type: Number, default: DEFAULT_PROPS.MAX },
    step: { type: Number, default: DEFAULT_PROPS.STEP },
    modelValue: { type: Number, default: DEFAULT_PROPS.VALUE },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    const sliderLineRef = ref(null)
    const startX = ref(0)
    const currentX = ref(0)

    const startPos = ref(0)
    const newPos = ref(0)

    const dragging = ref(false)

    const [valuePosition, setValuePosition] = useValuePosition(
      props,
      emit as any
    )

    const steps: ComputedRef<TStepItem[]> = useSteps(
      [{ left: 0, active: true }],
      {
        min: props.min,
        max: props.max,
        step: props.step,
        valuePosition,
      }
    )

    watch(
      () => props.modelValue,
      (newVal) => {
        if (props.disabled) return
        const newValue = getTotalPosition({
          value: newVal,
          min: props.min,
          max: props.max,
        } as TTotalValuePosition)
        setValuePosition(newValue)
      }
    )

    const keyEvent = (key: TKeyEvents): void => {
      if (props.disabled) return

      const newValue = calculateNewValue(key)
      if (!newValue) return
      emit('update:model-value', newValue)
    }

    const calculateNewValue = (key: TKeyEvents) => {
      if ([Placement.Top, Placement.Right].includes(key)) {
        return props.modelValue + props.step
      }
      if ([Placement.Bottom, Placement.Left].includes(key)) {
        return props.modelValue - props.step
      }
      return props.modelValue
    }

    function onMouseOrTouchDown(e: MouseEvent | TouchEvent) {
      if (props.disabled) return
      onDragStart(e as any)

      if (typeof window === 'undefined') {
        return
      }
      window.addEventListener('mousemove', onDragging)
      window.addEventListener('mouseup', onDragEnd)
      window.addEventListener('touchmove', onDragging)
      window.addEventListener('touchend', onDragEnd)
    }

    function onDragStart(e: MouseEvent & TouchEvent) {
      dragging.value = true
      startX.value = getCoordsByEvent(e).clientX
      startPos.value = valuePosition.value
    }

    function onDragging(e: MouseEvent | TouchEvent) {
      if (dragging.value) {
        let diff = 0
        currentX.value = getCoordsByEvent(e as any).clientX
        diff =
          ((currentX.value - startX.value) * 100) /
          (sliderLineRef.value! as HTMLElement).offsetWidth

        newPos.value = startPos.value + diff
        setValuePosition(newPos.value)
      }
    }

    function onDragEnd() {
      if (dragging.value) {
        dragging.value = false
        setValuePosition(newPos.value)

        if (typeof window === 'undefined') {
          return
        }
        window.removeEventListener('mousemove', onDragging)
        window.removeEventListener('mouseup', onDragEnd)
        window.removeEventListener('touchmove', onDragging)
        window.removeEventListener('touchend', onDragEnd)
      }
    }

    function onSliderClick(e: MouseEvent | TouchEvent | KeyboardEvent) {
      if (props.disabled || dragging.value) return
      const sliderOffsetLeft = (
        sliderLineRef.value! as HTMLElement
      ).getBoundingClientRect().left
      const clientX = getCoordsByEvent(e as any).clientX
      const newValue =
        ((clientX - sliderOffsetLeft) /
          (sliderLineRef.value! as HTMLElement).offsetWidth) *
        100
      setValuePosition(newValue)
    }

    function getStepStyles({
      step,
      index,
    }: {
      step: TStepItem
      index: number
    }): any {
      const styles: { [key: string]: any } = {
        left: `${step.left}%`,
        height: null,
      }
      if (index === 0 || index === steps.value.length - 1) {
        styles.height = `${DEFAULT_STEP_HEIGHT}px`
      }
      return styles
    }

    return {
      valuePosition,
      steps,
      sliderLineRef,
      keyEvent,
      onMouseOrTouchDown,
      onSliderClick,
      getStepStyles,
      Placement,
    }
  },
})
</script>

<style lang="css">
@import url('slider.css');
</style>
