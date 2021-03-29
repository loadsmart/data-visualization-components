import defaultTheme from '../theme'
const get = require('lodash.get')

export default (customTheme: object, path: string) => {
  const defaultValue = get(defaultTheme, path, null)
  const customValue = get(customTheme, path, null)

  return customValue || defaultValue
}
