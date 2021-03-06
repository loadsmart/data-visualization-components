import defaultTheme from '../theme'
import get from 'lodash.get'

const getFromClosestTheme = (
  path: string | string[],
  localTheme?: object,
  contextTheme?: object
) => {
  const localValue = get(localTheme, path, null)
  if (localValue !== null) return localValue

  const contextValue = get(contextTheme, path, null)
  if (contextValue !== null) return contextValue

  return get(defaultTheme, path, null)
}

export default getFromClosestTheme
