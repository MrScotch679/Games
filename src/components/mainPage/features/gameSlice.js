import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    games: [
      {
        gameName: 'Guess My Number',
        description: 'Test your luck and search skills, guess the HIDDEN SECRET number!',
        guide: `Your task is to guess the number hidden behind the question mark. 
        In the field, enter your number from 1 to 20. If your number is greater than the sector number, then you will see the message "Too much", "Too low" if your number is less than the hidden number. To restart the game, click the Again button.`,
      },
      {
        gameName: 'Lucky dice',
        description: 'Play with a friend, roll the dice, whoever scores 100 points first wins',
        guide: `DEVELOPMENT`,
      }
    ],
  }
})

export default gameSlice.reducer;