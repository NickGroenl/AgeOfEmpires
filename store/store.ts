import { configureStore } from '@reduxjs/toolkit';
import civilizationsSlice from './slice';

export const store = configureStore({
  reducer: {
    civilizations: civilizationsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
