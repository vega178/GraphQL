export const isArray = variable => Array.isArray(variable)

export const isDefined = variable => typeof variable !== 'undefined' && variable !== null

export const isFalse = variable => isDefined(variable) && variable === false

export const isNumber = variable => typeof variable === 'number'

export const isFunction = variable => typeof variable === 'function'

export const isJson = str => {
  if (!str || str === null) {
    return false
  }

  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }

  return true
}

export const isObject = variable => isDefined(variable) && typeof variable === 'object' && !Array.isArray(variable)

export const isPassword = (password, min = 8) => password.length >= min

// eslint-disable-next-line max-len
export const isPasswordMatch = (pass1, pass2) => (isPassword(pass1) && isPassword(pass2)) && pass1 === pass2

export const isString = variable => isDefined(variable) && typeof variable === 'string'

export const isUndefined = variable => typeof variable === 'undefined' || variable === null

export const isBrowser = () => typeof window !== 'undefined'
