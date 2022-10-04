import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setHighScore } from './features/numberSlice';

import FormArea from './formArea/formArea';
import InfoArea from './infoArea/infoArea';
import SecretNumber from './secretNumber/secretNumber';

import './sos.scss';

const Sos = () => {
  
  const LSHighscore = localStorage.getItem('highscore');
  console.log(LSHighscore)

  const currentHighscore = useSelector(state => state.guessNumber.highscore);
  const isGame = useSelector(state => state.guessNumber.isGame);

  console.log(currentHighscore, isGame)

  const dispatch = useDispatch();

  useEffect(() => {
    if (!LSHighscore) {
      localStorage.setItem('highscore', 0);
    } else {
      dispatch(setHighScore(LSHighscore));
    }
  }, [])

  useEffect(() => {
    if (LSHighscore < currentHighscore) {
      localStorage.setItem('highscore', currentHighscore);
    }
  }, [isGame])

  return (
    <div className='wrapper'>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn-guess again">Again!</button>
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



  // const body = document.querySelector('body'),
  //       check = document.querySelector('.check'),
  //       again = document.querySelector('.again'),
  //       guess = document.querySelector('.guess');

  // const answerMessage = {
  //   tooHigh: 'Too high (oﾟvﾟ)ノ',
  //   tooLow : 'Too low (‾◡◝)',
  //   correct: 'CORRECT ヾ(≧▽≦*)o',
  //   noNumber: 'Write your number (≧∇≦)ﾉ',
  //   letGoAgain: 'LEEETS GO! ( •̀ ω •́ )y',
  // }

  // const createSecretNumber = () => {
  //   return Math.floor(Math.random() * 20 + 1);
  // }

  // const setScoreNumber = () => {
  //   return 20;
  // }

  // let secretNumber = createSecretNumber(),
  //     scoreNumber = setScoreNumber(),
  //     highscoreNumber = 0;

  // const setTextContent = (selector, text) => {
  //   document.querySelector(selector).textContent = text;
  // }

  // setTextContent('.number', '?');
  // setTextContent('.score', scoreNumber);
  // setTextContent('.highscore', highscoreNumber);

  // const opirationLogic = () => {
  //   if (scoreNumber > 0) {
  //     if (guess.value === '') {
  //       setTextContent('.message', answerMessage.noNumber);
  //     } else if (guess.value === secretNumber) {
  //       setTextContent('.message', answerMessage.correct);
  //       setTextContent('.number', secretNumber);

  //       body.style.backgroundColor = '#60b347';

  //       highscoreNumber = scoreNumber > highscoreNumber ? scoreNumber : highscoreNumber;
  //       setTextContent('.highscore', highscoreNumber);
  //     } else if (guess.value !== secretNumber) {
  //       scoreNumber--;
  //       setTextContent('.score', scoreNumber);

  //       setTextContent('.message', guess.value > secretNumber ? 
  //       answerMessage.tooHigh : answerMessage.tooLow);
  //     }
  //   }
  // }

  // check.addEventListener('click', opirationLogic);

  // again.addEventListener('click', () => {
  //   setTextContent('.number', '?');
  //   secretNumber = createSecretNumber();
  //   scoreNumber = setScoreNumber();
  //   setTextContent('.score', scoreNumber);
  //   body.style.backgroundColor = '';
  //   setTextContent('.message', answerMessage.letGoAgain);
  //   guess.value = '';
  // })