<template>
  <div
    class="wui-slider"
    :class="{ 'wui-slider--disabled': disabled }"
    :tabindex="disabled ? -1 : 0"
    @keydown.down.left.stop.prevent="keyEvent(Positions.L)"
    @keydown.up.right.stop.prevent="keyEvent(Positions.R)"
  >
    <span v-if="labelTop" class="wui-slider-label">{{ labelTop }}</span>
    <div
      ref="sliderLineRef"
      class="wui-slider-line"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="onSliderClick"
      @touchend="onSliderClick"
    >
      <div class="wui-slider-bar" :style="{ width: `${valuePosition}%` }" />
      <div
        class="wui-slider-controller-wrapper"
        :style="{ left: `${valuePosition}%` }"
        @mousedown="onMouseOrTouchDown"
        @touchstart.prevent="onMouseOrTouchDown"
      >
        <wui-tooltip ref="tooltipRef" :content="modelValue">
          <div class="wui-slider-controller" />
        </wui-tooltip>
      </div>
    </div>
    <div v-if="stepPoints && stepsPoints.length" class="wui-slider-wrap-points">
      <div
        v-for="(point, index) in stepsPoints"
        :key="point.left"
        class="wui-slider-point"
        :style="getStepPointStyles({ step: point, index })"
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

import { Positions } from '../../models/enums'
import Tooltip from '../tooltip/WuiTooltip.vue'
import { DEFAULT_STEP_POINT_HEIGHT, DEFAULT_PROPS } from './constants'
import { getTotalPosition, getCoordsByEvent } from './helpers'
import { useStepsPoints, useValuePosition } from './hooks'
import { TStepItem, TKeyEvents, TTotalValuePosition } from './types'

export default defineComponent({
  name: 'WuiSlider',
  props: {
    labelTop: {
      type: String,
      default: null,
    },
    disabled: Boolean,
    stepPoints: Boolean,
    numbers: Boolean,
    min: { type: Number, default: DEFAULT_PROPS.MIN },
    max: { type: Number, default: DEFAULT_PROPS.MAX },
    step: { type: Number, default: DEFAULT_PROPS.STEP },
    modelValue: { type: Number, default: DEFAULT_PROPS.VALUE },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    const sliderLineRef = ref(null)
    const tooltipRef = ref<typeof Tooltip | null>(null)

    const startX = ref(0)
    const currentX = ref(0)

    const startPos = ref(0)
    const newPos = ref(0)

    const dragging = ref(false)

    const [valuePosition, setValuePosition] = useValuePosition(
      props,
      emit as any
    )

    const stepsPoints: ComputedRef<TStepItem[]> = useStepsPoints(
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

    function keyEvent(key: TKeyEvents) {
      if (props.disabled) return
      tooltipRef.value!.showPopover()

      const moreValue = [Positions.T, Positions.R].includes(key)
      const lessValue = [Positions.B, Positions.L].includes(key)
      const newValue = moreValue
        ? props.modelValue + props.step
        : lessValue
        ? props.modelValue - props.step
        : props.modelValue

      if (moreValue) {
        emit('update:model-value', newValue)
      } else if (lessValue) {
        emit('update:model-value', newValue)
      }
    }

    function onMouseOrTouchDown(e: MouseEvent | TouchEvent) {
      if (props.disabled) return
      onDragStart(e as any)
      window.addEventListener('mousemove', onDragging)
      window.addEventListener('mouseup', onDragEnd)
      window.addEventListener('touchmove', onDragging)
      window.addEventListener('touchend', onDragEnd)
    }

    function onDragStart(e: MouseEvent & TouchEvent) {
      dragging.value = true
      startX.value = getCoordsByEvent(e).clientX
      startPos.value = valuePosition.value
      tooltipRef.value!.showPopover()
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
        window.removeEventListener('mousemove', onDragging)
        window.removeEventListener('mouseup', onDragEnd)
        window.removeEventListener('touchmove', onDragging)
        window.removeEventListener('touchend', onDragEnd)
      }
    }

    function onSliderClick(e: MouseEvent | TouchEvent) {
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

    function handleMouseEnter(e: Event) {
      tooltipRef.value!.handleMouseEnter(e)
    }

    function handleMouseLeave() {
      if (dragging.value) return
      tooltipRef.value!.handleMouseLeave()
    }

    function getStepPointStyles({
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
      if (index === 0 || index === stepsPoints.value.length - 1) {
        styles.height = `${DEFAULT_STEP_POINT_HEIGHT}px`
      }
      return styles
    }

    return {
      valuePosition,
      stepsPoints,
      sliderLineRef,
      tooltipRef,
      keyEvent,
      onMouseOrTouchDown,
      onSliderClick,
      handleMouseEnter,
      handleMouseLeave,
      getStepPointStyles,
      Positions,
    }
  },
})
</script>

<style lang="css" scoped>
@import url('slider.css');
</style>
