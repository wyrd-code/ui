export const camelToKebabCase = (text): string => {
  if (!(typeof text === 'string' || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`)
    return text
  }
  return text.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

export const getUpperFirstLettersWords = (text = '', wordCount = 1): string => {
  if (!text) return ''
  const words = text.split(' ')
  return words
    .splice(0, wordCount)
    .reduce((str, word) => (str += word[0]), '')
    .toUpperCase()
}

export const clamp = (number: number, min = 0, max = 1): number => {
  if (number > max) {
    return max
  }
  return number < min ? min : number
}

// https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
export function kebabCase(str): string {
  const result = str.replace(
    /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
    (match) => '-' + match.toLowerCase()
  )
  return str[0] === str[0].toUpperCase() ? result.substring(1) : result
}

export const isString = (value: unknown): value is string =>
  typeof value === 'string'
