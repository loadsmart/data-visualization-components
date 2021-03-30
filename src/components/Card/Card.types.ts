import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface CardTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface CardContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface CardType extends FC<CardProps> {
  Title: FC<CardTitleProps>
  Content: FC<CardContentProps>
}
