import type { ExtractPropTypes, PropType, VNodeRef } from 'vue'
import { ref, onBeforeUpdate, nextTick, computed } from 'vue'

import { Placement } from '@/domain'
import {
  getActionFromKey,
  MenuActions,
  scrollParentToChild,
  Keys,
  removeArrayItemByValue,
} from '@/utilities'

export type TSelectOption = string | TSelectSeparator | TSelectValuedOption

export type TSelectSeparator = {
  role: 'separator'
}

export type TSelectValuedOption = {
  value: string | number
  label: string | number
  icon?: string
  disabled?: boolean
}

export const ALLOWED_PLACEMENT = [
  Placement.Top,
  Placement.Bottom,
  Placement.Left,
  Placement.Right,
  Placement.TopStart,
  Placement.TopEnd,
  Placement.BottomStart,
  Placement.BottomEnd,
]

export const WUI_SELECT_PROPS = {
  options: {
    type: Array as PropType<TSelectOption[]>,
    default: () => [],
  },
  modelValue: {
    type: [String, Number, Array] as PropType<
      string | number | Array<string | number>
    >,
    default: null,
  },
  placement: {
    type: String,
    default: Placement.Bottom,
    validator: (value: Placement) => ALLOWED_PLACEMENT.includes(value),
  },
  multiple: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  divided: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Select option' },
  id: { type: String, default: null },
}

type TProps = Readonly<ExtractPropTypes<typeof WUI_SELECT_PROPS>>

const isSeparator = (option: TSelectOption): option is TSelectSeparator =>
  typeof option === 'object' && 'role' in option && option.role === 'separator'

const isValuedOption = (option: TSelectOption): option is TSelectValuedOption =>
  typeof option === 'object' && 'value' in option

// type TPropsBase = Readonly<ExtractPropTypes<typeof WUI_SELECT_BASE_PROPS>>

// type TProps = TPropsBase & {
//   readonly modelValue: string | number | Array<string | number> | null
// }

