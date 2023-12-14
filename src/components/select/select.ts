import type { Ref, ComputedRef } from 'vue'

import { EDirections } from '@/domain'
import { Placement } from '@/domain'

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
  selectedOption: ComputedRef<TSelectOption>
  getOptionLabel: (option: TOption) => string | number
  getOptionValue: (option: TOption) => string | number
  setOptionRef: (el: HTMLElement, i: number) => void
  indexFocusedOption: Ref<number>
  optionsRefs: Ref<HTMLElement[]>
  optionsSafe: ComputedRef<TSelectOption[]>
  isOpen: Ref<boolean>
  handleEnterKey: () => void
  setOpen: (state: boolean) => void
  toggleDropdown: () => void
  selectOption: (optionIndex: number) => void
  setSelectListRef: (dropdown: HTMLElement) => void
  handleKey: (type: EDirections) => void
}

export const ALLOWED_POSITION = [
  Placement.Top,
  Placement.Bottom,
  Placement.Left,
  Placement.Right,
  Placement.TopStart,
  Placement.TopEnd,
  Placement.BottomStart,
  Placement.BottomEnd,
]

export const CLASS_SELECTED_OPTION = 'wui-select-option--focused'

type Props = {
  duration: EDirections
  array: []
  curIndex: number
}

export const getArrayIndexByDuration = ({
  duration,
  array,
  curIndex,
}: Props): number => {
  const resultMap = {
    [EDirections.UP]: curIndex <= 0 ? array.length - 1 : curIndex - 1,
    [EDirections.DOWN]: curIndex === array.length - 1 ? 0 : curIndex + 1,
  }
  return resultMap[duration]
}
