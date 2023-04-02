import { configureStore } from '@reduxjs/toolkit'
import accountSlicer from './account/accountSlicer'
import authSlice from './auth/authSlice';
import taskSlicer from './task/taskSlicer';


export const store = configureStore({
  reducer: {
    account: accountSlicer,
    auth: authSlice,
    task: taskSlicer
  }
})

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch