import React from 'react'
import styles from './style.module.scss'

type DelListButtonProps = {
  onClick: () => void
}

const DelListButton: React.FC<DelListButtonProps> = ({
  onClick,
}: DelListButtonProps) => {
  return (
    <button className={styles.delListButton} onClick={onClick}>
      x
    </button>
  )
}

export default DelListButton
