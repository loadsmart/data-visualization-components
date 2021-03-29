import getFromTheme from './getFromTheme'

export default (
  customTheme: Object,
  active: boolean | undefined,
  path: string
) => {
  const [element, ...subPath] = path.split('.')

  const fullPath = [element, active ? 'active' : 'regular', ...subPath]

  return getFromTheme(customTheme, fullPath.join('.'))
}
