import { configureStore } from '@reduxjs/toolkit';

import { numberSlice } from '../guessMyNumber/features/numberSlice';
import { gameSlice } from '../mainPage/features/gameSlice';
import { luckyDice } from '../luckyDice/features/luckyDiceSlice';

export default configureStore({
  reducer: {
    guessNumber: numberSlice.reducer,
    gameSlice: gameSlice.reducer,
    luckyDice: luckyDice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})