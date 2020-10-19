import React from 'react'
import styles from './style.module.scss'

type TextAreaProps = {
  onChange?: (val: string) => void
  textareaValue: string
}

const Textarea: React.FC<TextAreaProps> = ({ onChange, textareaValue }: TextAreaProps) => {
  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value
    if (onChange) {
      onChange(val)
    }
  }

  return (
    <input
      type="text"
      onChange={handleChanged}
      value={textareaValue}
      className={styles.textarea}
      placeholder="new Task"
    />
  )
}

export default Textarea
