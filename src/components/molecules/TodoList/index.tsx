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
  className?: string
}

const TodoList: React.FC<TodoListProps> = ({
  onCheckChange,
  onClickDelButton,
  items,
  className,
}: TodoListProps) => {
  return (
    <ul className={className}>
      {items.map((val, idx) => {
        return (
          <TodoListItem
            checkChange={(changeText: boolean): void => {
              onCheckChange(Number(idx), changeText)
            }}
            key={val.id}
            labelValue={val.labelText}
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
