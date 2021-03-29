import React, { FC, ButtonHTMLAttributes } from 'react'
import { StyledButton } from './Button.styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  theme?: object
}

const Button: FC<ButtonProps> = ({ theme, active, ...props }) => (
  <StyledButton {...props} theme={theme} active={active} />
)

export default Button
