import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Civilizations } from '../resources/types';
import { RootState } from './store';

const initialState: Civilizations[] = []

const civilizationsSlice = createSlice({
  name: 'civilizations',
  initialState,
  reducers: {
    setCivilizations(state, action: PayloadAction<Civilizations[]>) {
      return state = action.payload;
    },
  },
});
export const { setCivilizations } = civilizationsSlice.actions;
export default civilizationsSlice.reducer;
export const selectCivilizations = (
  state: RootState
) => state;