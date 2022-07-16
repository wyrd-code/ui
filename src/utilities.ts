import { isUndefined } from '@s-libs/micro-dash'
import { camelize } from 'vue'

export const pick = (object: Record<string, any>, keys: string[]): object => {
  if (!Array.isArray(keys)) {
    throw new Error('INVALID KEYS ARRAY FOR OBJECT PICKING')
  }

  return keys.reduce(function (result, key) {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      result[key] = object[key]
    }
    return result
  }, {} as Record<string, any>)
}

// Graciously stolen from lodash's stringToPath
const charCodeOfDot = '.'.charCodeAt(0)
const reEscapeChar = /\\(\\)?/g
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' +
    '|' +
    // Or match property names within brackets.
    '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' +
    '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' +
    '|' +
    // Or match "" as the space between consecutive dots or empty brackets.
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))',
  'g'
)

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
const stringToPath = (string: string) => {
  const result: string[] = []
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }
  // tslint-disable-next-line
  const replacer = (
    match: any,
    expression: any,
    quote: any,
    subString: any
  ) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    } else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  }
  string.replace(rePropName, replacer as any)
  return result
}

/**
 * Recursively iterates over an object or array to find a nested path.
 *
 * @param {object|array} input
 * @param {string} path A dot-notation path
 * @returns {any|undefined} If a truthy value is found at the path, it is returned
 */
export const get = (
  input: Record<string, any>,
  path: string,
  defaultValue: any = undefined
): any => {
  const pathComponents = stringToPath(path)
  const currentProp = pathComponents[0]
  // end of the road?
  if (pathComponents.length === 1) return input[currentProp]
  // keep going
  if (input[currentProp])
    return get(
      input[currentProp],
      pathComponents.slice(1).join('.'),
      defaultValue
    )
  // surrender to the endless void
  return defaultValue
}
// Helpers for preparing data object for use with a form

// Source: https://github.com/simontonsoftware/s-libs/blob/master/projects/micro-dash/src/lib/object/set.ts

export const set = (
  object: Record<string, any>,
  path: ReadonlyArray<number | string> | string,
  newValue: unknown
): any => {
  // WARNING: This is not a drop in replacement solution and
  // it might not work for some edge cases. Test your code!
  // Regex explained: https://regexr.com/58j0k
  let pathArray
  if (Array.isArray(path)) {
    pathArray = path
  } else if (typeof path === 'string') {
    pathArray = path.match(/([^[.\]])+/g) || []
  } else {
    pathArray = []
    // throw?
  }

  if (object && pathArray.length) {
    let current: any = object
    const { length } = path
    for (let i = 0; i < length; ++i) {
      const key = path[i]
      let value = current[key]
      if (i < length - 1) {
        if (!(value instanceof Object)) {
          value = Number.isInteger(path[i + 1] as any) ? [] : {}
        }
      } else {
        value = newValue
      }
      current = current[key] = value
    }
  }
}

export const resetReactiveObject = (
  obj: Record<string, any>,
  newData: Record<string, any> = {}
) => {
  const newValue: Record<string, any> = {}
  Object.keys(obj).map((key) => (newValue[key] = undefined))
  Object.assign(obj, { ...newValue, ...newData })

  return obj
}

export const removeMatchedObjectProperties = (
  obj: Record<string, any> = {},
  matcher: (value: any) => boolean
): Record<string, any> => {
  const cleanObj: Record<string, any> = {}
  const keys = Object.keys(obj).filter((key: string) => matcher(obj[key]))
  keys.map((key) => (cleanObj[key] = obj[key]))

  return cleanObj
}

export const removeUndefinedObjectProperties = (
  obj: Record<string, any> = {}
): Record<string, any> =>
  removeMatchedObjectProperties(obj, (value: any) => !isUndefined(value))

export const camelizeObjectKeys = (
  object: Record<string, unknown>
): Record<string, unknown> => {
  const newObj = {}
  Object.keys(object).map((key) => {
    Object.assign(newObj, { [camelize(key)]: object[key] })
  })
  return newObj
}
