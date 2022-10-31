import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    games: [
      {
        gameName: 'Guess My Number',
        description: 'Test your luck and search skills, guess the HIDDEN SECRET number!',
        guide: 'Your task is to guess the number hidden behind the question mark. In the field, enter your number from 1 to 20. If your number is greater than the sector number, then you will see the message "Too much", "Too low" if your number is less than the hidden number. To restart the game, click the Again button.',
        linkTo: '/guess-my-number',
        thumbnail: 'https://www.nicepng.com/png/detail/30-307525_question-pixel-art.png',
      },
      {
        gameName: 'Lucky dice',
        description: 'Play with a friend, roll the dice, whoever scores 100 points first wins',
        guide: 'Your task is to be the first to score 100 points. To roll the dice press ROLL DICE. The dropped number goes into the current account. The button can be pressed several times, the amount will be summed up. If you want to transfer the current account to the global one, press HOLD, the move will go to another player. If you get a 1, you lose the current account amount, the turn passes to another player.',
        linkTo: '/lucky-dice',
        thumbnail: 'https://static.vecteezy.com/system/resources/previews/005/029/320/original/dice-games-pixel-perfect-linear-icon-traditional-board-games-gambling-thin-line-customizable-illustration-contour-symbol-cubes-with-dots-isolated-outline-drawing-editable-stroke-free-vector.jpg',        
      }
    ],
  }
})

export default gameSlice.reducer;