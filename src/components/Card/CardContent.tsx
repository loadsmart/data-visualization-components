import React, { FC, useCallback, useEffect, useState } from 'react'
import { CardContentProps } from './Card.types'
import { StyledCardContent, StyledCardTextArea } from './Card.styles'
import Button from '../../components/Button'
import EditButton from './EditButton'

const CardContent: FC<CardContentProps> = ({
  children,
  editable,
  editing,
  editEndButtonClickCallback,
  editStartButtonClickCallback,
  editEndButtonContent,
  editStartButtonContent,
  contentChangeCallback
}) => {
  const [currentContent, setCurrentContent] = useState(children)
  const [isEditing, setIsEditing] = useState(editing)

  const textAreaChangeCallback = useCallback((event) => {
    event.persist()
    setCurrentContent(event.target.value)
    if (contentChangeCallback) {
      contentChangeCallback(event)
    }
  }, [])

  const editStartButtonClick = useCallback((event) => {
    event.persist()
    setIsEditing(true)
    if (editStartButtonClickCallback) {
      editStartButtonClickCallback(event)
    }
  }, [])

  const editEndButtonClick = useCallback((event) => {
    event.persist()
    setIsEditing(false)
    if (editEndButtonClickCallback) {
      editEndButtonClickCallback(event)
    }
  }, [])

  useEffect(() => {
    setCurrentContent(children)
  }, [children])

  useEffect(() => {
    setIsEditing(editing)
  }, [editing])

  const showTextArea: false | undefined | boolean = editable && isEditing
  const showEditIcon: false | undefined | boolean = editable && !isEditing

  return (
    <StyledCardContent>
      {showTextArea && (
        <StyledCardTextArea
          onChange={textAreaChangeCallback}
          value={currentContent?.toString()}
        />
      )}
      {showTextArea && (
        <Button onClick={editEndButtonClick} active>
          {editEndButtonContent}
        </Button>
      )}
      {!showTextArea && currentContent}
      {showEditIcon && (
        <EditButton onClick={editStartButtonClick}>
          {editStartButtonContent || '✏️'}
        </EditButton>
      )}
    </StyledCardContent>
  )
}

export default CardContent