export const useSelect = (
  props: TProps,
  emit: (event: 'update:modelValue', ...args: any[]) => void
) => {
  const isOpen = ref(false)
  const optionsRefs = ref<HTMLElement[]>([])
  const trigger = ref<VNodeRef | null>(null)
  const selectListRef = ref<HTMLElement | undefined>(undefined)

  const focusedOptionIndex = ref(-1)
  const selectedOptionsIndexes = ref<Array<number>>([])

  // TODO set initial values from props & handle changes of props

  // Internally, always use the safe version (where each option is an obj with value and label)
  const optionsSafe = computed<(TSelectValuedOption | TSelectSeparator)[]>(() =>
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

  const optionsSafeValued = computed<TSelectValuedOption[]>(() =>
    optionsSafe.value.filter(isValuedOption)
  )

  onBeforeUpdate(() => (optionsRefs.value = []))

  const getFirstSelectedOptionIndex = () => {
    if (props.multiple) {
      return Math.min(...selectedOptionsIndexes.value)
    }
    return selectedOptionsIndexes.value[0]
  }

  const scrollToSelectedOption = () => {
    scrollToOptionByIndex(getFirstSelectedOptionIndex())
  }

  const scrollToFocusedOption = () =>
    scrollToOptionByIndex(focusedOptionIndex.value)

  const scrollToOptionByIndex = (index: number) => {
    if (selectListRef.value === undefined) {
      return
    }

    const optionToScrollTo = optionsRefs.value[index]

    scrollParentToChild(selectListRef.value, optionToScrollTo)
  }

  const setOptionRef = (el: HTMLElement, i: number) => {
    if (el) {
      optionsRefs.value[i] = el as any
    }
  }

  const setSelectListRef = (el: HTMLElement) => {
    if (el) {
      selectListRef.value = el as any
    }
  }

  const setTriggerRef = (el: HTMLElement) => {
    if (el) {
      trigger.value = el as any
    }
  }

  const closeDropdown = () => {
    isOpen.value = false
    trigger.value?.focus()
  }

  const openDropdown = async () => {
    if (props.disabled) {
      return
    }
    unfocusOption()
    isOpen.value = true
    await nextTick()
    if (props.modelValue) {
      focusedOptionIndex.value = getFirstSelectedOptionIndex()
      scrollToFocusedOption()
    }
  }

  const clear = () => {
    closeDropdown()
    selectedOptionsIndexes.value.length = 0
    emit('update:modelValue', null)
  }

  const selectOption = (index: number, event?: MouseEvent | KeyboardEvent) => {
    event?.preventDefault()

    const option = optionsSafe.value[index]
    if (!isValuedOption(option) || option.disabled) {
      return
    }

    // Multiple
    if (props.multiple) {
      const isAlreadySelected = selectedOptionsIndexes.value.includes(index)
      if (!isAlreadySelected) {
        selectedOptionsIndexes.value.push(index)
      } else {
        selectedOptionsIndexes.value = removeArrayItemByValue(
          selectedOptionsIndexes.value,
          index
        )
      }
      focusedOptionIndex.value = index
      scrollToFocusedOption()
      trigger.value?.focus()
      emit('update:modelValue', selectedValues.value)
      return
    }

    // Single
    selectedOptionsIndexes.value = [index]
    emit('update:modelValue', option.value)
    closeDropdown()
  }

  const isOptionSelected = (index: number) =>
    selectedOptionsIndexes.value.includes(index)

  const unfocusOption = () => {
    if (focusedOptionIndex.value === -1) return
    focusedOptionIndex.value = -1
  }

  const selectedOption = computed<TSelectValuedOption>(() => {
    const result: TSelectValuedOption = { label: '', value: '' }

    if (props.modelValue == null) {
      return result
    }

    const option = optionsSafeValued.value.find(
      (o) => o.value === props.modelValue
    )

    if (option) {
      return option
    }

    throw new Error('Cannot find selected option')
  })

  const selectedOptions = computed<TSelectValuedOption[]>(() =>
    selectedOptionsIndexes.value.map(
      (i) => optionsSafe.value[i] as TSelectValuedOption
    )
  )
  const selectedValues = computed<Array<string | number>>(() =>
    selectedOptions.value.map((item) => item.value)
  )

  // Note: this is used by higher order components such as TagInput
  const unselectOptionByValue = (value: string | number) => {
    const index = optionsSafeValued.value.findIndex((o) => o.value === value)
    selectedOptionsIndexes.value = removeArrayItemByValue(
      selectedOptionsIndexes.value,
      index
    )
    emit('update:modelValue', selectedValues.value)
  }

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
        return handleCloseWithSelecting(event)
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
    const hasValues = props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length
      : props.modelValue != null
    if (hasValues) scrollToSelectedOption()
  }

  const getFocusedOption = () =>
    optionsSafe.value[focusedOptionIndex.value] as
      | TSelectValuedOption
      | undefined

  const getActionForKeypress = (event: KeyboardEvent) => {
    const focusedOption = getFocusedOption()
    const isFocusedOptionDisabled = focusedOption?.disabled || false

    return getActionFromKey(event, isOpen.value, isFocusedOptionDisabled)
  }

  const handleCloseWithSelecting = (event) => {
    if (!isOpen.value || focusedOptionIndex.value === -1) {
      openDropdown()
      return
    }
    selectOption(focusedOptionIndex.value, event)
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

  return {
    activeDescendant,
    clear,
    closeDropdown,
    focusedOptionIndex,
    isOptionSelected,
    handleKeypress,
    handleResetKeypress,
    isOpen,
    isSeparator,
    isValuedOption,
    openDropdown,
    options: optionsSafe,
    selectedOption,
    selectedOptions,
    selectOption,
    setOptionRef,
    setSelectListRef,
    setTriggerRef,
    unselectOptionByValue,
  }
}

export function getIndexByLetter(
  options: (TSelectValuedOption | TSelectSeparator)[],
  filter: string,
  labelField: string
  // startIndex = 0
): number {
  // const orderedOptions = [
  //   ...options.slice(startIndex),
  //   ...options.slice(0, startIndex),
  // ]
  const firstMatch = searchOptions(options, filter, labelField)[0]
  const allSameLetter = (array: string[]) =>
    array.every((letter) => letter === array[0])

  // first check if there is an exact match for the typed string
  if (firstMatch) {
    return options.indexOf(firstMatch)
  }

  // if the same letter is being repeated, cycle through first-letter matches
  else if (allSameLetter(filter.split(''))) {
    const matches = searchOptions(options, filter[0], labelField)
    return options.indexOf(matches[0])
  }

  // if no matches, return -1
  else {
    return -1
  }
}

// filter an array of options against an input string
// returns an array of options that begin with the filter string, case-independent
export function searchOptions(
  options: (TSelectValuedOption | TSelectSeparator)[] = [],
  filter: string,
  labelField: string
  // exclude: TSelectValuedOption[] = [],
  // optionLabelForSearching: null | ((option: TSelectValuedOption) => string) = null
): TSelectValuedOption[] {
  return options.filter((option) => {
    if (!isValuedOption(option)) {
      return
    }

    // NOTE: Changed from original implementation on sonder-ui:
    // we want to match any instance of the current user string,
    // rather than *only* when the user's string is at the beginning of an option
    // const label = optionLabelForSearching
    //   ? optionLabelForSearching(option)
    //   : option[labelField]
    const label = option[labelField]
    const matches = label?.toLowerCase().includes(filter.toLowerCase())

    return matches // && exclude.indexOf(option) < 0
  }) as TSelectValuedOption[]
}
