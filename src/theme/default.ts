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

const card = {
  background: colors.neutral.lightest,
  padding: dimensions.large,
  shadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
  border: {
    radius: dimensions.small
  },
  title: {
    size: typography.card.title.size,
    weight: typography.card.title.weight,
    color: colors.neutral.darker
  },
  content: {
    size: typography.card.content.size,
    weight: typography.card.content.weight,
    color: colors.neutral.darker,
    margin: `${dimensions.small} 0 0 0`,
    editButton: {
      padding: dimensions.medium,
      background: colors.neutral.lighter,
      border: {
        radius: dimensions.largest,
        width: dimensions.zero
      },
      width: dimensions.larger,
      height: dimensions.larger,
      right: dimensions.large,
      top: dimensions.large
    }
  }
}

export default {
  button,
  card
}
