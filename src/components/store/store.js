import { configureStore } from '@reduxjs/toolkit';

import { numberSlice } from '../guessMyNumber/features/numberSlice';
import { gameSlice } from '../mainPage/features/gameSlice';

export default configureStore({
  reducer: {
    guessNumber: numberSlice.reducer,
    gameSlice: gameSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})