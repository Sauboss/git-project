import { configureStore } from '@reduxjs/toolkit';
import shares from './slices/shares/slice';
export const store = configureStore({
  reducer: { shares },
});

export type RootState = ReturnType<typeof store.getState>