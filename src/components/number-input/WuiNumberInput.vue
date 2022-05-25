<template>
  <div>
    <span class="wui-input-label">{{ labelTop }}</span>
    <div class="wui-number-field">
      <WuiButton
        v-if="!hideControls"
        type="neutral"
        outline
        :disabled="disabled || disableController('minus')"
        @click="decrease"
        @mousedown="press('minus')"
      >
        <span class="icon-ph-minus" />
      </WuiButton>

      <div
        class="wui-number-input"
        :class="[
          disabled && 'wui-number-input--disabled',
          hideControls && 'wui-number-input-original--nocontrols',
        ]"
      >
        <input
          ref="input"
          type="number"
          :value="modelValue"
          class="wui-number-input-original"
          :disabled="disabled"
          :max="max"
          :min="min"
          :style="{ width: width + 'px' }"
          v-bind="$attrs"
          @input="onInput"
          @keydown.up.stop.prevent="increase"
          @keydown.down.stop.prevent="decrease"
        />
        <div ref="buffer" class="wui-number-input-buffer">
          {{ modelValue }}
        </div>
      </div>
      <WuiButton
        v-if="!hideControls"
        type="neutral"
        outline
        :disabled="disabled || disableController('plus')"
        @click="increase"
        @mousedown="press('plus')"
      >
        <span class="icon-ph-plus" />
      </WuiButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, nextTick, onMounted } from 'vue'

import type { Timeout } from '../../ui.types'

export default defineComponent({
  name: 'WuiNumberInput',
  inheritAttrs: false,
  props: {
    resizeOnWrite: Boolean,
    disabled: Boolean,
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity },
    step: { type: Number, default: 1 },
    hideControls: Boolean,
    labelTop: { type: String, default: null },
    modelValue: { type: [Number, String], default: 0 },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    const width = ref<number | null>(null)
    const buffer = ref(null)

    onMounted(() => {
      width.value = (buffer.value! as HTMLDivElement).clientWidth
    })

    watch(
      () => props.modelValue,
      async () => {
        if (props.resizeOnWrite) {
          await nextTick()
          width.value = (buffer.value! as HTMLDivElement).clientWidth
        }
      }
    )

    // controllers +/-

    const interval = ref<Timeout | null>(null)

    function press(type: 'plus' | 'minus') {
      if (props.disabled || disableController(type)) return

      const handler = type === 'plus' ? increase : decrease
      interval.value = setInterval(handler, 140)
      window.addEventListener(
        'mouseup',
        () => {
          clearInterval(interval.value!)
        },
        { once: true }
      )
    }

    function disableController(type: 'plus' | 'minus'): boolean {
      if (props.modelValue <= props.min && type === 'minus') {
        return true
      }
      if (props.modelValue >= props.max && type === 'plus') {
        return true
      }
      return false
    }

    // common behavior

    function calculateStep(stepType: 'plus' | 'minus') {
      if (props.disabled) return

      let value = Number(props.modelValue)
      const step = Number(props.step)

      switch (stepType) {
        case 'plus':
          value += step
          break
        case 'minus':
          value -= step
          break
      }

      if (value > props.max) {
        value = props.max
      }
      if (value < props.min) {
        value = props.min
      }

      emit('update:model-value', Number(value.toFixed(10)))
    }

    function increase() {
      if (props.disabled || props.modelValue >= props.max) return
      calculateStep('plus')
    }

    function decrease() {
      if (props.disabled || props.modelValue <= props.min) return
      calculateStep('minus')
    }

    // input behavior

    function onInput(e: Event, watchVal?: number) {
      const newVal = watchVal ?? Number((e.target as HTMLInputElement).value)

      if (newVal > props.max) {
        emit('update:model-value', props.max)
        return
      } else if (newVal < props.min) {
        emit('update:model-value', props.min)
        return
      }
      emit('update:model-value', newVal)
    }

    return {
      onInput,
      increase,
      decrease,
      disableController,
      press,
      width,
      buffer,
    }
  },
})
</script>
