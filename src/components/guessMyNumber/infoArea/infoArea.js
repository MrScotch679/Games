import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import './infoArea.scss'

const InfoArea = () => {

  const selectMessage = createSelector(
    (state) => state.guessNumber.userNumber,
    (state) => state.guessNumber.secretNumber,
    (userNumber, secretNumber) => {
      if (userNumber) {
        if (userNumber > secretNumber) {
          return 'Too high (oﾟvﾟ)ノ';
        } else if (userNumber < secretNumber) {
          return 'Too low (‾◡◝)';
        } else if (userNumber === secretNumber) {
          return 'CORRECT ヾ(≧▽≦*)o';
        }
      } else {
        return 'Write your number (≧∇≦)ﾉ'
      }
    }
  )
 
  const score = useSelector(state => state.guessNumber.score);
  const highscore = useSelector(state => state.guessNumber.highscore)
  const message = useSelector(selectMessage);
  const gameStatus = useSelector(state => state.guessNumber.gameStatus)

  console.log(score, highscore, message)

  return (
    <section className="right">
      <p className="message">{gameStatus === 'play' ? message : null}</p>
      <p className="label-score">💯 Score: <span className="score">{score}</span></p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{highscore}</span>
      </p>
    </section>
  )
}

export default InfoArea;