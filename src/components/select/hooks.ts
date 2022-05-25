import { ref, onBeforeUpdate, nextTick, computed } from 'vue'

import { EDirections } from '../../models/enums'
import { TEmit } from '../../ui.types'
import { CLASS_SELECTED_OPTION } from './constants'
import { getArrayIndexByDuration } from './helpers'
import { TOption, TSelectOption, TSelect, TSelectProps } from './types'

export const useSelect = (props: TSelectProps, emit: TEmit): TSelect => {
  const indexFocusedOption = ref(-1)
  const optionsRefs = ref<HTMLElement[]>([])
  const selectListRef = ref<HTMLElement | undefined>(undefined)
  let selectedOptionIndex: number = -1
  const show = ref(false)

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

  const getOptionName = (option: TOption) =>
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

  const setOpen = (state = false) => (show.value = state)

  const toggleDropdown = async () => {
    if (props.disabled) {
      setOpen(false)
      return
    } else if (show.value) {
      setOpen(false)
    } else {
      unfocusOption()
      setOpen(true)
      await nextTick()
      if (props.modelValue) scrollToSelectedOption()
    }
  }

  const selectOption = (optionIndex: number) => {
    const option = optionsSafe.value[optionIndex]
    selectedOptionIndex = optionIndex
    emit('update:model-value', option.value)
  }

  const unfocusOption = () => {
    if (indexFocusedOption.value === -1) return
    indexFocusedOption.value = -1
  }

  const handleKey = async (duration: EDirections) => {
    if (!show.value || !props.options.length) return
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
    if (!show.value || indexFocusedOption.value === -1) {
      toggleDropdown()
      return
    }
    selectOption(indexFocusedOption.value)
    setOpen(false)
  }

  const wrappedValue = computed<TSelectOption>(() => {
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

  return {
    wrappedValue,
    getOptionValue,
    getOptionName,
    setOptionRef,
    indexFocusedOption,
    optionsSafe,
    optionsRefs: optionsRefs as any,
    show,
    handleEnterKey,
    setOpen,
    toggleDropdown,
    selectOption,
    setSelectListRef,
    handleKey,
  }
}
