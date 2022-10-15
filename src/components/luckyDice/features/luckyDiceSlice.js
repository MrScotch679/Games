import { createSlice } from '@reduxjs/toolkit';

export const luckyDice = createSlice({
  name: 'luckyDice',
  initialState: {
    numberOnDice: null,
  },
  reducers: {
    setNumberOnDice: (state, action) => {
      state.numberOnDice = action.payload;
    }
  },
})

export const { setNumberOnDice } = luckyDice.actions;

export default luckyDice.reducer;
