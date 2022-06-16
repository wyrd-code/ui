import { useDark } from '@vueuse/core'
import { Ref } from 'vue'

export interface ThemeComposition {
  isDark: Ref<boolean>
  toggleDark: () => boolean
}

export function useTheme(): ThemeComposition {
  const isDark = useDark()
  const toggleDark = () => {
    isDark.value = !isDark.value
    return isDark.value
  }

  return {
    isDark,
    toggleDark,
  }
}
