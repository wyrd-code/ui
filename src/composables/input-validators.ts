import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isSlug from 'validator/lib/isSlug'
import isStrongPassword from 'validator/lib/isStrongPassword'

import { FormInputValidator } from '~/ui.types'

export const required: FormInputValidator = (value, opts) => {
  const valid = !!value && !isEmpty(String(value))
  if (!valid) {
    return {
      field: opts?.name,
      type: 'error',
      message: 'is required',
    }
  }
  return
}

export const email: FormInputValidator = (value, opts) => {
  const valid = !!value && isEmail(String(value))
  if (!valid) {
    return {
      field: opts.name,
      type: 'error',
      message: 'is not a valid email address',
    }
  }
  return
}

export const slug: FormInputValidator = (value, opts) => {
  const valid = !!value && isSlug(String(value))
  if (!valid) {
    return {
      field: opts.name,
      type: 'error',
      message: 'can contain only letters, numbers and the "-" character',
    }
  }
  return
}

export const strongPassword: FormInputValidator = (value, opts) => {
  if (!value) {
    return
  }

  const strength = isStrongPassword(String(value), {
    minLength: 4,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    returnScore: true,
  }) as unknown as number
  if (strength < 20) {
    return {
      type: 'warning',
      message: "that's a weak password",
      strength,
    }
  }
  return
}

export const validatorMapper: Record<string, FormInputValidator> = {
  required,
  email,
  strongPassword,
  slug,
}

declare type CompiledValidators = Record<string, FormInputValidator>

export const compileInputValidatorsFromString = (
  string: string
): CompiledValidators => {
  const parts = String(string).split(',') || []

  return parts.reduce((acc, part) => {
    const [key, _opts] = part.split(':', 1)
    const validator = validatorMapper[key]

    if (validator) {
      Object.assign(acc, { [key]: validator })
    } else {
      console.warn('Unknown validator:', key)
    }
    return acc
  }, {})
}
