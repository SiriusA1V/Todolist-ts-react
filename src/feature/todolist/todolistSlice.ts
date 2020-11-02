import {
  createSlice,
  PayloadAction,
  nanoid,
  createAsyncThunk,
} from '@reduxjs/toolkit'

type Status = 'Initial' | 'Progress' | 'Success' | 'Failure'

type TodoItem = {
  id: string
  isCheck: boolean
  labelText: string
}

type State = {
  listItems: TodoItem[]
  apiStatus: Status
}

const initialState: State = {
  listItems: [],
  apiStatus: 'Initial',
}

const getTodoListAPI = async (): Promise<Array<TodoItem>> => {
  const result = await window
    .fetch(
      'https://kb4kow6mcd.execute-api.ap-northeast-1.amazonaws.com/v1_0/test-apigateway',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
      }
    )
    .then((response) => response.json())
    .then((data) => {
      return data.body
    })

  return result.todoList
}

export const getTodoList = createAsyncThunk(
  'todolist/getTodoList',
  async () => {
    const todoList = await getTodoListAPI()
    return todoList
  }
)

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
      const listItems = state.listItems.map((val) => {
        return val.id === payload.id
          ? { ...val, isCheck: payload.isChecked }
          : val
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
  extraReducers: (builder) => {
    builder.addCase(getTodoList.pending, (state) => {
      return {
        ...state,
        apiStatus: 'Progress',
      }
    })
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      return {
        ...state,
        apiStatus: 'Success',
        listItems: action.payload,
      }
    })
    builder.addCase(getTodoList.rejected, (state) => {
      return {
        ...state,
        apiStatus: 'Failure',
      }
    })
  },
})

export default todolistSlice
