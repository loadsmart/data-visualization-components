import React, { FC } from 'react'
import { EditButtonProps } from './Card.types'
import { StyledEditButton } from './Card.styles'

const EditButton: FC<EditButtonProps> = (props) => (
  <StyledEditButton {...props} />
)

export default EditButton
