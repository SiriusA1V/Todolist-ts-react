import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import SetList from '../../components/molecules/SetList'
import styles from './style.module.scss'
import TodoList from '../../components/molecules/TodoList'
import todolistSlice from '../../feature/todolist/todolistSlice'
import { RootState } from '../../rootReducer'

const Top: React.FC = () => {
  const dispatch = useDispatch()
  const listItems = useSelector((state: RootState) => state.todolist.listItems)

  return (
    <div className={styles.container}>
      <div className={styles.setlistContainer}>
        <SetList
          onSubmit={(labelTxt: string): void => {
            dispatch(todolistSlice.actions.addList(labelTxt))
          }}
        />
      </div>

      <div className={styles.listContainer}>
        <TodoList
          items={listItems}
          className={styles.listItemContainer}
          onCheckChange={(idx, isChecked): void => {
            dispatch(todolistSlice.actions.resetListItems({ idx, isChecked }))
          }}
          onClickDelButton={(idx): void => {
            dispatch(todolistSlice.actions.delList({ idx }))
          }}
        />
      </div>
    </div>
  )
}

export default Top
