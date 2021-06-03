import getFromClosestTheme from './getFromClosestTheme'
import defaultTheme from '../theme'

const localTheme = {
  propThatExistsInLocalTheme: 'House Of The Rising Sun'
}

const contextTheme = {
  propThatExistsInLocalTheme: 'You Give Love a Bad Name',
  propThatExistsInContextTheme: 'You Give Love a Bad Name'
}

// @ts-ignore
defaultTheme.propThatExistsInLocalTheme = 'Sultans Of Swing'
// @ts-ignore
defaultTheme.propThatExistsInContextTheme = 'Sultans Of Swing'
// @ts-ignore
defaultTheme.propThatExistsInDefaultTheme = 'Sultans Of Swing'

describe('getFromClosestTheme function', () => {
  it('gets from the default theme when not present in others', () => {
    expect(
      getFromClosestTheme(
        'propThatExistsInDefaultTheme',
        localTheme,
        contextTheme
      )
    ).toBe('Sultans Of Swing')
  })

  it('gets from context theme when not present in local theme', () => {
    expect(
      getFromClosestTheme(
        'propThatExistsInContextTheme',
        localTheme,
        contextTheme
      )
    ).toBe('You Give Love a Bad Name')
  })

  it('gets from local theme even if present on others', () => {
    expect(
      getFromClosestTheme(
        'propThatExistsInLocalTheme',
        localTheme,
        contextTheme
      )
    ).toBe('House Of The Rising Sun')
  })
})
