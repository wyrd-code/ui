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

export const enum MenuActions {
	Close = 'Close',
	CloseSelect = 'CloseSelect',
	First = 'First',
	Last = 'Last',
	Next = 'Next',
	Open = 'Open',
	PageDown = 'PageDown',
	PageUp = 'PageUp',
	Previous = 'Previous',
	Select = 'Select',
	Space = 'Space',
	Type = 'Type',
}

const enum Keys {
	Backspace = 'Backspace',
	Clear = 'Clear',
	Down = 'ArrowDown',
	End = 'End',
	Enter = 'Enter',
	Escape = 'Escape',
	Home = 'Home',
	Left = 'ArrowLeft',
	PageDown = 'PageDown',
	PageUp = 'PageUp',
	Right = 'ArrowRight',
	Space = ' ',
	Tab = 'Tab',
	Up = 'ArrowUp'
}

export const CLASS_SELECTED_OPTION = 'selected-option'

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

type Props = {
  menuAction: MenuActions
  max: number
  curIndex: number
}

export const getArrayIndexByDirection = ({
  menuAction,
  max,
  curIndex,
}: Props): number => {
  switch (menuAction) {
    case MenuActions.First:
      return 0
    case MenuActions.Last:
      return max
    case MenuActions.Previous:
      return Math.max(0, curIndex - 1)
    case MenuActions.Next:
      return Math.min(max, curIndex + 1)
    default:
      return curIndex
  }
}

// Copied from https://github.dev/politico/vue-accessible-selects/blob/main/src/SelectSingle.vue

export function getActionFromKey(
	event: KeyboardEvent,
	isMenuOpen: boolean,
	isFocusedOptionDisabled = false
): MenuActions | undefined {
	const { key, altKey, ctrlKey, metaKey } = event
	const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' ', 'Home', 'End'] // all keys that will open the combo

	// handle opening when closed
	if (!isMenuOpen && openKeys.includes(key)) {
		return MenuActions.Open
	}

	// handle typing characters when open or closed
	if (
		key === Keys.Backspace ||
		key === Keys.Clear ||
		(key?.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)
	) {
		return MenuActions.Type
	}

	// handle keys when open
	if (isMenuOpen) {
		if (key === Keys.Down && !altKey) {
			return MenuActions.Next
		} else if (key === Keys.Up && altKey) {
			return MenuActions.CloseSelect
		} else if (key === Keys.Up) {
			return MenuActions.Previous
		} else if (key === Keys.Home) {
			return MenuActions.First
		} else if (key === Keys.End) {
			return MenuActions.Last
		} else if (key === Keys.PageUp) {
			return MenuActions.PageUp
		} else if (key === Keys.PageDown) {
			return MenuActions.PageDown
		} else if (key === Keys.Escape || key === Keys.Tab) {
			return MenuActions.Close
		} else if (key === Keys.Enter) {
			return isFocusedOptionDisabled ? undefined : MenuActions.CloseSelect
		} else if (key === Keys.Space) {
			return isFocusedOptionDisabled ? undefined : MenuActions.Space
		}
	}
}

export function getIndexByLetter(
	options: TSelectOption[],
	filter: string,
	labelField: string,
	startIndex = 0,
): number {
	const orderedOptions = [...options.slice(startIndex), ...options.slice(0, startIndex)]
	const firstMatch = filterOptions(orderedOptions, filter, labelField)[0]
	const allSameLetter = (array: string[]) => array.every(letter => letter === array[0])

	// first check if there is an exact match for the typed string
	if (firstMatch) {
		return options.indexOf(firstMatch)
	}

	// if the same letter is being repeated, cycle through first-letter matches
	else if (allSameLetter(filter.split(''))) {
		const matches = filterOptions(orderedOptions, filter[0], labelField)
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
	labelField: string,
	exclude: TSelectOption[] = [],
	optionLabelForSearching: null | ((option: TSelectOption) => string) = null
): TSelectOption[] {
	return options.filter(option => {
		// NOTE: Changed from original implementation on sonder-ui:
		// we want to match any instance of the current user string,
		// rather than *only* when the user's string is at the beginning of an option
		const label = optionLabelForSearching ? optionLabelForSearching(option) : option[labelField]
		const matches = label?.toLowerCase().includes(filter.toLowerCase())

		return matches && exclude.indexOf(option) < 0
	})
}
