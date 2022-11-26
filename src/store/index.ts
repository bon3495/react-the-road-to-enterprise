import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import globalReducer from './globalSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
