import React from 'react'
import { CardType } from './Card.types'
import { StyledCard } from './Card.styles'
import { ThemeProvider } from 'styled-components'
import CardTitle from './CardTitle'
import CardContent from './CardContent'

const Card: CardType = ({ theme, children }) => (
  <ThemeProvider theme={theme || {}}>
    <StyledCard>{children}</StyledCard>
  </ThemeProvider>
)

Card.Title = CardTitle
Card.Title.displayName = 'Card.Title'
Card.Content = CardContent
Card.Content.displayName = 'Card.Content'

export default Card
