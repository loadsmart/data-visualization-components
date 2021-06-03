import getActivatableValue from './getActivatableValue'

const testTheme = {
  component: {
    active: {
      someProp: 'We Will Rock You'
    },
    regular: {
      someProp: 'Fury Of The Storm'
    }
  }
}

describe('getActivatableValue function', () => {
  it('gets the active version of a property', () => {
    expect(getActivatableValue(testTheme, true, 'component.someProp')).toBe(
      'We Will Rock You'
    )
  })

  it('gets the regular version of a propert', () => {
    expect(getActivatableValue(testTheme, false, 'component.someProp')).toBe(
      'Fury Of The Storm'
    )
  })
})
