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
        linkTo: '/guess-my-number',
        thumbnail: 'https://www.nicepng.com/png/detail/30-307525_question-pixel-art.png',
      },
      {
        gameName: 'Lucky dice',
        description: 'Play with a friend, roll the dice, whoever scores 100 points first wins',
        guide: `DEVELOPMENT`,
        linkTo: '/lucky-dice',
        thumbnail: 'https://static.vecteezy.com/system/resources/previews/005/029/320/original/dice-games-pixel-perfect-linear-icon-traditional-board-games-gambling-thin-line-customizable-illustration-contour-symbol-cubes-with-dots-isolated-outline-drawing-editable-stroke-free-vector.jpg',        
      }
    ],
  }
})

export default gameSlice.reducer;