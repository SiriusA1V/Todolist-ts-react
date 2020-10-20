import React from 'react'
import CheckBox from '../../atoms/CheckBox'
import Label from '../../atoms/Label'
import styles from './style.module.scss'
import DelListBT from '../../atoms/DelListButton'

type TodoListItemProps = {
  checkChange?: (isChecked: boolean) => void
  onClickDelButton: () => void
  isChecked: boolean
  lbValue: string
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  checkChange,
  isChecked,
  lbValue,
  onClickDelButton,
}: TodoListItemProps) => {
  return (
    <li className={styles.listItem}>
      <DelListBT onClick={onClickDelButton} />
      <CheckBox onChanged={checkChange} isChecked={isChecked} />
      <Label value={lbValue} isChecked={isChecked} />
    </li>
  )
}

export default TodoListItem
