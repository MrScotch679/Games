import { configureStore } from '@reduxjs/toolkit';

import { numberSlice } from '../guessMyNumber/features/numberSlice';

export default configureStore({
  reducer: {
    guessNumber: numberSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})