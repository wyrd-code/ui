import { FormFieldSchema } from './ui.types'

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

export const initDefaultDataForSchema = (
  schema: FormFieldSchema,
  rawData: Record<string, any> = {}
): object => {
  const fields = extractFormFieldsFromSchema(schema)
  if (!fields.length) {
    console.warn(
      'Cannot initialize default form data, no fields defined in schema'
    )
  }
  return pick(rawData, fields)
}

const extractFormFieldsFromSchema = (schema: FormFieldSchema): string[] =>
  schema.reduce((acc, field) => {
    if (field.name) {
      acc.push(field.name)
    }

    if (field.children) {
      const childFields = extractFormFieldsFromSchema(field.children)
      childFields.length && acc.push(...childFields)
    }

    return acc
  }, [] as string[])
