import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setNumberOnDice } from "../features/luckyDiceSlice";
import randomNumber from "../features/randomNumber";

const Dice = () => {

  const dispatch = useDispatch();

  const numberOnDice = useSelector(state => state.luckyDice.numberOnDice);
  const number = randomNumber();

  console.log(numberOnDice)

  useEffect(() => {
    dispatch(setNumberOnDice(number))
  }, [])

  

  return (
    <img src={require(`../../../resources/luckuDice/dice-${numberOnDice ? 1 : numberOnDice}.png`)} alt="Playing dice" className="ld__dice ld__hide" />
  )
}

export default Dice;