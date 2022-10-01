import { useSelector } from 'react-redux';

import GameStatus from '../gameStatus/gameStatus';

import './infoArea.scss'

const InfoArea = () => {

  const state = useSelector(state => state.guessNumber);
  const { secretNumber, userNumber, highScore, score, isCheck } = state;
  
  const answ = GameStatus(userNumber, secretNumber, isCheck);
  console.log(answ)
  console.log(userNumber, secretNumber, highScore)

  return (
    <section className="right">
      <p className="message">{answ}</p>
      <p className="label-score">💯 Score: <span className="score">{score}</span></p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{highScore}</span>
      </p>
    </section>
  )
}

export default InfoArea;