import { createSlice } from '@reduxjs/toolkit'

export const numberSlice = createSlice({
  name: 'guessNumber',
  initialState: {
    secretNumber: null,
    userNumber: null,
    highscore: 0,
    score: 20,
  },
  reducers: {
    setSecretNumber: (state, action) => {
      state.secretNumber = +action.payload;
    },
    setUserNumber: (state, action) => {
      state.userNumber = +action.payload;
    },
    setScore: (state) => {
      if (state.secretNumber !== state.userNumber) {
        state.score -= 1;
      }
    },
    setHighScore: (state) => {
      if (state.secretNumber === state.userNumber && state.highscore < state.score) {
        state.highscore = state.score;
      }
    },
  },
})

export const { setSecretNumber, setUserNumber, setScore, setHighScore } = numberSlice.actions

export default numberSlice.reducer