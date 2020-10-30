import { combineReducers } from '@reduxjs/toolkit'
// import { persistReducer } from 'redux-persist'
import todolistSlice from './feature/todolist/todolistSlice'

const rootReducer = combineReducers({
  todolist: todolistSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
