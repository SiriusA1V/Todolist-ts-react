import React from 'react'
import TodoListItem from '../TodoListItem'

type TodoListProps = {
  onCheckChange?: (items: any[]) => void
  onClickDelButton?: (items: any[]) => void
  items: any[]
}

const TodoList: React.FC<TodoListProps> = ({
  onCheckChange,
  onClickDelButton,
  items,
}: TodoListProps) => {
  const handleChangeCheck = (isChecked: boolean, idx: number): void => {
    const c = [...items]
    c[idx].isCheck = isChecked

    if (onCheckChange) {
      onCheckChange(c)
    }
  }

  const handleClickDelButton = (idx: number): void => {
    const c = [...items]
    c.splice(idx, 1)

    if (onClickDelButton) {
      onClickDelButton(c)
    }
  }

  return (
    <ul>
      {items.map((val, idx) => {
        return (
          <TodoListItem
            checkChange={(changeText: boolean): void => {
              handleChangeCheck(changeText, Number(idx))
            }}
            key={val.id}
            lbValue={val.LabelTxt}
            isChecked={val.isCheck}
            onClickDelButton={(): void => handleClickDelButton(Number(idx))}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
