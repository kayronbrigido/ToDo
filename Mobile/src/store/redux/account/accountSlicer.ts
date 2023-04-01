import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAccountReducer } from './type'
import { ICreateAccount } from '@src/models'

const initialState: IAccountReducer = {
  me: null,
  createAccount: null
}

const account = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    me: (state) => {

      return {
        ...state
      }
    },
    createAccount: (state, action: PayloadAction<ICreateAccount>) => {

      return {
        ...state,
        createAccount: action.payload
      }
    }    
  },
})

// Action creators are generated for each case reducer function
export const { me, createAccount } = account.actions

export default account.reducer