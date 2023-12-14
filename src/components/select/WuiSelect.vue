<template>
  <WuiPopover
    class="wui-select"
    :placement="placement"
    :show="isOpen"
    @close="() => setOpen(false)"
    @open="() => setOpen(true)"
  >
    <template #button>
      <div
        :tabindex="disabled ? -1 : 0"
        class="wui-select-selection"
        :class="selectionClasses"
        @keydown.tab="() => setOpen(false)"
        @keydown.down.stop.prevent="handleKey(EDirections.DOWN)"
        @keydown.up.stop.prevent="handleKey(EDirections.UP)"
        @keydown.esc.stop.prevent="() => setOpen(false)"
        @keydown.enter.stop.prevent="handleEnterKey"
      >
        <span v-if="selectedOption.value" class="wui-select-selected">
          <slot
            name="selected-option"
            :props="props"
            :selected-option="selectedOption"
          >
            {{ selectedOption.label }}
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
            :class="isOpen && 'wui-select-arrow--active'"
          />
        </slot>
      </div>
    </template>

    <template #content>
      <div class="wui-select-inner">
        <div
          v-if="isOpen"
          class="wui-select-dropdown"
          :class="dropdownClasses"
        >
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
              @keydown.enter.stop.prevent="selectOption(optionIndex)"
              @click="selectOption(optionIndex)"
            >
              <slot name="option" :props="props" :option="option">
                {{ getOptionLabel(option) }}
                <transition name="fade-right">
                  <span
                    v-if="selectedOption['value'] === getOptionValue(option)"
                    class="wui-select-option-check"
                  />
                </transition>
              </slot>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, onBeforeUpdate, nextTick, computed } from 'vue'

import { Placement, EDirections } from '@/domain'

import {
  ALLOWED_POSITION,
  CLASS_SELECTED_OPTION,
  TOption,
  TSelectOption,
  getArrayIndexByDuration,
} from './select'

const props = defineProps({
  placement: {
    type: String,
    default: Placement.Bottom,
    validator: (value: Placement) => ALLOWED_POSITION.includes(value),
  },
  disabled: { type: Boolean, default: false },
  divided: { type: Boolean, default: false },
  label: { type: String, default: null },
  placeholder: { type: String, default: 'Select option' },
  options: {
    type: Array as PropType<TOption[]>,
    default: () => [],
  },
  modelValue: { type: [String, Number, Object], default: null },
})

const emit = defineEmits(['update:modelValue'])

const indexFocusedOption = ref(-1)
const optionsRefs = ref<HTMLElement[]>([])
const selectListRef = ref<HTMLElement | undefined>(undefined)
let selectedOptionIndex: number = -1
const isOpen = ref(false)

// Internally, always use the safe version (where each option is an obj with value and label)
const optionsSafe = computed<TSelectOption[]>(() =>
  props.options.map((o) => {
    if (typeof o === 'object') {
      return o
    }
    return {
      value: o,
      label: o,
    }
  })
)

onBeforeUpdate(() => (optionsRefs.value = []))

const scrollToSelectedOption = () => {
  const selectedOption = optionsRefs.value[selectedOptionIndex]

  if (selectListRef.value !== undefined)
    selectListRef.value.scrollTop = selectedOption?.offsetTop
}

const getOptionLabel = (option: TOption) =>
  typeof option === 'object' ? option.label : option

const getOptionValue = (option: TOption) =>
  typeof option === 'object' ? option.value : option

const setOptionRef = (el: HTMLElement, i: number) => {
  if (el) {
    optionsRefs.value[i] = el as any
  }
}

const setSelectListRef = (dropdown: HTMLElement) => {
  if (dropdown) {
    selectListRef.value = dropdown as any
  }
}

const setOpen = (state = false) => (isOpen.value = state)

const toggleDropdown = async () => {
  if (props.disabled) {
    setOpen(false)
    return
  } else if (isOpen.value) {
    setOpen(false)
  } else {
    unfocusOption()
    setOpen(true)
    await nextTick()
    if (props.modelValue) scrollToSelectedOption()
  }
}

const selectOption = (optionIndex: number) => {
  setOpen(false)
  const option = optionsSafe.value[optionIndex]
  selectedOptionIndex = optionIndex
  emit('update:modelValue', option.value)
}

const unfocusOption = () => {
  if (indexFocusedOption.value === -1) return
  indexFocusedOption.value = -1
}

const handleKey = async (duration: EDirections) => {
  if (!isOpen.value || !props.options.length) return
  indexFocusedOption.value = getArrayIndexByDuration({
    duration,
    array: props.options as [],
    curIndex: indexFocusedOption.value,
  })
  await nextTick()
  const selectedEl = optionsRefs.value.find((r) =>
    r.className.includes(CLASS_SELECTED_OPTION)
  )
  selectedEl?.scrollIntoView({ block: 'nearest', inline: 'start' })
}

const handleEnterKey = () => {
  if (!isOpen.value || indexFocusedOption.value === -1) {
    toggleDropdown()
    return
  }
  selectOption(indexFocusedOption.value)
  setOpen(false)
}

const selectedOption = computed<TSelectOption>(() => {
  const result: TSelectOption = { label: '', value: '' }

  if (props.modelValue == null) {
    return result
  }

  const option = optionsSafe.value.find((o) =>
    typeof o === 'object'
      ? o.value === props.modelValue
      : o === props.modelValue
  )

  if (option) {
    return option
  }

  if (typeof props.modelValue === 'object') {
    return props.modelValue as TSelectOption
  }

  result.label = props.modelValue
  result.value = props.modelValue

  return result
})

const selectionClasses = computed(() => ({
  'wui-select-selection--disabled': props.disabled,
  'wui-select-selection--active': isOpen.value,
}))

const dropdownClasses = computed(() => ({
  [props.placement
    ? `wui-select-dropdown--${props.placement}`
    : `wui-select-dropdown--${Placement.Bottom}`]: true,
  'wui-select-dropdown--divided': props.divided,
}))
</script>

<style lang="css">
@import url('select.css');
</style>
