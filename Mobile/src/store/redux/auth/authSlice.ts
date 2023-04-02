import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthReducer } from './type';

const initialState: IAuthReducer = {
  isLogged: false,
  token: null
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {

      return {
        ...state,
        token: action.payload,
        isLogged: true,
      }
    },
    logout: (state) => {

      return {
        ...state,
        token: null,
        isLogged: false,
      }
    },

  },
})

export const { login, logout } = auth.actions

export default auth.reducer