import { useDark } from '@vueuse/core'
import { Ref } from 'vue'

interface DarkTheme {
  isDark: Ref<boolean>
  toggleDark: () => boolean
}

export function useDarkTheme(): DarkTheme {
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
