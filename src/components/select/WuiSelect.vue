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
        :id="id"
        ref="trigger"
        class="wui-select-selection"
        role="combobox"
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
          <WuiButton
            :tabindex="disabled ? -1 : 0"
            icon
            shape="square"
            size="sm"
            ghost
            class="wui-select-reset"
            v-on="disabled ? {} : { keydown: handleResetKeypress }"
            @click.stop.prevent="clear"
          >
            <span class="icon-ph-x" />
          </WuiButton>
        </span>

        <span v-else class="wui-select-placeholder">
          <slot name="placeholder" :props="props">
            {{ placeholder }}
          </slot>
        </span>

        <span class="wui-select-controls">
          <slot name="icon" :props="props">
            <span
              class="wui-select-arrow icon-ph-caret-up-down"
              :class="isOpen && 'wui-select-arrow--active'"
            />
          </slot>
        </span>
      </div>
    </template>

    <template #content>
      <div v-if="isOpen" class="wui-select-dropdown" :data-divided="divided">
        <ul
          :ref="(dropdown) => setSelectListRef(dropdown as any)"
          class="wui-select-list"
        >
          <template
            v-for="(option, optionIndex) in optionsSafe"
            :key="optionIndex"
          >
            <li v-if="isSeparator(option)" class="wui-select-separator" />
            <li
              v-else
              :id="`${id}-item-${optionIndex}`"
              :ref="(el) => setOptionRef(el as any, optionIndex)"
              class="wui-select-option"
              :data-selected="focusedOptionIndex === optionIndex"
              :data-disabled="option.disabled"
              @keydown.enter.stop.prevent="selectOption(optionIndex)"
              @click="selectOption(optionIndex)"
            >
              <div>
                <slot name="option" :props="props" :option="option">
                  {{ option.label }}
                </slot>
              </div>
              <transition name="fade-right">
                <span
                  v-if="selectedOption['value'] === getOptionValue(option)"
                  class="wui-select-option-check icon-ph-check-bold"
                />
              </transition>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
import { ref, onBeforeUpdate, nextTick, computed, VNodeRef } from 'vue'

import {
  getActionFromKey,
  MenuActions,
  scrollParentToChild,
  Keys,
} from '@/utilities'

import {
  TOption,
  TSelectOption,
  TSelectSeparator,
  WUI_SELECT_PROPS,
  getIndexByLetter,
  isSeparator,
  isValuedOption,
} from './select'

const props = defineProps(WUI_SELECT_PROPS)

const emit = defineEmits(['update:modelValue'])

const focusedOptionIndex = ref(-1)
const optionsRefs = ref<HTMLElement[]>([])
const trigger = ref<VNodeRef | null>(null)
const selectListRef = ref<HTMLElement | undefined>(undefined)
let selectedOptionIndex: number = -1
const isOpen = ref(false)

