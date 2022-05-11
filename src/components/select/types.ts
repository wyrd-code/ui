import type { Ref, ComputedRef } from 'vue'

import { EDirections } from '../../models/enums'

export type TOption = string | number | TSelectOption

export type TSelectOption = {
  value: string | number
  label: string | number
  icon?: string
}

export type TSelectProps = {
  modelValue: TOption | null
  disabled: boolean
  options: TOption[]
}

export type TSelect = {
  wrappedValue: ComputedRef<TSelectOption>
  getOptionName: (option: TOption) => string | number
  getOptionValue: (option: TOption) => string | number
  setOptionRef: (el: HTMLElement, i: number) => void
  indexFocusedOption: Ref<number>
  optionsRefs: Ref<HTMLElement[]>
  optionsSafe: ComputedRef<TSelectOption[]>
  show: Ref<boolean>
  handleEnterKey: () => void
  setOpen: (state: boolean) => void
  toggleDropdown: () => void
  selectOption: (optionIndex: number) => void
  setSelectListRef: (dropdown: HTMLElement) => void
  handleKey: (type: EDirections) => void
}
