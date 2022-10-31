import { createSlice } from '@reduxjs/toolkit';

export const luckyDice = createSlice({
  name: 'luckyDice',
  initialState: {
    isGameOver: false,
    numberOnDice: null,
    currentPlayer: 0,
    players: [
      {
        id: 0,
        name: 'Player',
        currentScore: 0,
        totalScore: 0,
        isWinner: false,
      },
      {
        id: 1,
        name: 'Player',
        currentScore: 0,
        totalScore: 0,
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
    setWinner: (state) => {
      if (state.players[state.currentPlayer].totalScore >= 10) {
        state.players[state.currentPlayer].isWinner = true;
        state.isGameOver = true;
      }
    },
    changeCurrentPlayer: (state) => {
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
    },
    changeCurrentScore: (state) => {
      state.players[state.currentPlayer].currentScore += state.numberOnDice;
    },
    clearCurrentScore: (state) => {
      state.players[state.currentPlayer].currentScore = 0;
    },
    forcePlayerChange: (state) => {
      if (state.numberOnDice === 1) {
        state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
      }
    },
    restartGame: (state) => {
      state.isGameOver = false;
      state.numberOnDice = null;
      state.currentPlayer = 0;
      state.players[0].totalScore = 0;
      state.players[0].isWinner = false;
      state.players[1].totalScore = 0;
      state.players[1].isWinner = false;
    },
  },
})

export const { 
  setNumberOnDice, 
  setTotalScore,
  setWinner, 
  changeCurrentPlayer, 
  changeCurrentScore,
  clearCurrentScore,
  restartGame, 
} = luckyDice.actions;

export default luckyDice.reducer;
