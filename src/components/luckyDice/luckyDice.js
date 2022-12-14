import Dice from './dice/dice';
import RollDiceButton from './rollDiceButton/rollDiceButton';
import HoldButton from './holdButton/holdButton';
import NewGameButton from './newGameButton/newGameButton';
import BackToAllButton from './backToAllButton/backToAllButton';

import './luckyDice.scss';
import Players from './players/players';

const LuckyDice = () => {
 
  return (
    <div className='ld'>
      <div className='ld__wrapper'>
        <Players/>
        <Dice/>
        <NewGameButton/>
        <RollDiceButton/>
        <HoldButton/>
      </div>
      <BackToAllButton/>
    </div>
  )
}

export default LuckyDice;