import { createSlice } from '@reduxjs/toolkit';

export const luckyDice = createSlice({
  name: 'luckyDice',
  initialState: {
    numberOnDice: null,
    currentPlayer: 0,
    players: [
      {
        id: 0,
        name: 'Player',
        currentScore: 0,
        totalScore: 0,
        isActice: true,
        isWinner: false,
      },
      {
        id: 1,
        name: 'Player',
        currentScore: 0,
        totalScore: 0,
        isActice: false,
        isWinner: false,
      }
    ],
  },
  reducers: {
    setNumberOnDice: (state, action) => {
      state.numberOnDice = action.payload;
    },
    setTotalScore: (state) => {
      state.players[state.currentPlayer].totalScore += state.players[state.currentPlayer].currentScore;
    },
    changeCurrentPlayer: (state) => {
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
    },
    changeCurrentScore: (state) => {
      state.players[state.currentPlayer].currentScore += state.numberOnDice;
    }
  },
})

export const { setNumberOnDice, setTotalScore, changeCurrentPlayer, changeCurrentScore } = luckyDice.actions;

export default luckyDice.reducer;
