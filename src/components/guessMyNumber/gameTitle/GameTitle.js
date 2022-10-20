import { useSelector } from "react-redux";

import './gameTitle.scss';

const GameTitle = () => {
  const gameStatus = useSelector(state => state.guessNumber.gameStatus);

  const gameTitleCreater = (gameStatus) => {
    switch (gameStatus) {
      case 'win': 
        return 'You WIN! ( •̀ ω •́ )✧';
      case 'lost':
        return 'You LOST! (≧∇≦)ﾉ';
      default: 
        return 'Guess My Number!';
    }
  }

  const gameTitle = gameTitleCreater(gameStatus);

  return (
    <h2 className="gmn__title">{gameTitle}</h2>
  )
}

export default GameTitle;