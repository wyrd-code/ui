<template>
  <WuiPopover
    class="wui-select"
    :placement="placement"
    :show="isOpen"
    @close="closeDropdown"
    @open="openDropdown"
  >
    <template #button>
      <div
        class="wui-select-selection"
        role="combobox"
        :id="id"
        :tabindex="disabled ? -1 : 0"
        :data-active="isOpen"
        :data-disabled="disabled"
        aria-autocomplete="none"
        :aria-activedescendant="activeDescendant"
        :aria-controls="`${id}-listbox`"
        :aria-labelledby="`${id}-label`"
        :aria-disabled="disabled"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-haspopup="listbox"
        v-on="disabled ? {} : { keydown: handleKeypress }"
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
            class="wui-select-arrow icon-ph-caret-up-down"
            :class="isOpen && 'wui-select-arrow--active'"
          />
        </slot>
      </div>
    </template>

    <template #content>
      <div
        v-if="isOpen"
        class="wui-select-dropdown"
        :data-divided="divided"
      >
        <ul
          :ref="(dropdown) => setSelectListRef(dropdown as any)"
          class="wui-select-list"
        >
          <li
            v-for="(option, optionIndex) in optionsSafe"
            class="wui-select-option"
            :id="`${id}-item-${optionIndex}`"
            :key="optionIndex"
            :ref="(el) => setOptionRef(el as any, optionIndex)"
            :data-selected="focusedOptionIndex === optionIndex"
            :data-disabled="option.disabled"
            @keydown.enter.stop.prevent="selectOption(optionIndex)"
            @click="selectOption(optionIndex)"
          >
            <div>
              <slot name="option" :props="props" :option="option">
                {{ getOptionLabel(option) }}
              </slot>
            </div>
            <transition name="fade-right">
              <span
                v-if="selectedOption['value'] === getOptionValue(option)"
                class="wui-select-option-check icon-ph-check-bold"
              />
            </transition>
          </li>
        </ul>
      </div>
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
import { ref, onBeforeUpdate, nextTick, computed } from 'vue'

import {
  TOption,
  TSelectOption,
  getArrayIndexByDirection,
  WUI_SELECT_PROPS,
  getActionFromKey,
  MenuActions,
  getIndexByLetter,
} from './select'

const props = defineProps(WUI_SELECT_PROPS)

const emit = defineEmits(['update:modelValue'])

const focusedOptionIndex = ref(-1)
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

const scrollToSelectedOption = () => scrollToOptionByIndex(selectedOptionIndex)

const scrollToFocusedOption = () => scrollToOptionByIndex(focusedOptionIndex.value)

const scrollToOptionByIndex = (index: number) => {
  const optionToScrollTo = optionsRefs.value[index]
  optionToScrollTo?.scrollIntoView({
    block: 'center',
    inline: 'start',
    behavior: 'smooth',
  })
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

const closeDropdown = () => {
  isOpen.value = false
}

const openDropdown = async () => {
  if (props.disabled) {
    return
  }
  unfocusOption()
  isOpen.value = true
  await nextTick()
  if (props.modelValue) {
    focusedOptionIndex.value = selectedOptionIndex
    scrollToFocusedOption()
  }
}

const selectOption = (optionIndex: number) => {
  const option = optionsSafe.value[optionIndex]
  if (option.disabled) {
    return
  }
  closeDropdown()
  selectedOptionIndex = optionIndex
  emit('update:modelValue', option.value)
  scrollToSelectedOption()
}

const unfocusOption = () => {
  if (focusedOptionIndex.value === -1) return
  focusedOptionIndex.value = -1
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

const onOptionChange = async () => {
  await nextTick()
  scrollToSelectedOption()
}

const handleKeypress = async (event: KeyboardEvent) => {
  const { key } = event
  const focusedOption = optionsSafe.value[focusedOptionIndex.value]
  const isFocusedOptionDisabled = focusedOption?.disabled || false
  const action = getActionFromKey(event, isOpen.value, isFocusedOptionDisabled)

  switch (action) {
    case MenuActions.Next:
    case MenuActions.Last:
    case MenuActions.First:
    case MenuActions.Previous:
      event.preventDefault()
      return handleDirectionKey(action)
    case MenuActions.CloseSelect:
    case MenuActions.Space:
      event.preventDefault()
      if (!isOpen.value || focusedOptionIndex.value === -1) {
        openDropdown()
        return
      }
      selectOption(focusedOptionIndex.value)
      break
    case MenuActions.Close:
      closeDropdown()
      break
    case MenuActions.Type: {
      openDropdown()

      const searchString = getSearchString(key)
      focusedOptionIndex.value = getIndexByLetter(optionsSafe.value, searchString, 'label')
      scrollToFocusedOption()
      return onOptionChange()
    }
    case MenuActions.Open:
      event.preventDefault()
      openDropdown()
      await nextTick()
      if (props.modelValue) scrollToSelectedOption()
      break
  }
}

const handleDirectionKey = async (menuAction: MenuActions) => {
  const max = optionsSafe.value.length - 1
  if (!isOpen.value || !max) return

  const optionIndexToFocus = getArrayIndexByDirection({
    menuAction,
    max,
    curIndex: focusedOptionIndex.value,
  })
  focusedOptionIndex.value = optionIndexToFocus
  scrollToFocusedOption()
}

let searchTimeout: ReturnType<typeof setTimeout> | null = null
let searchString = ''

const getSearchString = (char: string) => {
  const multimatchTimeout = 500

  // reset typing timeout and start new timeout
  // this allows us to make multiple-letter matches, like a native select
  if (typeof searchTimeout === 'number') {
    clearTimeout(searchTimeout)
  }

  searchTimeout = setTimeout(() => {
    searchString = ''
  }, multimatchTimeout)

  // add most recent letter to saved search string
  searchString += char
  return searchString
}

const activeDescendant = () => {
  return isOpen && focusedOptionIndex.value !== -1 ? `${props.id}-item-${focusedOptionIndex.value}` : ''
}
</script>

<style lang="css">
@import url('select.css');
</style>
