import React, { FC } from 'react'
import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ theme, active, ...props }) => (
  <StyledButton {...props} theme={theme} active={active} />
)

export default Button
