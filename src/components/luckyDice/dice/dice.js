import { useSelector } from "react-redux";

import './dice.scss';

const Dice = () => {

  const numberOnDice = useSelector(state => state.luckyDice.numberOnDice);

  let imgClass = 'ld__dice ld__hide';
  if (numberOnDice) {
    imgClass = 'ld__dice';
  }

  return (
    <img 
      src={require(`../../../resources/luckuDice/dice-${numberOnDice ? numberOnDice : 1}.png`)} 
      alt="Playing dice" 
      className={imgClass}
    />
  )
}

export default Dice;