import React from 'react'
import TodoListItem from '../TodoListItem'

type TodoListProps = {
  onCheckChange: (idx: number, isChecked: boolean) => void
  onClickDelButton: (idx: number) => void
  items: {
    id: string
    isCheck: boolean
    labelText: string
  }[]
}

const TodoList: React.FC<TodoListProps> = ({
  onCheckChange,
  onClickDelButton,
  items,
}: TodoListProps) => {
  return (
    <ul>
      {items.map((val, idx) => {
        return (
          <TodoListItem
            checkChange={(changeText: boolean): void => {
              onCheckChange(Number(idx), changeText)
            }}
            key={val.id}
            lbValue={val.labelText}
            isChecked={val.isCheck}
            onClickDelButton={(): void => {
              onClickDelButton(Number(idx))
            }}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
