import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Mode } from './global.types';

export type GlobalState = {
  mode: Mode;
  isLoading: boolean;
};

const initialState: GlobalState = {
  mode: 'light',
  isLoading: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = globalSlice.actions;

export const getSelectedGlobal = createSelector(
  (state: RootState) => state.global,
  global => global
);

export default globalSlice.reducer;
