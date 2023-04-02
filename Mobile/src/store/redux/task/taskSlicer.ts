import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITaskReducer } from './type'
import { ITask } from '@src/models'

const initialState: ITaskReducer = {
  allTask: null,
  selectedTask: null
}

const account = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    allTask: (state, action: PayloadAction<ITask[]>) => {

      return {
        ...state,
        allTask: action.payload
        
      }
    },
    selectedTask: (state, action: PayloadAction<ITask>) => {

      return {
        ...state,
        selectedTask: action.payload
      
      }
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { allTask, selectedTask } = account.actions

export default account.reducer