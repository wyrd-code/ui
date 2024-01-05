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

export const enum Keys {
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
  Up = 'ArrowUp',
}

type GetArrayIndexByDirectionProps = {
  menuAction: MenuActions
  max: number
  curIndex: number
}

export const getArrayIndexByDirection = ({
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
      return Math.max(0, curIndex - 1)
    case MenuActions.Next:
      return Math.min(max, curIndex + 1)
    default:
      return curIndex
  }
}

// Implementation kindly sourced from
// https://github.dev/politico/vue-accessible-selects/blob/main/src/SelectSingle.vue

// eslint-disable-next-line complexity
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
