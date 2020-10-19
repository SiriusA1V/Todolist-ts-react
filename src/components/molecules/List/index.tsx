import React from 'react'
import CheckBox from '../../atoms/CheckBox'
import Label from '../../atoms/Label'
import styles from './style.module.scss'
import DelListBT from '../../atoms/DelListButton'

type CheckBoxProps = {
  checkChange?: (isChecked: boolean) => void
  onClickDelButton: () => void
  isChecked: boolean
  lbValue: string
}

const List: React.FC<CheckBoxProps> = ({
  checkChange,
  isChecked,
  lbValue,
  onClickDelButton,
}: CheckBoxProps) => {
  return (
    <div className={styles.container}>
      <DelListBT onClick={onClickDelButton} />
      <CheckBox onChanged={checkChange} isChecked={isChecked} />
      <Label value={lbValue} isChecked={isChecked} />
    </div>
  )
}

export default List
