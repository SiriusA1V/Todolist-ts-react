import React from 'react'
import styles from './style.module.scss'

type ButtonProps = {
  onClick: () => void
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  isDisabled,
}: ButtonProps) => {
  return (
    <input
      className={styles.button}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      value="ADD"
    />
  )
}

export default Button
