import { useState, useEffect } from 'react';

import FormArea from './formArea/formArea';


import './sos.scss';

const Sos = () => {

  // const [isGame, setIsGame] = useState(true);


  useEffect(() => {
    createSecretNumber();
  }, [])

  const createSecretNumber = () => {
    return Math.floor(Math.random() * 20 + 1);
  }

  let secretNumber = createSecretNumber();

  return (
    <div className='wrapper'>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn-guess again">Again!</button>
        <div className="number">{secretNumber}</div>
      </header>
      <main>
        <FormArea/>
        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">💯 Score: <span className="score">20</span></p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">0</span>
          </p>
        </section>
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