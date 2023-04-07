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

  const replacer = (
    match: any,
    expression: any,
    quote: any,
    subString: any
    // eslint-disable-next-line max-params
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
  removeMatchedObjectProperties(obj, (value: any) => value !== undefined)

export const camelizeObjectKeys = (
  object: Record<string, unknown>
): Record<string, unknown> => {
  const newObj = {}
  Object.keys(object).map((key) => {
    Object.assign(newObj, { [camelize(key)]: object[key] })
  })
  return newObj
}

// eslint-disable-next-line max-params
const mergeNodeProps = (target, obj, deep, prop) => {
  if (Object.prototype.hasOwnProperty.call(obj, prop)) {
    const mergeDeep =
      deep && Object.prototype.toString.call(obj[prop]) === '[object Object]'

    target[prop] = mergeDeep ? mergeObjects(target[prop], obj[prop]) : obj[prop]
  }
}

export const mergeObjects = <T>(
  ...args: (Record<string, any> | undefined)[]
): T => {
  // Variables
  const target = {} as T
  const deep = true
  let i = 0

  // Merge the object into the target object

  const merger = (obj) => {
    for (const prop in obj) {
      mergeNodeProps(target, obj, deep, prop)
    }
  }

  //Loop through each object and conduct a merge
  for (; i < args.length; i++) {
    merger(args[i] || {})
  }

  return target
}
