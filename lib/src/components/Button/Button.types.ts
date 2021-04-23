import { ButtonHTMLAttributes } from 'react'
import { ThemeType } from '../../theme'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  theme?: ThemeType
}
