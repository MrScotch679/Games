import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setHighScore } from './features/numberSlice';

import FormArea from './formArea/formArea';
import InfoArea from './infoArea/infoArea';
import SecretNumber from './secretNumber/secretNumber';

import './sos.scss';
import GameTitle from './gameTitle/GameTitle';

const Sos = () => {
  
  const LSHighscore = localStorage.getItem('highscore');
  console.log(LSHighscore)

  const currentHighscore = useSelector(state => state.guessNumber.highscore);
  const gameStatus = useSelector(state => state.guessNumber.gameStatus);

  console.log(currentHighscore, gameStatus)

  const dispatch = useDispatch();

  useEffect(() => {
    if (!LSHighscore) {
      localStorage.setItem('highscore', 0);
    } else {
      dispatch(setHighScore(LSHighscore));
    }
  }, [])

  useEffect(() => {
    console.log(gameStatus)
    if (LSHighscore < currentHighscore) {
      localStorage.setItem('highscore', currentHighscore);
    }
  }, [gameStatus])

  let wrapperClass = 'wrapper'
  switch (gameStatus) {
    case 'win':
      wrapperClass += ' win';
      break;
    case 'lost':
      wrapperClass += ' lost';
      break;
    default: 
      break;
  }

  return (
    <div className={wrapperClass}>
      <header>
        <GameTitle/>
        <p className="between">(Between 1 and 20)</p>
        <button 
          className="btn-guess again"
          >
            Again!
          </button>
        <SecretNumber />
      </header>
      <main>
        <FormArea/>
        <InfoArea/>
      </main>
    </div>
  )

} 

export default Sos;