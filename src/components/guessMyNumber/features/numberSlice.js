import { createSlice } from '@reduxjs/toolkit'

export const numberSlice = createSlice({
  name: 'guessNumber',
  initialState: {
    secretNumber: null,
    userNumber: null,
    highScore: 0,
    score: 20,
    isCheck: false,
  },
  reducers: {
    setSecretNumber: (state, action) => {
      state.secretNumber = +action.payload;
    },
    setUserNumber: (state, action) => {
      state.userNumber = +action.payload;
    },
    setIsCheck: (state) => {
      state.isCheck = true;
    },
    setScore: (state) => {
      state.score -= 1
    },
    setHighScore: (state) => {
      state.highScore = state.score
    },
  },
})

export const { setSecretNumber, setUserNumber, setIsCheck, setScore } = numberSlice.actions

export default numberSlice.reducer