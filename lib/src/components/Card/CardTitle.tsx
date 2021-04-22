import React, { FC } from 'react'
import { CardTitleProps } from './Card.types'
import { StyledCardTitle } from './Card.styles'

const CardTitle: FC<CardTitleProps> = ({ children }) => (
  <StyledCardTitle>{children}</StyledCardTitle>
)

export default CardTitle
