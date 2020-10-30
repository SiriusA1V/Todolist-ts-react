import React from 'react'
import CheckBox from '../../atoms/CheckBox'
import Label from '../../atoms/Label'
import styles from './style.module.scss'
import DelListButton from '../../atoms/DelListButton'

type TodoListItemProps = {
  checkChange?: (isChecked: boolean) => void
  onClickDelButton: () => void
  isChecked: boolean
  labelValue: string
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  checkChange,
  isChecked,
  labelValue,
  onClickDelButton,
}: TodoListItemProps) => {
  return (
    <li className={styles.listItem}>
      <DelListButton onClick={onClickDelButton} />
      <CheckBox onChanged={checkChange} isChecked={isChecked} />
      <Label value={labelValue} isChecked={isChecked} />
    </li>
  )
}

export default TodoListItem
