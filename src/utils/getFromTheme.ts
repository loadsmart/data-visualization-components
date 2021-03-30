import defaultTheme from '../theme'
import get from 'lodash.get'

export default (customTheme: object, path: string[] | string) => {
  const defaultValue = get(defaultTheme, path, null)
  const customValue = get(customTheme, path, null)

  return customValue || defaultValue
}
