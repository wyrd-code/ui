import type { PropType } from 'vue'

import { Placement } from '@/domain'

export type TOption = string | TSelectOption

export type TSelectOption = {
  value: string | number
  label: string | number
  icon?: string
  disabled?: boolean
}

export type TSelectProps = {
  modelValue: TOption | null
  disabled: boolean
  options: TOption[]
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

export const WUI_SELECT_PROPS = {
  placement: {
    type: String,
    default: Placement.Bottom,
    validator: (value: Placement) => ALLOWED_POSITION.includes(value),
  },
  disabled: { type: Boolean, default: false },
  divided: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Select option' },
  options: {
    type: Array as PropType<TOption[]>,
    default: () => [],
  },
  modelValue: { type: [String, Number], default: null },
  id: { type: String, default: null },
}

export function getIndexByLetter(
  options: TSelectOption[],
  filter: string,
  labelField: string
  // startIndex = 0
): number {
  // const orderedOptions = [
  //   ...options.slice(startIndex),
  //   ...options.slice(0, startIndex),
  // ]
  const firstMatch = filterOptions(options, filter, labelField)[0]
  const allSameLetter = (array: string[]) =>
    array.every((letter) => letter === array[0])

  // first check if there is an exact match for the typed string
  if (firstMatch) {
    return options.indexOf(firstMatch)
  }

  // if the same letter is being repeated, cycle through first-letter matches
  else if (allSameLetter(filter.split(''))) {
    const matches = filterOptions(options, filter[0], labelField)
    return options.indexOf(matches[0])
  }

  // if no matches, return -1
  else {
    return -1
  }
}

// filter an array of options against an input string
// returns an array of options that begin with the filter string, case-independent
export function filterOptions(
  options: TSelectOption[] = [],
  filter: string,
  labelField: string
  // exclude: TSelectOption[] = [],
  // optionLabelForSearching: null | ((option: TSelectOption) => string) = null
): TSelectOption[] {
  return options.filter((option) => {
    // NOTE: Changed from original implementation on sonder-ui:
    // we want to match any instance of the current user string,
    // rather than *only* when the user's string is at the beginning of an option
    // const label = optionLabelForSearching
    //   ? optionLabelForSearching(option)
    //   : option[labelField]
    const label = option[labelField]
    const matches = label?.toLowerCase().includes(filter.toLowerCase())

    return matches // && exclude.indexOf(option) < 0
  })
}
