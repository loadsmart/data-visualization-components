import * as CSS from 'csstype'

import colors from './values/colors'
import dimensions from './values/dimensions'
import typography from './values/typography'
import {
  BarChartType,
  BaseButtonType,
  ButtonType,
  CardType,
  CircularGaugeType,
  ThemeType
} from './types'

const baseButton: BaseButtonType = {
  background: colors.neutral.lightest,
  padding: dimensions.pixels.small,
  border: {
    color: colors.neutral.darkest,
    width: dimensions.pixels.smallest,
    radius: dimensions.pixels.small
  },
  text: {
    color: colors.neutral.darkest,
    size: typography.button.size,
    weight: typography.button.weight,
    transform: typography.button.transform as CSS.Property.TextTransform
  }
}

const button: ButtonType = {
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

const card: CardType = {
  background: colors.neutral.lightest,
  padding: dimensions.pixels.large,
  shadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
  border: {
    radius: dimensions.pixels.small
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
    margin: `${dimensions.pixels.small} 0 0 0`,
    editButton: {
      padding: dimensions.pixels.medium,
      background: colors.neutral.lighter,
      border: {
        radius: dimensions.pixels.largest,
        width: dimensions.pixels.zero as CSS.Property.Width
      },
      width: dimensions.pixels.larger,
      height: dimensions.pixels.larger,
      right: dimensions.pixels.large,
      top: dimensions.pixels.large
    }
  }
}

const bar: BarChartType = {
  fill: colors.status.danger.dark,
  size: dimensions.number.large,
  value: {
    color: colors.neutral.lightest,
    weight: typography.charts.weight,
    size: typography.charts.size
  },
  name: {
    color: colors.neutral.darkest,
    weight: typography.charts.weight,
    size: typography.charts.size
  },
  axis: {
    weight: typography.charts.axisWeight,
    distance: dimensions.number.medium
  }
}

const circular: CircularGaugeType = {
  barFill: colors.neutral.darker,
  barBackground: colors.neutral.light,
  barWidth: 4,
  width: 40,
  value: {
    color: colors.neutral.darker,
    size: typography.charts.size,
    weight: typography.charts.weight
  }
}

const defaultTheme: ThemeType = {
  button,
  card,
  charts: {
    bar
  },
  gauges: {
    circular
  }
}

export default defaultTheme
