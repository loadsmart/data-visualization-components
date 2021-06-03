import * as CSS from 'csstype'

export interface BaseButtonType {
  background?: CSS.Property.Background
  padding?: CSS.Property.Padding
  border?: {
    color?: CSS.Property.BorderColor
    width?: CSS.Property.BorderWidth
    radius?: CSS.Property.BorderRadius
  }
  text?: {
    color?: CSS.Property.Color
    size?: CSS.Property.FontSize
    weight?: CSS.Property.FontWeight
    transform?: CSS.Property.TextTransform
  }
}

export interface ButtonType {
  regular?: BaseButtonType
  active?: BaseButtonType
}

export interface CardType {
  background?: CSS.Property.Background
  padding?: CSS.Property.Padding
  shadow?: CSS.Property.BoxShadow
  border?: {
    radius?: CSS.Property.BorderRadius
  }
  title?: {
    size?: CSS.Property.FontSize
    weight?: CSS.Property.FontWeight
    color?: CSS.Property.Color
  }
  content?: {
    size?: CSS.Property.FontSize
    weight?: CSS.Property.FontWeight
    color?: CSS.Property.Color
    margin?: CSS.Property.Margin
    editButton?: {
      padding?: CSS.Property.Padding
      background?: CSS.Property.Background
      border?: {
        radius?: CSS.Property.BorderRadius
        width?: CSS.Property.BorderWidth
      }
      width?: CSS.Property.Width
      height?: CSS.Property.Height
      right?: CSS.Property.Right
      top?: CSS.Property.Top
    }
  }
}

export interface BarChartType {
  fill?: CSS.Property.Fill
  size?: number
  value?: {
    color?: CSS.Property.Color
    weight?: CSS.Property.FontWeight
    size?: number
  }
  name?: {
    color?: CSS.Property.Color
    weight?: CSS.Property.FontWeight
    size?: number
  }
  axis?: {
    weight?: CSS.Property.FontWeight
    distance?: number
  }
}

export interface CircularGaugeType {
  barFill?: CSS.Property.Fill
  barBackground?: CSS.Property.Fill
  barWidth?: number
  width?: number
  value?: {
    size?: number
    color?: CSS.Property.Color | undefined
    weight?: CSS.Property.FontWeight
  }
}

export interface EmptyStateType {
  width?: CSS.Property.Width
  height?: CSS.Property.Height
  icon?: {
    width?: CSS.Property.Width | number
    height?: CSS.Property.Height | number
    color?: CSS.Property.Fill
  }
  text?: {
    size?: CSS.Property.FontSize
    weight?: CSS.Property.FontWeight
    color?: CSS.Property.Color
  }
}

export interface ThemeType {
  button?: ButtonType
  card?: CardType
  charts?: {
    bar?: BarChartType
  }
  gauges?: {
    circular?: CircularGaugeType
  }
  emptyState?: EmptyStateType
}
