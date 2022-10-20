import Dice from './dice/dice';
import RollDiceButton from './rollDiceButton/rollDiceButton';
import HoldButton from './holdButton/holdButton';

import './luckyDice.scss';
import Players from './players/players';

const LuckyDice = () => {
 
  return (
    <div className='ld'>
      <div className='ld__wrapper'>
        <Players/>
        <Dice/>
        <RollDiceButton/>
        <button className="ld__btn ld__btn_new"> 🔄 New game </button>
        
        <HoldButton/>
        
      </div>
    </div>
  )
}

export default LuckyDice;