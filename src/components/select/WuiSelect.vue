<template>
  <div class="wui-select">
    <span v-if="labelTop || labelTopSlotExist" class="wui-input-label">
      <slot name="label-top" :props="props">
        {{ labelTop }}
      </slot>
    </span>

    <div class="wui-select-inner">
      <div
        ref="trigger"
        v-clickout="() => setOpen(false)"
        :tabindex="disabled ? -1 : 0"
        class="wui-select-selection"
        :class="selectionClasses"
        @click="toggleDropdown"
        @keydown.tab="() => setOpen(false)"
        @keydown.down.stop.prevent="handleKey(EDirections.DOWN)"
        @keydown.up.stop.prevent="handleKey(EDirections.UP)"
        @keydown.esc.stop.prevent="() => setOpen(false)"
        @keydown.enter.stop.prevent="handleEnterKey"
      >
        <span v-if="wrappedValue.value" class="wui-select-selected">
          <slot name="selected-option" :props="props">
            {{ wrappedValue.label }}
          </slot>
        </span>

        <span v-else class="wui-select-placeholder">
          <slot name="placeholder" :props="props">
            {{ placeholder }}
          </slot>
        </span>

        <slot name="icon" :props="props">
          <span
            class="wui-select-arrow icon-ph-caret-down"
            :class="show && 'wui-select-arrow--active'"
          />
        </slot>
      </div>

      <transition name="drop-bottom">
        <div v-if="show" class="wui-select-dropdown" :class="dropdownClasses">
          <ul
            :ref="(dropdown) => setSelectListRef(dropdown as any)"
            class="wui-select-list"
          >
            <li
              v-for="(option, optionIndex) in optionsSafe"
              :key="optionIndex"
              :ref="(el) => setOptionRef(el as any, optionIndex)"
              class="wui-select-option"
              :class="
                indexFocusedOption === optionIndex && CLASS_SELECTED_OPTION
              "
              @click="selectOption(optionIndex)"
            >
              <slot name="option" :props="props" :option="option">
                {{ getOptionName(option) }}
                <transition name="fade-right">
                  <span
                    v-if="wrappedValue['value'] === getOptionValue(option)"
                    class="wui-select-option-check"
                  />
                </transition>
              </slot>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import { clickOutside } from '../../directives'
import { useCheckSlot } from '../../hooks'
import { Positions, EDirections } from '../../models/enums'
import { TProps, TEmit } from '../../ui.types'
import { ALLOWED_POSITION, CLASS_SELECTED_OPTION } from './constants'
import { useSelect } from './hooks'
import { TOption, TSelectProps } from './types'

export default defineComponent({
  name: 'WuiSelect',
  directives: {
    clickout: clickOutside,
  },
  props: {
    placement: {
      type: String,
      default: Positions.B,
      validator: (value: Positions) => ALLOWED_POSITION.includes(value),
    },
    disabled: { type: Boolean, default: false },
    divided: { type: Boolean, default: false },
    labelTop: { type: String, default: null },
    placeholder: { type: String, default: 'Select option' },
    options: {
      type: Array as PropType<TOption[]>,
      default: () => [],
    },
    modelValue: { type: [String, Number, Object], default: null },
  },
  emits: ['update:model-value'],
  setup(props: TProps, { emit, slots }) {
    const labelTopSlotExist = useCheckSlot(slots, 'label-top') != null

    const {
      wrappedValue,
      getOptionName,
      getOptionValue,
      setOptionRef,
      indexFocusedOption,
      optionsRefs,
      show,
      handleEnterKey,
      setOpen,
      setSelectListRef,
      toggleDropdown,
      selectOption,
      optionsSafe,
      handleKey,
    } = useSelect(props as TSelectProps, emit as TEmit)

    const selectionClasses = computed(() => ({
      'wui-select-selection--disabled': props.disabled,
      'wui-select-selection--active': show.value,
    }))

    const dropdownClasses = computed(() => ({
      [props.placement
        ? `wui-select-dropdown--${props.placement}`
        : `wui-select-dropdown--${Positions.B}`]: true,
      'wui-select-dropdown--divided': props.divided,
    }))

    return {
      labelTopSlotExist,
      CLASS_SELECTED_OPTION,
      wrappedValue,
      getOptionName,
      getOptionValue,
      setOptionRef,
      indexFocusedOption,
      optionsRefs,
      optionsSafe,
      show,
      handleEnterKey,
      setOpen,
      setSelectListRef,
      toggleDropdown,
      selectOption,
      handleKey,
      selectionClasses,
      dropdownClasses,
      props,
      EDirections,
    }
  },
})
</script>

<style lang="css" scoped>
@import url('select.css');
</style>
