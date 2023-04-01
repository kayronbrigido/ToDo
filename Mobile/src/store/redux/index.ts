import { configureStore } from '@reduxjs/toolkit'
import accountSlicer from './account/accountSlicer'
import authSlice from './auth/authSlice';


export const store = configureStore({
  reducer: {
    account: accountSlicer,
    auth: authSlice,
  }
})

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch