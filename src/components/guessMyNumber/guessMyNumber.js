import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setHighScore } from './features/numberSlice';

import FormArea from './formArea/formArea';
import InfoArea from './infoArea/infoArea';
import SecretNumber from './secretNumber/secretNumber';
import GameTitle from './gameTitle/GameTitle';
import RestartButton from './restartButton/restartButton';
import BackToAllButton from './backToAllButton/backToAllButton';

import './guessMyNumber.scss';

const GuessMyNumber = () => {

  const currentHighscore = useSelector(state => state.guessNumber.highscore);
  const gameStatus = useSelector(state => state.guessNumber.gameStatus);

  const dispatch = useDispatch();

  const LSHighscore = localStorage.getItem('highscore');

  useEffect(() => {
    if (!LSHighscore) {
      localStorage.setItem('highscore', 0);
    } else {
      dispatch(setHighScore(LSHighscore));
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (LSHighscore < currentHighscore) {
      localStorage.setItem('highscore', currentHighscore);
    }
    // eslint-disable-next-line
  }, [gameStatus])

  let wrapperClass = 'gmn';
  switch (gameStatus) {
    case 'win':
      wrapperClass += ' gmn_win';
      break;
    case 'lost':
      wrapperClass += ' gmn_lost';
      break;
    default: 
      break;
  }

  return (
    <div className={wrapperClass}>
      <div className='gmn__header'>
        <GameTitle/>
        <p className="gmn__between">
          (Between 1 and 20)
        </p>
        <RestartButton/>
        <BackToAllButton/>
        <SecretNumber/>
      </div>
      <div className='gmn__main'>
        <FormArea/>
        <InfoArea/>
      </div>
    </div>
  )
} 

export default GuessMyNumber;