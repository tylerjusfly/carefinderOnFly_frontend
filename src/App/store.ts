import { configureStore } from '@reduxjs/toolkit';
import generalSlice from './features/generalSlice';

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
});

// this creates a type for root reducer
export type RootStore = ReturnType<typeof store.getState>;
