import React, { FC } from 'react'
import { CardContentProps, CardTitleProps, CardType } from './Card.types'
import { StyledCard } from './Card.styles'

const Card: CardType = ({ children }) => <StyledCard>{children}</StyledCard>

const CardTitle: FC<CardTitleProps> = ({ children }) => <div>{children}</div>

const CardContent: FC<CardContentProps> = ({ children }) => (
  <div>{children}</div>
)

Card.Title = CardTitle
Card.Content = CardContent

export default Card
