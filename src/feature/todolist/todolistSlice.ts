import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

type TodoItem = {
  id: string,
  isCheck: boolean,
  labelText: string
}

type State = {
  listItems: TodoItem[]
}

const initialState: State = {
  listItems: [],
}

const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>): State => {
      const listItems = state.listItems.slice()
      listItems.push({
        id: nanoid(),
        isCheck: false,
        labelText: action.payload,
      })

      return {
        ...state,
        listItems,
      }
    },
    updateChecked: (
      state,
      { payload }: PayloadAction<{ id: string; isChecked: boolean }>
    ): State => {
      const listItems = state.listItems.map((val, i) => {
        return val.id === payload.id ? { ...val, isCheck: payload.isChecked } : val
      })

      return {
        ...state,
        listItems,
      }
    },
    deleteList: (state, { payload }: PayloadAction<{ id: string }>): State => {
      const listItems = state.listItems.filter((val) => val.id !== payload.id)

      return {
        ...state,
        listItems,
      }
    },
  },
  extraReducers: {},
})

export default todolistSlice
