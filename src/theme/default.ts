import colors from './values/colors'
import dimensions from './values/dimensions'
import typography from './values/typography'

const baseButton = {
  background: colors.neutral.lightest,
  padding: dimensions.small,
  border: {
    color: colors.neutral.darkest,
    width: dimensions.smallest,
    radius: dimensions.small
  },
  text: {
    color: colors.neutral.darkest,
    size: typography.button.size,
    weight: typography.button.weight,
    transform: typography.button.transform
  }
}
const button = {
  regular: {
    ...baseButton
  },
  active: {
    ...baseButton,
    background: colors.neutral.darkest,
    text: {
      ...baseButton.text,
      color: colors.neutral.lightest
    }
  }
}

export default {
  button
}
