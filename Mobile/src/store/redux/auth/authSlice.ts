import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthReducer } from './type';

const initialState: IAuthReducer = {
  isLogged: false
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {

      return {
        ...state,
        isLogged: true,
      }
    },
    logout: (state) => {

      return {
        ...state,
        isLogged: false,
      }
    },

  },
})

export const { login, logout } = auth.actions

export default auth.reducer