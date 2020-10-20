import React, { useState } from 'react'
import Button from '../../atoms/Button'
import Textarea from '../../atoms/Textarea'
import styles from './style.module.scss'

type SetListProps = {
  onSubmit: (lableTxt: string) => void
}

const SetList: React.FC<SetListProps> = ({
  onSubmit,
}: SetListProps) => {
  const [isButtonDisabled, setButtonDisabled] = useState(true)
  const [lableTxt, setLabel] = useState('')

  const handleSubmitButton = (): void => {
    setLabel("")

    setButtonDisabled(true)
    onSubmit(lableTxt)
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
      <Textarea onChange={handleChangeText} textareaValue={lableTxt} />
      <Button onClick={handleSubmitButton} isDisabled={isButtonDisabled} />
    </div>
  )
}

export default SetList
