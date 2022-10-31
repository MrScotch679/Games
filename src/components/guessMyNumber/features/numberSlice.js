import { createSlice } from '@reduxjs/toolkit';

export const numberSlice = createSlice({
  name: 'guessNumber',
  initialState: {
    secretNumber: null,
    userNumber: null,
    highscore: 0,
    score: 20,
    gameStatus: 'play',
  },
  reducers: {
    setSecretNumber: (state, action) => {
      state.secretNumber = +action.payload;
    },
    setUserNumber: (state, action) => {
      state.userNumber = +action.payload;
    },
    setHighScore: (state, action) => {
      state.highscore = +action.payload;
    },
    setGameStatus: (state) => {
      if (state.secretNumber === state.userNumber) {
        state.gameStatus = 'win';
      } else if (state.score <= 0) {
        state.gameStatus = 'lost';
      }
    },
    changeScore: (state) => {
      if (state.secretNumber !== state.userNumber 
          && state.score > 0
          && state.gameStatus === 'play') {
        state.score -= 1;
      }
    },
    changeHighScore: (state) => {
      if (state.secretNumber === state.userNumber 
          && state.highscore < state.score) {
        state.highscore = state.score;
      }
    },
    restartGame: (state) => {
      state.score = 20;
      state.gameStatus = 'play';
      state.userNumber = null;
    },
  },
})

export const { 
  setSecretNumber, 
  setUserNumber, 
  setHighScore, 
  setGameStatus, 
  changeScore, 
  changeHighScore, 
  restartGame 
} = numberSlice.actions;

export default numberSlice.reducer;
