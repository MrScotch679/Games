import { createSlice } from '@reduxjs/toolkit'

export const numberSlice = createSlice({
  name: 'guessNumber',
  initialState: {
    secretNumber: null,
    userNumber: null,
    highscore: 0,
    score: 20,
    isGame: true,
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
    setIsGame: (state) => {
      if (state.secretNumber === state.userNumber) {
        state.isGame = false;
      }
    },
    changeScore: (state) => {
      if (state.secretNumber !== state.userNumber) {
        state.score -= 1;
      }
    },
    changeHighScore: (state) => {
      if (state.secretNumber === state.userNumber && state.highscore < state.score) {
        state.highscore = state.score;
      }
    },
  },
})

export const { setSecretNumber, setUserNumber, setHighScore, setIsGame, changeScore, changeHighScore } = numberSlice.actions

export default numberSlice.reducer