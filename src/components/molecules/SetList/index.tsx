import React from 'react'
import Button from '../../atoms/Button'
import Textarea from '../../atoms/Textarea'
import styles from './style.module.scss'

type SetListProps = {
  onChangeTextarea: (val: string) => void
  onSubmit: () => void
  isButtonDisabled?: boolean
  textareaValue: string
}

const SetList: React.FC<SetListProps> = ({
  onChangeTextarea,
  onSubmit,
  isButtonDisabled,
  textareaValue
}: SetListProps) => {
  return (
    <div className={styles.container}>
      <Textarea onChange={onChangeTextarea} textareaValue={textareaValue} />
      <Button onClick={onSubmit} isDisabled={isButtonDisabled} />
    </div>
  )
}

export default SetList
