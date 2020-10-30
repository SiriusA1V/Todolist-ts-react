import React, { useState } from 'react'
import Button from '../../atoms/Button'
import Textarea from '../../atoms/Textarea'
import styles from './style.module.scss'

type SetListProps = {
  onSubmit: (labelText: string) => void
}

const SetList: React.FC<SetListProps> = ({ onSubmit }: SetListProps) => {
  const [isButtonDisabled, setButtonDisabled] = useState(true)
  const [labelText, setLabel] = useState('')

  const handleSubmitButton = (): void => {
    setLabel('')

    setButtonDisabled(true)
    onSubmit(labelText)
  }
  const handleChangeText = (changeText: string): void => {
    if (changeText.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }

    setLabel(changeText)
  }

  return (
    <div className={styles.container}>
      <Textarea onChange={handleChangeText} textareaValue={labelText} />
      <Button onClick={handleSubmitButton} isDisabled={isButtonDisabled} />
    </div>
  )
}

export default SetList
