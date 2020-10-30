import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

type State = {
  listItems: {
    id: string
    isCheck: boolean
    labelText: string
  }[]
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
    resetListItems: (
      state,
      { payload }: PayloadAction<{ idx: number; isChecked: boolean }>
    ): State => {
      const listItems = state.listItems.map((val, i) => {
        return i === payload.idx ? { ...val, isCheck: payload.isChecked } : val
      })

      return {
        ...state,
        listItems,
      }
    },
    delList: (state, { payload }: PayloadAction<{ idx: number }>): State => {
      const listItems = state.listItems.filter((val, i) => i !== payload.idx)

      return {
        ...state,
        listItems,
      }
    },
  },
  extraReducers: {},
})

export default todolistSlice
