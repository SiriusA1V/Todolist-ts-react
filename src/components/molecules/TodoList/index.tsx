import React from 'react'
import TodoListItem from '../TodoListItem'

type TodoListProps = {
  onCheckChange: (id: string, isChecked: boolean) => void
  onClickDelButton: (id: string) => void
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
              onCheckChange(val.id, changeText)
            }}
            key={val.id}
            labelValue={val.labelText}
            isChecked={val.isCheck}
            onClickDelButton={(): void => {
              onClickDelButton(val.id)
            }}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
