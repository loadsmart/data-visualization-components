import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
  MouseEvent,
  ChangeEvent,
  ButtonHTMLAttributes
} from 'react'
import { ThemeType } from '../../theme'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  theme?: object // When the whole theme object is defined I will add a interface for it. For now it is too prone to changing to bother.
}

export interface CardTitleProps extends CardProps {}

export interface CardContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  editable?: boolean
  editing?: boolean
  editStartButtonClickCallback?: (event: MouseEvent<HTMLButtonElement>) => null
  editEndButtonClickCallback?: (event: MouseEvent<HTMLButtonElement>) => null
  editStartButtonContent?: ReactNode
  editEndButtonContent?: ReactNode
  contentChangeCallback?: (event: ChangeEvent<HTMLTextAreaElement>) => null
}

export interface CardType extends FC<CardProps> {
  Title: FC<CardTitleProps>
  Content: FC<CardContentProps>
}

export interface EditButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeType
}
