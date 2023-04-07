import { inject } from 'vue'

export function injectStrict<T>(key: string, fallback?: T) {
  const resolved = inject(key, fallback)

  if (!resolved) {
    throw new TypeError(`Could not inject ${key}`)
  }

  return resolved
}