// Internally, always use the safe version (where each option is an obj with value and label)
const optionsSafe = computed<(TSelectOption | TSelectSeparator)[]>(() =>
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

const optionsSafeValued = computed<TSelectOption[]>(() =>
  optionsSafe.value.filter(isValuedOption)
)

onBeforeUpdate(() => (optionsRefs.value = []))

const scrollToSelectedOption = () => scrollToOptionByIndex(selectedOptionIndex)

const scrollToFocusedOption = () =>
  scrollToOptionByIndex(focusedOptionIndex.value)

const scrollToOptionByIndex = (index: number) => {
  if (selectListRef.value === undefined) {
    return
  }

  const optionToScrollTo = optionsRefs.value[index]

  scrollParentToChild(selectListRef.value, optionToScrollTo)
}

const getOptionValue = (option: TOption) =>
  (isValuedOption(option) && option.value) || undefined

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

const clear = () => {
  closeDropdown()
  selectedOptionIndex = -1
  emit('update:modelValue', null)
}

const selectOption = (optionIndex: number) => {
  const option = optionsSafe.value[optionIndex]
  if (!isValuedOption(option) || option.disabled) {
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

  const option = optionsSafeValued.value.find(
    (o) => o.value === props.modelValue
  )

  if (option) {
    return option
  }

  // Note: should we be handling this or throwing?
  if (typeof props.modelValue === 'object') {
    return props.modelValue as TSelectOption
  }

  result.label = props.modelValue
  result.value = props.modelValue

  return result
})

// eslint-disable-next-line complexity
const handleResetKeypress = async (event: KeyboardEvent) => {
  const action = getActionForKeypress(event)
  if (!action) return

  const { key } = event
  if ([Keys.Enter, Keys.Space].includes(key as Keys)) {
    clear()
  }
  event.stopPropagation()
  trigger.value?.focus()
}

// eslint-disable-next-line complexity
const handleKeypress = async (event: KeyboardEvent) => {
  const action = getActionForKeypress(event)
  if (!action) return

  switch (action) {
    case MenuActions.Next:
    case MenuActions.Last:
    case MenuActions.First:
    case MenuActions.Previous:
      return handleDirectionKey(event, action)
    case MenuActions.CloseSelect:
    case MenuActions.Space:
      return handleCloseWithSelecting()
    case MenuActions.Close:
      return closeDropdown()
    case MenuActions.Type:
      return handleTypingSearch(event)
    case MenuActions.Open:
      return handleOpenViaKey(event)
  }
}

const handleOpenViaKey = async (event: KeyboardEvent) => {
  event.preventDefault()
  openDropdown()
  await nextTick()
  if (props.modelValue) scrollToSelectedOption()
}

const getFocusedOption = () =>
  optionsSafe.value[focusedOptionIndex.value] as TSelectOption | undefined

const getActionForKeypress = (event: KeyboardEvent) => {
  const focusedOption = getFocusedOption()
  const isFocusedOptionDisabled = focusedOption?.disabled || false

  return getActionFromKey(event, isOpen.value, isFocusedOptionDisabled)
}

const handleCloseWithSelecting = () => {
  if (!isOpen.value || focusedOptionIndex.value === -1) {
    openDropdown()
    return
  }
  selectOption(focusedOptionIndex.value)
}

const handleTypingSearch = (event: KeyboardEvent) => {
  if (!isOpen.value) {
    return
  }

  const { key } = event
  const searchString = getSearchString(key)
  const optionToFocusIndex = getIndexByLetter(
    optionsSafe.value,
    searchString,
    'label'
  )

  if (optionToFocusIndex !== -1) {
    focusedOptionIndex.value = optionToFocusIndex
    scrollToFocusedOption()
  }
}

const handleDirectionKey = async (
  event: KeyboardEvent,
  menuAction: MenuActions
) => {
  event.preventDefault()

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

type GetArrayIndexByDirectionProps = {
  menuAction: MenuActions
  max: number
  curIndex: number
}

const getArrayIndexByDirection = ({
  menuAction,
  max,
  curIndex,
}: GetArrayIndexByDirectionProps): number => {
  switch (menuAction) {
    case MenuActions.First:
      return 0
    case MenuActions.Last:
      return max
    case MenuActions.Previous:
      return getPreviousFocusableIndex(curIndex, max)
    case MenuActions.Next:
      return getNextFocusableIndex(curIndex, max)
    default:
      return curIndex
  }
}

const getPreviousFocusableIndex = (curIndex: number, max: number) => {
  const previousIndex = Math.max(0, curIndex - 1)

  if (isFocusableIndex(previousIndex)) {
    return previousIndex
  }

  if (previousIndex === 0) {
    return curIndex
  }

  return getPreviousFocusableIndex(previousIndex, max)
}

const getNextFocusableIndex = (curIndex: number, max: number) => {
  const nextIndex = Math.min(max, curIndex + 1)

  if (isFocusableIndex(nextIndex)) {
    return nextIndex
  }

  if (nextIndex === max) {
    return curIndex
  }

  return getNextFocusableIndex(nextIndex, max)
}

const isFocusableIndex = (index: number) =>
  isValuedOption(optionsSafe.value[index])

let searchTimeout: ReturnType<typeof setTimeout> | null = null
let searchString = ''

const getSearchString = (char: string) => {
  const multimatchTimeout = 750

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

const activeDescendant = computed(() =>
  isOpen.value && focusedOptionIndex.value !== -1
    ? `${props.id}-item-${focusedOptionIndex.value}`
    : ''
)
</script>

<style lang="css">
@import url('select.css');
</style>
